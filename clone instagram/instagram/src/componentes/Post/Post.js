import './Post.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsBookmark, BsEmojiSmile } from 'react-icons/bs'
import benzemar from '../imagens/benzemar.png'
import { IconContext } from 'react-icons'

function Post() {
    return (
        <div className="post">
            <header className="post-header">

                <div className="infos-post">
                    <a href='/#'><img className='image-profile-1' src="https://i.pinimg.com/474x/fb/27/36/fb2736330ec7184328edcd687ff943b9.jpg" alt='profile' /></a>

                    <p>francefootball</p>
                </div>

                <FiMoreHorizontal />

            </header>

            <div>
            <a href='/#'><img className='image-post' src={benzemar} alt='post' /></a>

            </div>

            <div className='footer-post'>
                <IconContext.Provider value={{size: "25px"}}>

                <selection className="engagement-post">

                    <div className='icons-1'>
                        <div>
                            <IoMdHeartEmpty /> 
                        </div>

                        <div>
                            <BsChat />
                        </div>

                        <div>
                            <FiSend />                        
                        </div>
                    </div>

                    <div className='icon'><BsBookmark /></div>

                </selection>
                </IconContext.Provider>

                <selection className="like">
                    <span>1,231,091 curtidas</span>
                </selection>
                
                <div className="legend">
                    <p>
                        <span>neymarjr</span> eu que merecia!😡
                    </p>

                    <p>
                        Ver todos os 3,816 comentários
                    </p>
                </div>

                <div className="time-post">
                    <time>HÁ 2 HORAS</time>
                </div>

                <div className="comment">

                    <div className="fake-comment">
                         
                         <IconContext.Provider value={{size: "25px"}}>
                            <div className="icon">
                         <BsEmojiSmile /> 

                            </div>
                         </ IconContext.Provider>

                         <input placeholder="Adicione um comentário..." />

                    </div>

                    <button>Publicar</button>
                    
                </div>
            </div>
        </div>
    );
    }

    

export default Post;
