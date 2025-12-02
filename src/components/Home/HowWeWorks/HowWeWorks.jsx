import React from "react";

const HowWeWorks = () => {
  return (
    <div>
      <section id='how-it-works' className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <div className='inline-block px-4 py-2 bg-indigo-50 rounded-full mb-4'>
              <span className='text-[#6366F1] font-semibold text-sm'>
                HOW IT WORKS
              </span>
            </div>
            <h2 className='text-5xl font-bold text-gray-900 mb-4'>
              Simple 3-Step Process
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              From product upload to automated payouts, everything is seamless
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            <div
              id='step-1'
              className='relative bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-10 hover:shadow-2xl transition transform hover:-translate-y-2'
            >
              <div className='absolute -top-6 left-10 w-12 h-12 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg'>
                1
              </div>
              <div className='w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg'>
                <i className='fa-solid fa-cloud-arrow-up text-[#6366F1] text-4xl'></i>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Seller Uploads Product
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                Sellers add products with images, descriptions, pricing, and
                commission rates in minutes.
              </p>
            </div>
            <div
              id='step-2'
              className='relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 hover:shadow-2xl transition transform hover:-translate-y-2'
            >
              <div className='absolute -top-6 left-10 w-12 h-12 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg'>
                2
              </div>
              <div className='w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg'>
                <i className='fa-solid fa-share-nodes text-[#8B5CF6] text-4xl'></i>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Reseller Shares Link
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                Resellers get unique links to share on social media, WhatsApp,
                or their network.
              </p>
            </div>
            <div
              id='step-3'
              className='relative bg-gradient-to-br from-pink-50 to-indigo-50 rounded-3xl p-10 hover:shadow-2xl transition transform hover:-translate-y-2'
            >
              <div className='absolute -top-6 left-10 w-12 h-12 bg-gradient-to-r from-[#EC4899] to-[#6366F1] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg'>
                3
              </div>
              <div className='w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg'>
                <i className='fa-solid fa-wallet text-[#EC4899] text-4xl'></i>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Automated Payouts
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                Customer buys through the link, and commissions are
                automatically credited to reseller accounts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWorks;
