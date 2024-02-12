import "./../styles/css/pages/page.css"

import villaPhoto from "./../assets/mockup/villa hero section.webp";
import cardVillaMockup from "./../assets/mockup/villa card hero section.webp";

import { PageHeader, Footer } from "../components";
import { OurFeature, TotalNumberGrowth, Testimony, CTA } from "./Sections";

export function Home() {
    return (
        <>
            <PageHeader />
            <main className="page-container">
                <section className="container">

                    <section className="hero-section">

                        <article className="header-description-wrapper">
                            <h1 className="title">
                                Kelola Jadwal Reservasi dan Villa Dengan <span className="highlight">Sewa Asri Tenant</span>
                            </h1>

                            <p className="description">
                                Kamu dapat mengelola villa beserta jadwal reservasinya dan menerima pembayaran lewat berbagai macam metode pembayaran
                            </p>
                        </article>

                        <section className="mockup">

                            <img src={villaPhoto} 
                                 alt="villa photo"
                                 loading="lazy" />

                            <img src={cardVillaMockup} 
                                 alt="card villa mockup"
                                 loading="lazy"
                                 className="card-photo" />
                        </section>
                    </section>

                    <OurFeature />
                    {/* <TotalNumberGrowth /> */}
                    {/* <Testimony /> */}
                    <CTA />

                </section>
            {/* <Footer /> */}
            </main>
        </>
    );
}