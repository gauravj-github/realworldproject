import React from 'react'
import img from '../../assets/c151be04adb3822c83327ba62a4051348199c6ce.png'

const Headdownbar = () => {
  return (
    <div className="absolute top-25 w-[90%] h-[45%]  shadow-md flex justify-between items-center p-5 rounded-2xl pt-10 z-50" style={{backgroundColor:"#FFF"}}>
      {/* Left Image */}
      <img
        src={img}
        className="w-[400px] h-[300px] rounded-2xl object-cover max-w-full h-auto"
      />

      {/* Discover Us */}
      <div className='mt-5 '>
        <h1 className="text-xl font-bold">Discover Us</h1>
        <ul className="mt-5 gap-2 flex flex-col font-[Manrope]">
          <li>Our Story</li>
          <li>Our Approach</li>
          <li>Our Vision & Mission</li>
          <li>Why choose us</li>
          <li>Leadership Team</li>
          <li>Impact & Growth</li>
          <li>FAQs</li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h1 className="text-xl font-bold">Quick Links</h1>
        <ul className="mt-5 gap-3 flex flex-col font-[Manrope]">
          <li>Our Story</li>
          <li
            className="p-3 rounded-xl"
            style={{ backgroundColor: 'rgba(22, 86, 165, 0.10)' }}
          >
            p <button>+919425565784</button>
          </li>
          <li
            className="p-3 rounded-xl"
            style={{ backgroundColor: 'rgba(22, 86, 165, 0.10)' }}
          >
            w <button>+919876987453</button>
          </li>
          <li>Why choose us</li>
          <li>Leadership Team</li>
        </ul>
      </div>
    </div>
  )
}

export default Headdownbar
