import React from 'react'

function Services() {
  return (
    <div className='container mx-auto px-32 flex flex-col items-center mb-4'>
      <h3 className='font-bold pt-16 pb-9 text-4xl text-mainDarkBlue'>What's new at Salesforce?</h3>
      <div className='flex justify-between w-full'>
          <div className='flex w-1/3 pb-10'>
              <img 
              src='https://www.salesforce.com/content/dam/web/en_gb/www/images/homepage/aem-chp-news-bar-cnx-product-launches.png'
              alt=''
              className=' mr-4'
              />
              <div className='flex flex-col px-4'>
                <span className=' text-xs text-gray-700 tracking-wider font-semibold'>CUSTOMER 360 WITH SLACK</span>
                <span className=' mt-2 leading-4 text-base font-semibold text-mainDarkBlue'>Welcome to your digital HQ for success from anywhere.</span>
              </div>
          </div>
          <div className='flex w-1/3 pb-10'>
              <img 
              src='https://www.salesforce.com/content/dam/web/en_ie/www/images/events/2021/df2021/aem-df21-newsbar-eu.jpg'
              alt=''
              className=' mr-4'
              />
              <div className='flex flex-col px-4'>
                <span className=' text-xs text-gray-700 tracking-wider font-semibold'>EVENT</span>
                <span className=' mt-2 leading-4 text-base font-semibold text-mainDarkBlue'>Inside Dreamforce: The EMEA Edition</span>
              </div>
          </div>
          <div className='flex w-1/3 pb-10'>
              <img 
              src='https://www.salesforce.com/content/dam/web/en_ie/www/images/homepage/homepage-slack_sf-homepage-tile_110x110px.png'
              alt=''
              className=' mr-4'
              />
              <div className='flex flex-col px-4'>
                <span className=' text-xs text-gray-700 tracking-wider font-semibold'>EVENT</span>
                <span className=' mt-2 leading-4 text-base font-semibold text-mainDarkBlue'>Slack Frontiers is coming to London — meet us there or catch us online.</span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Services