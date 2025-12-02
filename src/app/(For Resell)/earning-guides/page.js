import React from "react";

const EarningsGuide = () => {
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
                FINANCE & ACCOUNTING
              </span>
            </div>
            <h1 className='text-5xl font-bold text-gray-900 mb-4'>
              The Complete Reseller Payout and Tax Guide
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Understand the life cycle of a commission, from pending sale to
              cleared cash, and ensure full compliance for hassle-free business
              operation.
            </p>
            <div className='flex items-center justify-center mt-6 text-sm text-gray-500'>
              <span>Last updated: December 3, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id='earnings-guide-content' className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='prose prose-lg max-w-none'>
            {/* Overview & Calculation */}
            <div id='overview-section' className='mb-12'>
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 mb-8'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center flex-shrink-0'>
                    <i className='fa-solid fa-calculator text-white text-xl'></i>
                  </div>
                  <div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                      Detailed Commission Calculation
                    </h2>
                    <p className='text-gray-700 leading-relaxed'>
                      Commission is calculated using the formula: $$ \text
                      {"Commission"} = (\text{"Product Price"} - \text
                      {"Discounts"}) \times \text{"Commission Rate"} $$
                      **Crucial Note:** Commissions are *not* calculated on
                      shipping fees, taxes (GST/VAT), or any associated customs
                      charges. Commissions are retroactively reversed for any
                      sales that result in a full customer refund.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payout Details - Expanded */}
            <div id='payout-details' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-clock-rotate-left text-white text-lg'></i>
                </div>
                Understanding Clearance and Payout Cycles
              </h2>
              <div className='space-y-6'>
                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    The Commission Status Ladder
                  </h3>
                  <ul className='list-disc list-inside space-y-1 text-gray-700 ml-4'>
                    <li>**Pending:** Sale placed, awaiting shipping.</li>
                    <li>**In-Transit:** Sale shipped, waiting for delivery.</li>
                    <li>
                      **Hold:** Delivered, awaiting expiration of the 7-day
                      return period.
                    </li>
                    <li>**Cleared:** Funds available for payout.</li>
                  </ul>
                  <p className='text-sm text-red-600 mt-2'>
                    Maximum hold time is 15 days from the ship date to guarantee
                    customer satisfaction.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    Bi-Weekly Payout Schedule
                  </h3>
                  <p className='text-gray-700'>
                    Payouts are initiated every **Tuesday and Friday** at 3:00
                    PM EST. Ensure your balance exceeds the \$50 minimum
                    threshold. If a payout date falls on a public holiday,
                    processing will occur on the next business day.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6 shadow-sm'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    E-Wallet and Local Bank Options
                  </h3>
                  <p className='text-gray-700'>
                    We support direct transfers to major international E-Wallets
                    (e.g., PayPal, Payoneer) and direct NEFT/ACH transfers to
                    local bank accounts in over 50 countries. Ensure all KYC/AML
                    documentation is uploaded in the Finance Settings for
                    verification.
                  </p>
                </div>
              </div>
            </div>

            {/* Tax and Compliance - Expanded */}
            <div id='tax-compliance' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#EC4899] to-[#6366F1] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-gavel text-white text-lg'></i>
                </div>
                Tax Liability and Documentation
              </h2>
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    **Annual Statements:** Sholaka generates a consolidated
                    earnings statement (similar to 1099 or T4A forms, depending
                    on your region) every January for the prior fiscal year.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    **Self-Reporting:** As an independent contractor, you are
                    responsible for paying all applicable income and
                    self-employment taxes. We do not withhold taxes unless
                    required by local law (e.g., specific residency rules).
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    **Invoice Generation:** The platform automatically generates
                    a commission invoice for you on every cleared sale. You can
                    download these in bulk for your records.
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
                Financial Support
              </h2>

              <div className='bg-white border border-gray-200 rounded-3xl p-8 shadow-lg'>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  For specific inquiries about your payout status, statements,
                  or tax forms, please contact our Finance Team:
                </p>

                <div className='grid md:grid-cols-3 gap-6'>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-envelope text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Email Support
                    </h4>
                    <p className='text-[#6366F1]'>payouts@Sholaka.com</p>
                  </div>

                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#8B5CF6] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-hand-holding-dollar text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Tax Form Requests
                    </h4>
                    <p className='text-[#8B5CF6]'>Request Form</p>
                  </div>

                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#EC4899] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-bank text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Account Verification
                    </h4>
                    <p className='text-[#EC4899]'>Verify KYC/AML</p>
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

export default EarningsGuide;
