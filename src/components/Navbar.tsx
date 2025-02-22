
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 px-6 py-4 bg-white/80 backdrop-blur-lg">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-medium text-[#1A1F2C]">CommonMan.ai</span>
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
