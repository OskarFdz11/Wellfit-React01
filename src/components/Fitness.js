import React from 'react'

function Fitness() {
    return (

        <>

            <main>
                {/* Tarjeta informativa de cada categoría */}

                {/* Tarjetas de los posts con bootstrap */}
                <section className="py-1 py-md-5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                                <h2 className="category-title mb-4 display-5 text-center">FITNESS</h2>
                                <p className="category-description mb-5 text-center lead fs-4">
                                    Encuentra consejos y rutinas de fitness para mejorar tu salud y bienestar.
                                </p>
                                <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                            </div>
                        </div>
                    </div>

                    <div className="container overflow-hidden">
                        <div className="row gy-4 gy-xxl-5">
                            <div className="col-12 col-md-6 col-lg-4 d-flex">
                                <article className="d-flex">
                                    <div className="card border border-dark" style={{ '--bs-card-border-radius': '0', '--bs-card-inner-border-radius': '0' }}>
                                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                                            <a href="#!">
                                                <img
                                                    className="img-fluid bsb-scale bsb-hover-scale-up"
                                                    loading="lazy"
                                                    src="../img/fitness/fitness-article-1.webp"
                                                    alt="Persona levantando pesas incorrectamente en un gimnasio, mostrando errores comunes."
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
                                                        Errores Comunes en el Gimnasio y Cómo Evitarlos
                                                    </a>
                                                </h2>
                                            </div>
                                            <p className="card-text entry-summar m-0 p-0">
                                                Identifica y corrige los errores más comunes en el gimnasio para optimizar tus resultados y prevenir lesiones.
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex">
                                <article className="d-flex">
                                    <div className="card border border-dark" style={{ '--bs-card-border-radius': '0', '--bs-card-inner-border-radius': '0' }}>
                                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                                            <a href="#!">
                                                <img
                                                    className="img-fluid bsb-scale bsb-hover-scale-up"
                                                    loading="lazy"
                                                    src="../img/fitness/fitness-article-2.webp"
                                                    alt="Persona realizando entrenamiento de alta intensidad en un gimnasio en casa."
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
                                                        Entrenamientos de Alta Intensidad para Principiantes
                                                    </a>
                                                </h2>
                                            </div>
                                            <p className="card-text entry-summary m-0 p-0">
                                                Descubre cómo empezar con entrenamientos HIIT y mejora tu condición física rápidamente. Guía paso a paso para principiantes.
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex">
                                <article className="d-flex">
                                    <div className="card border border-dark" style={{ '--bs-card-border-radius': '0', '--bs-card-inner-border-radius': '0' }}>
                                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                                            <a href="#!">
                                                <img
                                                    className="img-fluid bsb-scale bsb-hover-scale-up"
                                                    loading="lazy"
                                                    src="../img/fitness/fitness-article-3.webp"
                                                    alt="Persona levantando pesas en un gimnasio, demostrando entrenamiento de fuerza."
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
                                                        Beneficios del Entrenamiento con Pesas
                                                    </a>
                                                </h2>
                                            </div>
                                            <p className="card-text entry-summary m-0 p-0">
                                                Conoce cómo el entrenamiento con pesas puede transformar tu cuerpo y mejorar tu salud general. Rutinas y consejos prácticos.
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex">
                                <article className="d-flex">
                                    <div className="card border border-dark" style={{ '--bs-card-border-radius': '0', '--bs-card-inner-border-radius': '0' }}>
                                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                                            <a href="#!">
                                                <img
                                                    className="img-fluid bsb-scale bsb-hover-scale-up"
                                                    loading="lazy"
                                                    src="../img/fitness/fitness-article-4.webp"
                                                    alt="Persona haciendo ejercicios de cardio en casa, saltando la cuerda."
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
                                                        Rutinas de Cardio en Casa
                                                    </a>
                                                </h2>
                                            </div>
                                            <p className="card-text entry-summary m-0 p-0">
                                                Aprende rutinas de cardio efectivas que puedes realizar en casa sin equipo especializado. Mantente en forma sin salir
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex">
                                <article className="d-flex">
                                    <div className="card border border-dark" style={{ '--bs-card-border-radius': '0', '--bs-card-inner-border-radius': '0' }}>
                                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                                            <a href="#!">
                                                <img
                                                    className="img-fluid bsb-scale bsb-hover-scale-up"
                                                    loading="lazy"
                                                    src="../img/fitness/fitness-article-5.webp"
                                                    alt="Persona practicando yoga en casa en un entorno sereno y tranquilo."
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
                                                        Yoga para la Flexibilidad y Relajación
                                                    </a>
                                                </h2>
                                            </div>
                                            <p className="card-text entry-summary m-0 p-0">
                                                Explora los beneficios del yoga para mejorar tu flexibilidad y reducir el estrés. Posturas simples para practicar en casa
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex">
                                <article className="d-flex">
                                    <div className="card border border-dark" style={{ '--bs-card-border-radius': '0', '--bs-card-inner-border-radius': '0' }}>
                                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                                            <a href="#!">
                                                <img
                                                    className="img-fluid bsb-scale bsb-hover-scale-up"
                                                    loading="lazy"
                                                    src="../img/fitness/fitness-article-6.webp"
                                                    alt="Persona preparando una comida saludable con verduras frescas en una cocina limpia."
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
                                                        Alimentación y Fitness: Combinación Perfecta
                                                    </a>
                                                </h2>
                                            </div>
                                            <p className="card-text entry-summary m-0 p-0">
                                                Descubre cómo una alimentación adecuada potencia tus entrenamientos y acelera tu progreso. Consejos nutricionales esenciales
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

export default Fitness