import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function Uploader() {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setProjects([]);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select a file to upload');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('resume', file);

      // Properly inspect FormData contents
      console.log('File being uploaded:', {
        name: file.name,
        type: file.type,
        size: file.size,
        lastModified: new Date(file.lastModified).toISOString()
      });
      
      // If you need to debug FormData contents
      for (let pair of formData.entries()) {
        if (pair[1] instanceof File) {
          console.log(pair[0] + ': ' + pair[1].name);
        }
      }

      // Using axios instead of fetch
      const response = await axios.post('http://localhost:5001/api/resume/extract', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setProjects(response.data);
    } catch (err) {
      console.error('Error uploading file:', err);
      
      // Handle error response from axios
      let errorMessage = 'Failed to process PDF';
      
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        errorMessage = err.response.data.error || err.response.data || errorMessage;
      } else if (err.request) {
        // The request was made but no response was received
        errorMessage = 'No response from server. Please check your connection.';
      } else {
        // Something happened in setting up the request that triggered an Error
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-6 mt-24 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Verify Project Authenticity</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our AI-powered platform detects plagiarism, analyzes code similarity,
          and confirms originality to help recruiters make informed decisions.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Upload Resume</h2>
        
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex flex-col gap-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
              <input 
                type="file" 
                id="file-upload"
                onChange={handleFileChange}
                accept="application/pdf"
                className="hidden"
              />
              <label 
                htmlFor="file-upload" 
                className="cursor-pointer flex flex-col items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span className="text-gray-600 font-medium">
                  {file ? file.name : 'Choose a PDF file or drag & drop here'}
                </span>
                <span className="text-gray-400 text-sm mt-1">
                  {!file && 'PDF files only'}
                </span>
              </label>
            </div>
            
            <button 
              type="submit" 
              disabled={isLoading || !file}
              className={`py-3 px-6 rounded-md text-white font-medium text-lg transition-colors ${
                isLoading || !file 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-900 hover:bg-blue-800'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </span>
              ) : 'Start Verifying Now'}
            </button>
          </div>
        </form>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
      </div>

      {projects.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <div className="bg-orange-100 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold">Similarity Analysis Report</h2>
          </div>
          
          <h3 className="text-xl font-medium mb-4">Code Similarity Findings</h3>
          <p className="text-gray-600 mb-6">Our analysis has detected the following repositories:</p>
          
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-medium">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      {project.github.replace('https://github.com/', '')}
                    </a>
                  </h3>
                  <div className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full font-medium text-sm">
                    84% match
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Description:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default Uploader;