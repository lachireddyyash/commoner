
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Examples = () => {
  const examples = [
    {
      title: "Predictive Maintenance System",
      description: "AI-powered system that predicts equipment failures before they occur, reducing downtime by 75%.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      tags: ["Machine Learning", "IoT", "Predictive Analytics"]
    },
    {
      title: "Customer Sentiment Analysis",
      description: "Natural Language Processing solution that analyzes customer feedback across multiple channels.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      tags: ["NLP", "Analytics", "Customer Insights"]
    },
    {
      title: "Automated Document Processing",
      description: "AI system that extracts and processes information from documents with 99% accuracy.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      tags: ["OCR", "Machine Learning", "Automation"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFF] to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-[#1A1F2C]">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore how our AI solutions have transformed businesses across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <div key={index} className="glass overflow-hidden rounded-xl hover:scale-105 transition-transform duration-300">
              <img src={example.image} alt={example.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{example.title}</h3>
                <p className="text-gray-600 mb-4">{example.description}</p>
                <div className="flex flex-wrap gap-2">
                  {example.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-[#9b87f5]/10 text-[#9b87f5] px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="link" className="mt-4 text-[#9b87f5] hover:text-[#7E69AB]">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Examples;
