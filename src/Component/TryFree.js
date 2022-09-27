import React from 'react'

function TryFree() {
  return (
    <div className='container mx-auto'>
      <h3 className='text-4xl text-mainDarkBlue font-bold pt-14 pb-3'>Try Salesforce for free.<br/>
      No credit card required, no software to install.</h3>
      <button className='bg-green-700 text-white h-10 px-6 rounded-md my-3'>START MY FREE TRIAL</button>
      <img src='https://www.salesforce.com/content/dam/web/en_ie/www/images/homepage/php-freetrial-eu-footer-dsktop.png'
      alt=''
      className='w-full pt-8 px-10'
      />
    </div>
  )
}

export default TryFree