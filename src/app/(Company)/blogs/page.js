import React from "react";

const Blog = () => {
  // Mock data for blog posts, formatted for the card design
  const featuredPosts = [
    {
      category: "Reseller Tips",
      title: "5 Hidden High-Commission Niches for Q4",
      date: "Dec 1, 2025",
      icon: "fa-solid fa-gem",
      color: "text-[#EC4899]",
      description:
        "Learn how to pivot your marketing strategy to capitalize on seasonal trends and maximize holiday earnings.",
    },
    {
      category: "Seller Growth",
      title: "Optimizing Your Listings to Attract Gold-Tier Resellers",
      date: "Nov 20, 2025",
      icon: "fa-solid fa-chart-bar",
      color: "text-[#6366F1]",
      description:
        "A deep dive into inventory depth, media quality, and commission structures that top resellers look for.",
    },
    {
      category: "Platform Updates",
      title: "Introducing Geo-Targeted Payouts: Faster Local Transfers",
      date: "Nov 10, 2025",
      icon: "fa-solid fa-bullhorn",
      color: "text-[#8B5CF6]",
      description:
        "We've launched new regional bank transfer integrations to cut payout times by up to 48 hours in Asia and LATAM.",
    },
  ];

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
                Sholaka INSIGHTS
              </span>
            </div>
            <h1 className='text-5xl font-bold text-gray-900 mb-4'>
              The Official Sholaka Blog
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Stay ahead with expert strategies, market analyses, and official
              platform news for both sellers and resellers.
            </p>
            <div className='flex items-center justify-center mt-6 text-sm text-gray-500'>
              <span>Updated Weekly | Subscribe for Alerts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id='blog-content' className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='prose prose-lg max-w-none'>
            {/* Featured Posts Section */}
            <div id='featured-posts' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-8 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-fire text-white text-lg'></i>
                </div>
                Trending Articles
              </h2>

              <div className='grid md:grid-cols-3 gap-8'>
                {featuredPosts.map((post, index) => (
                  <div
                    key={index}
                    className='bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col transition duration-300 hover:shadow-xl hover:translate-y-[-2px]'
                  >
                    <div className='flex items-center mb-3'>
                      <i
                        className={`${post.icon} ${post.color} text-xl mr-3`}
                      ></i>
                      <span
                        className={`text-sm font-semibold uppercase ${post.color}`}
                      >
                        {post.category}
                      </span>
                    </div>

                    <h3 className='text-xl font-bold text-gray-900 mb-3 leading-snug'>
                      {post.title}
                    </h3>

                    <p className='text-sm text-gray-600 mb-4 flex-grow'>
                      {post.description}
                    </p>

                    <div className='mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-sm'>
                      <span className='text-gray-500'>{post.date}</span>
                      <a
                        href='#'
                        className='font-semibold text-[#6366F1] hover:text-indigo-700'
                      >
                        Read More{" "}
                        <i className='fa-solid fa-arrow-right ml-1 text-xs'></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories and Archive */}
            <div id='categories-archive' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#EC4899] to-[#6366F1] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-tags text-white text-lg'></i>
                </div>
                Browse By Topic
              </h2>
              <div className='bg-gray-50 rounded-2xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4'>
                <span className='text-center bg-white py-2 px-4 rounded-full text-gray-700 hover:bg-indigo-100 transition duration-200 cursor-pointer'>
                  #SellerTips (15)
                </span>
                <span className='text-center bg-white py-2 px-4 rounded-full text-gray-700 hover:bg-purple-100 transition duration-200 cursor-pointer'>
                  #ResellerStrategy (22)
                </span>
                <span className='text-center bg-white py-2 px-4 rounded-full text-gray-700 hover:bg-pink-100 transition duration-200 cursor-pointer'>
                  #MarketTrends (8)
                </span>
                <span className='text-center bg-white py-2 px-4 rounded-full text-gray-700 hover:bg-indigo-100 transition duration-200 cursor-pointer'>
                  #PlatformNews (11)
                </span>
              </div>
            </div>

            {/* Latest Articles (Simulated List) */}
            <div id='latest-articles' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-newspaper text-white text-lg'></i>
                </div>
                Recent Posts
              </h2>
              <div className='space-y-4'>
                <div className='bg-white rounded-xl p-4 border border-gray-200 flex justify-between items-center hover:bg-gray-50 transition duration-200'>
                  <div>
                    <p className='text-sm text-[#EC4899] font-semibold'>
                      Reseller Tips
                    </p>
                    <a
                      href='#'
                      className='text-lg font-bold text-gray-900 hover:text-[#6366F1]'
                    >
                      Mastering the Art of Social Proof in Your Product Listings
                    </a>
                  </div>
                  <span className='text-gray-500 text-sm flex-shrink-0'>
                    Nov 5, 2025
                  </span>
                </div>
                <div className='bg-white rounded-xl p-4 border border-gray-200 flex justify-between items-center hover:bg-gray-50 transition duration-200'>
                  <div>
                    <p className='text-sm text-[#6366F1] font-semibold'>
                      Seller Growth
                    </p>
                    <a
                      href='#'
                      className='text-lg font-bold text-gray-900 hover:text-[#6366F1]'
                    >
                      How to Run a Successful Flash Sale Campaign with Resellers
                    </a>
                  </div>
                  <span className='text-gray-500 text-sm flex-shrink-0'>
                    Oct 28, 2025
                  </span>
                </div>
                <div className='bg-white rounded-xl p-4 border border-gray-200 flex justify-between items-center hover:bg-gray-50 transition duration-200'>
                  <div>
                    <p className='text-sm text-[#8B5CF6] font-semibold'>
                      Platform Updates
                    </p>
                    <a
                      href='#'
                      className='text-lg font-bold text-gray-900 hover:text-[#6366F1]'
                    >
                      New Dashboard Feature: Real-Time Commission Visualization
                    </a>
                  </div>
                  <span className='text-gray-500 text-sm flex-shrink-0'>
                    Oct 20, 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div id='newsletter-cta' className='mb-12'>
              <div className='bg-gradient-to-r from-indigo-600 to-purple-600 p-10 rounded-2xl text-center shadow-xl'>
                <i className='fa-solid fa-envelope-open-text text-white text-4xl mb-4'></i>
                <h3 className='text-3xl font-bold text-white mb-2'>
                  Don't Miss the Next Big Trend
                </h3>
                <p className='text-indigo-200 mb-6 max-w-lg mx-auto'>
                  Get our weekly market analysis and platform updates delivered
                  straight to your inbox.
                </p>
                {/* Simulated Form */}
                <div className='max-w-sm mx-auto flex'>
                  <input
                    type='email'
                    placeholder='Enter your email address'
                    className='flex-grow p-3 rounded-l-lg focus:ring-2 focus:ring-white focus:outline-none'
                  />
                  <button className='bg-[#EC4899] text-white font-bold py-3 px-6 rounded-r-lg hover:bg-pink-700 transition duration-300'>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
