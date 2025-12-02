import React from "react";

const SuccessStories = () => {
  // Array of placeholder success stories for the grid
  const stories = [
    {
      icon: "fa-solid fa-rocket",
      title: "Local Brand Goes Global",
      description:
        "How 'CraftyDecor' scaled their handicraft business from a single city to international markets within 6 months on Sholaka.",
      resellerCount: "1,500+",
      growth: "450%",
    },
    {
      icon: "fa-solid fa-bolt",
      title: "Achieving Viral Product Status",
      description:
        "Learn how 'TechGear Pro' used high commissions and fast fulfillment to make their new wireless charger a top-selling item.",
      resellerCount: "800+",
      growth: "3x sales",
    },
    {
      icon: "fa-solid fa-shield-alt",
      title: "The Power of High Engagement",
      description:
        "Meet 'EcoEssentials', a seller who maintains a 5-star rating by responding instantly to resellers and offering robust marketing support.",
      resellerCount: "2,100+",
      growth: "Consistent 99% fulfillment",
    },
  ];

  // --- Revised Data Tables Content ---

  const CustomerDataTable = () => (
    <div className='bg-white rounded-xl p-4 shadow-sm border border-gray-200 overflow-x-auto'>
      <h4 className='text-lg font-bold text-gray-900 mb-3 flex items-center'>
        <i className='fa-solid fa-users text-[#6366F1] mr-2'></i> Buyer /
        Customer Purchase Data
      </h4>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              ID
            </th>
            <th className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Name
            </th>
            <th className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Status
            </th>
            <th className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Last Purchase
            </th>
            <th className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Total Spent
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200 text-sm'>
          <tr>
            <td className='px-4 py-3 whitespace-nowrap font-semibold'>
              CUS001
            </td>
            <td className='px-4 py-3 whitespace-nowrap'>Alice Johnson</td>
            <td className='px-4 py-3 whitespace-nowrap text-green-600'>
              Active
            </td>
            <td className='px-4 py-3 whitespace-nowrap'>2025-11-28</td>
            <td className='px-4 py-3 whitespace-nowrap'>$250.50</td>
          </tr>
          <tr>
            <td className='px-4 py-3 whitespace-nowrap font-semibold'>
              CUS005
            </td>
            <td className='px-4 py-3 whitespace-nowrap'>Emma Brown</td>
            <td className='px-4 py-3 whitespace-nowrap text-purple-600 font-bold'>
              VIP
            </td>
            <td className='px-4 py-3 whitespace-nowrap'>2025-12-02</td>
            <td className='px-4 py-3 whitespace-nowrap'>$1,540.75</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const ResellerPerformanceTable = () => (
    <div className='bg-white rounded-xl p-4 shadow-sm border border-gray-200 overflow-x-auto'>
      <h4 className='text-lg font-bold text-gray-900 mb-3 flex items-center'>
        <i className='fa-solid fa-store text-[#8B5CF6] mr-2'></i> Reseller
        Performance Data
      </h4>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              ID
            </th>
            <th className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Name
            </th>
            <th className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Tier
            </th>
            <th className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Sales Volume
            </th>
            <th className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Avg Commission
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200 text-sm'>
          <tr>
            <td className='px-4 py-3 whitespace-nowrap font-semibold'>
              RSL101
            </td>
            <td className='px-4 py-3 whitespace-nowrap'>Liam Marketing</td>
            <td className='px-4 py-3 whitespace-nowrap text-indigo-600'>
              Gold
            </td>
            <td className='px-4 py-3 whitespace-nowrap'>$25,000</td>
            <td className='px-4 py-3 whitespace-nowrap'>12%</td>
          </tr>
          <tr>
            <td className='px-4 py-3 whitespace-nowrap font-semibold'>
              RSL103
            </td>
            <td className='px-4 py-3 whitespace-nowrap'>Noah Sales Co.</td>
            <td className='px-4 py-3 whitespace-nowrap text-green-600 font-bold'>
              Platinum
            </td>
            <td className='px-4 py-3 whitespace-nowrap'>$75,000</td>
            <td className='px-4 py-3 whitespace-nowrap'>15%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  // --- Component Render ---

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
                INSPIRATION
              </span>
            </div>
            <h1 className='text-5xl font-bold text-gray-900 mb-4'>
              Seller Success Stories
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Read testimonials and discover the strategies top Sholaka sellers
              use to achieve massive sales growth and brand recognition.
            </p>
            <div className='flex items-center justify-center mt-6 text-sm text-gray-500'>
              <span>Last updated: December 3, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id='success-stories-content' className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='prose prose-lg max-w-none'>
            {/* Overview */}
            <div id='overview-section' className='mb-12'>
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 mb-8'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center flex-shrink-0'>
                    <i className='fa-solid fa-trophy text-white text-xl'></i>
                  </div>
                  <div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                      What Makes a Sholaka Success?
                    </h2>
                    <p className='text-gray-700 leading-relaxed'>
                      Successful sellers leverage our reseller network by
                      offering compelling products, competitive commissions, and
                      impeccable operational efficiency. These stories
                      illustrate the potential of the Sholaka ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Stories (GRID) */}
            <div id='featured-stories' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-8 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-star text-white text-lg'></i>
                </div>
                Our Top Seller Spotlights
              </h2>

              <div className='grid md:grid-cols-3 gap-8'>
                {stories.map((story, index) => (
                  <div
                    key={index}
                    className='bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col items-center text-center transition duration-300 hover:shadow-xl hover:scale-[1.02]'
                  >
                    <div className='w-16 h-16 bg-gradient-to-tr from-[#6366F1] to-[#8B5CF6] rounded-full flex items-center justify-center mb-4'>
                      <i className={`${story.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>
                      {story.title}
                    </h3>
                    <p className='text-sm text-gray-600 mb-4 flex-grow'>
                      {story.description}
                    </p>
                    <div className='w-full pt-4 border-t border-gray-100 mt-auto'>
                      <p className='text-sm font-semibold text-[#EC4899]'>
                        Resellers: {story.resellerCount} | Result:{" "}
                        {story.growth}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DATA SNAPSHOT SECTION (REVISED) */}
            <div id='data-snapshot-section' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-database text-white text-lg'></i>
                </div>
                Data Snapshot: Platform User Metrics
              </h2>
              <div className='bg-gray-50 rounded-2xl p-6 space-y-6'>
                <CustomerDataTable />
                <ResellerPerformanceTable />
              </div>
            </div>

            {/* Key Takeaways */}
            <div id='key-takeaways' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#EC4899] to-[#6366F1] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-graduation-cap text-white text-lg'></i>
                </div>
                Key Learnings from Top Sellers
              </h2>
              <div className='bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    **Commission Competitiveness:** High commissions (above 10%)
                    correlate directly with reseller adoption.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    **Inventory Depth:** Maintaining consistent stock ensures
                    resellers can trust promoting your item without worrying
                    about stockouts.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    **Marketing Assets:** Providing professionally designed
                    images and videos significantly boosts reseller conversion
                    rates.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    **Fast Fulfillment:** Shipping orders within 24 hours of
                    confirmation leads to higher seller ratings and better
                    product visibility.
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div id='cta-section' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-bullhorn text-white text-lg'></i>
                </div>
                Ready to Be a Success Story?
              </h2>

              <div className='bg-white border border-gray-200 rounded-3xl p-8 shadow-lg'>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  Start your journey today! If you need personalized guidance on
                  optimizing your listings for reseller appeal, contact our
                  dedicated Seller Growth Team.
                </p>

                <div className='grid md:grid-cols-3 gap-6'>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-envelope text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Growth Team Email
                    </h4>
                    <p className='text-[#6366F1]'>growth@Sholaka.com</p>
                  </div>

                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#8B5CF6] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-book-open text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Seller Handbook
                    </h4>
                    <p className='text-[#8B5CF6] '>/documentation/handbook</p>
                  </div>

                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#EC4899] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-calendar-alt text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Schedule Consultation
                    </h4>
                    <p className='text-[#EC4899] '>/schedule-call</p>
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

export default SuccessStories;
