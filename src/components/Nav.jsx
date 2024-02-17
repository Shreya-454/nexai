import React, { useState } from 'react'
import Button from './Button'


const Nav = () => {
  const [show, setshow] = useState(true);
  function nav() {
    setshow(!show);
    if (show === true) {
      document.body.classList.add("max-lg:overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:overflow-hidden");
    }
  }
  return (
    <div>
          <div className="container max-w-[1290px] px-3 mx-auto">
              <div className='flex items-center  py-2  justify-between'>
                  <div className='hidden md:block'></div>
                  <ul className={`flex gap-5 mobileView  ${ show ? "right-[-100%]" : "right-0"
              }`}>
                      <li onClick={nav}><a href=""  className=' font-poppins navhover hover:text-[#02CDCF] font-normal text-base text-white'>Home</a></li>
                      <li onClick={nav}><a href="#uni"  className=' font-poppins navhover hover:text-[#02CDCF] font-normal text-base text-white'>Marketplace</a></li>
                      <li onClick={nav}><a href="#what"  className=' font-poppins navhover hover:text-[#02CDCF] font-normal text-base text-white'>About</a></li>
                      <li onClick={nav}><a href="#more"  className=' font-poppins navhover hover:text-[#02CDCF] font-normal text-base text-white'>NexChat</a></li>
                      <li onClick={nav}><a href="#token"  className=' font-poppins navhover hover:text-[#02CDCF] font-normal text-base text-white'>Tokens</a></li>
                  </ul>
                  <Button text="Sign Up" />
                  
                   <label className=" lg:hidden" onClick={nav}>
            {show ? (
              <div className="z-20 relative">
                <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6"></span>
                <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
              </div>
            ) : (
              <div className="z-20 relative">
                <span className="flex bg-white absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                <span className="flex bg-white absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
              </div>
            )}
          </label>
              </div>
      </div>
    </div>
  )
}

export default Nav