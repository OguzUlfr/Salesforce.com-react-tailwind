import React from 'react'

function Promo() {
  return (
    <div className='w-full h-[500px] flex justify-between mx-auto pl-80'>
      <div className='w-2/5 flex justify-center flex-col'>
        <div className=' text-[3rem] leading-[60px] font-bold text-mainDarkBlue'>
          Turn data into real-time customer magic. Meet Salesforce Genie.
        </div>
        <div className=' text-lg tracking-wide font-light py-3'>
          <span className='font-bold'>Automated. Intelligent. Real-time.</span> The Salesforce Customer 360 is now the first real-time CRM.
        </div>
        <div className=' w-4/5 py-3'>
          <button className=' h-10 px-6 bg-mainBlue rounded-md  text-white'>DISCOVER GUNIE</button>
          <button className=' h-10 px-6 border border-mainBlue text-mainBlue rounded-md ml-7'>CONTACT US</button>
        </div>
      </div>
      <div className='relative'>
        <img
         src='https://www.salesforce.com/content/dam/web/en_ie/www/images/homepage/hp-jumbo-regions-df-genie-bg.jpg'
         alt=''
         />
      </div>
    </div>
  )
}

export default Promo