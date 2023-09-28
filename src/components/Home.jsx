
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter , faTelegram,faLinkedin,faInstagram,faWhatsapp, faWhatsappSquare} from "@fortawesome/free-brands-svg-icons";
const Home = () => {
  return (
    <div className='p-10'>
        
        <p className='flex justify-center text-white text-3xl mt-20'>Events, Network, Community</p>
        <h2 className="flex justify-center text-white text-5xl font-bold mt-20">Coming Soon!</h2>
        {/* Social Links  */}
        <div className="flex justify-center mt-20">
        <div className="flex justify-around md:flex md:justify-between md:w-[50%] pt-10">
              <a href="https://www.instagram.com/web3.events/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="fa-3x hover:text-pink-400 text-white" /></a>

              <a href="https://www.linkedin.com/company/web3-events" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="fa-3x hover:text-blue-400 text-white" /></a>

              <a href="https://t.me/+4XZe08hMAeMzMTVl" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTelegram} className="fa-3x hover:text-[#3a86ff] text-white" /></a>
              <a href="https://twitter.com/web3_events" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} className="fa-3x hover:text-slate-400 text-white"/></a>
              <a href="https://chat.whatsapp.com/CikzaZtzSwR7gnKE1hJaQQ" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} className="fa-3x hover:text-green-400 text-white"/></a>
            </div>
            </div>
            
    </div>
  )
}

export default Home