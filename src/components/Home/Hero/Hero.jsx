export default function Hero() {
  return (
    <section
      id='hero-section'
      className='relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 h-full lg:h-[700px] flex items-center overflow-hidden'
    >
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-20 w-72 h-72 bg-[#6366F1] rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-20 w-96 h-96 bg-[#8B5CF6] rounded-full blur-3xl'></div>
      </div>
      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-8'>
            <div className='inline-block px-4 py-2 bg-white rounded-full shadow-sm'>
              <span className='text-[#6366F1] font-semibold text-sm'>
                🚀 Platform for Sellers &amp; Resellers
              </span>
            </div>
            <h1 className='text-6xl font-bold text-gray-900 leading-tight'>
              Sell More, Earn More
              <span className='bg-gradient-to-r from-[#6366F1] to-[#EC4899] bg-clip-text text-transparent'>
                Without Inventory
              </span>
            </h1>
            <p className='text-xl text-gray-600 leading-relaxed'>
              One platform for Sellers to upload products and Resellers to earn
              by sharing.
            </p>
            <div className='flex flex-wrap gap-4'>
              <button className='bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition transform'>
                <i className='fa-solid fa-box mr-2'></i>Start Selling
              </button>
              <button className='bg-white text-[#6366F1] px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl border-2 border-[#6366F1] hover:scale-105 transition transform'>
                <i className='fa-solid fa-users mr-2'></i>Become a Reseller
              </button>
            </div>
            <div className='flex items-center space-x-8 pt-4'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-gray-900'>50K+</div>
                <div className='text-sm text-gray-600'>Active Sellers</div>
              </div>
              <div className='w-px h-12 bg-gray-300'></div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-gray-900'>200K+</div>
                <div className='text-sm text-gray-600'>Resellers</div>
              </div>
              <div className='w-px h-12 bg-gray-300'></div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-gray-900'>₹10Cr+</div>
                <div className='text-sm text-gray-600'>Paid Out</div>
              </div>
            </div>
          </div>
          <div className='relative'>
            <div className='relative z-10'>
              <img
                className='w-full h-auto rounded-3xl shadow-2xl'
                src='https://storage.googleapis.com/uxpilot-auth.appspot.com/8f004981bf-fdf815ef4f83939299ee.png'
                alt='modern 3D illustration of people sharing products online, e-commerce platform, vibrant purple and indigo colors, clean minimalist style'
              />
            </div>
            <div className='absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-3xl opacity-20 blur-xl'></div>
          </div>
        </div>
      </div>
    </section>
  );
}
