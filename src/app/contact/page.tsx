'use client';

import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    needs: '',
    interests: {
      aiIntegration: false,
      sales: false,
      analytics: false,
      customer: false,
      user: false,
      chatbotDesign: false
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      interests: {
        ...prev.interests,
        [name]: checked
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const interests = [
    { id: 'aiIntegration', label: 'AI Integration' },
    { id: 'sales', label: 'Sales' },
    { id: 'analytics', label: 'Analytics and' },
    { id: 'customer', label: 'Customer' },
    { id: 'user', label: 'User' },
    { id: 'chatbotDesign', label: 'Chatbot Design' }
  ];

  return (
    <section className="bg-white">
      <div className="py-12 sm:py-16 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
              We'd love to hear
            </h1>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
              from you!
            </h1>
            <div className="w-20 h-1 bg-gray-300"></div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left - Form */}
            <div className="bg-blue-100 rounded-3xl p-8 sm:p-10 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    required
                  />
                </div>

                {/* Describe your needs */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Describe your needs
                  </label>
                  <textarea
                    name="needs"
                    placeholder="What can we assist you with?"
                    value={formData.needs}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-6 py-4 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none bg-white"
                    required
                  />
                </div>

                {/* Select interests */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-4">
                    Select your interest
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {interests.map((interest) => (
                      <label key={interest.id} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name={interest.id}
                          checked={formData.interests[interest.id as keyof typeof formData.interests]}
                          onChange={handleCheckboxChange}
                          className="w-5 h-5 accent-blue-500 cursor-pointer"
                        />
                        <span className="text-sm text-gray-900">{interest.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300 text-sm sm:text-base"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Right - Image */}
            <div className="relative h-full min-h-96 lg:min-h-full rounded-3xl overflow-hidden bg-gray-300">
              <img
                src="/image/contact.png"
                alt="AI Robot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;