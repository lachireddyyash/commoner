
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "Coming Soon!",
      excerpt: "We're working on our blog!",
      date: "2024-03-10",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
      category: "N/A"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFF] to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-[#1A1F2C]">Latest Insights</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in AI and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="glass overflow-hidden rounded-xl hover:scale-105 transition-transform duration-300">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString()}
                  <span className="bg-[#9b87f5]/10 text-[#9b87f5] px-3 py-1 rounded-full ml-2">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button variant="link" className="text-[#9b87f5] hover:text-[#7E69AB]">
                  Read more <ArrowRight className="ml-2 w-4 h-4" />
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

export default Blog;
