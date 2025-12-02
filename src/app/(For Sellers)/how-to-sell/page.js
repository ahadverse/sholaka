import React from "react";

const HowToSell = () => {
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
                SELLERS
              </span>
            </div>
            <h1 className='text-5xl font-bold text-gray-900 mb-4'>
              How to Sell on Sholaka
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Start selling your products easily and reach millions of buyers
              without inventory hassle.
            </p>
            <div className='flex items-center justify-center mt-6 text-sm text-gray-500'>
              <span>Last updated: December 3, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id='how-to-sell-content' className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='prose prose-lg max-w-none'>
            {/* Overview */}
            <div id='overview-section' className='mb-12'>
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 mb-8'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center flex-shrink-0'>
                    <i className='fa-solid fa-bag-shopping text-white text-xl'></i>
                  </div>
                  <div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                      Overview
                    </h2>
                    <p className='text-gray-700 leading-relaxed'>
                      Selling on Sholaka is simple and effective. Our platform
                      connects you directly with a large community of resellers
                      and buyers, helping you increase sales without worrying
                      about inventory, logistics, or marketing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps to Sell */}
            <div id='steps-to-sell' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-list-check text-white text-lg'></i>
                </div>
                Steps to Start Selling
              </h2>
              <div className='space-y-6'>
                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    1. Create Your Seller Account
                  </h3>
                  <p className='text-gray-700'>
                    Sign up on Sholaka and provide your business details. Verify
                    your email and set up your profile to start listing
                    products.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    2. List Your Products
                  </h3>
                  <p className='text-gray-700'>
                    Add your products with detailed descriptions, images,
                    prices, and categories. Optimize your listings for search
                    visibility.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    3. Set Your Commissions
                  </h3>
                  <p className='text-gray-700'>
                    Define the commission rates for resellers. Competitive rates
                    attract more resellers to sell your products.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    4. Manage Orders & Inventory
                  </h3>
                  <p className='text-gray-700'>
                    Keep track of incoming orders, stock levels, and fulfillment
                    status through your seller dashboard.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    5. Ship Products
                  </h3>
                  <p className='text-gray-700'>
                    Use our integrated shipping solutions to deliver products to
                    resellers or directly to buyers efficiently.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    6. Receive Payments
                  </h3>
                  <p className='text-gray-700'>
                    Payments are automatically processed and transferred to your
                    account securely based on completed orders.
                  </p>
                </div>
              </div>
            </div>

            {/* Tips for Success */}
            <div id='tips-for-success' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#EC4899] to-[#6366F1] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-lightbulb text-white text-lg'></i>
                </div>
                Tips for Successful Selling
              </h2>
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Use high-quality images and clear product descriptions.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Keep your inventory updated to avoid stockouts.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Respond promptly to reseller inquiries to maintain high
                    ratings.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Offer competitive commissions to attract more resellers.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Promote your products on social media and campaigns for
                    higher reach.
                  </li>
                </ul>
              </div>
            </div>

            {/* Tools for Sellers */}
            <div id='tools-for-sellers' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-tools text-white text-lg'></i>
                </div>
                Tools for Sellers
              </h2>
              <div className='bg-gray-50 rounded-2xl p-6'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#8B5CF6] mr-3 mt-1 text-sm'></i>
                    Analytics Dashboard: Track sales, commissions, and product
                    performance.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#8B5CF6] mr-3 mt-1 text-sm'></i>
                    Marketing Resources: Access banners, templates, and
                    promotional materials.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#8B5CF6] mr-3 mt-1 text-sm'></i>
                    Automated Order Management: Easily manage orders, shipments,
                    and returns.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#8B5CF6] mr-3 mt-1 text-sm'></i>
                    Commission Management: Set and update reseller commission
                    structures.
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <div id='benefits' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#EC4899] to-[#6366F1] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-gem text-white text-lg'></i>
                </div>
                Benefits of Selling on Sholaka
              </h2>
              <div className='bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#EC4899] mr-3 mt-1 text-sm'></i>
                    Reach a large network of resellers and buyers.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#EC4899] mr-3 mt-1 text-sm'></i>
                    Minimal upfront investment; no inventory hassles.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#EC4899] mr-3 mt-1 text-sm'></i>
                    Secure payments and fast settlements.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#EC4899] mr-3 mt-1 text-sm'></i>
                    Access to analytics and marketing tools to boost sales.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#EC4899] mr-3 mt-1 text-sm'></i>
                    Build a strong brand presence online.
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
                Contact Us
              </h2>

              <div className='bg-white border border-gray-200 rounded-3xl p-8 shadow-lg'>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  If you have any questions about selling, commissions, or
                  account setup, please contact us:
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

export default HowToSell;
