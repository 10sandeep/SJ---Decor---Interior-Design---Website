import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 bg-white text-black overflow-hidden">
      {/* Abstract design elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-emerald-300 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-rose-300 rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-amber-100 text-amber-600 text-sm font-medium mb-4 tracking-wide">
            CONNECT WITH US
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight font-serif">
            Transform Your Space <span className="text-amber-500">Together</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to bring your vision to life? Our team of expert designers is just a message away. Let's collaborate to create spaces that inspire, comfort, and delight.
          </p>
        </div>

        <div className="lg:flex rounded-3xl overflow-hidden shadow-xl">
          {/* Contact Info - Left Side */}
          <div className="backdrop-blur-lg border border-gray-200 p-10 w-full lg:w-1/2 bg-white">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-8 border-b border-gray-200 pb-4 flex items-center">
                <span className="mr-3 inline-block w-8 h-1 bg-amber-500"></span>
                Contact Information
              </h3>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm uppercase tracking-wider font-light">Email</p>
                    <a href="mailto:hello@elegantspaces.com" className="text-black hover:text-amber-500 transition-colors">
                      hello@elegantspaces.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm uppercase tracking-wider font-light">Phone</p>
                    <a href="tel:+919876543210" className="text-black hover:text-amber-500 transition-colors">
                    +91 7978044704 <br>
                    </br>
                    +91 824-9365217
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm uppercase tracking-wider font-light">Studio Location</p>
                    <p className="text-black leading-relaxed">
                    Uccha Sahi, Kesharpur, Buxi Bazar<br />
                    Cuttack-753001
                    </p>
                  </div>
                </div>
              </div>

              {/* Studio Hours */}
              <div className="mt-10 py-6 border-t border-gray-200">
                <h4 className="text-lg font-medium mb-4 text-amber-600">Studio Hours</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-gray-500 text-sm">Monday - Friday</p>
                    <p className="text-black">10:00 AM - 7:00 PM</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Saturday</p>
                    <p className="text-black">11:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <p className="text-gray-500 text-sm uppercase tracking-wider font-light mb-4">Follow Our Work</p>
                <div className="flex space-x-4">
                  {[Instagram, Linkedin].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-amber-100 text-black hover:text-amber-600 transition-all"
                      aria-label={`Social media link ${index + 1}`}
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map - Right Side */}
          <div className="w-full lg:w-1/2 relative group min-h-[400px]">
            <div className="h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887382.6509961526!2d82.3402977984384!3d20.3539572172418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190909d0dbe9ff%3A0xb5816b6fda83eb1!2sOdisha!5e0!3m2!1sen!2sin!4v1681123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'brightness(0.9) contrast(1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Design Studio Location"
                className="min-h-full"
              ></iframe>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent flex items-end p-8 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-black">
                <h4 className="text-xl font-semibold mb-2">Visit Our Design Studio</h4>
                <p className="text-gray-600 mb-4">Experience our curated design materials and meet our team in person.</p>
                <a href="#appointment" className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500 text-white hover:bg-amber-400 transition-colors text-sm font-medium">
                  Schedule a Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
