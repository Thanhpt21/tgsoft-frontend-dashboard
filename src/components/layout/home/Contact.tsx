"use client";

import { useState } from "react";

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-white">
      <div className="bg-gray-100 rounded-3xl py-8 sm:py-12 lg:py-14 mx-2 sm:mx-6 lg:mx-8 my-8 sm:my-10 lg:my-14">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center px-2 sm:px-0">
            <h2 className="text-lg sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-6">
              Ready to Transform Your E-commerce Experience?
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-6 sm:mb-10 leading-relaxed px-1 sm:px-0">
              Discover the power of AI with our Chatbot E-commerce solution.
              Take the next step towards revolutionizing your customer
              interactions and boosting your sales. Fill out the form below to
              get started or schedule a demo with our experts!
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center mb-6 sm:mb-10 px-1 sm:px-0">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors duration-300 text-xs sm:text-sm whitespace-nowrap">
                Get Started Now
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors duration-300 text-xs sm:text-sm whitespace-nowrap">
                Schedule a Demo
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 sm:p-8 lg:p-10 border border-gray-200 mx-1 sm:mx-0">
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label className="block text-left text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-left text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-left text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3.5 rounded-lg transition-colors duration-300 text-xs sm:text-base"
                >
                  Submit Information
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
