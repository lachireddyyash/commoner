
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Clients = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFF] to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-[#1A1F2C]">Our Clients</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by leading companies worldwide to deliver innovative AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* SNT Gen Wealth Client Card */}
          <Link to="/clients/sntgenwealth" className="group">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 h-full flex flex-col">
              <div className="mb-4">
                <img 
                  src="https://sntgenwealth.com/wp-content/uploads/2023/06/cropped-snt-black-web-1-11.png" 
                  alt="SNT Gen Wealth Logo" 
                  className="h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">SNT Gen Wealth</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Wealth management and financial advisory services powered by AI insights.
              </p>
              <div className="flex items-center text-[#9b87f5] group-hover:text-[#7E69AB] transition-colors">
                <span>View case study</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>

          {/* Placeholder for more clients */}
          <div className="glass p-8 rounded-xl text-center col-span-1 md:col-span-2 lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-4 text-[#1A1F2C]">We're working on getting clients!</h3>
            <p className="text-gray-600">
              We're excited to build our client portfolio and help businesses transform with AI.
              Check back soon to see our growing list of success stories.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Clients;
