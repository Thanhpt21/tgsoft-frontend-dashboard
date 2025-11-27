"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="py-10 sm:py-14 lg:py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-2 sm:mb-6">
                Transform Your E-commerce with Our AI Chatbot
              </h1>

              <p className="text-xs sm:text-base text-gray-800 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Welcome to The Chatbot Experts, where we provide innovative AI
                chatbot solutions that enhance customer engagement and drive
                sales for your e-commerce business. Our technology ensures
                seamless integration for optimal user experience.
              </p>
            </div>

            <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] flex items-center justify-center">
              <div className="relative w-[280px] sm:w-[320px] lg:w-[350px] h-[280px] sm:h-[320px] lg:h-[350px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/image/hero1.png"
                    alt="AI Chatbot Illustration"
                    width={280}
                    height={280}
                    className="object-contain w-full h-full"
                  />
                </div>

                <div className="absolute top-4 sm:top-8 -left-2 sm:-left-4 bg-white rounded-lg sm:rounded-xl shadow-lg px-2 sm:px-4 py-1.5 sm:py-2.5 flex items-center gap-1.5 sm:gap-2 z-10">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap">
                    Live Demo
                  </span>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 -right-1 sm:-right-2 bg-white rounded-lg sm:rounded-xl shadow-lg px-2 sm:px-4 py-1.5 sm:py-2.5 z-10">
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap">
                    Integration
                  </span>
                </div>

                <div className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 bg-white rounded-lg sm:rounded-xl shadow-lg px-2 sm:px-4 py-1.5 sm:py-2.5 z-10">
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap">
                    Support
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 sm:pt-10 lg:pt-12 pb-8 sm:pb-10 lg:pb-12">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6">
              <div className="bg-blue-500 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-lg font-semibold text-xs sm:text-sm shadow-sm">
                Shopify
              </div>

              <div className="bg-blue-500 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-lg font-semibold text-xs sm:text-sm shadow-sm">
                Commerce
              </div>

              <div className="bg-blue-500 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-lg font-semibold text-xs sm:text-sm shadow-sm">
                Magento
              </div>

              <div className="bg-blue-500 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-lg font-semibold text-xs sm:text-sm shadow-sm">
                Commerce
              </div>

              <div className="bg-blue-500 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-lg font-semibold text-xs sm:text-sm shadow-sm">
                WareSpace
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-3xl py-10 sm:py-8 lg:py-10 mx-4 sm:mx-6 lg:mx-8 my-10 sm:my-6 lg:my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="px-6 sm:px-10 lg:px-12 py-10 sm:py-8 lg:py-12">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-5">
                Revolutionize Your E-commerce with AI Chatbots
              </h2>

              <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto mb-6 sm:mb-8">
                Enhance customer interaction, streamline operations, and boost
                sales with our cutting-edge AI chatbot technology.
              </p>

              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg shadow-md transition-colors duration-200">
                Get Started Now
              </button>
            </div>

            <div className="flex justify-center px-2 sm:px-0">
              <div className="relative w-full max-w-lg h-40 sm:h-64 lg:h-72">
                <Image
                  src="/image/hero.png"
                  alt="AI Robot Chatbot"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
