import { Header } from "./components/";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { SkinAnalyzer } from "./components/SkinAnalyzer";
import { CommonConditions } from "./components/CommonConditions";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { AnalysisPage } from "./components/AnalysisPage";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "analysis">("home");

  if (currentPage === "analysis") {
    return <AnalysisPage onBack={() => setCurrentPage("home")} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header onStartAnalysis={() => setCurrentPage("analysis")} />
      <Hero onStartAnalysis={() => setCurrentPage("analysis")} />
      <Features />
      <HowItWorks />
      <CommonConditions />
      <Footer />
    </div>
  );
}