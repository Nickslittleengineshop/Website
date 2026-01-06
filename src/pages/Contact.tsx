import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      alert('Please fill in required fields (Name and Email)');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('serviceType', formData.serviceType || 'Not specified');
    formDataToSend.append('message', formData.message);
    formDataToSend.append('timestamp', new Date().toISOString());
    formDataToSend.append('source', 'Nick\'s Little Engine Shop Website');

    try {
      await fetch('https://hook.us2.make.com/bddm2qxmo63bu4omiow1kkvx8efc9qkq', {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors'
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name *"
            className="w-full bg-gray-800 border border-gray-600 focus:border-yellow-400 text-white px-4 py-3 font-exo2 focus:outline-none transition-colors duration-300 text-base md:text-lg"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address *"
            className="w-full bg-gray-800 border border-gray-600 focus:border-yellow-400 text-white px-4 py-3 font-exo2 focus:outline-none transition-colors duration-300 text-base md:text-lg"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number *"
            className="w-full bg-gray-800 border border-gray-600 focus:border-yellow-400 text-white px-4 py-3 font-exo2 focus:outline-none transition-colors duration-300 text-base md:text-lg"
          />
        </div>
        <div>
          <select 
            aria-label="Service Type"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-600 focus:border-yellow-400 text-white px-4 py-3 font-exo2 focus:outline-none transition-colors duration-300 text-base md:text-lg"
          >
            <option value="">Select Service Type</option>
            <option value="Engine Repair">Engine Repair</option>
            <option value="Routine Maintenance">Routine Maintenance</option>
            <option value="Electrical Issues">Electrical Issues</option>
            <option value="Carburetor Service">Carburetor Service</option>
            <option value="Parts & Sales">Parts & Sales</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us about your equipment and what's wrong"
            rows={4}
            className="w-full bg-gray-800 border border-gray-600 focus:border-yellow-400 text-white px-4 py-3 font-exo2 focus:outline-none transition-colors duration-300 resize-none text-base md:text-lg"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="steel-button font-exo2 font-bold py-4 px-8 md:py-5 md:px-10 text-xl md:text-2xl text-red-600 w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
        </button>
      </form>
      
      {submitStatus === 'success' && (
        <div className="mt-4 p-4 bg-green-800 border border-green-600 rounded text-white text-center">
          <p className="font-exo2">Message sent successfully! We'll get back to you soon.</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mt-4 p-4 bg-red-800 border border-red-600 rounded text-white text-center">
          <p className="font-exo2">Error sending message. Please try again or call us directly.</p>
        </div>
      )}
    </>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 md:py-20 bg-black relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Steel Plate Header */}
        <div className="relative mb-10 md:mb-16">
          <div className="relative mx-auto max-w-4xl">
            <div className="chrome-plate-service relative">
              <div className="screw-top-left"></div>
              <div className="screw-top-right"></div>
              <div className="screw-bottom-left"></div>
              <div className="screw-bottom-right"></div>
              
              <div className="text-center py-8 md:py-12 px-6 md:px-8">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
                  CONTACT US
                </h3>
                <p className="font-exo2 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
                  Ready to get your equipment running right? Contact us for all your small engine repair needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form - Steel Plate */}
          <div className="chrome-plate-service relative">
            <div className="screw-top-left"></div>
            <div className="screw-top-right"></div>
            <div className="screw-bottom-left"></div>
            <div className="screw-bottom-right"></div>
            
            <div className="relative z-10 p-6 md:p-8">
              <h4 className="font-exo2 text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">CONTACT FORM</h4>
              <ContactForm />
            </div>
          </div>

          {/* Contact Info - Steel Plates */}
          <div className="space-y-6 md:space-y-8">
            
            {/* Shop Hours Steel Plate */}
            <div className="chrome-plate-service relative">
              <div className="screw-top-left"></div>
              <div className="screw-top-right"></div>
              <div className="screw-bottom-left"></div>
              <div className="screw-bottom-right"></div>
              
              <div className="relative z-10 p-6 md:p-8">
                <h4 className="font-exo2 text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">SHOP HOURS</h4>
                <div className="space-y-3">
                  <p className="font-exo2 text-base md:text-lg lg:text-xl flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-bold">8:30 AM - 4:30 PM</span>
                  </p>
                  <p className="font-exo2 text-base md:text-lg lg:text-xl flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-bold">CLOSED</span>
                  </p>
                  <p className="font-exo2 text-base md:text-lg lg:text-xl flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-bold">CLOSED</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info Steel Plate */}
            <div className="chrome-plate-service relative">
              <div className="screw-top-left"></div>
              <div className="screw-top-right"></div>
              <div className="screw-bottom-left"></div>
              <div className="screw-bottom-right"></div>
              
              <div className="relative z-10 p-6 md:p-8">
                <h4 className="font-exo2 text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">CONTACT INFO</h4>
                <div className="space-y-4">
                  <p className="font-exo2 text-base md:text-lg lg:text-xl flex items-center space-x-4">
                    <Phone className="flex-shrink-0" size={24} />
                    <span>(518) 893-0649</span>
                  </p>
                  <p className="font-exo2 text-base md:text-lg lg:text-xl flex items-start space-x-4">
                    <Mail className="flex-shrink-0 mt-1" size={24} />
                    <span className="break-all">nickslittleengineshop@yahoo.com</span>
                  </p>
                  <p className="font-exo2 text-base md:text-lg lg:text-xl flex items-start space-x-4">
                    <MapPin className="flex-shrink-0 mt-1" size={24} />
                    <a 
                      href="https://www.google.com/maps/place/Nick's+Little+Engine+Shop/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-yellow-400 transition-colors duration-300 underline"
                    >
                      504 Sandhill Road, Greenfield Center, NY 12833
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Service Areas Steel Plate */}
            <div className="chrome-plate-service relative">
              <div className="screw-top-left"></div>
              <div className="screw-top-right"></div>
              <div className="screw-bottom-left"></div>
              <div className="screw-bottom-right"></div>

              <div className="relative z-10 p-6 md:p-8">
                <h4 className="font-exo2 text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">SERVICE AREAS</h4>
                <div className="text-center">
                  <p className="font-exo2 text-base md:text-lg lg:text-xl leading-relaxed">
                    Saratoga Springs • Corinth • Greenwich • Galaway • Lake George •
                    Glens Falls • Ballston Spa • Burnt Hills • Clifton Park and surrounding areas
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

