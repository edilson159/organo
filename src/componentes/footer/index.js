import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
                <section >
            <ul>
                <li>
                    <a href='facebook.com' target='_blank'>
                        <img className='img' src='\imagens\fb.png' alt='Logo do facebook '/> 
                    </a>
                </li>
               <li>
                    <a href='twitter.com' target='_blank'>
                        <img className='img' src='\imagens\tw.png' alt='Logo do twitter'/>
                    </a>
                </li>
                <li>
                    <a href='instagram.com' target='_blank'>
                       <img className='img' src='\imagens\ig.png' alt='Logo do instagram'/> 
                    </a>
                </li>
                
            </ul>
        </section>
        <section>
            <img src='\imagens\logo.png' alt='Logo do organo' />
        </section>
        <section>
            <p>
                Desenvolvido por Edilson
            </p>
        </section>
        </footer>
    
    )

}

export default Footer
