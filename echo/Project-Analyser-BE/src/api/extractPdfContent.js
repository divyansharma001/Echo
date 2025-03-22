const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const router = express.Router();
const puppeteer = require('puppeteer');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI("AIzaSyD8Ww9pvytLRQYUbhYVPV-Hak0Eb2oQN8E");

const upload = multer({
    limits: {
        fileSize: 5 * 1024 * 1024, 
    }
});

async function analyzeRepository(targetRepoUrl) {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

    const prompt = `I need to determine if a GitHub repository has been copied from other repositories and analyze its code quality. Please analyze the following repository: ${targetRepoUrl}

Based on your knowledge, provide:
1. A clear assessment of whether this repository appears to be original or potentially copied from elsewhere.
2. List the top 5 GitHub repositories that this repository might have been copied from or heavily inspired by. For each repository, include:
   - Repository name and URL
   - Confidence score (1-10) that this is a potential source
   - Specific similarities that suggest copying (e.g., identical code structures, matching unique identifiers, similar uncommon patterns)
   - Any notable differences that might indicate adaptation rather than direct copying
3. Overall similarity assessment: On a scale of 1-10, how likely is it that this repository contains substantial copied content?

Additional Code Quality Analysis:
4. Code Best Practices:
   - Does the code follow industry best practices? (Yes/No, with explanation)
   - How well is it structured and formatted?
   - Is there proper use of comments and documentation?
5. DRY (Don't Repeat Yourself) Principle:
   - Does the code avoid redundancy and unnecessary repetition?
   - Are functions/classes reused effectively?
6. Modularity:
   - Is the code well-organized into reusable modules or functions?
   - Does it follow a clean architecture?
7. AI-Generated Code Style Score (1-10):
   - An overall score based on readability, maintainability, and best practices.

IMPORTANT: Return ONLY a valid JSON object with no additional text, markdown formatting, or code blocks. The JSON should exactly follow this structure:
{
  "assessment": "Original or Copied assessment here",
  "similarRepositories": [
    {
      "name": "Repository name",
      "url": "Repository URL",
      "confidenceScore": 8,
      "similarities": "Description of similarities",
      "differences": "Description of differences"
    }
  ],
  "overallSimilarityScore": 7,
  "codeQualityAnalysis": {
    "followsBestPractices": "Yes/No with explanation",
    "structureAndFormatting": "Description of structure and formatting",
    "commentsAndDocumentation": "Quality of comments and documentation",
    "dryPrincipleAdherence": "Yes/No with explanation",
    "modularity": "Description of modularity and reusability",
    "codeStyleScore": 8
  }
}`;
    const result = await model.generateContent(prompt);
    const responseText = result.response.text().replace(/```json|```/g, "").trim();
    console.log(responseText);
    
    return JSON.parse(responseText);

} 
// analyzeRepository("https://github.com/rajveeerr/SafeDM-BE")

function extractGitHubUrl(text) {
    const githubRegex = /github[\s:-]*([^\s)]+)/gi;
    const urlMatch = text.match(githubRegex);
    if (!urlMatch) return null;

    const cleanUrl = urlMatch[0].replace(/^github[\s:-]*/i, '');
    return `https://github.com/${cleanUrl.replace(/\/$/, '')}`;
}

// AI-powered project extraction function
async function extractProjects(text) {
    try {
        const { GoogleGenerativeAI } = require("@google/generative-ai");

        // Initialize the Google Generative AI client
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        // Extract GitHub username from the resume if present
        let githubUsername = null;
        const githubProfileRegex = /github\.com\/([a-zA-Z0-9_-]+)/i;
        const profileMatch = text.match(githubProfileRegex);
        if (profileMatch && profileMatch[1]) {
            githubUsername = profileMatch[1];
        }

        // Create a prompt for the AI to extract projects information
        const prompt = `
        Analyze the following resume text and extract all projects with their GitHub repositories and descriptions.
        
        For each project:
        1. Extract the project name
        2. Find the GitHub repository URL or construct it using the GitHub username and project name
        3. Extract all bullet points describing the project
        
        Return ONLY a valid JSON array with objects having the following structure:
        [
          {
            "github": "https://github.com/username/project-name",
            "description": ["description point 1", "description point 2", ...]
          }
        ]
        
        If no GitHub username is found, use the username from the repository URL if present.
        If no repository URL is found but a project name is identified, construct a URL using "${githubUsername || 'username'}/project-name".
        
        Resume text:
        ${text}
        `;

        // Generate response from AI
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        console.log("AI response:", responseText);
        
        // Parse the JSON response
        let projects = [];
        try {
            // Look for a JSON array in the response
            const jsonMatch = responseText.match(/\[[\s\S]*\]/);
            if (jsonMatch) {
                projects = JSON.parse(jsonMatch[0]);
            } else {
                console.log("No JSON array found in AI response");
                return [];
            }
        } catch (parseError) {
            console.error("Error parsing AI response:", parseError);
            return [];
        }

        // Validate and clean up the projects
        return projects.filter(project => {
            // Ensure each project has a github URL and at least one description point
            return project.github && 
                   Array.isArray(project.description) && 
                   project.description.length > 0;
        });
    } catch (error) {
        console.error("Error in AI project extraction:", error);
        // Fallback to regex-based extraction if AI fails
        return fallbackExtractProjects(text);
    }
}

// Fallback function using regex in case AI extraction fails
function fallbackExtractProjects(text) {
    // Find the projects section using more flexible matching
    const projectsSectionRegex = /PROJECTS?[\s\S]*?((?:•|\d+\.|\*)[\s\S]*?)(?=SKILLS|ACHIEVEMENTS|EDUCATION|EXPERIENCE|COMMUNITY|$)/i;
    const projectsMatch = text.match(projectsSectionRegex);

    if (!projectsMatch) return [];
    const projectsSection = projectsMatch[1].trim();

    const projectSplitRegex = /(?:•|\d+\.|\*|Project\s+\d+:|-\s)/gi;
    const rawProjects = projectsSection.split(projectSplitRegex).filter(p => p.trim());

    const projects = [];

    // Process each potential project
    rawProjects.forEach(projectText => {
        const cleanedText = projectText.trim();
        if (!cleanedText) return;

        const githubUrl = extractGitHubUrl(cleanedText);

        // Extract description points (bullet points)
        const description = cleanedText
            .split('\n')
            .map(line => line.trim())
            .filter(line => {
                // Remove lines containing GitHub URLs
                if (/github/i.test(line)) return false;
                return line.length > 0;
            })
            .map(line => line.replace(/^•\s*/, '').trim());

        if (description.length > 0) {
            projects.push({
                github: githubUrl || "https://github.com/username/project-name",
                description: description.filter(d => d.length > 0)
            });
        }
    });

    return projects.filter(p => p.description.length > 0);
}


// POST endpoint to upload PDF and extract project information
router.post('/extracter', upload.single('resume'), async (req, res) => {
    try {
        console.log("in the be req")

        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        if (req.file) console.log(req.file)



        // Parse the PDF
        const pdfData = await pdfParse(pdfBuffer);
        const text = pdfData.text;
        console.log("pdfData", pdfData.text)
        // Extract projects information
        const projects = extractProjects(text);


        const allProjectsData=analyzeAllProjects(projects)
        const report=generateFullReport(allProjectsData)

        // Return both projects data and the PDF buffer (base64 encoded)
        return res.json({
            projects: projects,
            pdfBuffer: report.toString('base64'),
            rawText: text
        });
    } catch (error) {
        console.error('Error processing PDF:', error);
        return res.status(500).json({ error: 'Failed to process PDF' });
    }
});

module.exports = router;