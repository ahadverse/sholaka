import React from "react";

const TermsOfService = () => {
  return (
    <div>
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
                LEGAL
              </span>
            </div>
            <h1 className='text-5xl font-bold text-gray-900 mb-4'>
              Terms of Service
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Please read these Terms of Service carefully before using Sholaka.
              They govern your use of our platform and services.
            </p>
            <div className='flex items-center justify-center mt-6 text-sm text-gray-500'>
              <span>Last updated: December 1, 2024</span>
            </div>
          </div>
        </div>
      </section>

      <main id='tos-content' className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='prose prose-lg max-w-none'>
            {/* Introduction */}
            <div id='introduction-section' className='mb-12'>
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 mb-8'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center flex-shrink-0'>
                    <i className='fa-solid fa-file-contract text-white text-xl'></i>
                  </div>
                  <div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                      Introduction
                    </h2>
                    <p className='text-gray-700 leading-relaxed'>
                      Welcome to Sholaka! These Terms of Service outline the
                      rules and regulations for using our platform. By accessing
                      or using Sholaka, you agree to be bound by these terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Account & Usage */}
            <div id='account-usage' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-user-check text-white text-lg'></i>
                </div>
                Account & Platform Usage
              </h2>

              <div className='space-y-6'>
                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    Account Registration
                  </h3>
                  <p className='text-gray-700'>
                    Users must provide accurate information when creating an
                    account. You are responsible for maintaining the
                    confidentiality of your account credentials.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    Platform Use
                  </h3>
                  <p className='text-gray-700'>
                    You agree to use Sholaka in compliance with applicable laws
                    and regulations, and not for any unauthorized or harmful
                    purposes.
                  </p>
                </div>
              </div>
            </div>

            {/* Payments & Fees */}
            <div id='payments-fees' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#EC4899] to-[#6366F1] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-credit-card text-white text-lg'></i>
                </div>
                Payments & Fees
              </h2>

              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Sellers are responsible for any fees associated with listing
                    or selling products.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Payment processing is handled securely through our platform.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Users must ensure timely payment for any services or
                    purchases.
                  </li>
                </ul>
              </div>
            </div>

            {/* Prohibited Activities */}
            <div id='prohibited-activities' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-ban text-white text-lg'></i>
                </div>
                Prohibited Activities
              </h2>

              <div className='bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-xmark text-[#EC4899] mr-3 mt-1 text-sm'></i>
                    No fraudulent, harmful, or illegal activities on the
                    platform.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-xmark text-[#EC4899] mr-3 mt-1 text-sm'></i>
                    Do not infringe on the intellectual property rights of
                    others.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-xmark text-[#EC4899] mr-3 mt-1 text-sm'></i>
                    Do not attempt to bypass security or access restricted
                    areas.
                  </li>
                </ul>
              </div>
            </div>

            {/* Termination */}
            <div id='termination' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-user-slash text-white text-lg'></i>
                </div>
                Termination
              </h2>

              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6'>
                <p className='text-gray-700'>
                  We reserve the right to suspend or terminate accounts that
                  violate these Terms of Service or engage in prohibited
                  behavior. Termination may result in loss of access to the
                  platform and associated data.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div id='contact-section' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-headset text-white text-lg'></i>
                </div>
                Contact Us
              </h2>

              <div className='bg-white border border-gray-200 rounded-3xl p-8 shadow-lg'>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  If you have any questions about these Terms of Service, please
                  contact us:
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

export default TermsOfService;
