import { useState, useRef } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Get environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus({
        success: false,
        message: 'EmailJS configuration is missing. Please check your .env file.'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );

      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully!'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      e.target.reset(); // Also reset native form state if needed
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-8 sm:mb-12 mx-auto">
          Get in Touch
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mt-8 sm:mt-12">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 bg-white p-6 sm:p-8 rounded-lg shadow-sm">
            <div className="flex items-start mb-5 pb-5 sm:mb-6 sm:pb-6 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 text-lg sm:text-xl mr-3 sm:mr-4 flex-shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">Pune, India</h3>
              </div>
            </div>

            <div className="flex items-start mb-5 pb-5 sm:mb-6 sm:pb-6 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 text-lg sm:text-xl mr-3 sm:mr-4 flex-shrink-0">
                <FaEnvelope />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">Email</h3>
                <p className="text-sm sm:text-base text-gray-600 break-words">abhijeetkarne47@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 text-lg sm:text-xl mr-3 sm:mr-4 flex-shrink-0">
                <FaPhone />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">Phone</h3>
                <p className="text-sm sm:text-base text-gray-600">+91 9156139538</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="w-full lg:w-2/3 bg-white p-6 sm:p-8 rounded-lg shadow-sm"
          >
            {submitStatus.message && (
              <div
                className={`p-4 mb-6 rounded ${submitStatus.success
                  ? 'bg-green-100 text-green-700 border border-green-200'
                  : 'bg-red-100 text-red-700 border border-red-200'
                  }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="mb-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition font-medium sm:font-semibold text-black text-sm sm:text-base ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="mb-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition font-medium sm:font-semibold text-black text-sm sm:text-base ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="mb-6">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={`w-full px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition font-medium sm:font-semibold text-black text-sm sm:text-base ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.subject && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.subject}
                </span>
              )}
            </div>

            <div className="mb-8">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className={`w-full px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition font-medium sm:font-semibold text-black text-sm sm:text-base ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-lg flex items-center justify-center gap-2 transition duration-300 transform hover:-translate-y-0.5 hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none text-sm sm:text-base"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  Send Message <FaPaperPlane className="text-sm" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;