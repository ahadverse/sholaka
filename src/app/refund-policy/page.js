import React from "react";

const RefundPolicy = () => {
  return (
    <div>
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
                LEGAL
              </span>
            </div>
            <h1 className='text-5xl font-bold text-gray-900 mb-4'>
              Refund Policy
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Learn about our refund and return policies, including eligibility,
              timelines, and process for refunds.
            </p>
            <div className='flex items-center justify-center mt-6 text-sm text-gray-500'>
              <span>Last updated: December 1, 2024</span>
            </div>
          </div>
        </div>
      </section>

      <main id='refund-content' className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='prose prose-lg max-w-none'>
            {/* Overview */}
            <div id='overview-section' className='mb-12'>
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 mb-8'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center flex-shrink-0'>
                    <i className='fa-solid fa-receipt text-white text-xl'></i>
                  </div>
                  <div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                      Overview
                    </h2>
                    <p className='text-gray-700 leading-relaxed'>
                      At Sholaka, we want our users to be satisfied with their
                      purchases. This Refund Policy explains how refunds are
                      handled for products and services purchased through our
                      platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Eligibility */}
            <div id='eligibility' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-check-circle text-white text-lg'></i>
                </div>
                Eligibility for Refund
              </h2>

              <div className='space-y-6'>
                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    Product Condition
                  </h3>
                  <p className='text-gray-700'>
                    Refunds are applicable only for products that are defective,
                    damaged, or not as described. Products must be returned in
                    original packaging where applicable.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    Time Limit
                  </h3>
                  <p className='text-gray-700'>
                    Refund requests must be submitted within 14 days of
                    delivery. Requests after this period may not be accepted.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    Non-Refundable Items
                  </h3>
                  <p className='text-gray-700'>
                    Digital products, personalized items, or products marked as
                    final sale are non-refundable unless they are defective.
                  </p>
                </div>
              </div>
            </div>

            {/* Refund Process */}
            <div id='process' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#EC4899] to-[#6366F1] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-arrow-rotate-left text-white text-lg'></i>
                </div>
                Refund Process
              </h2>

              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Submit a refund request via your account dashboard or
                    contact support.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Provide necessary proof (photos, order ID, receipts) to
                    support your claim.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Once approved, the refund will be processed to your original
                    payment method.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Refund timelines may vary depending on your bank or payment
                    provider.
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div id='contact-section' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-headset text-white text-lg'></i>
                </div>
                Contact Us
              </h2>

              <div className='bg-white border border-gray-200 rounded-3xl p-8 shadow-lg'>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  If you have any questions regarding refunds or need
                  assistance, please contact us:
                </p>

                <div className='grid md:grid-cols-3 gap-6'>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-envelope text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>Email</h4>
                    <p className='text-[#6366F1]'>support@Sholaka.com</p>
                  </div>

                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#8B5CF6] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-phone text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>Phone</h4>
                    <p className='text-[#8B5CF6]'>+91 98765 43210</p>
                  </div>

                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#EC4899] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-map-marker-alt text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Address
                    </h4>
                    <p className='text-[#EC4899]'>Mumbai, India</p>
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

export default RefundPolicy;
