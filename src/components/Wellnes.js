import React from 'react'

function Wellnes() {
    return (

        <>
            <main>
                {/* Tarjetas de los posts con bootstrap */}
                <section className="py-1 py-md-5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                                <h2 className="category-title mb-4 display-5 text-center">WELLNESS</h2>
                                <p className="category-description mb-5 text-center lead fs-4">
                                    Consejos y prácticas para mejorar tu bienestar físico, mental y emocional, logrando una vida equilibrada.
                                </p>
                                <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                            </div>
                        </div>
                    </div>

                    <div className="container overflow-hidden">
                        <div className="row gy-4 gy-xxl-5">
                            <div className="col-12 col-md-6 col-lg-4 d-flex">
                                <article className="d-flex">
                                    <div
                                        className="card border border-dark"
                                        style={{ '--bs-card-border-radius': '0', '--bs-card-inner-border-radius': '0' }}
                                    >
                                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                                            <a href="#!">
                                                <img
                                                    className="img-fluid bsb-scale bsb-hover-scale-up"
                                                    loading="lazy"
                                                    src="../img/wellness/wellness-article-1.webp"
                                                    alt="Persona meditando en un entorno pacífico y sereno con iluminación suave y un ambiente calmante."
                                                />
                                            </a>
                                            <figcaption>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-eye text-white bsb-hover-fadeInLeft" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                                                    />
                                                    <path
                                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                                    />
                                                </svg>
                                                <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">Leer más</h4>
                                            </figcaption>
                                        </figure>
                                        <div className="article-body card-body border-0 p-4">
                                            <div className="entry-header mb-3">
                                                <ul className="entry-meta list-unstyled d-flex mb-2">
                                                    <li>
                                                        <a className="link-dark link-opacity-75 link-opacity-100-hover text-decoration-none" href="#!">
                                                            <span className="fs-7">25 Dec 2024</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <h2 className="card-title entry-title h4 mb-0">
                                                    <a className="link-dark link-opacity-100 link-opacity-75-hover text-decoration-none" href="#!">
                                                        Meditación para Reducir el Estrés
                                                    </a>
                                                </h2>
                                            </div>
                                            <p className="card-text entry-summar m-0 p-0">
                                                Descubre técnicas de meditación efectivas para reducir el estrés diario y mejorar tu bienestar emocional.
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex">
                                <article className="d-flex">
                                    <div
                                        className="card border border-dark"
                                        style={{ '--bs-card-border-radius': '0', '--bs-card-inner-border-radius': '0' }}
                                    >
                                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                                            <a href="#!">
                                                <img
                                                    className="img-fluid bsb-scale bsb-hover-scale-up"
                                                    loading="lazy"
                                                    src="../img/wellness/wellness-article-2.webp"
                                                    alt="Una variedad de alimentos saludables, incluidos frutas, verduras y nueces, dispuestos de manera apetecible y colorida."
                                                />
                                            </a>
                                            <figcaption>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-eye text-white bsb-hover-fadeInDown" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                                                    />
                                                    <path
                                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                                    />
                                                </svg>
                                                <h4 className="h6 text-white bsb-hover-fadeInUp mt-2">Leer más</h4>
                                            </figcaption>
                                        </figure>
                                        <div className="article-body card-body border-0 p-4">
                                            <div className="entry-header mb-3">
                                                <ul className="entry-meta list-unstyled d-flex mb-2">
                                                    <li>
                                                        <a className="link-dark link-opacity-75 link-opacity-100-hover text-decoration-none" href="#!">
                                                            <span className="fs-7">11 Nov 2024</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <h2 className="card-title entry-title h4 mb-0">
                                                    <a className="link-dark link-opacity-100 link-opacity-75-hover text-decoration-none" href="#!">
                                                        Alimentos que Mejoran tu Estado de Ánimo
                                                    </a>
                                                </h2>
                                            </div>
                                            <p className="card-text entry-summary m-0 p-0">
                                                Conoce los alimentos que pueden ayudar a mejorar tu estado de ánimo y promover una salud mental positiva.
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex">
                                <article className="d-flex">
                                    <div
                                        className="card border border-dark"
                                        style={{ '--bs-card-border-radius': '0', '--bs-card-inner-border-radius': '0' }}
                                    >
                                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                                            <a href="#!">
                                                <img
                                                    className="img-fluid bsb-scale bsb-hover-scale-up"
                                                    loading="lazy"
                                                    src="../img/wellness/wellness-article-3.webp"
                                                    alt="Persona ejercitándose al aire libre en un parque, luciendo feliz y enérgico."
                                                />
                                            </a>
                                            <figcaption>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-eye text-white bsb-hover-fadeInRight" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                                                    />
                                                    <path
                                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                                    />
                                                </svg>
                                                <h4 className="h6 text-white bsb-hover-fadeInLeft mt-2">Leer más</h4>
                                            </figcaption>
                                        </figure>
                                        <div className="article-body card-body border-0 p-4">
                                            <div className="entry-header mb-3">
                                                <ul className="entry-meta list-unstyled d-flex mb-2">
                                                    <li>
                                                        <a className="link-dark link-opacity-75 link-opacity-100-hover text-decoration-none" href="#!">
                                                            <span className="fs-7">5 Oct 2024</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <h2 className="card-title entry-title h4 mb-0">
                                                    <a className="link-dark link-opacity-100 link-opacity-75-hover text-decoration-none" href="#!">
                                                        Beneficios del Ejercicio para la Salud Mental
                                                    </a>
                                                </h2>
                                            </div>
                                            <p className="card-text entry-summary m-0 p-0">
                                                Explora cómo el ejercicio regular puede mejorar significativamente tu salud mental y emocional.
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex">
                                <article className="d-flex">
                                    <div
                                        className="card border border-dark"
                                        style={{ '--bs-card-border-radius': '0', '--bs-card-inner-border-radius': '0' }}
                                    >
                                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                                            <a href="#!">
                                                <img
                                                    className="img-fluid bsb-scale bsb-hover-scale-up"
                                                    loading="lazy"
                                                    src="../img/wellness/wellness-article-4.webp"
                                                    alt="Persona disfrutando de una rutina de cuidado personal en casa con una mascarilla facial, velas y un ambiente relajante."
                                                />
                                            </a>
                                            <figcaption>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-eye text-white bsb-hover-fadeInLeft" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                                                    />
                                                    <path
                                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                                    />
                                                </svg>
                                                <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">Leer más</h4>
                                            </figcaption>
                                        </figure>
                                        <div className="article-body card-body border-0 p-4">
                                            <div className="entry-header mb-3">
                                                <ul className="entry-meta list-unstyled d-flex mb-2">
                                                    <li>
                                                        <a className="link-dark link-opacity-75 link-opacity-100-hover text-decoration-none" href="#!">
                                                            <span className="fs-7">29 Sep 2024</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <h2 className="card-title entry-title h4 mb-0">
                                                    <a className="link-dark link-opacity-100 link-opacity-75-hover text-decoration-none" href="#!">
                                                        Rutinas de Cuidado Personal en Casa
                                                    </a>
                                                </h2>
                                            </div>
                                            <p className="card-text entry-summary m-0 p-0">
                                                Aprende a crear rutinas de cuidado personal en casa para relajarte y recargar energías.
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex">
                                <article className="d-flex">
                                    <div
                                        className="card border border-dark"
                                        style={{ '--bs-card-border-radius': '0', '--bs-card-inner-border-radius': '0' }}
                                    >
                                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                                            <a href="#!">
                                                <img
                                                    className="img-fluid bsb-scale bsb-hover-scale-up"
                                                    loading="lazy"
                                                    src="../img/wellness/wellness-article-5.webp"
                                                    alt="Persona usando aceites esenciales para aromaterapia en un entorno tranquilo y pacífico con velas y luz suave."
                                                />
                                            </a>
                                            <figcaption>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-eye text-white bsb-hover-fadeInDown" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                                                    />
                                                    <path
                                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                                    />
                                                </svg>
                                                <h4 className="h6 text-white bsb-hover-fadeInUp mt-2">Leer más</h4>
                                            </figcaption>
                                        </figure>
                                        <div className="article-body card-body border-0 p-4">
                                            <div className="entry-header mb-3">
                                                <ul className="entry-meta list-unstyled d-flex mb-2">
                                                    <li>
                                                        <a className="link-dark link-opacity-75 link-opacity-100-hover text-decoration-none" href="#!">
                                                            <span className="fs-7">14 Ago 2024</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <h2 className="card-title entry-title h4 mb-0">
                                                    <a className="link-dark link-opacity-100 link-opacity-75-hover text-decoration-none" href="#!">
                                                        Aromaterapia: Qué Es y Cómo Usarla
                                                    </a>
                                                </h2>
                                            </div>
                                            <p className="card-text entry-summary m-0 p-0">
                                                Descubre los beneficios de la aromaterapia y cómo usar aceites esenciales para mejorar tu bienestar.
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex">
                                <article className="d-flex">
                                    <div
                                        className="card border border-dark"
                                        style={{ '--bs-card-border-radius': '0', '--bs-card-inner-border-radius': '0' }}
                                    >
                                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                                            <a href="#!">
                                                <img
                                                    className="img-fluid bsb-scale bsb-hover-scale-up"
                                                    loading="lazy"
                                                    src="../img/wellness/wellness-article-6.webp"
                                                    alt="Persona practicando meditación mindfulness en un entorno al aire libre sereno, rodeado de naturaleza y luz suave del sol."
                                                />
                                            </a>
                                            <figcaption>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-eye text-white bsb-hover-fadeInRight" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                                                    />
                                                    <path
                                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                                    />
                                                </svg>
                                                <h4 className="h6 text-white bsb-hover-fadeInLeft mt-2">Leer más</h4>
                                            </figcaption>
                                        </figure>
                                        <div className="article-body card-body border-0 p-4">
                                            <div className="entry-header mb-3">
                                                <ul className="entry-meta list-unstyled d-flex mb-2">
                                                    <li>
                                                        <a className="link-dark link-opacity-75 link-opacity-100-hover text-decoration-none" href="#!">
                                                            <span className="fs-7">13 Jul 2024</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <h2 className="card-title entry-title h4 mb-0">
                                                    <a className="link-dark link-opacity-100 link-opacity-75-hover text-decoration-none" href="#!">
                                                        Prácticas de Mindfulness para Principiantes
                                                    </a>
                                                </h2>
                                            </div>
                                            <p className="card-text entry-summary m-0 p-0">
                                                Inicia tu viaje en el mindfulness con estas prácticas sencillas para mejorar tu concentración y reducir el estrés.
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
            </main>



        </>


    );
}

export default Wellnes