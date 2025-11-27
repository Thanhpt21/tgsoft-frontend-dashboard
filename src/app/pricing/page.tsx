'use client';

import { useState } from 'react';

// Section 1: Pricing Cards
const PricingCardsSection = () => {
  const plans = [
    {
      id: 1,
      name: 'Basic',
      price: 9,
      description: 'Perfect for startups and small teams',
      buttonText: 'Start with Basic',
      highlighted: false,
      features: [
        'AI Chat integration',
        'Customer Support',
        'Analytics Dashboard',
        'Conversion Tracking',
        'AI-Powered Chatbot',
        'Personalized'
      ]
    },
    {
      id: 2,
      name: 'Professional',
      price: 19,
      description: 'Ideal for growing e-commerce businesses',
      buttonText: 'Start with Professional',
      highlighted: true,
      features: [
        'AI Chat integration',
        'Customer Support',
        'Analytics Dashboard',
        'Conversion Tracking',
        '24/7 Customer',
        'Sales Boosting Tools',
        'Real-time Analytics',
        'Automated'
      ]
    },
    {
      id: 3,
      name: 'Advanced',
      price: 49,
      description: 'Designed for businesses with high demands',
      buttonText: 'Start with Advanced',
      highlighted: false,
      features: [
        'AI Chat integration',
        'Customer Support',
        'Analytics Dashboard',
        'Conversion Tracking',
        'Seamless Integration',
        'User-Friendly',
        'Easy Setup',
        'Lead Generation',
        'Performance',
        'Customer'
      ]
    }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Pricing
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Affordable plans tailored for e-commerce success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 relative ${
                plan.highlighted
                  ? 'bg-blue-50 border-2 border-blue-500 shadow-lg sm:scale-105'
                  : 'bg-gray-100 border border-gray-300'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                  Best Value
                </div>
              )}

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>

              <div className="mb-4">
                <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                  ${plan.price}
                </span>
                <span className="text-gray-600 text-sm">/month</span>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                {plan.description}
              </p>

              <button
                className={`w-full font-semibold py-2.5 sm:py-3 rounded-lg transition-colors duration-300 text-sm sm:text-base ${
                  plan.highlighted
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 2: Features Comparison
const FeaturesSection = () => {
  const plans = [
    {
      id: 1,
      name: 'Basic',
      features: [
        'AI Chat integration',
        'Customer Support',
        'Analytics Dashboard',
        'Conversion Tracking',
        'AI-Powered Chatbot',
        'Personalized'
      ]
    },
    {
      id: 2,
      name: 'Professional',
      features: [
        'AI Chat integration',
        'Customer Support',
        'Analytics Dashboard',
        'Conversion Tracking',
        '24/7 Customer',
        'Sales Boosting Tools',
        'Real-time Analytics',
        'Automated'
      ]
    },
    {
      id: 3,
      name: 'Advanced',
      features: [
        'AI Chat integration',
        'Customer Support',
        'Analytics Dashboard',
        'Conversion Tracking',
        'Seamless Integration',
        'User-Friendly',
        'Easy Setup',
        'Lead Generation',
        'Performance',
        'Customer'
      ]
    }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 sm:mb-16">
          Features
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {plans.map((plan) => (
            <div key={plan.id}>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8">
                {plan.name}
              </h4>

              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 3: FAQ
const FAQSection = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    { id: 1, question: 'How does the chatbot work?' },
    { id: 2, question: 'What are the benefits of using it?' },
    { id: 3, question: 'Is it easy to implement?' },
    { id: 4, question: 'Can I customize the chatbot?' },
    { id: 5, question: 'Is there a free trial?' },
    { id: 6, question: 'How do I get started?' }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <img
            src="/image/faq.jpg"
            alt="FAQ"
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-8 object-cover"
          />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Frequently Asked
          </h2>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <button
              key={faq.id}
              onClick={() =>
                setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
              }
              className="w-full text-left px-4 sm:px-6 py-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-between"
            >
              <span className="font-semibold text-gray-900 text-sm sm:text-base">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                  expandedFaq === faq.id ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 4: CTA
const CTASection = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto bg-gray-200 rounded-3xl px-6 sm:px-12 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Start enhancing your e-commerce
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8">
              Boost sales with AI support.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-colors duration-300 text-sm sm:text-base">
              Get Started
            </button>
          </div>

          <div className="relative h-48 sm:h-56 lg:h-72 rounded-2xl overflow-hidden">
            <img
              src="/image/sp.jpeg"
              alt="AI Chatbot"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
const PricingPage = () => {
  return (
    <div className="bg-white">
      <PricingCardsSection />
      <FeaturesSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default PricingPage;