"use client";

export default function AboutUsPage() {
  return (
    <div className="bg-white overflow-hidden">

      {/* SECTION 1 – HERO */}
      <section className="pt-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <p className="text-center text-sm text-gray-600 mb-4">About Us</p>

          <h1 className="text-center text-3xl sm:text-4xl font-semibold mb-10">
            Transforming e-commerce interactions
          </h1>
        </div>

        <div className="overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 h-screen">
          <img
            src="/image/about.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </section>

      {/* SECTION 2 – BLUE CALL TO ACTION */}
      <section className="relative bg-blue-500 text-white py-20 mt-0 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-2 text-white">
            Your AI assistant for sales
          </h2>
          <p className="text-white mb-6 text-sm">
            Boost sales with our integrated AI chatbot.
          </p>

          <button className="bg-white text-blue-600 px-8 py-2 rounded-lg font-semibold hover:bg-gray-100">
            Sign Up
          </button>
        </div>
      </section>

      {/* STATS */}
      <div className="relative pt-16 sm:pt-0">
        <div className="absolute inset-x-0 top-1/2 sm:top-1/3 transform -translate-y-1/2 z-20 px-4 sm:px-6 lg:px-8 w-full sm:w-auto">
          <div className="max-w-6xl mx-auto bg-gray-200 rounded-2xl p-6 shadow-lg">

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-100 p-6 rounded-xl">
              <p className="text-2xl font-bold">1000+</p>
              <p className="text-gray-700 text-sm">Satisfied customers</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl">
              <p className="text-2xl font-bold">Top Rated</p>
              <p className="text-gray-700 text-sm">Chatbot solution</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl">
              <p className="text-2xl font-bold">50+</p>
              <p className="text-gray-700 text-sm">Countries served</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl">
              <p className="text-2xl font-bold">20</p>
              <p className="text-gray-700 text-sm">Awards won</p>
            </div>
          </div>

          </div>
        </div>
        <div className="bg-white h-32"></div>
      </div>

      {/* SECTION 3 – RELIABLE EFFICIENT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-6">Reliable, efficient,</h2>
            <p className="text-gray-700 text-sm leading-7">
              At ChatBility, we believe in enhancing customer experiences through
              advanced AI technology. Our chatbot service is designed to
              seamlessly integrate with your e-commerce platform, providing
              instant support and increasing conversion rates.
              <br /><br />
              We understand the importance of customer satisfaction, and we
              strive to deliver a hassle-free experience. We are committed to
              innovation and continuously improving our services to support
              e-commerce businesses in their growth journey.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden">
            <img
              src="/image/ab1.jpg"
              alt=""
              className="w-full h-[330px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* SECTION 4 – JOIN OUR TEAM */}
      <section className="bg-gray-200 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-3xl font-bold mb-12">
            Join Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-3">
                <img
                  src="/image/ab2.jpg"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="p-6 text-center font-semibold">
                Our work culture
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-3">
                <img
                  src="/image/ab3.jpg"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="p-6 text-center font-semibold">
                Our headquarters
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-3">
                <img
                   src="/image/ab4.jpg"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="p-6 text-center font-semibold">
                Current openings
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5 – BLOG */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-3xl font-bold mb-12">Blog</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src="/image/ab5.jpg"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold mb-2 text-sm">
                  Maximize sales with AI chatbots
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <img
                    src="/image/ab6.jpg"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-xs text-gray-600">Jordan Smith</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Chatbots
                  </span>

                  <button className="text-blue-600 text-xs font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img
               src="/image/ab7.jpg"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold mb-2 text-sm">
                  Discover effective sales strategies
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <img
                    src="/image/user1.jpeg"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-xs text-gray-600">Alex Johnson</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="bg-gray-300 px-3 py-1 rounded-full text-xs font-semibold">
                    #Commerce
                  </span>

                  <button className="text-blue-600 text-xs font-semibold">
                    Discover More
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-none">
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">
                  Explore Solutions
                </span>
              </div>
              <div className="p-6 flex justify-between items-center">
                <h3 className="font-bold text-sm">Explore Solutions</h3>
                <button className="text-blue-600 text-xs font-semibold">
                  Explore More
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}