import React from "react";

const AboutUs = () => {
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
                OUR MISSION
              </span>
            </div>
            <h1 className='text-5xl font-bold text-gray-900 mb-4'>
              The Sholaka Story: Empowering Global Commerce
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              We connect local businesses with a vast network of entrepreneurial
              resellers, turning products into profits without inventory risk.
            </p>
            <div className='flex items-center justify-center mt-6 text-sm text-gray-500'>
              <span>Founded: Q1 2024 | Headquarters: Silicon Valley</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id='about-us-content' className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='prose prose-lg max-w-none'>
            {/* Core Philosophy */}
            <div id='core-philosophy' className='mb-12'>
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 mb-8'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center flex-shrink-0'>
                    <i className='fa-solid fa-lightbulb text-white text-xl'></i>
                  </div>
                  <div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                      Our Vision: Commerce without Constraints
                    </h2>
                    <p className='text-gray-700 leading-relaxed'>
                      We believe that anyone, anywhere, should be able to start
                      an e-commerce business with zero startup capital. Sholaka
                      removes the traditional barriers of warehousing,
                      logistics, and inventory management, focusing solely on
                      the power of digital sales networks. We aim to be the
                      world's largest dropshipping marketplace dedicated to
                      local, high-quality brands.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillars of Sholaka */}
            <div id='pillars-of-Sholaka' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-archway text-white text-lg'></i>
                </div>
                The Three Pillars of Our Platform
              </h2>
              <div className='grid md:grid-cols-3 gap-6'>
                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm text-center'>
                  <i className='fa-solid fa-handshake-angle text-[#8B5CF6] text-3xl mb-3'></i>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    Seller Empowerment
                  </h3>
                  <p className='text-gray-700 text-sm'>
                    Providing tools for brands to outsource their entire
                    marketing and sales force to thousands of motivated
                    resellers.
                  </p>
                </div>
                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm text-center'>
                  <i className='fa-solid fa-briefcase text-[#EC4899] text-3xl mb-3'></i>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    Reseller Opportunity
                  </h3>
                  <p className='text-gray-700 text-sm'>
                    Offering high-commission products and reliable fulfillment,
                    making it easy to earn passive income without upfront
                    investment.
                  </p>
                </div>
                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm text-center'>
                  <i className='fa-solid fa-user-shield text-[#6366F1] text-3xl mb-3'></i>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    Customer Trust
                  </h3>
                  <p className='text-gray-700 text-sm'>
                    Ensuring strict quality control, transparent tracking, and
                    reliable refund policies for every end buyer.
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership Introduction */}
            <div id='leadership-team' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#EC4899] to-[#6366F1] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-user-tie text-white text-lg'></i>
                </div>
                Meet Our Leadership
              </h2>
              <div className='bg-gray-50 rounded-2xl p-6 grid md:grid-cols-2 gap-6'>
                <div className='flex items-center space-x-4'>
                  <div className='w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0'>
                    <i className='fa-solid fa-code text-gray-600'></i>
                  </div>
                  <div>
                    <p className='text-lg font-semibold text-gray-900'>
                      Aisha Sharma
                    </p>
                    <p className='text-md text-[#6366F1]'>CEO & Founder</p>
                    <p className='text-sm text-gray-600'>
                      Drove the vision of democratizing e-commerce for emerging
                      markets.
                    </p>
                  </div>
                </div>
                <div className='flex items-center space-x-4'>
                  <div className='w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0'>
                    <i className='fa-solid fa-chart-line text-gray-600'></i>
                  </div>
                  <div>
                    <p className='text-lg font-semibold text-gray-900'>
                      Kenji Tanaka
                    </p>
                    <p className='text-md text-[#8B5CF6]'>
                      Chief Technology Officer
                    </p>
                    <p className='text-sm text-gray-600'>
                      Leads development of the V-Rate algorithm and fulfillment
                      automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA to join */}
            <div id='join-us-cta' className='mb-12 text-center'>
              <div className='bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] p-10 rounded-2xl shadow-xl'>
                <h3 className='text-3xl font-bold text-white mb-3'>
                  Ready to Be Part of the Sholaka Movement?
                </h3>
                <p className='text-indigo-100 mb-6'>
                  Whether you are a seller looking to scale or an entrepreneur
                  ready to earn, your future starts here.
                </p>
                <button className='bg-white text-[#6366F1] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-100 transition duration-300'>
                  Join Our Platform Today{" "}
                  <i className='fa-solid fa-arrow-right ml-2'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
