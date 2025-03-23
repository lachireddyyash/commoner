
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFF] to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-[#1A1F2C]">Custom Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored solutions that fit your budget
          </p>
        </div>

        <Card className="glass p-8 rounded-xl max-w-3xl mx-auto hover:scale-105 transition-transform duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Flexible Pricing Options</CardTitle>
            <CardDescription className="text-lg mt-2">
              We work with your budget based on your project's specific needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6 text-center">
              <p className="text-gray-600">
                We understand that every AI and machine learning project is unique, with varying levels of complexity and requirements. Instead of rigid pricing tiers, we provide custom quotes that align with your goals and budget constraints.
              </p>
              <p className="text-gray-600">
                Our team will work closely with you to understand your project needs, timeline, and resource requirements before providing a transparent proposal that offers the best value for your investment.
              </p>
              <div className="pt-6">
                <Button className="bg-[#9b87f5] text-white hover:bg-[#7E69AB] px-8 py-6 text-lg">
                  Request a Quote
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
