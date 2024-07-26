import React from 'react'

function Footer() {
    return (
        <>

            {/*<!--Footer-->*/ }
            <footer>
                <section className="footer__contacto">
                    <h3>SIGAMOS EN CONTACTO</h3>

                    {/*<!--redes sociales del footer-->*/}
                    <ul class="social-icons">
                        <li className="social-icon">
                            <a href="https://www.facebook.com/thewellfitsociety/" target="_blank" rel="noopener noreferrer">
                                <img src="./img/icons/facebook_dark.png" alt="facebook" />
                            </a>
                        </li>
                        <li className="social-icon">
                            <a href="#">
                                <img src="./img/icons/twitter_dark.png" alt="x twitter" />
                            </a>
                        </li>
                        <li className="social-icon">
                            <a href="https://www.instagram.com/thewellfitsociety/" target="_blank" rel="noopener noreferrer">
                                <img src="./img/icons/instagram_dark.png" alt="instagram" />
                            </a>
                        </li>
                        <li className="social-icon">
                            <a href="#">
                                <img src="./img/icons/tiktok_dark.png" alt="tiktok" />
                            </a>
                        </li>
                        <li className="social-icon">
                            <a href="#">
                                <img src="./img/icons/youtube_dark.png" alt="youtube" />
                            </a>
                        </li>
                        <li className="social-icon">
                            <a href="#">
                                <img src="./img/icons/pinterest_dark.png" alt="pinterest" />
                            </a>
                        </li>
                    </ul>

                    {/*<!--span de copyright-->*/}

                    <span className="footer__copyright">2024 | The Wellfit Society © Todos los derechos reservados</span>
                </section>
            </footer>
        </>

    
    
    );
}

export default Footer