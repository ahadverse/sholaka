import React from "react";

const HowToResell = () => {
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
                RESELLERS: START HERE
              </span>
            </div>
            <h1 className='text-5xl font-bold text-gray-900 mb-4'>
              The Complete Guide to Reselling on Sholaka
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Transform your network into a revenue stream. Master the product
              selection, marketing, and fulfillment process to earn consistent
              commissions.
            </p>
            <div className='flex items-center justify-center mt-6 text-sm text-gray-500'>
              <span>Last updated: December 3, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id='how-to-resell-content' className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='prose prose-lg max-w-none'>
            {/* Overview & Key Benefits */}
            <div id='overview-section' className='mb-12'>
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 mb-8'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center flex-shrink-0'>
                    <i className='fa-solid fa-handshake text-white text-xl'></i>
                  </div>
                  <div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                      Understanding the Dropship Reseller Model
                    </h2>
                    <p className='text-gray-700 leading-relaxed'>
                      Sholaka utilizes a streamlined dropshipping affiliate
                      model. Your role is purely marketing and sales; you never
                      handle inventory, shipping, or returns. This eliminates
                      capital risk and allows you to scale rapidly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Steps to Resell */}
            <div id='detailed-steps' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-sack-dollar text-white text-lg'></i>
                </div>
                The 6-Step Reselling Cycle
              </h2>
              <div className='space-y-6'>
                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    1. Account Setup & Niche Selection
                  </h3>
                  <p className='text-gray-700'>
                    Complete your profile and choose a niche (e.g., sustainable
                    fashion, smart home tech) that aligns with your personal
                    brand and audience. **Tip:** Specialization leads to higher
                    conversion rates.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    2. Product Vetting and Selection
                  </h3>
                  <p className='text-gray-700'>
                    Use the 'Browse Products' filters to find items with **high
                    commission rates (15%+), excellent seller ratings (4.8+),
                    and low return rates**. Request samples if necessary to
                    ensure quality before promotion.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    3. Asset Download and Preparation
                  </h3>
                  <p className='text-gray-700'>
                    On the product page, download the Seller's Media Kit
                    (images, videos, copywriting). Customize the content to
                    match your voice and marketing channel (e.g., convert long
                    descriptions to Instagram Reels scripts).
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    4. Marketing and Lead Generation
                  </h3>
                  <p className='text-gray-700'>
                    Promote your customized content across social media, email
                    lists, or private groups. Drive traffic using your unique
                    Sholaka tracking link or voucher code to ensure proper
                    commission attribution.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    5. Order Placement and Fulfillment Tracking
                  </h3>
                  <p className='text-gray-700'>
                    When a sale occurs, input the buyer's details into the
                    Sholaka platform. The system notifies the Seller
                    immediately. Monitor the tracking number provided in your
                    **Reseller Dashboard** to keep the buyer informed.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    6. Commission Payout and Reinvestment
                  </h3>
                  <p className='text-gray-700'>
                    After the hold period (typically 7-10 days post-delivery),
                    your commission moves to your Cleared Balance. Set up
                    bi-weekly payouts and consider reinvesting a portion of your
                    earnings into targeted marketing campaigns.
                  </p>
                </div>
              </div>
            </div>

            {/* Best Practices Table */}
            <div id='best-practices' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#EC4899] to-[#6366F1] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-star-of-life text-white text-lg'></i>
                </div>
                Reseller Best Practices Checklist
              </h2>
              <div className='bg-gray-50 rounded-2xl p-6 overflow-x-auto'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-100'>
                    <tr>
                      <th className='px-4 py-2 text-left text-sm font-medium text-gray-700'>
                        Area
                      </th>
                      <th className='px-4 py-2 text-left text-sm font-medium text-gray-700'>
                        Action
                      </th>
                      <th className='px-4 py-2 text-left text-sm font-medium text-gray-700'>
                        Impact
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 text-sm text-gray-700'>
                    <tr>
                      <td className='px-4 py-3 font-semibold'>Inventory</td>
                      <td className='px-4 py-3'>
                        Check product stock levels daily before promoting.
                      </td>
                      <td className='px-4 py-3 text-red-600'>
                        Avoid backorder cancellations.
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-semibold'>Marketing</td>
                      <td className='px-4 py-3'>
                        Focus on problem-solving content, not just features.
                      </td>
                      <td className='px-4 py-3 text-green-600'>
                        Boost conversion rate by 20%.
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-semibold'>
                        Seller Relation
                      </td>
                      <td className='px-4 py-3'>
                        Communicate politely with sellers regarding shipping
                        delays.
                      </td>
                      <td className='px-4 py-3 text-blue-600'>
                        Ensures faster response times and support.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Contact Section - Same Style */}
            <div id='contact-section' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-headset text-white text-lg'></i>
                </div>
                Reseller Support and Mentorship
              </h2>

              <div className='bg-white border border-gray-200 rounded-3xl p-8 shadow-lg'>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  Ready to launch? Get 1-on-1 support from an experienced
                  Sholaka mentor to review your first product selection.
                </p>

                <div className='grid md:grid-cols-3 gap-6'>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-envelope text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Mentor Email
                    </h4>
                    <p className='text-[#6366F1]'>
                      reseller.mentor@Sholaka.com
                    </p>
                  </div>

                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#8B5CF6] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-users-line text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Reseller Community
                    </h4>
                    <p className='text-[#8B5CF6]'>Join the Discussion Forum</p>
                  </div>

                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#EC4899] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-book-open text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Onboarding Video
                    </h4>
                    <p className='text-[#EC4899]'>Watch the 10-Min Guide</p>
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

export default HowToResell;
