import React, { useState, useEffect } from 'react';
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 pt-20 md:pt-24">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl transform transition-all">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Drop a Message</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e16338] focus:border-transparent transition-all"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your interest in Aaravam Labs..."
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e16338] focus:border-transparent transition-all"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e16338] focus:border-transparent transition-all"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 99999 99999"
              disabled={isSubmitting}
            />
          </div>
          <div className="pt-4">
            {submitStatus === 'success' && (
              <div className="text-green-600 text-center mb-4">
                Message sent successfully!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="text-red-600 text-center mb-4">
                Failed to send message. Please try again.
              </div>
            )}
            <button
              type="submit"
              className={`w-full bg-[#e16338] text-white py-3 px-6 rounded-lg font-medium transition-all transform hover:scale-[1.02] ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#d55328]'
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
        <div className="mt-8 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>
          <p className="mt-4 text-gray-700">
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
  );
};

export default ContactModal; 