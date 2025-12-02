import React from "react";

export default function ForSellers() {
  return (
    <div>
      {/* 1. Hero Section - For Sellers */}
      <section
        id='seller-hero-section'
        className='relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 h-full py-24 lg:py-32 flex items-center overflow-hidden'
      >
        <div className='absolute inset-0 opacity-10'>
          {/* Decorative Blur maintained */}
          <div className='absolute top-20 left-20 w-72 h-72 bg-[#6366F1] rounded-full blur-3xl'></div>
          <div className='absolute bottom-20 right-20 w-96 h-96 bg-[#8B5CF6] rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-7xl mx-auto px-6 relative z-10'>
          <div className='text-center space-y-8'>
            <div className='inline-block px-4 py-2 bg-white rounded-full shadow-sm'>
              <span className='text-[#6366F1] font-semibold text-sm'>
                💼 SCALING YOUR BRAND
              </span>
            </div>
            <h1 className='text-6xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto'>
              Acquire Customers with
              <span className='bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent'>
                Zero Upfront Marketing Cost
              </span>
            </h1>
            <p className='text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto'>
              Tap into ReselHub's global network of 200K+ motivated resellers
              who drive sales on commission. Pay only when a product is sold.
            </p>
            <button className='bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition transform'>
              <i className='fa-solid fa-store mr-2'></i>List Your First Product
              Today
            </button>
          </div>
        </div>
      </section>

      {/* 2. Key Benefits - Why ReselHub for Brands */}
      <section id='seller-benefits' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              The Fundamental Advantages
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              We eliminate the biggest headaches of e-commerce scaling: customer
              acquisition and inventory management risk.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {/* Benefit 1: Risk-Free Marketing */}
            <div className='text-center p-8 bg-indigo-50 rounded-3xl shadow-lg border-b-4 border-[#6366F1] transition duration-300 hover:shadow-xl'>
              <i className='fa-solid fa-dollar-sign text-[#6366F1] text-4xl mb-4'></i>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                Cost-Per-Acquisition
              </h3>
              <p className='text-gray-600'>
                Forget CPM and CPC. You only pay a commission fee **after a
                confirmed sale** is made, guaranteeing positive ROI on every
                transaction.
              </p>
            </div>
            {/* Benefit 2: Massive Distribution */}
            <div className='text-center p-8 bg-purple-50 rounded-3xl shadow-lg border-b-4 border-[#8B5CF6] transition duration-300 hover:shadow-xl'>
              <i className='fa-solid fa-globe text-[#8B5CF6] text-4xl mb-4'></i>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                Global Sales Force
              </h3>
              <p className='text-gray-600'>
                Instantly access a distributed sales team (resellers) operating
                in diverse niches and geographical markets you haven't
                penetrated yet.
              </p>
            </div>
            {/* Benefit 3: Automated Logistics */}
            <div className='text-center p-8 bg-pink-50 rounded-3xl shadow-lg border-b-4 border-[#EC4899] transition duration-300 hover:shadow-xl'>
              <i className='fa-solid fa-robot text-[#EC4899] text-4xl mb-4'></i>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                Fulfillment Automation
              </h3>
              <p className='text-gray-600'>
                Orders are processed and payment is secured immediately. You
                only need to focus on shipping—the platform handles the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Seller Workflow in Detail */}
      <section id='seller-steps' className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Your 3-Step Success Path
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Getting started on ReselHub is designed to be fast and intuitive.
            </p>
          </div>

          <div className='relative space-y-12'>
            {/* Step 1: Listing */}
            <div className='flex flex-col md:flex-row items-center bg-white p-8 rounded-3xl shadow-xl'>
              <div className='w-full md:w-1/2 space-y-4 md:pr-12'>
                <span className='text-4xl font-extrabold text-[#6366F1] mr-4'>
                  01
                </span>
                <h3 className='text-3xl font-bold text-gray-900'>
                  Upload Products & Media Kit
                </h3>
                <p className='text-gray-700'>
                  Use our simple batch uploader or API to sync your existing
                  inventory. Provide high-resolution images, detailed
                  descriptions, and any promotional assets that resellers can
                  use. **No need to create separate landing pages.**
                </p>
                <ul className='list-disc list-inside text-gray-600 space-y-1'>
                  <li>
                    <i className='fa-solid fa-check text-[#6366F1]'></i> Bulk
                    import via CSV or Shopify API.
                  </li>
                  <li>
                    <i className='fa-solid fa-check text-[#6366F1]'></i> Define
                    fulfillment zones and shipping costs.
                  </li>
                </ul>
              </div>
              <div className='w-full md:w-1/2 mt-6 md:mt-0'>
                <div className='h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500'>
                  <img className='rounded-xl' src='/2.png' />
                </div>
              </div>
            </div>

            {/* Step 2: Commission */}
            <div className='flex flex-col md:flex-row items-center bg-white p-8 rounded-3xl shadow-xl'>
              <div className='w-full md:w-1/2 mt-6 md:mt-0 order-2 md:order-1'>
                <div className='h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500'>
                  <img className='rounded-xl' src='/5.png' />
                </div>
              </div>
              <div className='w-full md:w-1/2 space-y-4 md:pl-12 order-1 md:order-2'>
                <span className='text-4xl font-extrabold text-[#8B5CF6] mr-4'>
                  02
                </span>
                <h3 className='text-3xl font-bold text-gray-900'>
                  Set Competitive Commissions
                </h3>
                <p className='text-gray-700'>
                  You decide the percentage you pay per sale. The ReselHub
                  algorithm prioritizes products with higher commission rates,
                  giving you **direct control over your listing visibility**.
                </p>
                <ul className='list-disc list-inside text-gray-600 space-y-1'>
                  <li>
                    <i className='fa-solid fa-check text-[#8B5CF6]'></i> Adjust
                    rates dynamically based on stock or promotions.
                  </li>
                  <li>
                    <i className='fa-solid fa-check text-[#8B5CF6]'></i>{" "}
                    Instantly notify resellers of high-payout opportunities.
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3: Fulfillment */}
            <div className='flex flex-col md:flex-row items-center bg-white p-8 rounded-3xl shadow-xl'>
              <div className='w-full md:w-1/2 space-y-4 md:pr-12'>
                <span className='text-4xl font-extrabold text-[#EC4899] mr-4'>
                  03
                </span>
                <h3 className='text-3xl font-bold text-gray-900'>
                  Ship and Get Paid
                </h3>
                <p className='text-gray-700'>
                  When a reseller makes a sale, you receive an automatic,
                  pre-paid order ticket. Ship the product directly to the end
                  buyer—**never to the reseller**. Once tracking confirms
                  delivery, your payout is scheduled.
                </p>
                <ul className='list-disc list-inside text-gray-600 space-y-1'>
                  <li>
                    <i className='fa-solid fa-check text-[#EC4899]'></i>{" "}
                    Integrated shipping label generation.
                  </li>
                  <li>
                    <i className='fa-solid fa-check text-[#EC4899]'></i>{" "}
                    Centralized dashboard for all fulfillment data.
                  </li>
                </ul>
              </div>
              <div className='w-full md:w-1/2 mt-6 md:mt-0'>
                <div className='h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500'>
                  <img className='rounded-xl' src='/5.png' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Analytics & Control */}
      <section id='seller-analytics' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            {/* Left Content */}
            <div className='space-y-6'>
              <div className='inline-block px-4 py-2 bg-purple-100 rounded-full mb-3'>
                <span className='text-[#8B5CF6] font-semibold text-sm'>
                  DATA & INTELLIGENCE
                </span>
              </div>
              <h2 className='text-4xl font-bold text-gray-900'>
                Monitor Performance, Control Visibility
              </h2>
              <p className='text-lg text-gray-600'>
                The ReselHub dashboard gives you granular insights into how your
                products perform across the network. Understand which resellers
                are most effective and which campaigns are driving the most
                revenue.
              </p>
              <ul className='space-y-3 pt-4'>
                <li className='flex items-start'>
                  <i className='fa-solid fa-eye text-[#6366F1] mr-3 mt-1 flex-shrink-0'></i>
                  <p>
                    <span className='font-semibold text-gray-900'>
                      Reseller Performance Scores (RPS):
                    </span>{" "}
                    See the quality and reach of every reseller promoting your
                    product.
                  </p>
                </li>
                <li className='flex items-start'>
                  <i className='fa-solid fa-chart-pie text-[#8B5CF6] mr-3 mt-1 flex-shrink-0'></i>
                  <p>
                    <span className='font-semibold text-gray-900'>
                      Attribution Reporting:
                    </span>{" "}
                    Detailed reports on traffic source, geography, and device
                    type for every commissioned sale.
                  </p>
                </li>
                <li className='flex items-start'>
                  <i className='fa-solid fa-gear text-[#EC4899] mr-3 mt-1 flex-shrink-0'></i>
                  <p>
                    <span className='font-semibold text-gray-900'>
                      Inventory Sync Management:
                    </span>{" "}
                    Real-time stock alerts and automatic product de-listing when
                    inventory hits zero.
                  </p>
                </li>
              </ul>
            </div>
            {/* Right Image/Placeholder */}
            <div className='relative'>
              <div className='h-[450px] rounded-3xl shadow-2xl flex items-center justify-center text-gray-600 text-xl'>
                <img className='rounded-xl' src='/1.png' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA - Consistent Style */}
      <section id='final-seller-cta' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <div className='bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] p-12 rounded-3xl shadow-2xl'>
            <h3 className='text-4xl font-bold text-white mb-4'>
              Ready to Outsource Your Sales Team?
            </h3>
            <p className='text-purple-100 mb-8 text-lg max-w-2xl mx-auto'>
              There are zero monthly fees for Sellers. Pay only a transaction
              fee when your product sells.
            </p>
            <div className='flex flex-wrap gap-4 justify-center'>
              <button className='bg-white text-[#6366F1] px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition transform'>
                <i className='fa-solid fa-arrow-right-to-bracket mr-2'></i>Sign
                Up for Your Seller Account
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
