import React from 'react'

function Lifestyle() {
    return (
        <>

            <main>
                {/* Tarjetas de los posts con bootstrap */}
                <section className="py-1 py-md-5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                                <h2 className="category-title mb-4 display-5 text-center">LIFESTYLE</h2>
                                <p className="category-description mb-5 text-center lead fs-4">
                                    Explora consejos y tendencias para un estilo de vida equilibrado.
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
                                                    src="../img/lifestyle/lifestyle-article-1.webp"
                                                    alt="Persona mostrando las últimas tendencias de moda de la temporada en un entorno moderno."
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
                                                        Tendencias de Moda para esta Temporada
                                                    </a>
                                                </h2>
                                            </div>
                                            <p className="card-text entry-summar m-0 p-0">
                                                Descubre las últimas tendencias de moda y cómo incorporarlas a tu estilo diario. Mantente siempre a la vanguardia
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
                                                    src="../img/lifestyle/lifestyle-article-2.webp"
                                                    alt="Espacio de trabajo en casa bien organizado con escritorio limpio, silla ergonómica y buena iluminación."
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
                                                        Cómo Organizar tu Espacio de Trabajo en Casa
                                                    </a>
                                                </h2>
                                            </div>
                                            <p className="card-text entry-summary m-0 p-0">
                                                Aprende a organizar tu espacio de trabajo en casa para aumentar tu productividad y bienestar. Consejos prácticos.
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
                                                    src="../img/lifestyle/lifestyle-article-3.webp"
                                                    alt="Persona disfrutando de una rutina matutina tranquila con una taza de café y un libro en un entorno acogedor con luz natural."
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
                                                        Rituales de Mañana para un Día Productivo
                                                    </a>
                                                </h2>
                                            </div>
                                            <p className="card-text entry-summary m-0 p-0">
                                                Descubre rituales matutinos que te ayudarán a tener un día más productivo y lleno de energía. Empieza bien tu jornada
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
                                                    src="../img/lifestyle/lifestyle-article-4.webp"
                                                    alt="Persona practicando mindfulness o meditación en un entorno sereno con iluminación suave y asiento cómodo."
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
                                                        Estrategias para Reducir el Estrés Diario
                                                    </a>
                                                </h2>
                                            </div>
                                            <p className="card-text entry-summary m-0 p-0">
                                                Conoce técnicas efectivas para reducir el estrés y mejorar tu calidad de vida. Estrategias fáciles de implementar.
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
                                                    src="../img/lifestyle/lifestyle-article-5.webp"
                                                    alt="Sala de estar minimalista con líneas limpias, colores neutros y decoración simple. Incluye un sofá, mesa de café y algunas plantas."
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
                                                        Decoración Minimalista para tu Hogar
                                                    </a>
                                                </h2>
                                            </div>
                                            <p className="card-text entry-summary m-0 p-0">
                                                Inspírate con ideas de decoración minimalista para crear un hogar tranquilo y armonioso. Menos es más.
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
                                                    src="../img/lifestyle/lifestyle-article-6.webp"
                                                    alt="Persona relajándose en una playa con agua azul clara, disfrutando de unas vacaciones tranquilas. Incluye una silla de playa y una sombrilla."
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
                                                        Viajes y Bienestar: Escapadas Relajantes
                                                    </a>
                                                </h2>
                                            </div>
                                            <p className="card-text entry-summary m-0 p-0">
                                                Descubre destinos de viaje que combinan relajación y bienestar. Encuentra el equilibrio perfecto en tus escapadas.
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

export default Lifestyle