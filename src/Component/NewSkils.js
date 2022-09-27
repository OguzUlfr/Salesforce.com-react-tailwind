import React from 'react'

function NewSkils() {
  return (
    <div className='container mx-auto'>
    <h3 className='w-full text-[2.5rem] text-mainDarkBlue font-semibold pt-16 pb-10'>Learn new skills from anywhere, free on Trailhead.</h3>
    <div className='w-full grid grid-cols-3 gap-8 mb-16'>
      <div>
        <img src='https://www.salesforce.com/content/dam/web/en_us/www/images/home/php-trailhead-1.png' alt=''/>
        <div className='w-full px-5 pt-5 flex flex-col'>
          <span className=' text-lg font-bold text-mainDarkBlue'>Learn CRM fundamentals for Lightning Experience.</span>
        </div>
      </div>
      <div>
        <img src='https://www.salesforce.com/content/dam/web/en_us/www/images/home/php-trailhead-2.png' alt=''/>
        <div className='w-full px-5 pt-5 flex flex-col'>
          <span className=' text-lg font-bold text-mainDarkBlue'>Learn how to sell with as few clicks as possible.</span>
        </div>
      </div>
      <div>
        <img src='https://www.salesforce.com/content/dam/web/en_us/www/images/home/php-trailhead-3.png' alt=''/>
        <div className='w-full px-5 pt-5 flex flex-col'>
          <span className=' text-lg font-bold text-mainDarkBlue'>Get started with Salesforce CRM and explore Lightning Experience.</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NewSkils