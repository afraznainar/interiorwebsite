import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import CallbackRequest from './CallbackRequest';

export default function Contact() {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in interior design services.");
    window.open(`https://wa.me/918494999594?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">
            Ready to transform your space? Get in touch with us for a consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-gray-900" />
              <div>
                <p className="font-semibold text-gray-900">Call Us</p>
                <p className="text-gray-600">+91 8494999594</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-gray-900" />
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-600">support@elitedzynz.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-gray-900" />
              <div>
                <p className="font-semibold text-gray-900">Office Address</p>
                <p className="text-gray-600">Ground Floor, 36, Infantry Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001</p>
              </div>
            </div>

            <button
              onClick={openWhatsApp}
              className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors w-full justify-center"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </button>

            <div className="pt-8">
              <CallbackRequest />
            </div>
          </div>

          <div className="h-[400px] rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9339773056897!2d77.60486297515686!3d12.977255987316787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae166d7ec1ece9%3A0xd0d7b31e7a9e8a8e!2s36%2C%20Infantry%20Rd%2C%20Tasker%20Town%2C%20Shivaji%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560001!5e0!3m2!1sen!2sin!4v1709825149776!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}