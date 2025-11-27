"use client";

const TrustedClientsAndPricing = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "/image/user1.jpeg",
      quote: '"The AI Chatbot has revolutionized our customer support"',
    },
    {
      id: 2,
      name: "Mark Thompson",
      image:
        "/image/user2.jpeg",
      quote: '"Integration was a breeze, and the results are amazing."',
    },
    {
      id: 3,
      name: "Emily Zhang",
      image:
        "/image/user3.jpg",
      quote: '"Invaluable insights that helped boost our sales"',
    },
  ];

  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "$29",
      period: "/month",
      buttonText: "Select Plan",
      highlighted: false,
    },
    {
      id: 2,
      name: "Pro",
      price: "$99",
      period: "/month",
      buttonText: "Select Plan",
      highlighted: true,
    },
    {
      id: 3,
      name: "Enterprise",
      price: "Contact us",
      period: "",
      buttonText: "Contact Us",
      highlighted: false,
    },
  ];

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-10 sm:mb-14 lg:mb-16">
            Trusted by Our Clients
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex justify-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.backgroundColor = "#e5e7eb";
                    }}
                  />
                </div>

                <p className="text-center text-sm sm:text-base text-gray-700 mb-4">
                  {testimonial.quote}
                </p>

                <p className="text-center text-sm sm:text-base font-semibold text-gray-900">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 rounded-3xl py-8 sm:py-12 lg:py-14 mx-2 sm:mx-6 lg:mx-8">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-10 sm:mb-14 lg:mb-16">
              Choose Your Plan
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-blue-50 border-2 border-blue-500 shadow-lg sm:scale-105"
                      : "bg-white border border-gray-100 shadow-sm hover:shadow-lg"
                  }`}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
                    {plan.name}
                  </h3>

                  <div className="text-center mb-6">
                    <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-600 text-sm sm:text-base">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <button
                    className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-300 ${
                      plan.highlighted
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClientsAndPricing;
