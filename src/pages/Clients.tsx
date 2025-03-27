
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

        <div className="flex justify-center items-center min-h-[300px]">
          <div className="glass p-8 rounded-xl text-center max-w-lg">
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
