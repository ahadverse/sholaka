import React from "react";

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your information.
            </p>
            <div className='flex items-center justify-center mt-6 text-sm text-gray-500'>
              <span>Last updated: December 1, 2024</span>
            </div>
          </div>
        </div>
      </section>

      <main id='privacy-content' className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='prose prose-lg max-w-none'>
            <div id='overview-section' className='mb-12'>
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 mb-8'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center flex-shrink-0'>
                    <i className='fa-solid fa-shield-halved text-white text-xl'></i>
                  </div>
                  <div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                      Overview
                    </h2>
                    <p className='text-gray-700 leading-relaxed'>
                      At Sholaka, we are committed to protecting your privacy
                      and ensuring the security of your personal information.
                      This Privacy Policy describes how we collect, use,
                      disclose, and safeguard your information when you use our
                      platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id='information-collection' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-database text-white text-lg'></i>
                </div>
                Information We Collect
              </h2>

              <div className='space-y-6'>
                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    Personal Information
                  </h3>
                  <ul className='space-y-2 text-gray-700'>
                    <li className='flex items-center'>
                      <i className='fa-solid fa-check text-[#6366F1] mr-2'></i>
                      Name and contact information
                    </li>
                    <li className='flex items-center'>
                      <i className='fa-solid fa-check text-[#6366F1] mr-2'></i>
                      Email address and phone number
                    </li>
                    <li className='flex items-center'>
                      <i className='fa-solid fa-check text-[#6366F1] mr-2'></i>
                      Business information (for sellers)
                    </li>
                    <li className='flex items-center'>
                      <i className='fa-solid fa-check text-[#6366F1] mr-2'></i>
                      Payment and banking details
                    </li>
                  </ul>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    Platform Usage Data
                  </h3>
                  <ul className='space-y-2 text-gray-700'>
                    <li className='flex items-center'>
                      <i className='fa-solid fa-check text-[#8B5CF6] mr-2'></i>
                      Product views and interactions
                    </li>
                    <li className='flex items-center'>
                      <i className='fa-solid fa-check text-[#8B5CF6] mr-2'></i>
                      Sales and commission data
                    </li>
                    <li className='flex items-center'>
                      <i className='fa-solid fa-check text-[#8B5CF6] mr-2'></i>
                      Communication preferences
                    </li>
                    <li className='flex items-center'>
                      <i className='fa-solid fa-check text-[#8B5CF6] mr-2'></i>
                      Device and browser information
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id='information-usage' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#EC4899] to-[#6366F1] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-gear text-white text-lg'></i>
                </div>
                How We Use Your Information
              </h2>

              <div className='grid md:grid-cols-2 gap-6'>
                <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                    Platform Operations
                  </h3>
                  <ul className='space-y-3 text-gray-700'>
                    <li className='flex items-start'>
                      <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                      Account creation and management
                    </li>
                    <li className='flex items-start'>
                      <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                      Processing transactions and payments
                    </li>
                    <li className='flex items-start'>
                      <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                      Providing customer support
                    </li>
                    <li className='flex items-start'>
                      <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                      Platform security and fraud prevention
                    </li>
                  </ul>
                </div>

                <div className='bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                    Communication & Marketing
                  </h3>
                  <ul className='space-y-3 text-gray-700'>
                    <li className='flex items-start'>
                      <i className='fa-solid fa-circle-check text-[#8B5CF6] mr-3 mt-1 text-sm'></i>
                      Sending important updates and notifications
                    </li>
                    <li className='flex items-start'>
                      <i className='fa-solid fa-circle-check text-[#8B5CF6] mr-3 mt-1 text-sm'></i>
                      Marketing communications (with consent)
                    </li>
                    <li className='flex items-start'>
                      <i className='fa-solid fa-circle-check text-[#8B5CF6] mr-3 mt-1 text-sm'></i>
                      Platform improvements and analytics
                    </li>
                    <li className='flex items-start'>
                      <i className='fa-solid fa-circle-check text-[#8B5CF6] mr-3 mt-1 text-sm'></i>
                      Compliance with legal requirements
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id='data-protection' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-lock text-white text-lg'></i>
                </div>
                Data Protection & Security
              </h2>

              <div className='bg-gradient-to-br from-gray-50 to-indigo-50 rounded-3xl p-8'>
                <div className='grid md:grid-cols-3 gap-6'>
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg'>
                      <i className='fa-solid fa-shield-halved text-[#6366F1] text-2xl'></i>
                    </div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                      SSL Encryption
                    </h3>
                    <p className='text-gray-600 text-sm'>
                      All data transmission is protected with industry-standard
                      SSL encryption.
                    </p>
                  </div>

                  <div className='text-center'>
                    <div className='w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg'>
                      <i className='fa-solid fa-server text-[#8B5CF6] text-2xl'></i>
                    </div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                      Secure Storage
                    </h3>
                    <p className='text-gray-600 text-sm'>
                      Your data is stored on secure servers with regular backups
                      and monitoring.
                    </p>
                  </div>

                  <div className='text-center'>
                    <div className='w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg'>
                      <i className='fa-solid fa-user-shield text-[#EC4899] text-2xl'></i>
                    </div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                      Access Control
                    </h3>
                    <p className='text-gray-600 text-sm'>
                      Strict access controls ensure only authorized personnel
                      can access your data.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id='user-rights' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-user-check text-white text-lg'></i>
                </div>
                Your Rights & Choices
              </h2>

              <div className='space-y-6'>
                <div className='border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3 flex items-center'>
                    <i className='fa-solid fa-eye text-[#6366F1] mr-3'></i>
                    Access Your Data
                  </h3>
                  <p className='text-gray-700'>
                    You have the right to request access to the personal
                    information we hold about you.
                  </p>
                </div>

                <div className='border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3 flex items-center'>
                    <i className='fa-solid fa-edit text-[#8B5CF6] mr-3'></i>
                    Update Information
                  </h3>
                  <p className='text-gray-700'>
                    You can update your personal information anytime through
                    your account settings.
                  </p>
                </div>

                <div className='border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3 flex items-center'>
                    <i className='fa-solid fa-trash text-[#EC4899] mr-3'></i>
                    Delete Account
                  </h3>
                  <p className='text-gray-700'>
                    You may request deletion of your account and associated
                    data, subject to legal requirements.
                  </p>
                </div>

                <div className='border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3 flex items-center'>
                    <i className='fa-solid fa-envelope-open text-[#6366F1] mr-3'></i>
                    Communication Preferences
                  </h3>
                  <p className='text-gray-700'>
                    You can opt out of marketing communications while still
                    receiving essential service updates.
                  </p>
                </div>
              </div>
            </div>

            <div id='cookies-section' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#EC4899] to-[#6366F1] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-cookie-bite text-white text-lg'></i>
                </div>
                Cookies & Tracking
              </h2>

              <div className='bg-gradient-to-br from-pink-50 to-indigo-50 rounded-3xl p-8'>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  We use cookies and similar tracking technologies to enhance
                  your experience on our platform. These help us:
                </p>

                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-3'>
                      Essential Cookies
                    </h4>
                    <ul className='space-y-2 text-gray-700'>
                      <li className='flex items-center'>
                        <i className='fa-solid fa-check text-[#6366F1] mr-2'></i>
                        Keep you logged in
                      </li>
                      <li className='flex items-center'>
                        <i className='fa-solid fa-check text-[#6366F1] mr-2'></i>
                        Remember your preferences
                      </li>
                      <li className='flex items-center'>
                        <i className='fa-solid fa-check text-[#6366F1] mr-2'></i>
                        Ensure platform security
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className='font-semibold text-gray-900 mb-3'>
                      Analytics Cookies
                    </h4>
                    <ul className='space-y-2 text-gray-700'>
                      <li className='flex items-center'>
                        <i className='fa-solid fa-check text-[#8B5CF6] mr-2'></i>
                        Understand platform usage
                      </li>
                      <li className='flex items-center'>
                        <i className='fa-solid fa-check text-[#8B5CF6] mr-2'></i>
                        Improve our services
                      </li>
                      <li className='flex items-center'>
                        <i className='fa-solid fa-check text-[#8B5CF6] mr-2'></i>
                        Optimize user experience
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id='contact-section' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-headset text-white text-lg'></i>
                </div>
                Contact Us
              </h2>

              <div className='bg-white border border-gray-200 rounded-3xl p-8 shadow-lg'>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  If you have any questions about this Privacy Policy or how we
                  handle your data, please don't hesitate to contact us:
                </p>

                <div className='grid md:grid-cols-3 gap-6'>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-envelope text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>Email</h4>
                    <p className='text-[#6366F1]'>privacy@Sholaka.com</p>
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

export default PrivacyPolicy;
