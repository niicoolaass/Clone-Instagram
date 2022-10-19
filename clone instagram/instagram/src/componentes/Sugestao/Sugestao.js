import './Sugestao.css'

function Sugestao() {
    return (
        <div className="Sugestao">

            <div className="header-suggestion">
            <img className='img-user' src='https://img.r7.com/images/gatos-top-internet-20012020190301017?dimensions=771x420&no_crop=true' alt='foto de perfil' />

                <div className="user-infos-suggestion">

                    <div className="infos">
                        <span>Nicolau</span>
                        <p>Nicolas veira</p>
                    </div>

                    <button className="switch">Mudar</button>
                </div>
            </div>

            <div className="header-main-suggestion">
                    <p>Sugestões para você</p>

                    <span>Ver tudo</span>
                </div>

            <div className="user-suggestion">

                <div className="infos-suggestion">

                <img src='https://img.r7.com/images/gatos-top-internet-20012020190301017?dimensions=771x420&no_crop=true' alt='foto de perfil' />
                    
                    <div className='info-suggestion'>
                        <span>Nicolau</span>
                        <p>Seguido por Instituto.Proa</p>
                    </div>

                    <button className="follow">Seguir</button>
                </div>

                <div className="infos-suggestion">

                <img src='https://img.r7.com/images/gatos-top-internet-20012020190301017?dimensions=771x420&no_crop=true' alt='foto de perfil' />
                    
                    <div className='info-suggestion'>
                        <span>Nicolau</span>
                        <p>Seguido por Instituto.Proa</p>
                    </div>

                    <button className="follow">Seguir</button>
                </div>

                <div className="infos-suggestion">

                <img src='https://img.r7.com/images/gatos-top-internet-20012020190301017?dimensions=771x420&no_crop=true' alt='foto de perfil' />
                    
                    <div className='info-suggestion'>
                        <span>Nicolau</span>
                        <p>Seguido por Instituto.Proa</p>
                    </div>

                    <button className="follow">Seguir</button>
                </div>

                <div className="infos-suggestion">

                <img src='https://img.r7.com/images/gatos-top-internet-20012020190301017?dimensions=771x420&no_crop=true' alt='foto de perfil' />
                    
                    <div className='info-suggestion'>
                        <span>Nicolau</span>
                        <p>Seguido por Instituto.Proa</p>
                    </div>

                    <button className="follow">Seguir</button>
                </div>
            </div>

            <footer className="footer-suggestion">
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

                <p>&copy; 2021 INSTAGRAM FROM META</p>


            </footer>
        </div>
    )
}

export default Sugestao;