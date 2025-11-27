"use client";

import Image from "next/image";

const SuccessStories = () => {
  const categories = [
    { id: 1, label: "All", color: "bg-blue-600" },
    { id: 2, label: "Chatbot", color: "bg-blue-500" },
    { id: 3, label: "E-commerce", color: "bg-blue-500" },
    { id: 4, label: "Platform", color: "bg-blue-500" },
    { id: 5, label: "Solution", color: "bg-blue-500" },
  ];

  const stories = [
    {
      id: 1,
      title: "E-commerce Chatbot Implementation",
      image:
        "/image/client1.png",
      category: "E-commerce",
      buttonText: "Learn More",
    },
    {
      id: 2,
      title: "Client Success",
      image: "/image/client2.jpeg",
      category: "Chatbot",
      buttonText: "Read more",
    },
    {
      id: 3,
      title: "Retail Chatbot",
      image:
        "/image/client3.jpg",
      category: "Retail",
      buttonText: "Read More",
    },
    {
      id: 5,
      title: "Performance Dashboard",
      image:
        "/image/client4.jpg",
      category: "Dashboard",
      buttonText: "Read more",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
            Success Stories
          </h2>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`${cat.color} text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {stories.slice(0, 5).map((story) => (
            <div
              key={story.id}
              className="bg-blue-100 rounded-2xl overflow-hidden"
            >
              <div className="relative w-full h-40 sm:h-48 lg:h-56 overflow-hidden bg-gray-300">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.backgroundColor = "#e5e7eb";
                  }}
                />
              </div>

              <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {story.title}
                </h3>
                <button className="bg-blue-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-600 transition-colors">
                  {story.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
