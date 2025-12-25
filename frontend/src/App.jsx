import { Header } from "./Header";
import Hero from "./Hero";
import { Features } from "./Features";
import { HowItWorks } from "./HowItWorks";
import { Footer } from "./Footer";
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Hero onStartAnalysis={() => console.log("Start analysis")} />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
