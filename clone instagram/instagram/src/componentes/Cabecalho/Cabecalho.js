import './Cabecalho.css';
import { AiOutlineSearch } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import { MdOutlineExplore, MdHomeFilled } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'
import  { IconContext } from 'react-icons'

function Cabecalho() {
  return (
    <div className='cabecalho'>
        <div className='container'>

          <a href='/#'><img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt='logo instagram' /></a>

        <div className='input-fake'>
          <IconContext.Provider value={{ color: '#8e8e8e' }}>
            <AiOutlineSearch />
          </IconContext.Provider>
          
          <input placeholder='Pesquisar' />
        </div>
        
        <div className='menu-icons'>
          <IconContext.Provider value={{ size: '26px', color: '#000000' }}>
            <div>
            <a href='/#'><MdHomeFilled /></a>
            </div>
            <div>
            <a href='/#'><RiMessengerLine /></a>
            </div>
            <div>
            <a href='/#'><BsPlusSquare /></a>
            </div>
            <div>
            <a href='/#'><MdOutlineExplore /></a>
            </div>
            <div>
            <a href='/#'><FiHeart /></a>
            </div>
            </IconContext.Provider>

            <a href='/#'><img className='img-user' src='https://img.r7.com/images/gatos-top-internet-20012020190301017?dimensions=771x420&no_crop=true' alt='foto de perfil' /></a>
        </div>
        </div>
    </div>
  );
}

export default Cabecalho;
