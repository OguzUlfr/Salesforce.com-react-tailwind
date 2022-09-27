import React from 'react'
import {TbWorld} from 'react-icons/tb'
import {IoIosArrowUp} from 'react-icons/io'

function Footer() {
  return (
    <div className='w-full'>
      <div className='container mx-auto border grid grid-cols-4'>
        <div className='px-4 w-1/3 border'>
          <img 
          src='https://www.salesforce.com/content/dam/web/en_is/www/images/logo/salesforce-cloud-logo-sm.png' 
          className=' mt-10 mb-3'
          alt=''
          />
          <div className='mb-8  w-full flex'>
            <img className=' w-8 mr-4' src='https://www.salesforce.com/content/dam/web/global/svg-icons/facebook-day.svg?version=202281' alt=''/>
            <img className=' w-8 mr-4' src='https://www.salesforce.com/content/dam/web/global/svg-icons/twitter-day.svg?version=202281' alt=''/>
            <img className=' w-8 mr-4' src='https://www.salesforce.com/content/dam/web/global/svg-icons/linkedin-day.svg?version=202281' alt=''/>
            <img className=' w-8 mr-4 ' src='https://www.salesforce.com/content/dam/web/global/svg-icons/youtube-day.svg?version=202281' alt=''/>
          </div>
        </div>
        <div className='px-4'>
          <h3 className=' mt-14 mb-5'>New to Salesforce?</h3>
          <ul className=' text-xs text-mainBlue flex flex-col'>
            <a className=' pb-3' href='/'>What is Salesforce?</a>
            <a className=' pb-3' href='/'>What is CRM?</a>
            <a className=' pb-3' href='/'>What is Cloud Computing?</a>
            <a className=' pb-3' href='/'>CRM Solutions</a>
            <a className=' pb-3' href='/'>Customer Success Stories</a>
            <a className=' pb-3' href='/'>Product pricing</a>
            <a className=' pb-3' href='/'>Contact Us</a>
          </ul>
        </div>
        <div className='px-4'>
          <h3 className=' mt-14 mb-5'>Popular Links</h3>
          <ul className=' text-xs text-mainBlue flex flex-col'>
            <a className=' pb-3' href='/'>Small Business CRM</a>
            <a className=' pb-3' href='/'>Sales Force Automation</a>
            <a className=' pb-3' href='/'>Customer Service Solutions</a>
            <a className=' pb-3' href='/'>Digital Marketing Solutions</a>
            <a className=' pb-3' href='/'>Industry Solutions</a>
            <a className=' pb-3' href='/'>Salesforce Events</a>
            <a className=' pb-3' href='/'>New Release Features</a>
            <a className=' pb-3' href='/'>Manage Subscription</a>
          </ul>
        </div>
        <div className='px-4'>
          <h3 className=' mt-14 mb-5'>About Salesforce</h3>
          <ul className=' text-xs text-mainBlue flex flex-col'>
            <a className=' pb-3' href='/'>Our Story</a>
            <a className=' pb-3' href='/'>Careers</a>
            <a className=' pb-3' href='/'>Press</a>
            <a className=' pb-3' href='/'>Security and Performance</a>
            <a className=' pb-3' href='/'>Legal</a>
            <a className=' pb-3' href='/'>Privacy for Salesforce Products</a>
            <a className=' pb-3' href='/'>Salesforce EU Blog</a>
            <a className=' pb-3' href='/'>Salesforce EU Blog Signup</a>
          </ul>
        </div>
      </div>
      <div className='w-full bg-mainDarkBlue text-white pb-7'>
        <div className='container mx-auto pt-4 flex'>
          <button className='flex justify-center items-center py-3 px-6 h-12 border mr-8 border-white rounded-md'>
            <TbWorld size={22}/>
            <span className=' mx-2'>WORLDWIDE</span>
            <IoIosArrowUp/>
          </button>
          <div className='text-xs'>
            <p className='mb-3'>© Copyright 2022 Salesforce, Inc.<a href='/' className=' text-cyan-400 underline'>&nbsp;All rights reserved.</a> Various trademarks held by their respective owners.</p>
            <p className='mb-3'>salesforce UK Limited, village 9, floor 26 Salesforce Tower, 110 Bishopsgate, London, UK, EC2N 4AY. General Enquiries: +353 14403500 | Fax: +353 14403501 | Sales: 00800 7253 3333</p>
            <ul className='text-cyan-400'>
              <a className=' underline mr-4' href='/'>Legal</a>
              <a className=' underline mr-4' href='/'>Terms of Services</a>
              <a className=' underline mr-4' href='/'>Privacy</a>
              <a className=' underline mr-4' href='/'>Responsible Disclosure</a>
              <a className=' underline mr-4' href='/'>Contact Us</a>
              <a className=' underline mr-4' href='/'>Trust</a>
              <a className=' underline mr-4' href='/'>Cookie Preferences</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer