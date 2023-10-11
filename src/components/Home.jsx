import cube1 from '../assets/cubes1.png'
import cube2 from '../assets/cubes2.png'
import whitecmg from '../assets/cmg-white.png'
import orngcmg from '../assets/cmg-orange.png'

const Home = () => {
  return (
    <div className='h-screen overflow-hidden overflow-x-hidden overflow-y-hidden'>
      <img src={cube1} alt="" className="absolute top-[20%] left-[5%]" width={250}/>
      <img src={cube2} alt="" className="absolute left-[80%]" width={200}/>
      <h1 className="text-[5em] flex justify-center text-white mb-10 mt-5">Under Construction</h1>
      <div className="justify-center flex mb-10"><p className="text-2xl text-center w-[45%] text-[#A5A8AB]">Subscribe to be the first to know about all the events and get a discount on your first order!</p></div>
      <div className="flex justify-center space-x-10">
        <input type="text" placeholder="Please enter your e-mail address"  className="bg-[#283036] px-5 w-[25em] text-start py-3 rounded-full text-[#A5A8AB] border-[#41464A] border-2" />
      <button className="w-[10rem] py-2 bg-white rounded-full hover:border-4 border-slate-400 hover:opacity-99">Subscribe</button>
      </div>
      <div className='mt-20'>
      <img src={orngcmg} alt="" className='absolute' width={2000}/>
      <img src={whitecmg} alt="" className='absolute' width={2000}/>
      </div>


      
            
    </div>
  )
}

export default Home