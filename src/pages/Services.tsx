
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Brain, Code, Database, LineChart, Bot, Server } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-[#9b87f5]" />,
      title: "Custom Chatbots",
      description: "We develop intelligent chatbots tailored to your business needs, enhancing customer service, automating responses, and improving user engagement."
    },
    {
      icon: <Database className="w-12 h-12 text-[#9b87f5]" />,
      title: "Logo Creation",
      description: "Our AI-driven design tools craft unique, high-quality logos that represent your brand's identity professionally and effectively."
    },
    {
      icon: <Bot className="w-12 h-12 text-[#9b87f5]" />,
      title: "AI Automation",
      description: "Automate repetitive tasks with AI-powered workflows, boosting efficiency and reducing operational costs."
    },
    {
      icon: <Code className="w-12 h-12 text-[#9b87f5]" />,
      title: "AI-Powered Website Generation",
      description: "Get a fully functional, professionally designed website generated using AI, saving time and effort while ensuring a sleek, modern look."
    },
    {
      icon: <LineChart className="w-12 h-12 text-[#9b87f5]" />,
      title: "Image Generation",
      description: "Our AI image generation service produces high-quality graphics and illustrations tailored to your business needs."
    },
    {
      icon: <Server className="w-12 h-12 text-[#9b87f5]" />,
      title: "Custom AI Solutions",
      description: "Tailored AI solutions designed specifically for your business challenges and objectives."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFF] to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24"> {/* Changed pt-24 to pt-32 to prevent navbar overlap */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-[#1A1F2C]">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI solutions to transform your business and drive innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass p-8 rounded-xl hover:scale-105 transition-transform duration-300">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
