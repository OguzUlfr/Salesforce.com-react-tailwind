import React from 'react'

function VirtualDemos() {
  return (
    <div className='container mx-auto'>
      <h3 className='w-full text-[2.5rem] text-mainDarkBlue font-semibold pt-16 pb-10'>Salesforce virtual events and demos. Coming to a device near you.</h3>
      <div className='w-full grid grid-cols-3 gap-8 mb-16'>
        <div className='flex flex-col'>
          <img src='https://www.salesforce.com/content/dam/web/en_us/www/images/home/php-events-1.png' alt=''/>
          <div className='w-full px-5 pt-5 flex flex-col'>
            <span className='text-gray-600 text-xs font-medium my-3'>VIRTUAL EVENTS</span>
            <span className=' text-base font-bold text-mainDarkBlue'>Find passion, learning, and expertise — without the walls.</span>
          </div>
        </div>
        <div className='flex flex-col'>
          <img src='https://www.salesforce.com/content/dam/web/en_ie/www/images/homepage/405x219px.png' alt=''/>
          <div className='w-full px-5 pt-5 flex flex-col'>
            <span className='text-gray-600 text-xs font-medium my-3'>VIRTUAL EVENTS</span>
            <span className=' text-base font-bold text-mainDarkBlue'>Find passion, learning, and expertise — without the walls.</span>
          </div>
        </div>
        <div className='flex flex-col'>
          <img src='https://www.salesforce.com/content/dam/web/en_us/www/images/home/php-events-3.png' alt=''/>
          <div className='w-full px-5 pt-5 flex flex-col'>
            <span className='text-gray-600 text-xs font-medium my-3'>VIRTUAL EVENTS</span>
            <span className=' text-base font-bold text-mainDarkBlue'>Find passion, learning, and expertise — without the walls.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VirtualDemos