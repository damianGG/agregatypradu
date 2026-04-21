import { Fragment } from "react";
import ContactForm from "@/components/common/ContactForm";

export default function Contact() {
  return (
    <Fragment>
      {/* Page Hero */}
      <section
        className="relative min-h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(/img/photos/bg3.jpg)" }}
      >
        <div className="absolute inset-0 bg-blue-900/60" />
        <div className="relative z-10 text-center px-4 py-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Kontakt</h1>
        </div>
      </section>

      <main className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Info Card */}
          <div className="max-w-5xl mx-auto -mt-20 mb-16 relative z-10">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 h-64 lg:h-auto">
                  <iframe
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d269.21678824712797!2d21.73242894731764!3d50.06313874000564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1724363515980!5m2!1spl!2spl"
                    style={{ width: "100%", height: "100%", minHeight: 300, border: 0 }}
                  />
                </div>
                <div className="w-full lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Adres</h5>
                      <address className="text-gray-600 not-italic text-sm">Sielec 1A<br />39-120 Sędziszów Młp.</address>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Telefon</h5>
                      <p className="text-gray-600 text-sm">+48 606 392 657</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">E-mail</h5>
                      <a href="mailto:biuro@agregatypradu.pl" className="text-blue-600 hover:text-blue-700 text-sm block">biuro@agregatypradu.pl</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">Zostaw wiadomość</h2>
            <p className="text-gray-600 text-center mb-10">
              Zostaw wiadomość, a my odpowiemy tak szybko, jak to możliwe.
            </p>
            <ContactForm />
          </div>
        </div>
      </main>
    </Fragment>
  );
}
