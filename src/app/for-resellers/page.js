import React from "react";

export default function ForResellers() {
  return (
    <div>
      {/* 1. Hero Section - For Resellers */}
      <section
        id='reseller-hero-section'
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
              <span className='text-[#8B5CF6] font-semibold text-sm'>
                💰 EARN COMMISSION
              </span>
            </div>
            <h1 className='text-6xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto'>
              Start Your E-commerce Business
              <span className='bg-gradient-to-r from-[#EC4899] to-[#6366F1] bg-clip-text text-transparent'>
                With Zero Inventory Risk
              </span>
            </h1>
            <p className='text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto'>
              Become a ReselHub Reseller and instantly gain access to thousands
              of ready-to-sell products from quality brands. Your profit is
              purely commission.
            </p>
            <button className='bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition transform'>
              <i className='fa-solid fa-users mr-2'></i>Find High-Commission
              Products
            </button>
          </div>
        </div>
      </section>

      {/* 2. Key Reseller Benefits */}
      <section id='reseller-benefits' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Your Path to Passive Income
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              ReselHub is built for the modern digital entrepreneur, providing
              everything needed to earn consistently.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {/* Benefit 1: Pure Profit */}
            <div className='text-center p-8 bg-purple-50 rounded-3xl shadow-lg border-b-4 border-[#8B5CF6] transition duration-300 hover:shadow-xl'>
              <i className='fa-solid fa-hand-holding-dollar text-[#8B5CF6] text-4xl mb-4'></i>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                100% Dropship
              </h3>
              <p className='text-gray-600'>
                You never handle stock. Your job is marketing; the Seller
                handles warehousing, shipping, returns, and customer service.
              </p>
            </div>
            {/* Benefit 2: High Commissions */}
            <div className='text-center p-8 bg-pink-50 rounded-3xl shadow-lg border-b-4 border-[#EC4899] transition duration-300 hover:shadow-xl'>
              <i className='fa-solid fa-piggy-bank text-[#EC4899] text-4xl mb-4'></i>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                Above-Average Rates
              </h3>
              <p className='text-gray-600'>
                Sellers compete to attract the best resellers, often offering
                higher commission rates than standard affiliate programs.
              </p>
            </div>
            {/* Benefit 3: Reliable Payouts */}
            <div className='text-center p-8 bg-indigo-50 rounded-3xl shadow-lg border-b-4 border-[#6366F1] transition duration-300 hover:shadow-xl'>
              <i className='fa-solid fa-calendar-check text-[#6366F1] text-4xl mb-4'></i>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                Bi-Weekly Pay Cycle
              </h3>
              <p className='text-gray-600'>
                Receive guaranteed, on-time payments every two weeks directly to
                your bank account or digital wallet (after the return period
                clears).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Reseller Workflow in Detail */}
      <section id='reseller-steps' className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              How to Start Earning Commissions
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Follow these three simple steps to find, promote, and profit from
              vetted products.
            </p>
          </div>

          <div className='relative space-y-12'>
            {/* Step 1: Discover */}
            <div className='flex flex-col md:flex-row items-center bg-white p-8 rounded-3xl shadow-xl'>
              <div className='w-full md:w-1/2 space-y-4 md:pr-12'>
                <span className='text-4xl font-extrabold text-[#8B5CF6] mr-4'>
                  01
                </span>
                <h3 className='text-3xl font-bold text-gray-900'>
                  Discover Niche Products
                </h3>
                <p className='text-gray-700'>
                  Browse the marketplace filtered by commission rate, seller
                  rating, and niche. Find products that align with your audience
                  and generate your unique, lifetime tracking link in one click.
                </p>
                <ul className='list-disc list-inside text-gray-600 space-y-1'>
                  <li>
                    <i className='fa-solid fa-check text-[#8B5CF6]'></i> Filter
                    by 20%+ commission rates.
                  </li>
                  <li>
                    <i className='fa-solid fa-check text-[#8B5CF6]'></i> Access
                    ready-made promotional assets (images, videos).
                  </li>
                </ul>
              </div>
              <div className='w-full md:w-1/2 mt-6 md:mt-0'>
                <div className='h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500'>
                  <img className='rounded-xl' src='/2.png' />
                </div>
              </div>
            </div>

            {/* Step 2: Promote */}
            <div className='flex flex-col md:flex-row items-center bg-white p-8 rounded-3xl shadow-xl'>
              <div className='w-full md:w-1/2 mt-6 md:mt-0 order-2 md:order-1'>
                <div className='h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500'>
                  <img className='rounded-xl' src='/3.png' />
                </div>
              </div>
              <div className='w-full md:w-1/2 space-y-4 md:pl-12 order-1 md:order-2'>
                <span className='text-4xl font-extrabold text-[#EC4899] mr-4'>
                  02
                </span>
                <h3 className='text-3xl font-bold text-gray-900'>
                  Share Your Tracking Link
                </h3>
                <p className='text-gray-700'>
                  Promote your unique link across any platform—Instagram,
                  TikTok, YouTube, email lists, or your own blog. Our robust
                  attribution system tracks every conversion accurately.
                </p>
                <ul className='list-disc list-inside text-gray-600 space-y-1'>
                  <li>
                    <i className='fa-solid fa-check text-[#EC4899]'></i> Works
                    across all major digital channels.
                  </li>
                  <li>
                    <i className='fa-solid fa-check text-[#EC4899]'></i> 30-day
                    cookie window ensures you get credit for later purchases.
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3: Payout */}
            <div className='flex flex-col md:flex-row items-center bg-white p-8 rounded-3xl shadow-xl'>
              <div className='w-full md:w-1/2 space-y-4 md:pr-12'>
                <span className='text-4xl font-extrabold text-[#6366F1] mr-4'>
                  03
                </span>
                <h3 className='text-3xl font-bold text-gray-900'>
                  Watch Your Commissions Clear
                </h3>
                <p className='text-gray-700'>
                  Every click, lead, and sale is visible in your real-time
                  dashboard. Once the order is fulfilled and the refund window
                  passes (typically 7-14 days), your commission is locked and
                  scheduled for payout.
                </p>
                <ul className='list-disc list-inside text-gray-600 space-y-1'>
                  <li>
                    <i className='fa-solid fa-check text-[#6366F1]'></i> Instant
                    notification upon sale confirmation.
                  </li>
                  <li>
                    <i className='fa-solid fa-check text-[#6366F1]'></i> Track
                    monthly earnings and optimization tips.
                  </li>
                </ul>
              </div>
              <div className='w-full md:w-1/2 mt-6 md:mt-0'>
                <div className='h-96  rounded-xl flex items-center justify-center text-gray-500'>
                  <img className='rounded-xl h-96' src='/4.png' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Reseller Training & Support */}
      <section id='reseller-support' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            {/* Left Image/Placeholder */}
            <div className='relative'>
              <div className='h-[450px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl shadow-2xl flex items-center justify-center text-gray-600 text-xl'>
                <img className='rounded-xl' src='/4.png' />
              </div>
            </div>
            {/* Right Content */}
            <div className='space-y-6'>
              <div className='inline-block px-4 py-2 bg-pink-100 rounded-full mb-3'>
                <span className='text-[#EC4899] font-semibold text-sm'>
                  TRAINING & TOOLS
                </span>
              </div>
              <h2 className='text-4xl font-bold text-gray-900'>
                Tools to Turn Clicks into Cash
              </h2>
              <p className='text-lg text-gray-600'>
                We don't just give you products; we give you the skills. Access
                exclusive training materials, market insights, and best
                practices shared by top-performing ReselHub entrepreneurs.
              </p>
              <ul className='space-y-3 pt-4'>
                <li className='flex items-start'>
                  <i className='fa-solid fa-video text-[#EC4899] mr-3 mt-1 flex-shrink-0'></i>
                  <p>
                    <span className='font-semibold text-gray-900'>
                      Weekly Webinars:
                    </span>{" "}
                    Live training sessions on SEO, social media marketing, and
                    conversion optimization.
                  </p>
                </li>
                <li className='flex items-start'>
                  <i className='fa-solid fa-code text-[#6366F1] mr-3 mt-1 flex-shrink-0'></i>
                  <p>
                    <span className='font-semibold text-gray-900'>
                      Marketing Code Snippets:
                    </span>{" "}
                    Embeddable product widgets and banner codes for your website
                    or blog.
                  </p>
                </li>
                <li className='flex items-start'>
                  <i className='fa-solid fa-comments text-[#8B5CF6] mr-3 mt-1 flex-shrink-0'></i>
                  <p>
                    <span className='font-semibold text-gray-900'>
                      Community Access:
                    </span>{" "}
                    Connect with other top resellers to share tips and
                    strategies in a private forum.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA - Consistent Style */}
      <section id='final-reseller-cta' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <div className='bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] p-12 rounded-3xl shadow-2xl'>
            <h3 className='text-4xl font-bold text-white mb-4'>
              Start Earning Money Now. It's Free to Join.
            </h3>
            <p className='text-indigo-100 mb-8 text-lg max-w-2xl mx-auto'>
              Your first commission is just one click away. Sign up and
              immediately start browsing products.
            </p>
            <div className='flex flex-wrap gap-4 justify-center'>
              <button className='bg-white text-[#EC4899] px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition transform'>
                <i className='fa-solid fa-arrow-right-to-bracket mr-2'></i>
                Create Your Free Reseller Account
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
