import React, { useState } from 'react';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("p-oDxfkrZKU1t_z3t");

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    message: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: formData.email,
        to_name: "Aaravam Labs",
        message: formData.message,
        from_email: formData.email,
        phone_number: formData.phone || 'Not provided',
        reply_to: formData.email
      };

      await emailjs.send(
        'service_e9p0uxs',
        'template_m1urfs7',
        templateParams,
        'p-oDxfkrZKU1t_z3t'
      );

      setSubmitStatus('success');
      setFormData({ message: '', phone: '', email: '' });
      setTimeout(() => {
        onClose();
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start md:items-center justify-center z-50 p-4 pt-16 md:pt-20 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-md mx-auto shadow-xl transform transition-all relative">
        <button 
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Drop a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="3"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e16338] focus:border-transparent transition-all"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your interest in Aaravam Labs..."
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e16338] focus:border-transparent transition-all"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e16338] focus:border-transparent transition-all"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 99999 99999"
                disabled={isSubmitting}
              />
            </div>
            <div>
              {submitStatus === 'success' && (
                <div className="text-green-600 text-sm text-center mb-2">
                  Message sent successfully!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-600 text-sm text-center mb-2">
                  Failed to send message. Please try again.
                </div>
              )}
              <button
                type="submit"
                className={`w-full bg-[#e16338] text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#d55328]'
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500">OR</p>
            <p className="mt-2 text-center text-sm text-gray-700">
              Reach out to us on{' '}
              <a 
                href="mailto:hello@aaravamlabs.com" 
                className="text-[#e16338] hover:text-[#d55328] font-medium transition-colors"
              >
                hello@aaravamlabs.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal; 