import React from "react";

const ForResellers = () => {
  return (
    <div>
      {" "}
      <section id='for-resellers' className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid md:grid-cols-2 gap-16 items-center'>
            <div className='relative order-2 md:order-1'>
              <div className='relative z-10'>
                <img
                  className='w-full h-auto rounded-3xl shadow-2xl'
                  src='https://storage.googleapis.com/uxpilot-auth.appspot.com/695ff717d4-7741bb76c8df58817516.png'
                  alt='person sharing product links on mobile phone, social media marketing, earning commissions, vibrant colors, modern 3D illustration'
                />
              </div>
              <div className='absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-[#EC4899] to-[#8B5CF6] rounded-3xl opacity-20 blur-2xl'></div>
            </div>
            <div className='order-1 md:order-2'>
              <div className='inline-block px-4 py-2 bg-indigo-50 rounded-full mb-6'>
                <span className='text-[#8B5CF6] font-semibold text-sm'>
                  FOR RESELLERS
                </span>
              </div>
              <h2 className='text-5xl font-bold text-gray-900 mb-6'>
                Start Earning
                <span className='bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent'>
                  Without Investment
                </span>
              </h2>
              <p className='text-xl text-gray-600 mb-10'>
                Join thousands of resellers making money by sharing products
                they love.
              </p>
              <div className='space-y-6'>
                <div className='flex items-start space-x-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 hover:shadow-xl transition'>
                  <div className='w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md'>
                    <i className='fa-solid fa-hand-holding-dollar text-[#8B5CF6] text-2xl'></i>
                  </div>
                  <div>
                    <h4 className='text-xl font-bold text-gray-900 mb-2'>
                      No Investment Needed
                    </h4>
                    <p className='text-gray-600'>
                      Start earning immediately with zero upfront costs or
                      inventory management.
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-xl transition'>
                  <div className='w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md'>
                    <i className='fa-solid fa-link text-[#EC4899] text-2xl'></i>
                  </div>
                  <div>
                    <h4 className='text-xl font-bold text-gray-900 mb-2'>
                      Instant Shareable Links
                    </h4>
                    <p className='text-gray-600'>
                      Get unique tracking links for every product you want to
                      promote.
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-4 bg-gradient-to-br from-pink-50 to-indigo-50 rounded-2xl p-6 hover:shadow-xl transition'>
                  <div className='w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md'>
                    <i className='fa-solid fa-chart-line text-[#6366F1] text-2xl'></i>
                  </div>
                  <div>
                    <h4 className='text-xl font-bold text-gray-900 mb-2'>
                      High Commissions
                    </h4>
                    <p className='text-gray-600'>
                      Earn competitive commissions on every sale you generate
                      through your links.
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 hover:shadow-xl transition'>
                  <div className='w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md'>
                    <i className='fa-solid fa-images text-[#8B5CF6] text-2xl'></i>
                  </div>
                  <div>
                    <h4 className='text-xl font-bold text-gray-900 mb-2'>
                      Marketing Materials Ready
                    </h4>
                    <p className='text-gray-600'>
                      Access professional product images, videos, and copy to
                      boost your sales.
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-xl transition'>
                  <div className='w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md'>
                    <i className='fa-solid fa-truck-fast text-[#EC4899] text-2xl'></i>
                  </div>
                  <div>
                    <h4 className='text-xl font-bold text-gray-900 mb-2'>
                      Auto Order Tracking
                    </h4>
                    <p className='text-gray-600'>
                      Monitor your sales, commissions, and payouts in real-time
                      from your dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForResellers;
