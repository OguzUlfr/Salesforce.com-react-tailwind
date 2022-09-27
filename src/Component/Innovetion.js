import React from 'react'

function Innovetion() {
  return (
    <div className='container mx-auto'>
      <h2 className='w-full text-center pt-[60px] pb-8 font-bold text-4xl text-mainDarkBlue'>Learn what Salesforce products can do for you.</h2>
      <div className='w-full grid grid-cols-4'>
        <a href='/' className=' p-5 mx-4 flex flex-col items-center'>
          <img src='https://www.salesforce.com/content/dam/web/en_us/www/images/home/php-products-4.png' alt=''/>
          <span className=' text-mainDarkBlue text-base font-bold mb-3 mt-10'>Small Business</span>
          <span className='text-center'>Sell smarter and provide support faster in a single app.</span>
          <button className=' my-4 h-10 px-6 bg-mainBlue text-white rounded'>WATCH DEMOS</button>
          <button className=' text-mainBlue font-semibold hover:text-mainDarkBlue'>LEARN MORE</button>
        </a>
        <a href='/' className=' p-5 mx-4 flex flex-col items-center'>
          <img src='https://www.salesforce.com/content/dam/web/en_us/www/images/home/product-sales.png' alt=''/>
          <span className=' text-mainDarkBlue text-base font-bold mb-3 mt-10'>Sales</span>
          <span className='text-center'>Close more deals and speed up growth with the #1 CRM.</span>
          <button className=' my-4 h-10 px-6 bg-mainBlue text-white rounded'>WATCH DEMOS</button>
          <button className=' text-mainBlue font-semibold hover:text-mainDarkBlue'>LEARN MORE</button>
        </a>
        <a href='/' className=' p-5 mx-4 flex flex-col items-center'>
          <img src='https://www.salesforce.com/content/dam/web/en_us/www/images/home/product-service.png' alt=''/>
          <span className=' text-mainDarkBlue text-base font-bold mb-3 mt-10'>Services</span>
          <span className='text-center'>Make customers happy faster and build loyalty with Service Cloud.</span>
          <button className=' my-4 h-10 px-6 bg-mainBlue text-white rounded'>WATCH DEMOS</button>
          <button className=' text-mainBlue font-semibold hover:text-mainDarkBlue'>LEARN MORE</button>
        </a>
        <a href='/' className=' p-5 mx-4 flex flex-col items-center'>
          <img src='https://www.salesforce.com/content/dam/web/en_us/www/images/home/php-products-7.png' alt=''/>
          <span className=' text-mainDarkBlue text-base font-bold mb-3 mt-10'>See all products.</span>
          <span className='text-center'>Dig into the full range of Customer 360 offerings.</span>
          <button className=' my-4 h-10 px-6 bg-mainBlue text-white rounded'>WATCH DEMOS</button>
          <button className=' text-mainBlue font-semibold hover:text-mainDarkBlue'>LEARN MORE</button>
        </a>
      </div>
      <h3 className='w-full text-center mt-10 mb-2 text-2xl font-semibold text-mainDarkBlue'>Find a perfectly tailored solution for any industry.</h3>
      <div className='w-full flex justify-center'><button className=' mx-4 my-3 h-11 px-6 rounded border border-mainBlue text-mainBlue hover:bg-gray-200'>EXPLORE NOW</button></div>
    </div>
  )
}

export default Innovetion