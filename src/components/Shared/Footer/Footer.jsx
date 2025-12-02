import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id='footer'
      className='bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white'
    >
      <div className='max-w-7xl mx-auto px-6 py-16'>
        <div className='grid md:grid-cols-5 gap-12 mb-12'>
          {/* Logo + About */}
          <div className='md:col-span-2'>
            <div className='flex items-center space-x-2 mb-6'>
              <div className='w-12 h-12 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center'>
                <i className='fa-solid fa-share-nodes text-white text-2xl'></i>
              </div>
              <span className='text-3xl font-bold'>Sholaka</span>
            </div>

            <p className='text-gray-300 leading-relaxed mb-6'>
              The ultimate platform connecting sellers and resellers. Sell more,
              earn more, without inventory.
            </p>

            <div className='flex items-center space-x-4'>
              <Link
                href='#'
                className='w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition'
              >
                <i className='fa-brands fa-facebook text-lg'></i>
              </Link>
              <Link
                href='#'
                className='w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition'
              >
                <i className='fa-brands fa-instagram text-lg'></i>
              </Link>
              <Link
                href='#'
                className='w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition'
              >
                <i className='fa-brands fa-twitter text-lg'></i>
              </Link>
              <Link
                href='#'
                className='w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition'
              >
                <i className='fa-brands fa-linkedin text-lg'></i>
              </Link>
              <Link
                href='#'
                className='w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition'
              >
                <i className='fa-brands fa-youtube text-lg'></i>
              </Link>
            </div>
          </div>

          {/* Sellers Links */}
          <div>
            <h4 className='text-lg font-bold mb-4'>For Sellers</h4>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/how-to-sell'
                  className='text-gray-300 hover:text-white transition'
                >
                  How to Sell
                </Link>
              </li>
              <li>
                <Link
                  href='/how-to-upload-products'
                  className='text-gray-300 hover:text-white transition'
                >
                  How to Upload Products
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-gray-300 hover:text-white transition'
                >
                  Seller Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href='/commission-setup'
                  className='text-gray-300 hover:text-white transition'
                >
                  Commission Setup
                </Link>
              </li>
              <li>
                <Link
                  href='/success-stories'
                  className='text-gray-300 hover:text-white transition'
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Resellers Links */}
          <div>
            <h4 className='text-lg font-bold mb-4'>For Resellers</h4>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/how-to-resell'
                  className='text-gray-300 hover:text-white transition'
                >
                  How to Resell
                </Link>
              </li>
              <li>
                <Link
                  href='/browse-products'
                  className='text-gray-300 hover:text-white transition'
                >
                  Browse Products
                </Link>
              </li>
              <li>
                <Link
                  href='/reseller-dashboard'
                  className='text-gray-300 hover:text-white transition'
                >
                  Reseller Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href='/marketing-resources'
                  className='text-gray-300 hover:text-white transition'
                >
                  Marketing Resources
                </Link>
              </li>
              <li>
                <Link
                  href='/earning-guides'
                  className='text-gray-300 hover:text-white transition'
                >
                  Earnings Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className='text-lg font-bold mb-4'>Company</h4>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/about-us'
                  className='text-gray-300 hover:text-white transition'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-300 hover:text-white transition'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='/careers'
                  className='text-gray-300 hover:text-white transition'
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href='/blogs'
                  className='text-gray-300 hover:text-white transition'
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-white/10 pt-8'>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='flex flex-wrap items-center gap-6 text-sm text-gray-400'>
              <Link
                href='/privacy-policy'
                className='hover:text-white transition'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms-of-service'
                className='hover:text-white transition'
              >
                Terms of Service
              </Link>
              <Link
                href='/refund-policy'
                className='hover:text-white transition'
              >
                Refund Policy
              </Link>
              <Link
                href='/shipping-policy'
                className='hover:text-white transition'
              >
                Shipping Policy
              </Link>
            </div>

            <div className='text-sm text-gray-400 md:text-right'>
              © 2025 Sholaka. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
