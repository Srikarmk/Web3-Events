import React from 'react'
import logo from "../assets/logo.png";
const Nav = () => {
  return (
    <div className=''>
        
        <div className='p-5 flex justify-around align-middle items-center'>
            <div className='flex justify-around space-x-10 text-white items-center'>
            
            <a href="#" target="_blank" rel="noreferrer" className='hover:text-orange-400'><p>Home</p></a>
            <a href="#" target="_blank" rel="noreferrer" className='hover:text-orange-400'><p>List Your Event</p></a>
            <a href="#" className='hover:text-orange-400'><p>About Us</p></a>
                
            </div>
            <div className="flex justify-center"><img src={logo} alt="" width={100} /></div>
            <div className="flex justify-around w-[20%] items-center text-white">
            <a href="#" className='hover:text-orange-400'><p>Twitter</p></a>
            <a href="#" className='hover:text-orange-400'><p>Telegram</p></a>
                </div>
        </div>
        <hr className='text-white w-[95%] mx-auto opacity-40' />
    </div>
  )
}

export default Nav