
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "2,999",
      description: "Perfect for small businesses starting with AI",
      features: [
        "Basic ML model implementation",
        "Data analysis setup",
        "Monthly consulting calls",
        "Email support",
        "Basic documentation"
      ]
    },
    {
      name: "Professional",
      price: "5,999",
      description: "Ideal for growing companies",
      features: [
        "Advanced ML model customization",
        "Real-time data analytics",
        "Weekly consulting calls",
        "Priority support",
        "Comprehensive documentation",
        "Custom integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs",
      features: [
        "Full-scale AI implementation",
        "Custom ML model development",
        "24/7 dedicated support",
        "On-site consulting",
        "Complete documentation",
        "Custom solutions",
        "Training workshops"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFF] to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-[#1A1F2C]">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="glass p-8 rounded-xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-600">/month</span>}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#9b87f5]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-[#9b87f5] text-white hover:bg-[#7E69AB]">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
