import { Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Me</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:ahmed@example.com" className="hover:text-blue-400 transition-colors">
                  hady.elktatny@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+966501234567" className="hover:text-blue-400 transition-colors">
                  +201142924668
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/hady-mostafa-74h101156/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-blue-400 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-blue-400 transition-colors text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-blue-400 transition-colors text-left"
              >
                Experience
              </button>
              <button
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-blue-400 transition-colors text-left"
              >
                Skills
              </button>
              <button
                onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-blue-400 transition-colors text-left"
              >
                Education
              </button>
              <button
                onClick={() => document.getElementById('volunteer')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-blue-400 transition-colors text-left"
              >
                Volunteer
              </button>
              <button
                onClick={() => document.getElementById('elevator-pitch')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-blue-400 transition-colors text-left"
              >
                Pitch
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-blue-400 transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Hady Mostafa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}