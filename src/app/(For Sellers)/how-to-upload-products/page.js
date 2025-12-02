import React from "react";

const UploadProductGuidelines = () => {
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
                GUIDELINES
              </span>
            </div>
            <h1 className='text-5xl font-bold text-gray-900 mb-4'>
              Product Upload Guidelines
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Follow these guidelines to create high-quality, approved product
              listings that attract resellers.
            </p>
            <div className='flex items-center justify-center mt-6 text-sm text-gray-500'>
              <span>Last updated: December 3, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id='upload-guidelines-content' className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='prose prose-lg max-w-none'>
            {/* Overview */}
            <div id='overview-section' className='mb-12'>
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 mb-8'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center flex-shrink-0'>
                    <i className='fa-solid fa-cloud-upload-alt text-white text-xl'></i>
                  </div>
                  <div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                      Overview
                    </h2>
                    <p className='text-gray-700 leading-relaxed'>
                      High-quality product listings are key to sales success.
                      Please adhere to our standards for images, descriptions,
                      and compliance to ensure your products are approved and
                      appealing to resellers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps to Upload */}
            <div id='steps-to-upload' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-pen-to-square text-white text-lg'></i>
                </div>
                Key Steps for Listing
              </h2>
              <div className='space-y-6'>
                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    1. Product Title & Category
                  </h3>
                  <p className='text-gray-700'>
                    Your title must be clear, concise, and include essential
                    keywords (Brand + Product Type + Key Feature). Select the
                    most accurate category and subcategory.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    2. High-Quality Images
                  </h3>
                  <p className='text-gray-700'>
                    Upload at least **3 high-resolution images** (min.
                    1000x1000px). The main image should have a **pure white
                    background**. Show the product from different angles and
                    include scale/lifestyle shots.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    3. Detailed Description
                  </h3>
                  <p className='text-gray-700'>
                    Provide a **comprehensive and truthful** description.
                    Include features, benefits, specifications (materials, size,
                    weight), and what makes your product unique. Use bullet
                    points for readability.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    4. Pricing and Inventory
                  </h3>
                  <p className='text-gray-700'>
                    Set a **competitive selling price** (M.R.P.) and an accurate
                    **inventory count**. Clearly define the **reseller
                    commission** you offer.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    5. Shipping and Logistics
                  </h3>
                  <p className='text-gray-700'>
                    Enter precise product dimensions and weight for accurate
                    shipping calculations. Specify your processing/dispatch
                    time.
                  </p>
                </div>

                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    6. Compliance and Policy
                  </h3>
                  <p className='text-gray-700'>
                    Ensure your product adheres to all Sholaka policies,
                    including prohibited items and safety standards. Listings
                    will be reviewed for compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Specifications */}
            <div id='image-specifications' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#EC4899] to-[#6366F1] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-image text-white text-lg'></i>
                </div>
                Image Specifications
              </h2>
              <div className='bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    **Resolution:** Minimum 1000 x 1000 pixels is required for
                    zoom feature.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    **Main Image:** Must be on a **pure white (RGB 255, 255,
                    255)** background.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    **No Watermarks/Text:** Images should be free of text,
                    logos, or watermarks (except a subtle brand logo).
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    **Product Focus:** The product must fill at least 85% of the
                    image frame.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#6366F1] mr-3 mt-1 text-sm'></i>
                    **Format:** JPEG (.jpg) is preferred; PNG (.png) is also
                    accepted.
                  </li>
                </ul>
              </div>
            </div>

            {/* Prohibited Content */}
            <div id='prohibited-content' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-ban text-white text-lg'></i>
                </div>
                Prohibited Content
              </h2>
              <div className='bg-gray-50 rounded-2xl p-6'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-xmark text-[#8B5CF6] mr-3 mt-1 text-sm'></i>
                    Illegal, counterfeit, or restricted items.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-xmark text-[#8B5CF6] mr-3 mt-1 text-sm'></i>
                    Products with explicit sexual, violent, or hate-related
                    content.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-xmark text-[#8B5CF6] mr-3 mt-1 text-sm'></i>
                    False, misleading, or exaggerated claims (e.g., medical
                    cures).
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-xmark text-[#8B5CF6] mr-3 mt-1 text-sm'></i>
                    Items that violate intellectual property rights (trademarks,
                    copyrights).
                  </li>
                </ul>
              </div>
            </div>

            {/* Review and Approval */}
            <div id='review-approval' className='mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
                <div className='w-10 h-10 bg-gradient-to-br from-[#EC4899] to-[#6366F1] rounded-lg flex items-center justify-center mr-4'>
                  <i className='fa-solid fa-shield-alt text-white text-lg'></i>
                </div>
                Review and Approval
              </h2>
              <div className='bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#EC4899] mr-3 mt-1 text-sm'></i>
                    All new listings go through an **approval process** to
                    ensure guideline compliance.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#EC4899] mr-3 mt-1 text-sm'></i>
                    Review typically takes **24-48 hours**. You'll be notified
                    of approval or rejection.
                  </li>
                  <li className='flex items-start'>
                    <i className='fa-solid fa-circle-check text-[#EC4899] mr-3 mt-1 text-sm'></i>
                    If rejected, you'll receive feedback to **edit and
                    resubmit** the listing.
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
                Need Help with Uploading?
              </h2>

              <div className='bg-white border border-gray-200 rounded-3xl p-8 shadow-lg'>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  If you have any questions regarding product specifications,
                  listing errors, or compliance, please reach out to our Seller
                  Support Team:
                </p>

                <div className='grid md:grid-cols-3 gap-6'>
                  <div className='text-center'>
                    <div className='w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center mx-auto mb-3'>
                      <i className='fa-solid fa-envelope text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>Email</h4>
                    <p className='text-[#6366F1]'>seller.help@Sholaka.com</p>
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
                      <i className='fa-solid fa-file-alt text-white'></i>
                    </div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Help Center
                    </h4>
                    <p className='text-[#EC4899]'>/support/products</p>
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

export default UploadProductGuidelines;
