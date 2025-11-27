'use client';

const AllFeatures = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg className="w-10 h-10 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          <circle cx="9" cy="10" r="1" fill="currentColor"></circle>
          <circle cx="12" cy="10" r="1" fill="currentColor"></circle>
          <circle cx="15" cy="10" r="1" fill="currentColor"></circle>
        </svg>
      ),
      title: "Real-Time Customer Support",
      description: "Provide instant assistance to your customers with 24/7 support, improving satisfaction and loyalty."
    },
    {
      id: 2,
      icon: (
        <svg className="w-10 h-10 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="1"></circle>
          <path d="M12 1v6m0 6v6"></path>
          <path d="M4.22 4.22l4.24 4.24m4.98 4.98l4.24 4.24"></path>
          <path d="M1 12h6m6 0h6"></path>
          <path d="M4.22 19.78l4.24-4.24m4.98-4.98l4.24-4.24"></path>
        </svg>
      ),
      title: "Seamless Integration",
      description: "Easily integrate with existing platforms to enhance your e-commerce experience without hassle."
    },
    {
      id: 3,
      icon: (
        <svg className="w-10 h-10 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline>
          <polyline points="12 12 20 7.5"></polyline>
          <polyline points="12 21 12 12"></polyline>
          <polyline points="4 7.5 12 12"></polyline>
        </svg>
      ),
      title: "Analytics & Insights",
      description: "Get actionable insights into customer behavior to tailor your marketing strategies effectively."
    }
  ];

  return (
    <section className="bg-white">
      <div className="bg-gray-100 rounded-3xl py-10 sm:py-12 lg:py-14 mx-4 sm:mx-6 lg:mx-8 my-10 sm:my-12 lg:my-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
          <div className="text-center mb-12 sm:mb-16 px-2 sm:px-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500 mb-4 sm:mb-6">
              Discover the Power of AI
            </h2>
            <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Explore how our AI Chatbot solution can transform your e-commerce operations with its advanced features and seamless integration.
            </p>
          </div>

         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                
                <div className="mb-4 sm:mb-6">
                  {feature.icon}
                </div>

                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {feature.title}
                </h3>

                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllFeatures;