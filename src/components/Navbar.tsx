
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 px-6 py-4 bg-white/80 backdrop-blur-lg">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/7c996667-ffcd-4786-ba6c-60fb0e266a5e.png" 
            alt="CommonMan.ai Logo" 
            className="h-24" // Reduced from h-40 to h-24
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/services" className="text-[#1A1F2C] hover:text-[#9b87f5] transition-colors">Services</Link>
          <Link to="/examples" className="text-[#1A1F2C] hover:text-[#9b87f5] transition-colors">Examples</Link>
          <Link to="/clients" className="text-[#1A1F2C] hover:text-[#9b87f5] transition-colors">Clients</Link>
          <Link to="/blog" className="text-[#1A1F2C] hover:text-[#9b87f5] transition-colors">Blog</Link>
          <Link to="/pricing" className="text-[#1A1F2C] hover:text-[#9b87f5] transition-colors">Pricing</Link>
          <Link to="/contact" className="text-[#1A1F2C] hover:text-[#9b87f5] transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
