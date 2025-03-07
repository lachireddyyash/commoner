
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Examples = () => {
  const examples = [
    {
      title: "AI Customer Service Chatbot",
      description: "Developed an intelligent chatbot for a retail company that reduced support tickets by 45% and improved customer satisfaction scores by 23%.",
      image: "https://images.unsplash.com/photo-1596443686812-2f45229eebc3?auto=format&fit=crop&w=800&q=80",
      tags: ["Natural Language Processing", "Machine Learning", "Customer Support"]
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Created a real-time analytics platform that helped a financial services firm identify market trends with 87% accuracy, leading to 12% revenue growth.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["Data Science", "Predictive Modeling", "Financial Services"]
    },
    {
      title: "Automated Document Processing",
      description: "Built an AI system that extracts and processes information from legal documents with 99.2% accuracy, saving 1,200+ labor hours monthly.",
      image: "https://images.unsplash.com/photo-1568857156743-346bd3572326?auto=format&fit=crop&w=800&q=80",
      tags: ["Computer Vision", "OCR", "Legal Tech"]
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
                  {example.tags && example.tags.map((tag, tagIndex) => (
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
