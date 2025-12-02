import React from "react";

const ResellerDashboard = () => {
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
                ANALYTICS
              </span>
            </div>
            <h1 className='text-5xl font-bold text-gray-900 mb-4'>
              Mastering the Reseller Dashboard
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Your control center for tracking sales, monitoring commissions,
              managing orders, and optimizing your marketing efforts.
            </p>
            <div className='flex items-center justify-center mt-6 text-sm text-gray-500'>
              <span>Last updated: December 3, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id='dashboard-guide-content' className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='prose prose-lg max-w-none'>
            {/* Overview */}
            <div id='overview-section' className='mb-12'>
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 mb-8'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center flex-shrink-0'>
                    <i className='fa-solid fa-gauge-high text-white text-xl'></i>
                  </div>
                  <div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                      Key Dashboard Metrics
                    </h2>
                    <p className='text-gray-700 leading-relaxed'>
                      The Reseller Dashboard consolidates all vital information
                      needed for day-to-day operations and strategic planning.
                      Focus on the core widgets to measure success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Dashboard Sections */}
            <div id='core-sections' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-bars-staggered text-white text-lg'></i>
                </div>
                Your Core Navigation Areas
              </h2>
              <div className='space-y-6'>
                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3 flex items-center'>
                    <i className='fa-solid fa-dollar-sign text-[#8B5CF6] mr-2'></i>{" "}
                    Earnings & Payouts
                  </h3>
                  <p className='text-gray-700'>
                    Track your **Pending Commission**, **Cleared Balance**, and
                    **Total Earnings**. Set up your bank account details here
                    for automated weekly or monthly payouts.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3 flex items-center'>
                    <i className='fa-solid fa-truck text-[#8B5CF6] mr-2'></i>{" "}
                    Order Management
                  </h3>
                  <p className='text-gray-700'>
                    View the status of every order you placed: Pending,
                    Processing, Shipped, Delivered, and Completed. This is
                    critical for customer service.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3 flex items-center'>
                    <i className='fa-solid fa-square-poll-vertical text-[#8B5CF6] mr-2'></i>{" "}
                    Performance Analytics
                  </h3>
                  <p className='text-gray-700'>
                    Monitor key performance indicators (KPIs) like Conversion
                    Rate, Best Selling Products, and Traffic Sources to refine
                    your marketing strategy.
                  </p>
                </div>
              </div>
            </div>
            <div id='detailed-modules' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-list-check text-white text-lg'></i>
                </div>
                Deep Dive into Dashboard Modules
              </h2>
              <div className='space-y-6'>
                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3 flex items-center'>
                    <i className='fa-solid fa-money-bill-transfer text-[#8B5CF6] mr-2'></i>{" "}
                    Payout & Ledger Management
                  </h3>
                  <p className='text-gray-700'>
                    This module provides a full ledger history, detailing every
                    order's commission amount, hold duration, and clearance
                    date. You can filter by product, seller, and date range, and
                    export statements for accounting. **Key Action:** Verify the
                    last three payouts match your expected earnings.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3 flex items-center'>
                    <i className='fa-solid fa-map-location-dot text-[#8B5CF6] mr-2'></i>{" "}
                    Geo-Performance Analytics
                  </h3>
                  <p className='text-gray-700'>
                    See where your sales are geographically clustered. This is
                    invaluable for targeting future campaigns. If you see high
                    conversions in a new region, look for local resellers or
                    localized product listings to boost volume there.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3 flex items-center'>
                    <i className='fa-solid fa-code-branch text-[#8B5CF6] mr-2'></i>{" "}
                    Marketing Link Builder
                  </h3>
                  <p className='text-gray-700'>
                    A dedicated tool to generate unique tracking links with
                    custom UTM parameters (`source`, `medium`, `campaign`).
                    **Crucial:** Use this for every marketing post to accurately
                    attribute sales and measure ROI per channel (e.g., TikTok
                    vs. Email).
                  </p>
                </div>
              </div>
            </div>
            {/* Optimization Checklist */}
            <div id='optimization-checklist' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#EC4899] to-[#6366F1] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-clipboard-check text-white text-lg'></i>
                </div>
                Daily Dashboard Checklist
              </h2>
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Check **New Orders** and confirm customer details.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Review **Payout Status** and verify upcoming payment dates.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Analyze **Sales Trends** from the last 7 days for quick
                    adjustments.
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div id='contact-section' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-headset text-white text-lg'></i>
                </div>
                Technical Support
              </h2>

              <div className='bg-white border border-gray-200 rounded-3xl p-8 shadow-lg'>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  Facing technical issues or data discrepancies on your
                  dashboard? Contact our dedicated Tech Support:
                </p>

                <div className='grid md:grid-cols-3 gap-6'>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-envelope text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>Email</h4>
                    <p className='text-[#6366F1]'>tech.support@Sholaka.com</p>
                  </div>

                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#8B5CF6] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-phone text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Emergency Line
                    </h4>
                    <p className='text-[#8B5CF6]'>+91 99988 77766</p>
                  </div>

                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#EC4899] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-bug text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Report a Bug
                    </h4>
                    <p className='text-[#EC4899]'>Submit Ticket</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResellerDashboard;
