import React from "react";

const CommissionSetup = () => {
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
                FINANCE
              </span>
            </div>
            <h1 className='text-5xl font-bold text-gray-900 mb-4'>
              Reseller Commission Setup
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Learn how to define, manage, and optimize the commission structure
              for your products to attract top resellers.
            </p>
            <div className='flex items-center justify-center mt-6 text-sm text-gray-500'>
              <span>Last updated: December 3, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id='commission-setup-content' className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='prose prose-lg max-w-none'>
            {/* Overview */}
            <div id='overview-section' className='mb-12'>
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 mb-8'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center flex-shrink-0'>
                    <i className='fa-solid fa-percent text-white text-xl'></i>
                  </div>
                  <div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                      Overview of Commissions
                    </h2>
                    <p className='text-gray-700 leading-relaxed'>
                      Commissions are the primary incentive for resellers to
                      promote your products. A well-structured commission rate
                      can significantly boost your product's visibility and
                      sales velocity across the Sholaka network.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps to Set Commissions */}
            <div id='steps-to-set-commissions' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-chart-line text-white text-lg'></i>
                </div>
                How to Define Your Commission
              </h2>
              <div className='space-y-6'>
                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    1. Access Commission Management
                  </h3>
                  <p className='text-gray-700'>
                    Navigate to your **Seller Dashboard**, then select
                    **'Products'** and choose the item you wish to edit, or use
                    the **'Commission Settings'** tab for bulk updates.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    2. Set the Base Rate
                  </h3>
                  <p className='text-gray-700'>
                    Enter the **percentage** of the final selling price you will
                    pay out as commission. This rate is visible to all resellers
                    and applies to every successful sale.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    3. Define Tiered Structure (Optional)
                  </h3>
                  <p className='text-gray-700'>
                    You can set up **tiered commissions** based on sales volume
                    or reseller performance (e.g., 5% for standard, 8% for
                    top-tier resellers who meet monthly targets).
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    4. Review the Commission Calculation
                  </h3>
                  <p className='text-gray-700'>
                    The platform will display an **estimated net profit** per
                    unit based on your price and commission rate. Ensure the
                    margin is profitable for your business.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    5. Save and Publish
                  </h3>
                  <p className='text-gray-700'>
                    Once satisfied, click **'Save Changes'**. The updated
                    commission rate will immediately apply to new sales
                    generated by resellers.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    6. Monitor Performance
                  </h3>
                  <p className='text-gray-700'>
                    Use the **Analytics Dashboard** to track how changes in
                    commission impact reseller engagement and overall sales
                    volume.
                  </p>
                </div>
              </div>
            </div>

            {/* Commission Policy */}
            <div id='commission-policy' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#EC4899] to-[#6366F1] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-file-contract text-white text-lg'></i>
                </div>
                Commission Policy & Rules
              </h2>
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Commissions are calculated based on the **final product
                    price** (excluding taxes and shipping).
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    A commission is only paid out upon **successful delivery and
                    completion** of the order (no returns/cancellations).
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    **Minimum Commission Rate:** All products must offer a
                    minimum commission of **2%** to be listed on the Reseller
                    Marketplace.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Sellers can **change commission rates anytime**, but changes
                    are only applied to future orders.
                  </li>
                </ul>
              </div>
            </div>

            {/* Commission Calculation Example */}
            <div id='calculation-example' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-calculator text-white text-lg'></i>
                </div>
                Calculation Example
              </h2>
              <div className='bg-gray-50 rounded-2xl p-6'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-100'>
                    <tr>
                      <th className='px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider'>
                        Metric
                      </th>
                      <th className='px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider'>
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200'>
                    <tr>
                      <td className='px-4 py-3 whitespace-nowrap font-medium text-gray-900'>
                        Product Selling Price (A)
                      </td>
                      <td className='px-4 py-3 whitespace-nowrap text-gray-700'>
                        $100.00
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 whitespace-nowrap font-medium text-gray-900'>
                        Commission Rate Set (B)
                      </td>
                      <td className='px-4 py-3 whitespace-nowrap text-gray-700'>
                        15%
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 whitespace-nowrap font-medium text-gray-900'>
                        Reseller Commission (A * B)
                      </td>
                      <td className='px-4 py-3 whitespace-nowrap text-green-600 font-bold'>
                        $15.00
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 whitespace-nowrap font-medium text-gray-900'>
                        Sholaka Platform Fee (3%)
                      </td>
                      <td className='px-4 py-3 whitespace-nowrap text-gray-700'>
                        $3.00
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 whitespace-nowrap font-medium text-gray-900'>
                        Your Net Payout
                      </td>
                      <td className='px-4 py-3 whitespace-nowrap text-indigo-600 font-bold'>
                        $82.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Support */}
            <div id='contact-section' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-headset text-white text-lg'></i>
                </div>
                Support for Commission Setup
              </h2>

              <div className='bg-white border border-gray-200 rounded-3xl p-8 shadow-lg'>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  For assistance with calculating margins, setting tiered rates,
                  or understanding payment terms, contact our financial support
                  team:
                </p>

                <div className='grid md:grid-cols-3 gap-6'>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-envelope text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>Email</h4>
                    <p className='text-[#6366F1]'>finance@Sholaka.com</p>
                  </div>

                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#8B5CF6] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-file-invoice-dollar text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Billing FAQs
                    </h4>
                    <p className='text-[#8B5CF6]'>/help/billing</p>
                  </div>

                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#EC4899] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-users text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Seller Community
                    </h4>
                    <p className='text-[#EC4899]'>/community/sellers</p>
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

export default CommissionSetup;
