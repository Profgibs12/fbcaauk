import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About FBCAAUK</h3>
            <p className="text-sm text-gray-300">
              Connecting and supporting alumni of Fourah Bay College while fostering growth and development
              for our alma mater and community.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-gray-300">About Us</Link></li>
              <li><Link to="/events" className="text-sm hover:text-gray-300">Events</Link></li>
              <li><Link to="/news" className="text-sm hover:text-gray-300">News</Link></li>
              <li><Link to="/projects" className="text-sm hover:text-gray-300">Projects</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link to="/mentorship" className="text-sm hover:text-gray-300">Mentorship</Link></li>
              <li><Link to="/volunteer" className="text-sm hover:text-gray-300">Volunteer</Link></li>
              <li><Link to="/jobs" className="text-sm hover:text-gray-300">Job Board</Link></li>
              <li><Link to="/donate" className="text-sm hover:text-gray-300">Support Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-300 mb-4">
              Email: info@fbcaauk.org<br />
              Phone: +44 (0) 123 456 7890
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><Facebook size={20} /></a>
              <a href="#" className="hover:text-gray-300"><Twitter size={20} /></a>
              <a href="#" className="hover:text-gray-300"><Linkedin size={20} /></a>
              <a href="mailto:info@fbcaauk.org" className="hover:text-gray-300"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Fourah Bay College Alumni Association UK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;