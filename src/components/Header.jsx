import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='p-6'>
      <div className='container flex justify-between items-center border-b-[1px] border-gray-600'>
        <div className='flex items-center gap-10 mb-4'>
          <div>
            <Link to="" className='cursor-pointer'><img src={logo} alt="" className='h-[25px] xl:h-[30px] lg:h-[28px] md:h-[27px] sm:h-[26px]'/></Link>
          </div>
          {/* <div>
            <ul className='flex items-center gap-5'>
              <li>Home</li>
              <li>What are looking?</li>
              <li>List your industry</li>
            </ul>
          </div> */}
        </div>
        <div className='flex items-center gap-3 mb-4'>
          <div>
            <Link to="/log-in"><button className='border-[1px] border-slate-600 hover:bg-slate-600 w-[70px] xl:w-[80px] lg:w-[78px] md:w-[75px] sm:w-[73px] px-[15px] py-[5px] rounded font-semibold'>Login</button></Link>
          </div>
          <div>
            <Link to="/sign-up"><button className='bg-gray-100 text-black w-[70px] xl:w-[80px] lg:w-[78px] md:w-[75px] sm:w-[73px] px-[15px] py-[5px] rounded font-semibold flex justify-center items-center'>SignUp</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header