import React from 'react'
import logo from "../assets/logo.png";
const Nav = () => {
  return (
    <div className=''>
        
        <div className='p-5 flex justify-between align-middle items-center'>
            <div className='flex justify-around space-x-10 text-white items-center'>
            <div className="flex justify-center"><img src={logo} alt="" width={150} /></div>
            <a href="http://bharatblockchainweek.xyz" target="_blank" rel="noreferrer" className='hover:text-orange-400'><p>Bharat Blockchain Week</p></a>
            <a href="http://web3help.xyz" target="_blank" rel="noreferrer" className='hover:text-orange-400'><p>Side Events Sheet</p></a>
            <a href="#" className='hover:text-orange-400'><p>Web3 Help</p></a>
                
            </div>
            <div className="flex justify-between w-[20%] items-center text-white">
            <a href="#" className='hover:text-orange-400'><p>Organise Event</p></a>
            <a href="https://twitter.com/mxxnwolf" target="_blank" rel="noreferrer" className='hover:text-orange-400'><button className="px-5 py-3 text-white border-[1px] rounded-lg hover:bg-orange-600" >Contact US</button></a>
                </div>
        </div>
        <hr className='text-white w-[95%] mx-auto' />
    </div>
  )
}

export default Nav