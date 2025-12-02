import React from "react";

const ForSellers = () => {
  return (
    <div>
      <section
        id='for-sellers'
        className='py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50'
      >
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid md:grid-cols-2 gap-16 items-center'>
            <div>
              <div className='inline-block px-4 py-2 bg-white rounded-full shadow-sm mb-6'>
                <span className='text-[#6366F1] font-semibold text-sm'>
                  FOR SELLERS
                </span>
              </div>
              <h2 className='text-5xl font-bold text-gray-900 mb-6'>
                Everything You Need to
                <span className='bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent'>
                  Scale Your Business
                </span>
              </h2>
              <p className='text-xl text-gray-600 mb-10'>
                Powerful tools and features designed to help sellers reach more
                customers effortlessly.
              </p>
              <div className='space-y-6'>
                <div className='flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition'>
                  <div className='w-14 h-14 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center flex-shrink-0'>
                    <i className='fa-solid fa-infinity text-white text-2xl'></i>
                  </div>
                  <div>
                    <h4 className='text-xl font-bold text-gray-900 mb-2'>
                      Unlimited Product Upload
                    </h4>
                    <p className='text-gray-600'>
                      Add as many products as you want with no restrictions or
                      hidden fees.
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition'>
                  <div className='w-14 h-14 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-xl flex items-center justify-center flex-shrink-0'>
                    <i className='fa-solid fa-network-wired text-white text-2xl'></i>
                  </div>
                  <div>
                    <h4 className='text-xl font-bold text-gray-900 mb-2'>
                      Reseller Network Exposure
                    </h4>
                    <p className='text-gray-600'>
                      Tap into thousands of resellers ready to promote your
                      products.
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition'>
                  <div className='w-14 h-14 bg-gradient-to-br from-[#EC4899] to-[#6366F1] rounded-xl flex items-center justify-center flex-shrink-0'>
                    <i className='fa-solid fa-percent text-white text-2xl'></i>
                  </div>
                  <div>
                    <h4 className='text-xl font-bold text-gray-900 mb-2'>
                      Auto Commission System
                    </h4>
                    <p className='text-gray-600'>
                      Set your commission rates and let the system handle
                      everything automatically.
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition'>
                  <div className='w-14 h-14 bg-gradient-to-br from-[#6366F1] to-[#EC4899] rounded-xl flex items-center justify-center flex-shrink-0'>
                    <i className='fa-solid fa-gauge-high text-white text-2xl'></i>
                  </div>
                  <div>
                    <h4 className='text-xl font-bold text-gray-900 mb-2'>
                      Easy Dashboard
                    </h4>
                    <p className='text-gray-600'>
                      Track sales, manage inventory, and monitor performance in
                      real-time.
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition'>
                  <div className='w-14 h-14 bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] rounded-xl flex items-center justify-center flex-shrink-0'>
                    <i className='fa-solid fa-credit-card text-white text-2xl'></i>
                  </div>
                  <div>
                    <h4 className='text-xl font-bold text-gray-900 mb-2'>
                      COD + Online Payment
                    </h4>
                    <p className='text-gray-600'>
                      Accept all payment methods to maximize conversions and
                      customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative'>
              <div className='relative z-10'>
                <img
                  className='w-full h-auto rounded-3xl shadow-2xl'
                  src='https://storage.googleapis.com/uxpilot-auth.appspot.com/3516410965-d604d885b388228ed562.png'
                  alt='modern dashboard interface showing product analytics and sales graphs, clean UI design, purple and indigo theme, 3D illustration style'
                />
              </div>
              <div className='absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-3xl opacity-20 blur-2xl'></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForSellers;
