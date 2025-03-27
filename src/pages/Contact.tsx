
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using standard email mailto link as a fallback since EmailJS isn't working
      // Create email body
      const body = `
        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}
        
        Message:
        ${formData.message}
      `;
      
      // Create mailto link
      const mailtoLink = `mailto:hello@commoner.ai?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
      
      // Open default mail client
      window.open(mailtoLink);
      
      toast({
        title: "Action needed",
        description: "Your email app has been opened. Please send the email to complete your message.",
        duration: 5000,
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or email us directly at hello@commoner.ai",
        variant: "destructive",
        duration: 5000,
      });
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFF] to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-48 pb-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-[#1A1F2C]">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's discuss how AI can transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="glass p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#9b87f5] text-white hover:bg-[#7E69AB]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="glass p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-6 h-6 text-[#9b87f5]" />
                <h3 className="text-xl font-semibold">Email Us</h3>
              </div>
              <p className="text-gray-600">hello@commoner.ai</p>
            </div>

            <div className="glass p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-6 h-6 text-[#9b87f5]" />
                <h3 className="text-xl font-semibold">Call Us</h3>
              </div>
              <p className="text-gray-600">561 371 0601</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
