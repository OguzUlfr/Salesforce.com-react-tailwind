import React from 'react'

function Discovery() {
  return (
    <div className='container mx-auto grid grid-cols-2'>
      <div className=' pr-10'>
        <h2 className=' pt-14 pb-3 text-4xl font-bold text-mainDarkBlue'>Discover apps and expertise to extend Salesforce.</h2>
        <p className=' pr-40'>Browse our AppExchange marketplace, with thousands of customised apps and specialised consulting partners to help any sized business craft a perfectly tailored Customer 360 solution.</p>
        <button className=' h-10 px-4 bg-mainBlue text-white rounded mt-5'>VISIT APPEXCHANGE</button>
      </div>
      <div className='flex justify-center'>
        <img src='https://www.salesforce.com/content/dam/web/en_us/www/images/home/appexchange-promo-fg.png' alt=''/>
      </div>
    </div>
  )
}
export default Discovery