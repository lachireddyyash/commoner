
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Clients = () => {
  const clients = [
    {
      name: "TechCorp Global",
      logo: "TC",
      testimonial: "The AI chatbot solution has revolutionized our customer service approach. We've seen a dramatic reduction in response times and increased satisfaction."
    },
    {
      name: "Finance Partners",
      logo: "FP",
      testimonial: "Their predictive analytics platform has given us insights we never thought possible. The ROI has exceeded our expectations by 200%."
    },
    {
      name: "LegalEase Solutions",
      logo: "LE",
      testimonial: "The document processing AI has transformed our workflow. What used to take days now happens in minutes with even better accuracy."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFF] to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-[#1A1F2C]">Our Clients</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by leading companies worldwide to deliver innovative AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="glass p-8 rounded-xl hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#9b87f5] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                {client.logo}
              </div>
              <h3 className="text-xl font-semibold mb-4">{client.name}</h3>
              <p className="text-gray-600 italic">&ldquo;{client.testimonial}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Clients;
