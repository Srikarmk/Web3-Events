import React from 'react'
import logo from "../assets/logo_org.png";
const Nav = () => {
  return (
    <div className=''>
        
        <div className='p-5 flex justify-between align-middle items-center'>
            <div className='flex justify-around space-x-10 text-white items-center'>
            <div className="flex justify-center"><img src={logo} alt="" width={150} /></div>
            <a href="http://bharatblockchainweek.xyz" target="_blank" rel="noreferrer"><p>Bharat Blockchain Week</p></a>
            <a href="http://web3help.xyz" target="_blank" rel="noreferrer"><p>Side Events Sheet</p></a>
            <a href="#"><p>Web3 Help</p></a>
                
            </div>
            <div className="flex justify-between w-[20%] items-center text-white">
            <a href="#" ><p>Organise Event</p></a>
            <a href="https://twitter.com/mxxnwolf" target="_blank" rel="noreferrer"><button className="px-5 py-3 text-white border-[1px] rounded-lg">Contact US</button></a>
                </div>
        </div>
        <hr className='text-white w-[95%] mx-auto' />
    </div>
  )
}

export default Nav