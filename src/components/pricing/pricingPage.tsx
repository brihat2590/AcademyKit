"use client";

import { useState } from 'react';
import PricingTable from './pricingTable';
import { GiZipper } from 'react-icons/gi';
import { PiDeviceMobileSlashFill } from 'react-icons/pi';
import Link from 'next/link';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-[#fbfef5] py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16  ">
            <h1 className='text-center text-md text-gray-700 font-semibold mb-4'>Pricing </h1>
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            Affordable LMS – AcademyKit
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your team- affordable, transparent and packed with value
          </p>
        </div>

        {/* Pricing Title
        <h2 className="text-2xl font-semibold text-center mb-10">
          Simple transparent pricing
        </h2> */}

        {/* Billing Toggle */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex bg-[#0a0b34] rounded-lg p-1">
            <button
              className={`px-6 py-3 rounded-md font-semibold    ${!isAnnual ? 'bg-white shadow text-[#0a0b34] '  : 'text-white'}`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly billing
            </button>
            <button
              className={`px-6 py-3 rounded-md flex items-center font-normal ${isAnnual ? 'bg-white shadow text-[#0a0b34]' : 'text-white'}`}
              onClick={() => setIsAnnual(true)}
            >
              Annual billing
              <span className="ml-2 text-sm bg-[#c2e092]  px-2 py-1 rounded-full text-[#0a0b34]">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
            
          {/* Free Plan */}
          <div className="bg-[#c2e092] rounded-xl shadow-lg p-8 w-full max-w-lg border border-gray-200">


            <h2 className='flex items-center text-5xl font-semibold '>Simple transparent Pricing</h2>

            
            
            
            
          </div>

          <div className=" rounded-xl shadow-lg p-8 w-full sm:max-w-xs border border-gray-200 bg-[#c2e092]">
            <div className="mb-6">
              <div className="flex items-center">
                <h3 className="text-xl font-bold text-gray-900 mr-2">Essential</h3>
                <span className="  text-sm font-semibold py-0.5 ">
                  (Free)
                </span>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">0</span>
                <span className="ml-1 text-gray-600">/ lifetime</span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8">
              Recommended for small businesses up to 20 users
            </p>
            
            
            <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-sm  font-medium  transition duration-500 hover:text-[#0a0b34] hover:border-2 hover:border-[#0a0b34] hover:bg-[#f9fcf4]">
              Get Started
            </button>
          </div>


          {/* Premium Plan */}
          <div className="bg-[#c2e092] rounded-xl shadow-lg p-8 w-full sm:max-w-xs border-2 relative">
            <div className=" mt-2 mr-2  absolute top-0 right-0 bg-white  text-gray-700 text-sm font-bold px-4 py-2 rounded-bl-lg rounded-xl">
              Popular
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900">Premium</h3>
              <div className="mt-4">
                <div className=""><span className='text-4xl font-bold text-gray-900'>{!isAnnual?"$99/":"$950/"} </span><span className='font-light'>Month</span></div>
                
                
              </div>
            </div>
            
            <p className="text-gray-600 mb-8">
              Recommended for mid-size businesses & large enterprises
            </p>
            
            <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-sm  font-medium   hover:text-[#0a0b34] hover:border-2 hover:border-[#0a0b34] hover:bg-[#f9fcf4] transition duration-500">
              Get Started
            </button>
            
          </div>
        </div>
      </div>
      <PricingTable/>

        {/* Add-ons Section */}
        <div className="max-w-5xl flex flex-col mt-20 ">
          <div className=" mb-8">
            <h2 className="text-2xl max-w-2xl mx-auto md:text-4xl font-semibold text-gray-900 mb-4 pl-2">
              Add-ons
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto pl-2 text-lg">
              Unlock additional features with our premium add-on package! Tailored for those seeking extra flexibility and enhanced functionality. Elevate your experience and maximize value.
            </p>
          </div>
          

          

          <div className="bg-[#c2e092] rounded-xl shadow-lg p-8 w-full mx-auto border border-gray-200 max-w-2xl ">



            <div className='flex flex-col gap-3'>

              <div>
                {/* <GiZipper/> */}
                <PiDeviceMobileSlashFill/>


              </div>
              <div className='text-gray-900 font-semibold'>

              Mobile App

              </div>
              <div className='mt-1  text-gray-900'>

              Learn on-the-go with our mobile app add-on. Access courses, <br></br>
              collaborate, and stay engaged anytime, anywhere, with seamless integration for ultimate convenience.


              </div>



            </div>


                





          </div>


          

        
        

          

          

        </div>

        <div className="flex justify-center sm:justify-end  max-w-lg gap-8  mt-8 md:ml-11 mb-10 ">
            <Link href="/request-demo" className="bg-gray-900 text-white  px-6 rounded-sm font-medium hover:bg-white hover:text-gray-900 hover:border-gray-900 border-3 border-gray-900  transition duration-500 py-2">
              Book an Appointment
            </Link>
            <a href='https://hub.docker.com/r/academykit/academy'  target="_blank" rel="noopener noreferrer" className="text-[#0a0b34] bg-[#c2e092] border-3 border-[#0a0b34]  transition duration-500 rounded-sm  px-6 hover:border-[#c2e092] flex items-center font-semibold ">
              Try Now!
            </a>
          </div>

        
      
    </div>
  );
}