import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, BookOpen, Heart, Calendar, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About FBCAAUK</h1>
            <nav className="text-sm md:text-base">
              <ol className="flex justify-center space-x-2">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><span className="mx-2">/</span></li>
                <li className="font-semibold">About</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Navigation Sidebar and Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold text-blue-900 mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#mission" className="block py-2 px-3 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-900 transition-colors">
                    Mission & Vision
                  </a>
                </li>
                <li>
                  <a href="#history" className="block py-2 px-3 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-900 transition-colors">
                    Our History
                  </a>
                </li>
                <li>
                  <a href="#leadership" className="block py-2 px-3 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-900 transition-colors">
                    Leadership
                  </a>
                </li>
                <li>
                  <a href="#community" className="block py-2 px-3 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-900 transition-colors">
                    Our Community
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="block py-2 px-3 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-900 transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#contact" className="block py-2 px-3 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-900 transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            {/* Video Section */}
            <div className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative h-[400px]">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 rounded-full bg-blue-900 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-blue-800 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold">We are FBCAAUK</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* One Community Section */}
            <div className="mb-12" id="mission">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">One Community. Infinite Connections.</h2>
              <p className="text-lg text-gray-700 mb-6">
                You belong to the most talented network in Sierra Leone: the Fourah Bay College community. The FBCAAUK 
                is here to help you connect with your community and make a difference.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With this dynamic and diverse population, you have limitless ways to engage, contribute, and grow together.
              </p>
            </div>

            {/* History Section */}
            <div className="mb-12" id="history">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our History</h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <p className="text-lg text-gray-700 mb-4">
                  Founded in 1995, the Fourah Bay College Alumni Association UK (FBCAAUK) has grown from a small group of graduates 
                  to a vibrant community of professionals dedicated to supporting our alma mater and each other.
                </p>
                <p className="text-lg text-gray-700">
                  Fourah Bay College, established in 1827, is the oldest university in West Africa and has produced generations of 
                  leaders, innovators, and change-makers. Our association builds on this rich legacy by fostering connections 
                  between alumni in the UK and supporting initiatives that benefit current students and the college.
                </p>
              </div>
            </div>

            {/* Leadership Section */}
            <div className="mb-12" id="leadership">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Your FBCAAUK Leadership</h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <p className="text-lg text-gray-700 mb-6">
                  Meet the FBCAAUK Association Board, the selected governing body of alumni who drive programs to match your needs.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {/* Leadership Card 1 */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4">
                      <h3 className="font-bold text-xl mb-1">Dr. Aminata Koroma</h3>
                      <p className="text-blue-900 font-medium mb-2">President</p>
                      <p className="text-gray-600 text-sm">Class of 1998, Economics</p>
                    </div>
                  </div>
                  
                  {/* Leadership Card 2 */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4">
                      <h3 className="font-bold text-xl mb-1">Mr. Ibrahim Sesay</h3>
                      <p className="text-blue-900 font-medium mb-2">Vice President</p>
                      <p className="text-gray-600 text-sm">Class of 2001, Engineering</p>
                    </div>
                  </div>
                  
                  {/* Leadership Card 3 */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4">
                      <h3 className="font-bold text-xl mb-1">Ms. Fatmata Kamara</h3>
                      <p className="text-blue-900 font-medium mb-2">Secretary</p>
                      <p className="text-gray-600 text-sm">Class of 2005, Law</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" id="community">
              {/* Benefits Card 1 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 mr-2 text-yellow-500" />
                  Benefits and Offerings
                </h3>
                <p className="text-gray-700">
                  Financial services. Online portal access. Discounts and memberships. See what resources the Alumni Association can offer you.
                </p>
                <Link to="/about" className="inline-flex items-center text-blue-900 font-medium mt-4 hover:text-blue-700">
                  Learn more
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

              {/* Benefits Card 2 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                  <BookOpen className="h-6 w-6 mr-2 text-yellow-500" />
                  News Source
                </h3>
                <p className="text-gray-700">
                  What's happening in the FBC universe, in Freetown and beyond? Stay in the know via the Association's various media outlets.
                </p>
                <Link to="/news" className="inline-flex items-center text-blue-900 font-medium mt-4 hover:text-blue-700">
                  Learn more
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

              {/* Benefits Card 3 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-2 text-yellow-500" />
                  Alumni Association Team
                </h3>
                <p className="text-gray-700">
                  Get to know the professionals dedicated to engaging you with your community in meaningful ways.
                </p>
                <Link to="/about" className="inline-flex items-center text-blue-900 font-medium mt-4 hover:text-blue-700">
                  Learn more
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

              {/* Benefits Card 4 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                  <Globe className="h-6 w-6 mr-2 text-yellow-500" />
                  Social Media Channels
                </h3>
                <p className="text-gray-700">
                  Post, share, discuss, and connect! Be a part of the conversation by following the FBCAAUK Association channels.
                </p>
                <Link to="/contact" className="inline-flex items-center text-blue-900 font-medium mt-4 hover:text-blue-700">
                  Learn more
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Get Involved Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Get Involved" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Get Involved Today</h3>
                  <p className="text-gray-700 mb-4">
                    How do you want to engage with your FBC community? Find out more about opportunities to connect and contribute.
                  </p>
                  <Link to="/volunteer" className="btn btn-primary inline-block">Learn More</Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Give Back" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Give Back, Give Forward</h3>
                  <p className="text-gray-700 mb-4">
                    You know firsthand the power of FBC to change the lives of our students and the world. Discover how your giving can make a positive impact.
                  </p>
                  <Link to="/donate" className="btn btn-secondary inline-block">Support Us</Link>
                </div>
              </div>
            </div>

            {/* FAQs Section */}
            <div className="mb-12" id="faqs">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">How do I become a member of FBCAAUK?</h3>
                    <p className="text-gray-700">
                      All graduates of Fourah Bay College are automatically eligible for membership. To become an active member, 
                      you can register through our online portal and pay the annual membership fee.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">What are the benefits of membership?</h3>
                    <p className="text-gray-700">
                      Members enjoy networking opportunities, access to exclusive events, mentorship programs, 
                      professional development resources, and the chance to contribute to initiatives that support our alma mater.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">How can I update my contact information?</h3>
                    <p className="text-gray-700">
                      You can update your contact information by logging into your account on our member portal 
                      or by contacting our administrative team at info@fbcaauk.org.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">How can I get involved in FBCAAUK activities?</h3>
                    <p className="text-gray-700">
                      There are many ways to get involved! You can volunteer for committees, attend events, 
                      participate in mentorship programs, or contribute to our fundraising campaigns. 
                      Check our Volunteer page for current opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div id="contact">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-lg text-gray-700 mb-6">
                  Have questions or want to get in touch with the FBCAAUK team? We'd love to hear from you!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Contact Information</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-900 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <span>Email: info@fbcaauk.org</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-900 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <span>Phone: +44 (0) 123 456 7890</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-900 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span>
                          Address: 123 Alumni House<br />
                          London, UK<br />
                          SW1A 1AA
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Connect With Us</h3>
                    <p className="text-gray-700 mb-4">
                      Follow us on social media to stay updated with the latest news, events, and opportunities.
                    </p>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;