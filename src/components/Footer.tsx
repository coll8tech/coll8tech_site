import { MapPin, Mail, Phone, Globe } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = ['About Us', 'Services', 'Our Process', 'Specialization'];
  const services = ['Staff Augmentation', 'Contract Staffing', 'Permanent Placement', 'RPO Services'];

  return (
    <footer className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-gray-900 text-sm">C8</span>
              </div>
              <span className="text-lg">COLL8</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner in strategic talent acquisition since 2019.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => document.getElementById(link.toLowerCase().replace(' ', ''))?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="flex-shrink-0 mt-0.5" size={16} />
                <span>Vadodara, Gujarat, India</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="flex-shrink-0 mt-0.5" size={16} />
                <a href="mailto:info@coll8tech.com" className="hover:text-white transition-colors">
                  info@coll8tech.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="flex-shrink-0 mt-0.5" size={16} />
                <a href="tel:+918866685311" className="hover:text-white transition-colors">
                  +91 88666 85311
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Globe className="flex-shrink-0 mt-0.5" size={16} />
                <a href="http://www.coll8tech.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  www.coll8tech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Coll8 Tech Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
