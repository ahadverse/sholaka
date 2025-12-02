import React from "react";

const Contact = () => {
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
                GET IN TOUCH
              </span>
            </div>
            <h1 className='text-5xl font-bold text-gray-900 mb-4'>
              Contact Sholaka Support Channels
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Connect with the right department quickly for efficient assistance
              with sales, support, or partnership inquiries.
            </p>
            <div className='flex items-center justify-center mt-6 text-sm text-gray-500'>
              <span>24/7 Support for Critical Issues</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id='contact-content' className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='prose prose-lg max-w-none'>
            {/* Department Breakdown */}
            <div id='department-breakdown' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-comments text-white text-lg'></i>
                </div>
                Reach the Right Team
              </h2>
              <div className='space-y-6'>
                {/* Reseller Support */}
                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm border-l-4 border-[#6366F1]'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3 flex items-center'>
                    <i className='fa-solid fa-user-group text-[#6366F1] mr-3'></i>{" "}
                    Reseller & Affiliate Support
                  </h3>
                  <p className='text-gray-700 mb-3'>
                    For questions regarding commissions, tracking links,
                    payouts, or dashboard analytics.
                  </p>
                  <p className='font-mono text-[#6366F1]'>
                    Email:{" "}
                    <span className='font-semibold'>
                      reseller.support@Sholaka.com
                    </span>
                  </p>
                  <p className='font-mono text-sm text-gray-500'>
                    Avg. Response Time: 4 hours
                  </p>
                </div>

                {/* Seller Support */}
                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm border-l-4 border-[#8B5CF6]'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3 flex items-center'>
                    <i className='fa-solid fa-store text-[#8B5CF6] mr-3'></i>{" "}
                    Seller & Partner Onboarding
                  </h3>
                  <p className='text-gray-700 mb-3'>
                    For inquiries about listing products, fulfillment
                    integration, seller account verification, and inventory
                    management.
                  </p>
                  <p className='font-mono text-[#8B5CF6]'>
                    Email:{" "}
                    <span className='font-semibold'>
                      seller.partners@Sholaka.com
                    </span>
                  </p>
                  <p className='font-mono text-sm text-gray-500'>
                    Avg. Response Time: 12 hours
                  </p>
                </div>

                {/* Press and Media */}
                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm border-l-4 border-[#EC4899]'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3 flex items-center'>
                    <i className='fa-solid fa-rss text-[#EC4899] mr-3'></i>{" "}
                    Press & Media Inquiries
                  </h3>
                  <p className='text-gray-700 mb-3'>
                    For press releases, interviews, media kits, or speaking
                    engagements involving our leadership team.
                  </p>
                  <p className='font-mono text-[#EC4899]'>
                    Email:{" "}
                    <span className='font-semibold'>media@Sholaka.com</span>
                  </p>
                  <p className='font-mono text-sm text-gray-500'>
                    Avg. Response Time: 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links / Self-Help */}
            <div id='self-help' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-book-reader text-white text-lg'></i>
                </div>
                Immediate Self-Help Resources
              </h2>
              <div className='bg-gray-100 rounded-2xl p-6 grid md:grid-cols-2 gap-6 text-center'>
                <a
                  href='/faq/resellers'
                  className='block p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300'
                >
                  <i className='fa-solid fa-question-circle text-[#6366F1] text-xl mb-2'></i>
                  <p className='font-semibold text-gray-900'>
                    Reseller FAQ Center
                  </p>
                </a>
                <a
                  href='/faq/sellers'
                  className='block p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300'
                >
                  <i className='fa-solid fa-box-open text-[#8B5CF6] text-xl mb-2'></i>
                  <p className='font-semibold text-gray-900'>
                    Seller Documentation
                  </p>
                </a>
              </div>
            </div>

            {/* Physical Address */}
            <div id='physical-address' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#EC4899] to-[#6366F1] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-building text-white text-lg'></i>
                </div>
                Global Headquarters
              </h2>
              <div className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
                <p className='text-lg font-semibold text-gray-900'>
                  Sholaka Technologies Inc.
                </p>
                <p className='text-gray-700'>1400 Commerce Way, Suite 200</p>
                <p className='text-gray-700'>San Francisco, CA 94107, USA</p>
                <p className='text-gray-700 mt-3'>
                  Phone: +1 (800) 555-SELL (Sales)
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
