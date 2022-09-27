import React from 'react'

function HelpOption() {
  return (
    <div className='w-full bg-forest-back bg-no-repeat bg-bottom bg-contain'>
      <div className='container mx-auto'>
        <h3 className='w-full text-4xl font-bold text-mainDarkBlue mt-16 mb-10'>All sorts of content. All to help you grow.</h3>
        <div className='w-full grid grid-cols-2'>
          <div className='flex px-4 flex-col'>
            <img src='https://www.salesforce.com/content/dam/web/en_us/www/images/home/php-rc-card-1-2.png' alt=''/>
            <div className=' px-5 pt-5 flex flex-col items-start'>
              <span className='text-mainDarkBlue font-bold pt-5 pb-3'>What is CRM?</span>
              <span className=' mb-3'>Understand CRM and how it fuels business growth.</span>
              <button className='my-3 border h-10 text-white bg-mainBlue px-6 rounded-md'>READ THE ARTICLE</button>
            </div>
          </div>
          <div className='mb-36'>
            <div className='grid grid-cols-2 mb-10'>
              <img src='https://www.salesforce.com/content/dam/web/en_us/www/images/home/php-rc-card-2.png'
              alt=''
              className=' px-4'
              />
              <div className='px-4 flex flex-col'>
                <span className='text-sm text-gray-700 font-semibold mb-3'>RESEARCH</span>
                <span className=' text-base font-bold text-mainDarkBlue mb-3'>State of Sales Report</span>
                <p className=' pr-2 text-gray-700'>Research shows nearly 6,000 sales pros are selling in a global crisis.</p>
              </div>
            </div>
            <div className='grid grid-cols-2 mb-10'>
              <img src='https://www.salesforce.com/content/dam/web/en_us/www/images/home/php-rc-smb-navigating-through-change.jpg'
              alt=''
              className=' px-4'
              />
              <div className='px-4 flex flex-col'>
                <span className='text-sm text-gray-700 font-semibold mb-3'>VIDEO SERIES</span>
                <span className=' text-base font-bold text-mainDarkBlue mb-3'>Navigating Through Change</span>
                <p className=' pr-2 text-gray-700'>Small businesses evolve to meet customer needs.</p>
              </div>
            </div>
            <div className='grid grid-cols-2'>
              <img src='https://www.salesforce.com/content/dam/web/en_us/www/images/home/php-rc-card-4.png'
              alt=''
              className=' px-4'
              />
              <div className='px-4 flex flex-col'>
                <span className='text-sm text-gray-700 font-semibold mb-3'>WEBINAR</span>
                <span className=' text-base font-bold text-mainDarkBlue mb-3'>Lead Management 101</span>
                <p className=' pr-2 text-gray-700'>Get expert advice on lead management.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpOption