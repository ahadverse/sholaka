import React from "react";

const MarketingResources = () => {
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
                GROWTH & CONVERSION
              </span>
            </div>
            <h1 className='text-5xl font-bold text-gray-900 mb-4'>
              High-Impact Marketing Resources for Resellers
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Elevate your content game with premium assets, strategy guides,
              and channel-specific best practices provided by our top sellers.
            </p>
            <div className='flex items-center justify-center mt-6 text-sm text-gray-500'>
              <span>Last updated: December 3, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id='marketing-resources-content' className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='prose prose-lg max-w-none'>
            {/* Overview & Core Tool */}
            <div id='overview-section' className='mb-12'>
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 mb-8'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center flex-shrink-0'>
                    <i className='fa-solid fa-palette text-white text-xl'></i>
                  </div>
                  <div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                      The Central Asset Library
                    </h2>
                    <p className='text-gray-700 leading-relaxed'>
                      Instead of requesting assets, access the **Asset Library**
                      on every product page. This library includes assets
                      pre-sized for popular platforms (1:1 for Instagram, 9:16
                      for TikTok, 16:9 for YouTube). *Always prioritize assets
                      with a 'Verified by Sholaka' stamp.*
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Deep Dive into Asset Types */}
            <div id='asset-deep-dive' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-wand-magic-sparkles text-white text-lg'></i>
                </div>
                High-Converting Asset Types
              </h2>
              <div className='space-y-6'>
                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3 flex items-center'>
                    <i className='fa-solid fa-bolt text-[#8B5CF6] mr-2'></i> UGC
                    (User-Generated Content) Style Clips
                  </h3>
                  <p className='text-gray-700'>
                    These short, authentic-looking videos perform best on social
                    media. They are often unbranded and focus on a
                    problem/solution narrative. **Best Practice:** Download the
                    clips and add your own voiceover or text overlays.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3 flex items-center'>
                    <i className='fa-solid fa-pen-nib text-[#8B5CF6] mr-2'></i>{" "}
                    SEO-Optimized Descriptions
                  </h3>
                  <p className='text-gray-700'>
                    Sellers often provide 3-5 variants of descriptions: a short
                    sales pitch, a technical specification list, and an
                    SEO-heavy blog post excerpt. Use the latter for website
                    blogs or product reviews to drive organic traffic.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3 flex items-center'>
                    <i className='fa-solid fa-star text-[#8B5CF6] mr-2'></i>{" "}
                    Authentic Testimonials
                  </h3>
                  <p className='text-gray-700'>
                    Access verified buyer testimonials for each product. Use
                    these quotes in your marketing copy to build immediate
                    trust, especially for higher-priced items. Filter for
                    testimonials mentioning quick shipping.
                  </p>
                </div>
              </div>
            </div>

            {/* Strategy Guide */}
            <div id='strategy-guide' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#EC4899] to-[#6366F1] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-rocket text-white text-lg'></i>
                </div>
                Advanced Strategy: Driving Conversion
              </h2>
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    **Value Ladder:** Promote low-commission "bait" products
                    first to build an email list, then push high-commission
                    premium products to that warm audience.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    **Retargeting:** If you are running paid ads, retarget
                    customers who abandoned their cart (check your analytics)
                    with a unique discount code to seal the deal.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    **Authority Building:** Position yourself as a product
                    expert by creating original content (reviews, comparisons)
                    rather than just resharing seller assets.
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
                Marketing Strategy Support
              </h2>

              <div className='bg-white border border-gray-200 rounded-3xl p-8 shadow-lg'>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  Need personalized advice on campaign structure or asset
                  customization? Contact the Reseller Marketing Team:
                </p>

                <div className='grid md:grid-cols-3 gap-6'>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-envelope text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Email Strategy
                    </h4>
                    <p className='text-[#6366F1]'>
                      marketing.reseller@Sholaka.com
                    </p>
                  </div>

                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#8B5CF6] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-file-pdf text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Q4 Strategy Guide
                    </h4>
                    <p className='text-[#8B5CF6]'>Download the PDF</p>
                  </div>

                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#EC4899] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-chalkboard-user text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Reseller Webinars
                    </h4>
                    <p className='text-[#EC4899]'>View Upcoming Schedule</p>
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

export default MarketingResources;
