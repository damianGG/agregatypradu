import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS

// import Navbar from "@/components/blocks/navbar/navbar-1";
import ContactForm from "@/components/common/ContactForm";
import NextLink from "@/components/reuseable/links/NextLink";
// CUSTOM DATA


export default function Contact() {
    return (
        <Fragment>
            {/* ========== header section ========== */}
            {/* <header className="wrapper bg-soft-primary">
        <Navbar
          language
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark"
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-white rounded-pill" />}
        />
      </header> */}

            <main className="content-wrapper">
                {/* ========== page title section ========== */}
                <section
                    className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white"
                    style={{ backgroundImage: "url(/img/photos/bg3.jpg)" }}>
                    <div className="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h1 className="display-1 mb-3 text-white">Kontakt</h1>

                            </div>
                        </div>
                    </div>
                </section>

                <div className="wrapper bg-light angled upper-end">
                    <div className="container pb-11">
                        {/* ========== contact info section ========== */}
                        <div className="row mb-14 mb-md-16">
                            <div className="col-xl-10 mx-auto mt-n19">
                                <div className="card">
                                    <div className="row gx-0">
                                        <div className="col-lg-6 align-self-stretch">
                                            <div className="map map-full rounded-top rounded-lg-start">
                                                <iframe
                                                    allowFullScreen
                                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d269.21678824712797!2d21.73242894731764!3d50.06313874000564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1724363515980!5m2!1spl!2spl"
                                                    style={{ width: "100%", height: "100%", border: 0 }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="p-10 p-md-11 p-lg-14">
                                                <div className="d-flex flex-row">
                                                    <div>
                                                        <div className="icon text-primary fs-28 me-4 mt-n1">
                                                            <i className="uil uil-location-pin-alt" />
                                                        </div>
                                                    </div>
                                                    <div className="align-self-start justify-content-start">
                                                        <h5 className="mb-1">Address</h5>
                                                        <address>
                                                            Sielec 1A <br className="d-none d-md-block" />
                                                            39-120 Sędziszów Młp.
                                                        </address>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row">
                                                    <div>
                                                        <div className="icon text-primary fs-28 me-4 mt-n1">
                                                            <i className="uil uil-phone-volume" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-1">Telefon</h5>
                                                        <p>
                                                            +48 606 392 657<br />

                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row">
                                                    <div>
                                                        <div className="icon text-primary fs-28 me-4 mt-n1">
                                                            <i className="uil uil-envelope" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-1">E-mail</h5>
                                                        <p className="mb-0">
                                                            <a href="mailto:biuro@agregatypradu.pl" className="link-body">
                                                                biuro@agregatypradu.pl
                                                            </a>
                                                        </p>
                                                        <p className="mb-0">
                                                            <a href="mailto:help@agregatypradu.pl" className="link-body">
                                                                pomoc@agregatypradu.pl
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ========== contact form section ========== */}
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                <h2 className="display-4 mb-3 text-center">Zostaw wiadomość</h2>
                                <p className="lead text-center mb-10">
                                    Zostaw wiadomość, a my odpowiemy tak szybko, jak to możliwe.
                                </p>

                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* ========== footer section ========== */}

        </Fragment>
    );
}
