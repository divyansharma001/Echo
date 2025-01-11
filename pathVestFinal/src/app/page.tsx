import { auth } from "@/auth";
import AiChatbot from "@/components/AiChatbot";
import { FeaturesSectionDemo } from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Header } from "@/components/Navbar";
import Team from "@/components/Team";
import { redirect } from "next/navigation";


export default async function Home() {
  const session = await auth();
  console.log(session);

  if(!session){
    redirect('/')
  }

  return (
   <div>
    <Header/>
    <HeroSection/>
    <FeaturesSectionDemo/>
    <AiChatbot/>
    <Team/>
    <Footer/>
    </div>
  );
}
