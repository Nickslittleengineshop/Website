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
  const [submitStatus, setSubmitStatus] =
    useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    Object.entries(formData).forEach(([k, v]) =>
      formDataToSend.append(k, v || 'Not specified')
    );
    formDataToSend.append('timestamp', new Date().toISOString());
    formDataToSend.append('source', "Nick's Little Engine Shop Website");

    try {
      await fetch(
        'https://hook.us2.make.com/bddm2qxmo63bu4omiow1kkvx8efc9qkq',
        { method: 'POST', body: formDataToSend, mode: 'no-cors' }
      );
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your Name *"
          className="w-full bg-gray-800 border border-gray-600 focus:border-yellow-400 text-white px-4 py-3 font-exo2"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address *"
          className="w-full bg-gray-800 border border-gray-600 focus:border-yellow-400 text-white px-4 py-3 font-exo2"
          required
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone Number *"
          className="w-full bg-gray-800 border border-gray-600 focus:border-yellow-400 text-white px-4 py-3 font-exo2"
        />

        <label htmlFor="serviceType" className="sr-only">
          Service Type
        </label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleInputChange}
          className="w-full bg-gray-800 border border-gray-600 focus:border-yellow-400 text-white px-4 py-3 font-exo2"
        >
          <option value="">Select Service Type</option>
          <option>Engine Repair</option>
          <option>Routine Maintenance</option>
          <option>Electrical Issues</option>
          <option>Carburetor Service</option>
          <option>Parts & Sales</option>
          <option>Other</option>
        </select>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Tell us about your equipment and what's wrong"
          rows={4}
          className="w-full bg-gray-800 border border-gray-600 focus:border-yellow-400 text-white px-4 py-3 font-exo2 resize-none"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="steel-button w-full font-bold py-4 text-xl text-red-600"
        >
          {isSubmitting ? 'SENDING…' : 'SEND MESSAGE'}
        </button>
      </form>

      {submitStatus === 'success' && (
        <div className="mt-4 p-4 bg-green-800 text-white text-center">
          Message sent successfully!
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mt-4 p-4 bg-red-800 text-white text-center">
          Error sending message.
        </div>
      )}
    </>
  );
};

const Contact: React.FC = () => (
  <section id="contact" className="py-12 md:py-20 bg-black">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

        {/* LEFT — FORM */}
        <div className="chrome-plate-service relative p-6 md:p-8">
          <h4 className="text-3xl font-bold text-center mb-6">CONTACT FORM</h4>
          <ContactForm />
        </div>

        {/* RIGHT — BUSINESS INFO */}
        <div className="space-y-6">

          <div className="chrome-plate-service p-6">
            <h4 className="text-3xl font-bold text-center mb-4">SHOP HOURS</h4>
            <p className="flex justify-between">
              <span>Mon–Fri</span><span>8:30 AM – 4:30 PM</span>
            </p>
            <p className="flex justify-between">
              <span>Sat–Sun</span><span>CLOSED</span>
            </p>
          </div>

          <div className="chrome-plate-service p-6">
            <h4 className="text-3xl font-bold text-center mb-4">CONTACT INFO</h4>
            <p className="flex items-center gap-3"><Phone /> (518) 893-0649</p>
            <p className="flex items-center gap-3"><Mail /> nickslittleengineshop@yahoo.com</p>
            <p className="flex items-center gap-3">
              <MapPin />
              <a
                href="https://www.google.com/maps/place/Nick's+Little+Engine+Shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                504 Sandhill Rd, Greenfield Center, NY
              </a>
            </p>
          </div>

          <div className="chrome-plate-service p-6 text-center">
            <h4 className="text-3xl font-bold mb-4">SERVICE AREAS</h4>
            Saratoga Springs • Glens Falls • Clifton Park • Ballston Spa • Surrounding Areas
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default Contact;


