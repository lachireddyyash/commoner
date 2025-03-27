
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Bot, Brain, Code, Database, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center pt-48 bg-gradient-to-b from-[#F8FAFF] to-white">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, #9b87f5 2px, transparent 2px)`,
          backgroundSize: '48px 48px',
          opacity: 0.1
        }}></div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-[clamp(2.5rem,8vw,5rem)] leading-[1] font-medium tracking-[-0.02em] text-[#1A1F2C] mb-8">
              Transforming Business<br className="hidden sm:block" />Through AI
            </h1>
            
            <div className="max-w-[600px] mx-auto mb-12">
              <p className="text-[clamp(1rem,4vw,1.25rem)] text-[#1A1F2C]/80">
                Custom AI solutions that drive innovation and growth.
                <br className="hidden sm:block" />
                Turn your data into actionable insights.
              </p>
            </div>

            <Button
              className="inline-flex items-center gap-2 bg-[#9b87f5] text-white px-8 py-6 rounded-lg font-medium hover:bg-[#7E69AB] transition-colors mb-12 text-lg"
            >
              <Bot className="w-5 h-5" />
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
              <div className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <Brain className="w-8 h-8 mx-auto mb-4 text-[#9b87f5]" />
                <h3 className="font-medium mb-2">Custom Chatbots</h3>
                <p className="text-sm text-gray-600">Custom ML models for your needs</p>
              </div>
              <div className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <Database className="w-8 h-8 mx-auto mb-4 text-[#9b87f5]" />
                <h3 className="font-medium mb-2">Web Development</h3>
                <p className="text-sm text-gray-600">Turn data into insights</p>
              </div>
              <div className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <Code className="w-8 h-8 mx-auto mb-4 text-[#9b87f5]" />
                <h3 className="font-medium mb-2">AI Automation</h3>
                <p className="text-sm text-gray-600">Seamless AI implementation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
