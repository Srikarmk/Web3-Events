import cube1 from '../assets/cubes1.png'
import cube2 from '../assets/cubes2.png'
import whitecmg from '../assets/cmg-white.png'
import orngcmg from '../assets/cmg-orange.png'
import mobcmg from '../assets/mobilecmg.png'

const Home = () => {
  return (
    <div className='h-screen overflow-x-hidden overflow-y-hidden w-[100%]'>
      <img src={cube1} alt="" className="absolute md:top-[20%] md:left-[5%] 
      top-[60%] w-[30%] md:w-[20%]" width={250}/>
      <img src={cube2} alt="" className="absolute  md:left-[80%] left-[70%] top-[10%] w-[30%] md:w-[20%]" width={200}/>

      <h1 className="text-[2em] mt-[3em] md:text-[5em] flex justify-center text-white mb-5 md:mb-10 md:mt-5">Under Construction</h1>

      <div className="justify-center flex mb-10">
        <p className="text-l md:text-2xl text-center md:w-[45%] text-[#A5A8AB]">Subscribe to be the first to know about all the events and get a discount on your first order!</p></div>

      <div className="flex flex-col sm:justify-center md:flex md:flex-row md:justify-center md:space-x-10 items-center space-y-5 md:space-y-0">
        <input type="text" placeholder="Please enter your e-mail address"  className="bg-[#283036] px-5 md:w-[25em] w-[20em] text-start py-3 rounded-full text-[#A5A8AB] border-[#41464A] border-2" />
      <button className="w-[10rem] py-2 bg-white rounded-full hover:border-4 border-slate-400 hover:opacity-99">Subscribe</button>
      </div>
      <img src={mobcmg} alt="" className='mt-12 sm:block md:hidden'/>
      <div className='hidden md:block mt-20'>
      <img src={orngcmg} alt="" className='absolute' width={2000}/>
      <img src={whitecmg} alt="" className='absolute' width={2000}/>
      </div>


      
            
    </div>
  )
}

export default Home