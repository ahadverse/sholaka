import React from "react";

const TrensingProducts = () => {
  return (
    <div>
      <section
        id='trending-products'
        className='py-24 bg-gradient-to-br from-gray-50 to-indigo-50'
      >
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <div className='inline-block px-4 py-2 bg-white rounded-full shadow-sm mb-4'>
              <span className='text-[#6366F1] font-semibold text-sm'>
                TRENDING NOW
              </span>
            </div>
            <h2 className='text-5xl font-bold text-gray-900 mb-4'>
              Top Products to Share
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              High-demand products with great commission rates
            </p>
          </div>
          <div className='grid md:grid-cols-4 gap-8'>
            <div
              id='product-1'
              className='bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2'
            >
              <div className='h-64 overflow-hidden'>
                <img
                  className='w-full h-full object-cover'
                  src='https://storage.googleapis.com/uxpilot-auth.appspot.com/301db381aa-96a4619175fc44ff7ac3.png'
                  alt='premium wireless headphones product photography, white background, modern minimalist style'
                />
              </div>
              <div className='p-6'>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-sm font-semibold text-[#6366F1] bg-indigo-50 px-3 py-1 rounded-full'>
                    20% Commission
                  </span>
                  <div className='flex items-center text-yellow-500'>
                    <i className='fa-solid fa-star text-sm'></i>
                    <span className='ml-1 text-sm font-semibold text-gray-700'>
                      4.8
                    </span>
                  </div>
                </div>
                <h4 className='text-lg font-bold text-gray-900 mb-2'>
                  Premium Wireless Headphones
                </h4>
                <div className='flex items-center justify-between mb-4'>
                  <span className='text-2xl font-bold text-gray-900'>
                    ₹2,499
                  </span>
                  <span className='text-sm text-gray-500 line-through'>
                    ₹4,999
                  </span>
                </div>
                <button className='w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition'>
                  <i className='fa-solid fa-share-nodes mr-2'></i>Share &amp;
                  Earn
                </button>
              </div>
            </div>
            <div
              id='product-2'
              className='bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2'
            >
              <div className='h-64 overflow-hidden'>
                <img
                  className='w-full h-full object-cover'
                  src='https://storage.googleapis.com/uxpilot-auth.appspot.com/4b6e5aa4f3-d6db4d7550cab42d8994.png'
                  alt='smartwatch fitness tracker product photography, white background, modern style'
                />
              </div>
              <div className='p-6'>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-sm font-semibold text-[#8B5CF6] bg-purple-50 px-3 py-1 rounded-full'>
                    25% Commission
                  </span>
                  <div className='flex items-center text-yellow-500'>
                    <i className='fa-solid fa-star text-sm'></i>
                    <span className='ml-1 text-sm font-semibold text-gray-700'>
                      4.9
                    </span>
                  </div>
                </div>
                <h4 className='text-lg font-bold text-gray-900 mb-2'>
                  Smart Fitness Watch
                </h4>
                <div className='flex items-center justify-between mb-4'>
                  <span className='text-2xl font-bold text-gray-900'>
                    ₹3,999
                  </span>
                  <span className='text-sm text-gray-500 line-through'>
                    ₹7,999
                  </span>
                </div>
                <button className='w-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition'>
                  <i className='fa-solid fa-share-nodes mr-2'></i>Share &amp;
                  Earn
                </button>
              </div>
            </div>
            <div
              id='product-3'
              className='bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2'
            >
              <div className='h-64 overflow-hidden'>
                <img
                  className='w-full h-full object-cover'
                  src='https://storage.googleapis.com/uxpilot-auth.appspot.com/fa5eef688c-fa17332d7f530fd5f1c1.png'
                  alt='portable bluetooth speaker product photography, white background, sleek design'
                />
              </div>
              <div className='p-6'>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-sm font-semibold text-[#EC4899] bg-pink-50 px-3 py-1 rounded-full'>
                    18% Commission
                  </span>
                  <div className='flex items-center text-yellow-500'>
                    <i className='fa-solid fa-star text-sm'></i>
                    <span className='ml-1 text-sm font-semibold text-gray-700'>
                      4.7
                    </span>
                  </div>
                </div>
                <h4 className='text-lg font-bold text-gray-900 mb-2'>
                  Portable Bluetooth Speaker
                </h4>
                <div className='flex items-center justify-between mb-4'>
                  <span className='text-2xl font-bold text-gray-900'>
                    ₹1,799
                  </span>
                  <span className='text-sm text-gray-500 line-through'>
                    ₹3,499
                  </span>
                </div>
                <button className='w-full bg-gradient-to-r from-[#EC4899] to-[#6366F1] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition'>
                  <i className='fa-solid fa-share-nodes mr-2'></i>Share &amp;
                  Earn
                </button>
              </div>
            </div>
            <div
              id='product-4'
              className='bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2'
            >
              <div className='h-64 overflow-hidden'>
                <img
                  className='w-full h-full object-cover'
                  src='https://storage.googleapis.com/uxpilot-auth.appspot.com/c4037822c7-2a410d1674fe4ecee9d6.png'
                  alt='phone accessories bundle product photography, white background, modern colorful style'
                />
              </div>
              <div className='p-6'>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-sm font-semibold text-[#6366F1] bg-indigo-50 px-3 py-1 rounded-full'>
                    30% Commission
                  </span>
                  <div className='flex items-center text-yellow-500'>
                    <i className='fa-solid fa-star text-sm'></i>
                    <span className='ml-1 text-sm font-semibold text-gray-700'>
                      4.6
                    </span>
                  </div>
                </div>
                <h4 className='text-lg font-bold text-gray-900 mb-2'>
                  Phone Accessories Bundle
                </h4>
                <div className='flex items-center justify-between mb-4'>
                  <span className='text-2xl font-bold text-gray-900'>₹999</span>
                  <span className='text-sm text-gray-500 line-through'>
                    ₹2,499
                  </span>
                </div>
                <button className='w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition'>
                  <i className='fa-solid fa-share-nodes mr-2'></i>Share &amp;
                  Earn
                </button>
              </div>
            </div>
          </div>
          <div className='text-center mt-12'>
            <button className='bg-white text-[#6366F1] px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl border-2 border-[#6366F1] transition'>
              View All Products <i className='fa-solid fa-arrow-right ml-2'></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrensingProducts;
