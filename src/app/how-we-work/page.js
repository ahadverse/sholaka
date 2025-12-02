import React from "react";

export default function HowWeWork() {
  return (
    <div>
      {/* 1. Hero Section - Maintaining Style */}
      <section
        id='how-it-works-hero'
        className='relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 h-full py-24 flex items-center overflow-hidden'
      >
        <div className='absolute inset-0 opacity-10'>
          {/* Decorative Blur maintained */}
          <div className='absolute top-20 left-20 w-72 h-72 bg-[#6366F1] rounded-full blur-3xl'></div>
          <div className='absolute bottom-20 right-20 w-96 h-96 bg-[#8B5CF6] rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-7xl mx-auto px-6 relative z-10'>
          <div className='text-center space-y-8'>
            <div className='inline-block px-4 py-2 bg-white rounded-full shadow-sm'>
              <span className='text-[#EC4899] font-semibold text-sm'>
                🔗 THE MECHANICS OF GROWTH
              </span>
            </div>
            <h1 className='text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto'>
              The Collaborative Engine: How ReselHub
              <span className='bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent'>
                Drives Dropship Commerce
              </span>
            </h1>
            <p className='text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto'>
              A complete, transparent guide to our multi-tenant dropshipping
              model, showing exactly how Sellers, Resellers, and Buyers
              interact.
            </p>
            <button className='bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition transform'>
              <i className='fa-solid fa-download mr-2'></i>Download Full
              Workflow PDF
            </button>
          </div>
        </div>
      </section>

      {/* 2. Overview: The Core Loop */}
      <section id='core-loop' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              The 4-Step Dropship Cycle
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              A high-level view of how products move from listing to payout.
            </p>
          </div>

          <div className='grid md:grid-cols-4 gap-8'>
            {/* Step 1 */}
            <div className='text-center p-6 bg-indigo-50 rounded-3xl shadow-lg hover:shadow-xl transition duration-300'>
              <div className='w-16 h-16 bg-[#6366F1] rounded-full flex items-center justify-center mx-auto mb-4'>
                <i className='fa-solid fa-upload text-white text-2xl'></i>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                1. List & Approve
              </h3>
              <p className='text-gray-600 text-sm'>
                Seller uploads product details and sets the **Commission Rate**.
              </p>
            </div>
            {/* Step 2 */}
            <div className='text-center p-6 bg-purple-50 rounded-3xl shadow-lg hover:shadow-xl transition duration-300'>
              <div className='w-16 h-16 bg-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-4'>
                <i className='fa-solid fa-share-nodes text-white text-2xl'></i>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                2. Market & Sell
              </h3>
              <p className='text-gray-600 text-sm'>
                Reseller markets product using **Tracking Links** and secures a
                sale.
              </p>
            </div>
            {/* Step 3 */}
            <div className='text-center p-6 bg-pink-50 rounded-3xl shadow-lg hover:shadow-xl transition duration-300'>
              <div className='w-16 h-16 bg-[#EC4899] rounded-full flex items-center justify-center mx-auto mb-4'>
                <i className='fa-solid fa-truck-fast text-white text-2xl'></i>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                3. Fulfill & Track
              </h3>
              <p className='text-gray-600 text-sm'>
                Seller ships directly to the Buyer. ReselHub handles order
                notification.
              </p>
            </div>
            {/* Step 4 */}
            <div className='text-center p-6 bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition duration-300'>
              <div className='w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4'>
                <i className='fa-solid fa-sack-dollar text-white text-2xl'></i>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                4. Clear & Pay Out
              </h3>
              <p className='text-gray-600 text-sm'>
                Commission clears after return period and is **Paid to
                Reseller**.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section Divider --- */}
      <hr className='my-10 border-t-2 border-gray-100 max-w-4xl mx-auto' />

      {/* 3. Deep Dive: Seller Workflow */}
      <section id='seller-workflow' className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <div className='inline-block px-4 py-2 bg-indigo-100 rounded-full mb-3'>
              <span className='text-[#6366F1] font-semibold text-sm'>
                FOR SELLERS (BRANDS)
              </span>
            </div>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              The Seller's Advantage: Maximize Reach, Minimize Risk
            </h2>
          </div>

          <div className='grid md:grid-cols-2 gap-12 items-center'>
            {/* Left Content: Steps */}
            <div className='space-y-8'>
              <div className='flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md border-l-4 border-[#6366F1]'>
                <div className='w-10 h-10 bg-[#6366F1] rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                  <i className='fa-solid fa-file-invoice text-white'></i>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    Listing & Inventory Sync
                  </h3>
                  <p className='text-gray-700'>
                    Upload products via API or CSV. Set **real-time stock
                    limits** to prevent overselling. Provide high-quality media
                    kits and detailed fulfillment timelines.
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md border-l-4 border-[#8B5CF6]'>
                <div className='w-10 h-10 bg-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                  <i className='fa-solid fa-percent text-white'></i>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    Competitive Commission Setting
                  </h3>
                  <p className='text-gray-700'>
                    Control your marketing spend by setting a **variable
                    commission rate**. Higher rates attract top-tier resellers
                    and earn a better V-Rate Score.
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md border-l-4 border-[#EC4899]'>
                <div className='w-10 h-10 bg-[#EC4899] rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                  <i className='fa-solid fa-warehouse text-white'></i>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    Automated Fulfillment
                  </h3>
                  <p className='text-gray-700'>
                    Receive immediate, pre-paid order requests. Ship directly to
                    the buyer within your specified window. **ReselHub handles
                    all payment processing** and liability.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image/Diagram */}
            <div className='relative'>
              <img
                className='w-full h-auto rounded-3xl shadow-2xl'
                src='https://storage.googleapis.com/uxpilot-auth.appspot.com/8f004981bf-fdf815ef4f83939299ee.png'
                alt='Diagram showing seller inventory linking to a cloud database which feeds product listings to resellers'
              />
              <div className='absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-3xl opacity-20 blur-xl'></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section Divider --- */}
      <hr className='my-10 border-t-2 border-gray-100 max-w-4xl mx-auto' />

      {/* 4. Deep Dive: Reseller Workflow */}
      <section id='reseller-workflow' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <div className='inline-block px-4 py-2 bg-purple-100 rounded-full mb-3'>
              <span className='text-[#8B5CF6] font-semibold text-sm'>
                FOR RESELLERS (AFFILIATES)
              </span>
            </div>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              The Reseller's Journey: From Click to Cash
            </h2>
          </div>

          <div className='grid md:grid-cols-2 gap-12 items-center'>
            {/* Left Image/Diagram */}
            <div className='relative order-2 md:order-1'>
              <img
                className='w-full h-auto rounded-3xl shadow-2xl'
                src='https://storage.googleapis.com/uxpilot-auth.appspot.com/8f004981bf-fdf815ef4f83939299ee.png'
                alt='Diagram showing reseller using social media icon pointing to a tracking link and a commission chart'
              />
              <div className='absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-br from-[#EC4899] to-[#8B5CF6] rounded-3xl opacity-20 blur-xl'></div>
            </div>

            {/* Right Content: Steps */}
            <div className='space-y-8 order-1 md:order-2'>
              <div className='flex items-start space-x-4 p-4 bg-gray-50 rounded-xl shadow-md border-r-4 border-[#8B5CF6]'>
                <div className='w-10 h-10 bg-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                  <i className='fa-solid fa-link text-white'></i>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    Custom Tracking Link Generation
                  </h3>
                  <p className='text-gray-700'>
                    Generate unique, deep-linking tracking URLs for every
                    product. This ensures **accurate, reliable attribution**
                    across all your channels (social, email, blog).
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-4 p-4 bg-gray-50 rounded-xl shadow-md border-r-4 border-[#EC4899]'>
                <div className='w-10 h-10 bg-[#EC4899] rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                  <i className='fa-solid fa-chart-line text-white'></i>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    Real-Time Sale Monitoring
                  </h3>
                  <p className='text-gray-700'>
                    Track clicks, conversions, and estimated commissions
                    instantly in the **Reseller Dashboard**. Optimize campaigns
                    based on live performance data.
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-4 p-4 bg-gray-50 rounded-xl shadow-md border-r-4 border-[#6366F1]'>
                <div className='w-10 h-10 bg-[#6366F1] rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                  <i className='fa-solid fa-wallet text-white'></i>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    Guaranteed Bi-Weekly Payouts
                  </h3>
                  <p className='text-gray-700'>
                    Once the buyer's return window closes, your commission moves
                    from **Pending to Cleared**. Set up your preferred method
                    for automatic bi-weekly transfers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section Divider --- */}
      <hr className='my-10 border-t-2 border-gray-100 max-w-4xl mx-auto' />

      {/* 5. Platform Integrity & Guarantee */}
      <section id='platform-guarantee' className='py-20 bg-gray-100'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Our Commitment to Trust and Security
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              How we ensure reliability, fair compensation, and compliance for
              all parties.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {/* Guarantee 1 */}
            <div className='text-center p-8 bg-white rounded-3xl shadow-xl border-t-4 border-[#6366F1]'>
              <i className='fa-solid fa-shield-halved text-[#6366F1] text-4xl mb-4'></i>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Fair Attribution Guarantee
              </h3>
              <p className='text-gray-600 text-sm'>
                We use multi-touch attribution models to prevent commission
                theft and ensure the **last click before purchase** is always
                compensated.
              </p>
            </div>
            {/* Guarantee 2 */}
            <div className='text-center p-8 bg-white rounded-3xl shadow-xl border-t-4 border-[#8B5CF6]'>
              <i className='fa-solid fa-circle-check text-[#8B5CF6] text-4xl mb-4'></i>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Vetted Seller Quality
              </h3>
              <p className='text-gray-600 text-sm'>
                Every Seller is verified for fulfillment consistency and product
                quality. Sellers who fail to maintain an average **4.5-star
                rating** are flagged.
              </p>
            </div>
            {/* Guarantee 3 */}
            <div className='text-center p-8 bg-white rounded-3xl shadow-xl border-t-4 border-[#EC4899]'>
              <i className='fa-solid fa-lock text-[#EC4899] text-4xl mb-4'></i>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Secure Payment Holding
              </h3>
              <p className='text-gray-600 text-sm'>
                All funds are held in secure escrow until the return period is
                complete, protecting both the Seller from clawbacks and the
                Reseller's earnings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA - Maintaining Style */}
      <section id='final-cta' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <div className='bg-gradient-to-r from-[#6366F1] to-[#EC4899] p-12 rounded-3xl shadow-2xl'>
            <h3 className='text-4xl font-bold text-white mb-4'>
              Ready to See How Much You Can Grow?
            </h3>
            <p className='text-indigo-100 mb-8 text-lg max-w-2xl mx-auto'>
              Take the first step toward commission-free selling or
              inventory-free earning.
            </p>
            <div className='flex flex-wrap gap-4 justify-center'>
              <button className='bg-white text-[#6366F1] px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition transform'>
                <i className='fa-solid fa-box mr-2'></i>Launch Your Store
              </button>
              <button className='bg-white text-[#EC4899] px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition transform'>
                <i className='fa-solid fa-users mr-2'></i>Find High-Commission
                Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
