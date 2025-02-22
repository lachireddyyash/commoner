
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Brain, Code, Database, LineChart, Robot, Server } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-[#9b87f5]" />,
      title: "Machine Learning Solutions",
      description: "Custom ML models tailored to your business needs, from prediction to classification."
    },
    {
      icon: <Database className="w-12 h-12 text-[#9b87f5]" />,
      title: "Data Analytics",
      description: "Transform your raw data into actionable insights with our advanced analytics solutions."
    },
    {
      icon: <Robot className="w-12 h-12 text-[#9b87f5]" />,
      title: "AI Automation",
      description: "Streamline your operations with intelligent automation powered by AI."
    },
    {
      icon: <Code className="w-12 h-12 text-[#9b87f5]" />,
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows."
    },
    {
      icon: <LineChart className="w-12 h-12 text-[#9b87f5]" />,
      title: "Predictive Analytics",
      description: "Make data-driven decisions with our predictive modeling solutions."
    },
    {
      icon: <Server className="w-12 h-12 text-[#9b87f5]" />,
      title: "AI Infrastructure",
      description: "Build and maintain robust AI infrastructure for your organization."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFF] to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-24">
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
