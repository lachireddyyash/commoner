
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, BarChart, Users, Briefcase, PieChart } from "lucide-react";
import { Link } from "react-router-dom";

const SNTGenWealth = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFF] to-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-[#9b87f5]">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/clients" className="hover:text-[#9b87f5]">Clients</Link>
            <span className="mx-2">/</span>
            <span className="text-[#9b87f5]">SNT Gen Wealth</span>
          </div>
        </div>
        
        {/* Hero Section */}
        <div className="mb-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A1F2C]">
              SNT Gen Wealth
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              How we helped SNT Gen Wealth implement AI-driven financial advisory solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://sntgenwealth.com" target="_blank" rel="noopener noreferrer">
                <Button className="px-6">
                  Visit Website <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://sntgenwealth.com/wp-content/uploads/2023/08/snt-home-feature-5.jpg" 
                alt="SNT Gen Wealth Office" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        {/* About Client */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">About SNT Gen Wealth</h2>
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex justify-center mb-8">
              <img 
                src="https://sntgenwealth.com/wp-content/uploads/2023/06/cropped-snt-black-web-1-11.png" 
                alt="SNT Gen Wealth Logo" 
                className="h-24 object-contain"
              />
            </div>
            <p className="text-lg text-gray-700 mb-6">
              SNT Gen Wealth is a leading wealth management firm helping individuals preserve, grow, and transfer their wealth through comprehensive financial planning and investment management services.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Their mission is to provide customized financial strategies that align with their clients' unique goals and values, offering personalized guidance with a focus on long-term wealth building.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="bg-[#9b87f5]/10 p-3 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-[#9b87f5]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Client-Centered Approach</h3>
                  <p className="text-gray-600">Personalized financial strategies tailored to individual needs and goals.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#9b87f5]/10 p-3 rounded-lg mr-4">
                  <BarChart className="h-6 w-6 text-[#9b87f5]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Data-Driven Insights</h3>
                  <p className="text-gray-600">Leveraging market analytics for informed investment decisions.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#9b87f5]/10 p-3 rounded-lg mr-4">
                  <Briefcase className="h-6 w-6 text-[#9b87f5]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Wealth Management</h3>
                  <p className="text-gray-600">Comprehensive services including investment, retirement, and estate planning.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#9b87f5]/10 p-3 rounded-lg mr-4">
                  <PieChart className="h-6 w-6 text-[#9b87f5]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Diversified Strategies</h3>
                  <p className="text-gray-600">Balanced investment approaches to mitigate risk and maximize returns.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Solution */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">Our Solution</h2>
          <div className="bg-white rounded-xl shadow-sm p-8">
            <p className="text-lg text-gray-700 mb-8">
              Commoner.ai partnered with SNT Gen Wealth to develop AI-powered financial advisory tools that enhance their wealth management services and provide deeper insights for their clients.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#9b87f5] pl-6 py-2">
                <h3 className="font-semibold text-xl mb-2">AI-Driven Investment Analysis</h3>
                <p className="text-gray-600">
                  We implemented advanced machine learning algorithms to analyze market trends and provide investment recommendations tailored to client risk profiles.
                </p>
              </div>
              
              <div className="border-l-4 border-[#9b87f5] pl-6 py-2">
                <h3 className="font-semibold text-xl mb-2">Automated Financial Planning</h3>
                <p className="text-gray-600">
                  Created intuitive tools that streamline the financial planning process, allowing advisors to focus more on client relationships.
                </p>
              </div>
              
              <div className="border-l-4 border-[#9b87f5] pl-6 py-2">
                <h3 className="font-semibold text-xl mb-2">Predictive Analytics Dashboard</h3>
                <p className="text-gray-600">
                  Developed a comprehensive dashboard that visualizes financial projections and scenario analysis for better client consultations.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Results */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">Results</h2>
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center p-6 rounded-lg bg-[#9b87f5]/5">
                <div className="text-4xl font-bold text-[#9b87f5] mb-2">38%</div>
                <p className="text-gray-700">Increase in client satisfaction</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-[#9b87f5]/5">
                <div className="text-4xl font-bold text-[#9b87f5] mb-2">45%</div>
                <p className="text-gray-700">Reduction in advisory prep time</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-[#9b87f5]/5">
                <div className="text-4xl font-bold text-[#9b87f5] mb-2">27%</div>
                <p className="text-gray-700">Increase in new client acquisition</p>
              </div>
            </div>
            
            <h3 className="font-semibold text-xl mb-4">Key Achievements</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#9b87f5] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Enhanced portfolio performance through AI-optimized asset allocation</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#9b87f5] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Streamlined client onboarding process with automated risk assessment</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#9b87f5] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Improved client retention through personalized financial insights</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#9b87f5] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Reduced operational costs while scaling advisory services</span>
              </li>
            </ul>
            
            <div className="p-5 bg-[#F2FCE2] rounded-lg">
              <p className="italic text-gray-700">
                "Commoner.ai's AI solutions have transformed how we deliver financial advice to our clients. The predictive analytics and automated planning tools have allowed our advisors to provide more personalized service while handling a larger client base."
              </p>
              <div className="mt-4 flex items-center">
                <div className="mr-3 h-10 w-10 rounded-full bg-[#9b87f5]/20 flex items-center justify-center text-[#9b87f5] font-bold">
                  JD
                </div>
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-gray-500">CEO, SNT Gen Wealth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">Ready to transform your financial services with AI?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Contact us today to learn how our AI solutions can help your wealth management firm achieve similar results.
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-8">
              Get in touch
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SNTGenWealth;
