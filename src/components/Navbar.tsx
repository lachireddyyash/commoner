
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 px-6 py-4 bg-white/80 backdrop-blur-lg">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/c4b6fbf2-c772-4f12-bac3-abc9e3b270f5.png" 
            alt="Commoner.ai Logo" 
            className="h-32" // Significantly increased from h-24 to h-32
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

        {/* Mobile Menu Dropdown */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 text-[#1A1F2C] hover:text-[#9b87f5] focus:outline-none">
                <Menu className="h-6 w-6" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white w-48">
              <DropdownMenuItem asChild>
                <Link to="/services" className="w-full cursor-pointer">Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/examples" className="w-full cursor-pointer">Examples</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/clients" className="w-full cursor-pointer">Clients</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/blog" className="w-full cursor-pointer">Blog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/pricing" className="w-full cursor-pointer">Pricing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/contact" className="w-full cursor-pointer">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
