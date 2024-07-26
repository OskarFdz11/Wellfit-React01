import React from 'react';
import principalImage from '../img/principal.webp';
import { Link } from "react-router-dom";




function Home() {

    const backgroundImageStyle = {
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${principalImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        width: '100%',
        height: '80vh'

    };

    return (

        <>
            <main>

                {/*{<!--hero o banner principal-->}*/}


                <section className="main__banner" style={backgroundImageStyle}>
                    <div className="main__content">
                        <img src="./img/logo_vertical_white.png" alt="logo banner"/>
                            <h1 className="main__content-short-description">Únete a The Wellfit Society</h1>
                            <h2 className="main__content-short-description">
                                La comunidad más grande de personas enfocada en el bienestar y equilibrio de tu vida.
                            </h2>
                            <a href="#"><button className="main__content-unirme-button">¡UNIRME!</button></a>
                    </div>

                </section>

                {/*<!--categorias del blog con bootstrap-->*/}

                <section className="main__categories">

                    <h3>BLOG | CATEGORÍAS</h3>

                    <div className="main__categories-elements">

                        <div className="card">
                            <img src="./img/fitness.webp" className="card-img" alt="caterogita fitness"/>
                                <div className="card-body">
                                    <h4 className="card-title">Fitness</h4>
                                    <Link to="/fitness" className="btn">LEER AHORA</Link>
                                </div>
                        </div>

                        <div className="card">
                            <img src="./img/wellness.webp" className="card-img" alt="categoria wellness"/>
                                <div className="card-body">
                                    <h4 className="card-title">Wellness</h4>
                                    <Link to="/wellness" className="btn">LEER AHORA</Link>
                                </div>
                        </div>

                        <div className="card m-0">
                            <img src="./img/tech.webp" className="card-img" alt="categoria podcast"/>
                                <div className="card-body">
                                    <h4 className="card-title">Tech</h4>
                                    <Link to="/tech" className="btn">LEER AHORA</Link>
                                </div>
                        </div>
                    </div>

                </section>

                {/*<!--tabs de información de bootstrap-->*/}
                <section className="main__tabs">

                    <h3>CONOCE MÁS SOBRE THE WELLFIT SOCIETY</h3>

                    <div className="main__tabs-elements">
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-escogernos-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-escogernos" type="button" role="tab" aria-controls="nav-escogernos"
                                    aria-selected="true">¿Porqué escogernos?</button>
                                <button className="nav-link" id="nav-mision-tab" data-bs-toggle="tab" data-bs-target="#nav-mision"
                                    type="button" role="tab" aria-controls="nav-mision" aria-selected="false">Misión</button>
                                <button className="nav-link" id="nav-vision-tab" data-bs-toggle="tab" data-bs-target="#nav-vision"
                                    type="button" role="tab" aria-controls="nav-vision" aria-selected="false">Visión</button>
                                <button className="nav-link" id="nav-somos-tab" data-bs-toggle="tab" data-bs-target="#nav-somos"
                                    type="button" role="tab" aria-controls="nav-somos" aria-selected="false">Quiénes
                                    Somos</button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-escogernos" role="tabpanel"
                                aria-labelledby="nav-escogernos-tab" tabindex="0">
                                <div className="tab-container">
                                    <img src="./img/escogernos.webp" alt="imagen de porqué escogernos"/>
                                        <div className="tab-content-text">
                                            <h3>¿Por Qué Escogernos?</h3>
                                            <p>Ofrecemos un enfoque holístico al bienestar, con entrenamientos personalizados,
                                                asesoría nutricional y apoyo emocional, todo respaldado por un equipo de expertos.
                                                Garantizamos resultados sostenibles y una comunidad comprometida con tu salud.
                                                Elegirnos significa contar con un apoyo constante y recursos adaptados a tus
                                                necesidades, asegurando que cada paso en tu camino hacia un estilo de vida saludable
                                                esté bien guiado y respaldado por profesionales dedicados a tu éxito.</p>
                                        </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-mision" role="tabpanel" aria-labelledby="nav-mision-tab"
                                tabindex="0">
                                <div className="tab-container">
                                    <img src="./img/mision.webp" alt="imagen de nuestra mision"/>
                                        <div className="tab-content-text">
                                            <h3>Nuestra Misión</h3>
                                            <p>Inspirar y guiar a las personas hacia un bienestar integral mediante programas de
                                                fitness personalizados, educación nutricional y apoyo emocional. Promovemos hábitos
                                                saludables y sostenibles que permiten a nuestros miembros alcanzar una vida más
                                                plena y equilibrada. Nos comprometemos a ofrecer recursos y apoyo constante para que
                                                cada persona pueda superar sus propios límites y alcanzar sus metas de salud y
                                                bienestar a largo plazo.</p>
                                        </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab"
                                tabindex="0">
                                <div className="tab-container">
                                    <img src="./img/vision.webp" alt="imagen de nuestra vision"/>
                                        <div className="tab-content-text">
                                            <h3>Nuestra Visión</h3>
                                            <p>Ser la comunidad líder en salud y bienestar, reconocida por transformar vidas a
                                                través de un enfoque integral que combina ejercicio, nutrición y equilibrio
                                                emocional. Queremos fomentar una cultura de vida saludable donde cada individuo se
                                                sienta empoderado para tomar decisiones positivas en su vida diaria. Aspiramos a ser
                                                un referente en el sector, conocido por nuestra dedicación y resultados efectivos en
                                                la mejora de la calidad de vida de nuestros miembros.</p>
                                        </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-somos" role="tabpanel" aria-labelledby="nav-somos-tab"
                                tabindex="0">
                                <div className="tab-container">
                                    <img src="./img/nosotros.webp" alt="imagen de quienes somos"/>
                                        <div className="tab-content-text">
                                            <h3>Sobre Nosotros</h3>
                                            <p>The Wellfit Society es una comunidad de fitness dedicada a promover un estilo de vida
                                                equilibrado y saludable. Nuestro objetivo es combinar ejercicio, nutrición y
                                                bienestar mental para que nuestros miembros puedan alcanzar una vida plena y activa.
                                                Creemos en la importancia de un enfoque integral que abarque todas las áreas del
                                                bienestar, proporcionando las herramientas necesarias para lograr un cambio positivo
                                                y sostenible en la vida de cada individuo.</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>



        </>

    );
}

export default Home