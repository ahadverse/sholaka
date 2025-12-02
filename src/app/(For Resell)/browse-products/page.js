import React from "react";

const BrowseProducts = () => {
  // Mock data for a detailed comparison table
  const productCriteria = [
    {
      metric: "Commission Rate",
      importance: "High",
      ideal: "15%+",
      description:
        "Directly impacts your income per sale. Prioritize high rates.",
    },
    {
      metric: "Seller Rating",
      importance: "Critical",
      ideal: "4.8+",
      description:
        "Reflects fulfillment speed and quality; directly affects buyer satisfaction.",
    },
    {
      metric: "Return Rate (30 Days)",
      importance: "High",
      ideal: "< 5%",
      description:
        "Low returns mean fewer commission reversals and cleaner earnings.",
    },
    {
      metric: "Inventory Depth",
      importance: "Medium",
      ideal: "500+ units",
      description:
        "Ensures you won't run out of stock during a successful marketing campaign.",
    },
    {
      metric: "Media Quality",
      importance: "High",
      ideal: "HD Photos/Video",
      description:
        "Professional assets lead to higher engagement and conversion on social media.",
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
                MARKETPLACE DISCOVERY
              </span>
            </div>
            <h1 className='text-5xl font-bold text-gray-900 mb-4'>
              Product Vetting: Finding Your Next Best Seller
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Learn the professional techniques for filtering the Sholaka
              catalog to find reliable products with maximum earning potential.
            </p>
            <div className='flex items-center justify-center mt-6 text-sm text-gray-500'>
              <span>Last updated: December 3, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id='browse-products-content' className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='prose prose-lg max-w-none'>
            {/* Overview & Key Tool */}
            <div id='overview-section' className='mb-12'>
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 mb-8'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center flex-shrink-0'>
                    <i className='fa-solid fa-store-alt text-white text-xl'></i>
                  </div>
                  <div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                      The Power of the V-Rate Score
                    </h2>
                    <p className='text-gray-700 leading-relaxed'>
                      Every product is assigned a **Velocity Rate (V-Rate)**, a
                      proprietary score calculated based on sales history,
                      current commission, and seller reliability. Prioritizing
                      products with a V-Rate over 80 ensures you market items
                      proven to sell fast and reliably.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* In-Depth Filtering Techniques */}
            <div id='filtering-techniques' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-sliders text-white text-lg'></i>
                </div>
                Advanced Filtering Techniques
              </h2>
              <div className='space-y-6'>
                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3 flex items-center'>
                    <i className='fa-solid fa-percent text-[#8B5CF6] mr-2'></i>{" "}
                    Margin Optimization
                  </h3>
                  <p className='text-gray-700'>
                    Filter not only by percentage but also by **dollar amount
                    commission** to ensure high-ticket items (even with lower
                    percentages) provide strong absolute profit. *Example: 5% of
                    a \$1000 item is better than 20% of a \$5 item.*
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3 flex items-center'>
                    <i className='fa-solid fa-truck-fast text-[#8B5CF6] mr-2'></i>{" "}
                    Fulfillment Speed
                  </h3>
                  <p className='text-gray-700'>
                    Look for the 'Ships in 24 Hours' badge. Fast fulfillment is
                    crucial for customer satisfaction and ensures your
                    commission is cleared sooner. Filter out sellers with
                    average ship times over 48 hours.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3 flex items-center'>
                    <i className='fa-solid fa-globe text-[#8B5CF6] mr-2'></i>{" "}
                    Regional Availability
                  </h3>
                  <p className='text-gray-700'>
                    If your audience is local, use the regional filter to see
                    products available only for immediate local delivery, which
                    often reduces shipping costs and processing time.
                  </p>
                </div>
              </div>
            </div>

            {/* Criteria Comparison Table */}
            <div id='criteria-comparison' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#EC4899] to-[#6366F1] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-chart-simple text-white text-lg'></i>
                </div>
                Product Selection Criteria Matrix
              </h2>
              <div className='bg-gray-50 rounded-2xl p-6 overflow-x-auto'>
                <table className='min-w-full divide-y divide-gray-300'>
                  <thead className='bg-gray-100'>
                    <tr>
                      <th className='px-4 py-3 text-left text-sm font-bold text-gray-800'>
                        Metric
                      </th>
                      <th className='px-4 py-3 text-left text-sm font-bold text-gray-800'>
                        Importance
                      </th>
                      <th className='px-4 py-3 text-left text-sm font-bold text-gray-800'>
                        Ideal Value
                      </th>
                      <th className='px-4 py-3 text-left text-sm font-bold text-gray-800'>
                        Why It Matters
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 text-sm text-gray-700'>
                    {productCriteria.map((item, index) => (
                      <tr key={index}>
                        <td className='px-4 py-3 font-semibold'>
                          {item.metric}
                        </td>
                        <td className='px-4 py-3 text-indigo-600'>
                          {item.importance}
                        </td>
                        <td className='px-4 py-3 text-green-600'>
                          {item.ideal}
                        </td>
                        <td className='px-4 py-3'>{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Contact Section */}
            <div id='contact-section' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-headset text-white text-lg'></i>
                </div>
                Marketplace Assistance
              </h2>

              <div className='bg-white border border-gray-200 rounded-3xl p-8 shadow-lg'>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  Need personalized advice on product selection for your
                  specific audience? Consult our Market Analyst team:
                </p>

                <div className='grid md:grid-cols-3 gap-6'>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-envelope text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Analyst Email
                    </h4>
                    <p className='text-[#6366F1]'>marketplace@Sholaka.com</p>
                  </div>

                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#8B5CF6] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-magnifying-glass-chart text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Niche Deep Dives
                    </h4>
                    <p className='text-[#8B5CF6]'>Download PDF Reports</p>
                  </div>

                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#EC4899] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-comment-dollar text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Top 100 V-Rate List
                    </h4>
                    <p className='text-[#EC4899]'>See Today's Movers</p>
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

export default BrowseProducts;
