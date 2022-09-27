import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {BsGlobe} from 'react-icons/bs';

function Header() {
  return (
    <div className='w-full h-28 border-b-4 border-blue-400'>
        <div className='container mx-auto px-32'>
            <div className='flex justify-end items-center gap-4 pt-3 relative'>
                <AiOutlineSearch size={20} className='text-blue-700 mr-2'/>
                <div className='text-base font-Lato text-zinc-900 font-normal'>00800 7253 3333 (FREEPHONE)</div>
                <div className='text-blue-600'>Contact Us</div>
                <BsGlobe className=' text-gray-400'/>
                <div className='flex items-center gap-2 border-l border-gray-300 pl-3'>
                    <div className='text-blue-600'>Login</div>
                    <img className='w-8' src='https://www.salesforce.com/content/dam/sfdc-docs/www/images/global-navigation/icon-login-astro.png' alt='a'/>
                </div>
            </div>
            <img src='https://www.salesforce.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg' className='absolute w-20 top-5' alt='salesforce'/>
            <div className='flex justify-between items-center gap-4 mt-4'>
                <div className='w-5/6'>
                  <ul className='flex ml-28 text-base'>
                    <button className=' p-3 border-t-4 border-transparent hover:border-blue-400 hover:bg-gray-200'>Product</button>
                    <button className=' p-3 border-t-4 border-transparent hover:border-blue-400 hover:bg-gray-200'>Resource</button>
                    <button className=' p-3 border-t-4 border-transparent hover:border-blue-400 hover:bg-gray-200'>Support</button>
                    <button className=' p-3 border-t-4 border-transparent hover:border-blue-400 hover:bg-gray-200'>Company</button>
                  </ul>
                </div>
                <button className=' bg-green-600 px-6 py-2 rounded-md mb-3 text-white'>TRY FOR FREE</button>
            </div>
        </div>
    </div>
  )
}

export default Header