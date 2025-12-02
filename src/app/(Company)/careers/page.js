import React from "react";

const Careers = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        id='hero-section'
        className='relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 h-[400px] flex items-center'
      >
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-10 left-20 w-48 h-48 bg-[#6366F1] rounded-full blur-3xl'></div>
          <div className='absolute bottom-10 right-20 w-64 h-64 bg-[#8B5CF6] rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-7xl mx-auto px-6 relative z-10'>
          <div className='text-center'>
            <div className='inline-block px-4 py-2 bg-white rounded-full shadow-sm mb-6'>
              <span className='text-[#6366F1] font-semibold text-sm'>
                JOIN OUR TEAM
              </span>
            </div>
            <h1 className='text-5xl font-bold text-gray-900 mb-4'>
              Careers: Build the Future of E-commerce
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              We are a remote-first, high-growth tech company dedicated to
              innovation, empowerment, and global connectivity.
            </p>
            <div className='flex items-center justify-center mt-6 text-sm text-gray-500'>
              <span>
                Benefits: Unlimited PTO, Equity Options, Remote Flexibility
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id='careers-content' className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='prose prose-lg max-w-none'>
            {/* Culture and Values */}
            <div id='culture-values' className='mb-12'>
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 mb-8'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3 flex items-center'>
                  <i className='fa-solid fa-users-gear text-[#6366F1] mr-3'></i>{" "}
                  Our Culture: The Sholaka DNA
                </h2>
                <p className='text-gray-700 leading-relaxed'>
                  Our culture is built on **Radical Transparency**,
                  **Data-Driven Decisions**, and **Reseller-First Innovation**.
                  We encourage autonomous work, continuous learning, and
                  celebrating the successes of our platform users just as much
                  as our internal milestones.
                </p>
              </div>
            </div>

            {/* Open Positions */}
            <div id='open-positions' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-magnifying-glass text-white text-lg'></i>
                </div>
                Current Openings by Department
              </h2>
              <div className='space-y-4'>
                {/* Engineering */}
                <div className='bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300 flex justify-between items-center border-l-4 border-[#8B5CF6]'>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900'>
                      Software Engineering (Backend/Frontend)
                    </h3>
                    <p className='text-sm text-gray-600'>
                      Location: Remote (Global) | Focus: Scaling Marketplace
                      APIs
                    </p>
                  </div>
                  <button className='text-white bg-[#8B5CF6] py-2 px-4 rounded-full text-sm hover:bg-purple-700'>
                    Apply
                  </button>
                </div>

                {/* Sales/Growth */}
                <div className='bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300 flex justify-between items-center border-l-4 border-[#6366F1]'>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900'>
                      Reseller Growth Manager
                    </h3>
                    <p className='text-sm text-gray-600'>
                      Location: New York / Remote | Focus: Reseller Onboarding &
                      Education
                    </p>
                  </div>
                  <button className='text-white bg-[#6366F1] py-2 px-4 rounded-full text-sm hover:bg-indigo-700'>
                    Apply
                  </button>
                </div>

                {/* Operations */}
                <div className='bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300 flex justify-between items-center border-l-4 border-[#EC4899]'>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900'>
                      Global Logistics Coordinator
                    </h3>
                    <p className='text-sm text-gray-600'>
                      Location: Singapore / Remote | Focus: Seller Fulfillment
                      Optimization
                    </p>
                  </div>
                  <button className='text-white bg-[#EC4899] py-2 px-4 rounded-full text-sm hover:bg-pink-700'>
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Employee Testimonials */}
            <div id='testimonials' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#EC4899] to-[#6366F1] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-quote-left text-white text-lg'></i>
                </div>
                What Our Team Says
              </h2>
              <div className='bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 space-y-4'>
                <blockquote className='text-gray-700 italic border-l-4 border-purple-600 pl-4'>
                  "Working at Sholaka means my code directly impacts thousands
                  of small businesses globally. The mission is incredibly
                  motivating."
                  <footer className='mt-2 text-sm font-semibold text-purple-700'>
                    — Maria, Senior Engineer
                  </footer>
                </blockquote>
                <blockquote className='text-gray-700 italic border-l-4 border-purple-600 pl-4'>
                  "The remote flexibility allows me to work from anywhere while
                  building a truly global network of entrepreneurs."
                  <footer className='mt-2 text-sm font-semibold text-purple-700'>
                    — David, Reseller Manager
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* HR Contact */}
            <div id='hr-contact' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-hand-holding-heart text-white text-lg'></i>
                </div>
                Human Resources Contact
              </h2>

              <div className='bg-white border border-gray-200 rounded-3xl p-8 shadow-lg text-center'>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Questions about benefits, culture, or the hiring process?
                </p>
                <p className='text-2xl font-bold text-[#6366F1]'>
                  careers@Sholaka.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Careers;
