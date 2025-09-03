import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-primary">
            Hady Mostafa
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Experience
            </button>
            
            <button
              onClick={() => scrollToSection('education')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('volunteer')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Volunteer
            </button>
            <button
              onClick={() => scrollToSection('elevator-pitch')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
             Elevator Pitch
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('volunteer')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Volunteer
              </button>
              <button
                onClick={() => scrollToSection('elevator-pitch')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Pitch
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}