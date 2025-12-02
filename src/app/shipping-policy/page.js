import React from "react";

const ShippingPolicy = () => {
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
              Shipping Policy
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Learn everything about our shipping methods, timelines, costs, and
              tracking procedures to ensure your order arrives safely and on
              time.
            </p>
            <div className='flex items-center justify-center mt-6 text-sm text-gray-500'>
              <span>Last updated: December 3, 2025</span>
            </div>
          </div>
        </div>
      </section>

      <main id='shipping-content' className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='prose prose-lg max-w-none'>
            {/* Overview */}
            <div id='overview-section' className='mb-12'>
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 mb-8'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center flex-shrink-0'>
                    <i className='fa-solid fa-truck-fast text-white text-xl'></i>
                  </div>
                  <div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                      Overview
                    </h2>
                    <p className='text-gray-700 leading-relaxed'>
                      At Sholaka, we are committed to delivering your orders
                      safely, quickly, and reliably. Our Shipping Policy
                      explains the shipping methods, estimated delivery times,
                      costs, tracking, and procedures for handling delays or
                      damages.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Methods */}
            <div id='methods' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-box text-white text-lg'></i>
                </div>
                Shipping Methods
              </h2>
              <div className='space-y-6'>
                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    Standard Shipping
                  </h3>
                  <p className='text-gray-700'>
                    Standard shipping is the most economical option, typically
                    taking 5-7 business days for domestic orders. Tracking
                    information is provided once the order is dispatched.
                  </p>
                </div>
                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    Express Shipping
                  </h3>
                  <p className='text-gray-700'>
                    Express shipping ensures faster delivery within 2-3 business
                    days domestically. Additional charges apply based on the
                    order size and weight.
                  </p>
                </div>
                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    International Shipping
                  </h3>
                  <p className='text-gray-700'>
                    International shipping is available to select countries.
                    Delivery times vary by destination, customs processing, and
                    local carriers. Please allow 7-21 business days depending on
                    the region.
                  </p>
                </div>
              </div>
            </div>

            {/* Shipping Costs */}
            <div id='costs' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#EC4899] to-[#6366F1] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-dollar-sign text-white text-lg'></i>
                </div>
                Shipping Costs
              </h2>
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Standard shipping costs are calculated based on weight and
                    location.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Express shipping charges are higher due to faster delivery
                    times.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Free shipping may be available for orders above a certain
                    amount.
                  </li>
                </ul>
              </div>
            </div>

            {/* Tracking */}
            <div id='tracking' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-location-dot text-white text-lg'></i>
                </div>
                Tracking Your Order
              </h2>
              <div className='bg-gray-50 rounded-2xl p-6'>
                <p className='text-gray-700 mb-4'>
                  Once your order is shipped, a tracking number is provided via
                  email. You can track your package in real-time through our
                  platform or the carrier's website.
                </p>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#8B5CF6] mr-3 mt-1 text-sm'></i>
                    Track your shipment using the provided tracking number.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#8B5CF6] mr-3 mt-1 text-sm'></i>
                    Delivery status updates are sent via email and
                    notifications.
                  </li>
                </ul>
              </div>
            </div>

            {/* Delays & Damages */}
            <div id='delays' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-triangle-exclamation text-white text-lg'></i>
                </div>
                Delays & Damages
              </h2>
              <div className='bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#EC4899] mr-3 mt-1 text-sm'></i>
                    In case of delays due to weather, carrier issues, or
                    customs, we notify customers immediately.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#EC4899] mr-3 mt-1 text-sm'></i>
                    Damaged or lost packages are handled through our claims
                    process for replacements or refunds.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#EC4899] mr-3 mt-1 text-sm'></i>
                    Customers should report damages within 48 hours of delivery
                    for prompt resolution.
                  </li>
                </ul>
              </div>
            </div>

            {/* International Shipping */}
            <div id='international' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-globe text-white text-lg'></i>
                </div>
                International Shipping
              </h2>
              <div className='bg-gray-50 rounded-2xl p-6'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Customs duties, taxes, and import fees may apply for
                    international orders.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Delivery timelines vary based on destination and local
                    postal services.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    Customers are responsible for providing accurate shipping
                    information to avoid delays.
                  </li>
                </ul>
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
                  If you have any questions about shipping, delays, or
                  international orders, please contact us:
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

export default ShippingPolicy;
