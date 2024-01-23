import reservationSchedule1Mockup from "./../assets/mockup/Reservation-schedule-v2-1.webp";
import reservationSchedule2Mockup from "./../assets/mockup/Reservation-schedule-v2-2-cropped.webp";
import villaManagement1Mockup from "./../assets/mockup/Management-villa-1.webp";
import villaManagement2Mockup from "./../assets/mockup/Detail-villa-1-cropped.webp";
import chat1Mockup from "./../assets/mockup/Chat-1.webp";
import chat2Mockup from "./../assets/mockup/Chat-2-cropped.webp";
import villaPhoto from "./../assets/mockup/villa hero section.webp";
import cardVillaMockup from "./../assets/mockup/villa card hero section.webp";

import { useNavigate } from '@tanstack/react-router'
import { Badge, PageHeader, Footer, Button, TestimonialCard } from "../components";

export function Home() {
    return (
        <>
            <PageHeader />
            <main className="page-container">
                <section className="container">

                    <section className="hero-section">

                        <article className="header-description-wrapper">
                            <h1 className="h1-medium">
                                Kelola Jadwal Reservasi dan Villa Dengan <span className="highlight">Sewa Asri Tenant</span>
                            </h1>
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
                    <TotalNumberGrowth />
                    <Testimony />
                    <CTA />

                </section>
            <Footer />
            </main>
        </>
    );
}

function OurFeature() {
    return (
        <section className="section-wrapper mockup-section-wrapper">

            <header className="header">

                <h4 className="h4-regular">
                    Kelola Jadwal Reservasi • Kelola Villa • Chat
                </h4>

                <h2 className="h2-medium">
                    Our Feature
                </h2>
            </header>

            <ReservationScheduleFeature />
            <VillaManagementFeature />
            <ChatFeature />
        </section>
    );
}

function ReservationScheduleFeature() {
    return (
        <main className="main">

            <section className="mockup app-mockup">

                <img src={reservationSchedule1Mockup} 
                     alt="reservation Schedule 1"
                     loading="lazy"
                     className="main-mockup" />

                <img src={reservationSchedule2Mockup} 
                     alt="reservation Schedule 1"
                     loading="lazy"
                     className="floating-mockup" />
            </section>

            <section className="content">
                <h2 className="h2-medium">
                    Kelola Jadwal Reservasi dengan Mudah
                </h2>

                <article className="supporting-headline-badge-wrapper">
                    <p className="p-regular supporting-headline">
                        Sistem pengelola jadwal reservasi online dapat menjadi solusi bagi villa yang Anda ingin kelola. Dengan sistem ini Anda dapat mengelola reservasi kapan saja dan di mana saja sehingga menghemat waktu dan tenaga.
                    </p>

                    <section className="badge-list">
                        <Badge label="Kelola jadwal reservasi" />
                        <Badge label="Unduh tiket" />
                        <Badge label="Beragam metode pembayaran" />
                        <Badge label="Riwayat status reservasi" />
                    </section>
                </article>
            </section>
        </main>
    );
}

function VillaManagementFeature() {
    return (
        <main className="main">

            <section className="mockup app-mockup">

                <img src={villaManagement1Mockup} 
                     alt="reservation Schedule 1"
                     loading="lazy"
                     className="main-mockup" />

                <img src={villaManagement2Mockup} 
                     alt="reservation Schedule 1"
                     loading="lazy"
                     className="floating-mockup" />
            </section>

            <section className="content">
                <h2 className="h2-medium">
                    Kelola Villa dengan Mudah
                </h2>

                <article className="supporting-headline-badge-wrapper">
                    <p className="p-regular supporting-headline">
                        Sistem pengelola villa online dapat menjadi solusi bagi villa yang Anda ingin kelola. Dengan sistem ini Anda dapat mengelola villa kapan saja dan di mana saja sehingga menghemat waktu dan tenaga.
                    </p>

                    <section className="badge-list">
                        <Badge label="Atur status ketersediaan villa" />
                        <Badge label="Edit informasi villa" />
                        <Badge label="Pantau kepuasan tamu" />
                    </section>
                </article>
            </section>
        </main>
    );
}

function ChatFeature() {
    return (
        <main className="main">

            <section className="mockup app-mockup">

                <img src={chat1Mockup} 
                     alt="reservation Schedule 1"
                     loading="lazy"
                     className="main-mockup" />

                <img src={chat2Mockup} 
                     alt="reservation Schedule 1"
                     loading="lazy"
                     className="floating-mockup" />
            </section>

            <section className="content">
                <h2 className="h2-medium">
                    Percakapan dengan Calon Tamu
                </h2>

                <article className="supporting-headline-badge-wrapper">
                    <p className="p-regular supporting-headline">
                        Sistem percakapan online dapat menjadi solusi bagi calon tamu yang Anda ingin hibungi. Dengan sistem ini Anda dapat bercakap dengan calon tamu kapan saja dan di mana saja sehingga menghemat waktu dan tenaga.
                    </p>

                    <section className="badge-list">
                        <Badge label="Percakapan dengan calon tamu" />
                        <Badge label="Melihat daftar tamu" />
                        <Badge label="Notifikasi chat terbaru" />
                    </section>
                </article>
            </section>
        </main>
    );
}

function TotalNumberGrowth() {
    return (
        <section className="total-number-growth">

            <article className="total-reservation">
                <h1 className="h1-semibold">
                    Rp137Jt
                </h1>

                <p className="p-regular">
                    Total keuntungan  yang diperoleh pemilik Villa
                </p>
            </article>

            <section className="list-registred-villa-downloaded">

                <article className="total">

                    <section className="dot-label-wrapper">

                        <div aria-label="dot" className="dot" />

                        <h3 className="h3-medium">
                            80+
                        </h3>
                    </section>

                    <p className="label-regular">
                        Villa yang tersedia
                    </p>
                </article>

                <article className="total">

                    <section className="dot-label-wrapper">

                        <div aria-label="dot" className="dot" />

                        <h3 className="h3-medium">
                            3000+
                        </h3>
                    </section>

                    <p className="label-regular">
                        Aplikasi di unduh
                    </p>
                </article>

                <article className="total">

                    <section className="dot-label-wrapper">

                        <div aria-label="dot" className="dot" />

                        <h3 className="h3-medium">
                            1300+
                        </h3>
                    </section>

                    <p className="label-regular">
                        Pengguna yang terdaftar
                    </p>
                </article>
            </section>

        </section>
    );
}

function Testimony() {
    return (
        <section className="section-wrapper testimonial-section-wrapper">
            <header className="header">
                <h4 className="h4-regular">Testimoni Pengguna</h4>
                <h2 className="h2-medium">Apa Kata Pemilik Tentang Sewa Asri Tenant? </h2>
            </header>

            <section className="testimonial">
                <TestimonialCard name="Reny Anggraini" photo="https://i.pinimg.com/736x/2a/7d/4c/2a7d4c4bc1381a476b8b8a85885ac392.jpg" role="Pengelola villa" reviews="Sewa Asri Tenant dinilai sangat mudah digunakan, baik oleh pengguna pemula maupun pengguna yang sudah berpengalaman. Fitur-fiturnya dirancang dengan intuitif dan mudah dipahami." />
                <TestimonialCard name="Ayu Renita" photo="https://i.pinimg.com/736x/64/7b/a2/647ba2eb2b1f47dc5d8b57a7a4727858.jpg" role="Pengelola villa" reviews="Sejak menggunakan Sewa Asri Tenant, saya tidak perlu lagi mengelola reservasi villa secara manual. Semuanya dapat dilakukan secara otomatis. Hal ini sangat menghemat waktu dan tenaga saya." />
                <TestimonialCard name="Anisa Rahmawati" photo="https://i.pinimg.com/736x/1e/b9/5a/1eb95a3eaef402828b3e539006afde30.jpg" role="Pengelola villa" reviews="Saya telah menggunakan Sewa Asri Tenant selama beberapa bulan dan sangat puas dengan hasilnya. Aplikasi ini sangat membantu saya untuk mengelola reservasi villa dengan mudah dan efisien." />
                <TestimonialCard name="Bella Hadid" photo="https://i.pinimg.com/564x/25/f6/6e/25f66e08ee01e563086bb5723b40ae1b.jpg" role="Pengelola villa" reviews="Saya telah menggunakan Sewa Asri Tenant selama beberapa bulan dan sangat puas dengan hasilnya. Aplikasi ini sangat membantu saya untuk mengelola reservasi villa dengan mudah dan efisien." />
            </section>

        </section>
    )
}

function CTA() {
    const navigate = useNavigate();

    return (
        <section className="cta">
            <h2 className="h2-medium headline">Ayo Buat Akun di Sewa Asri</h2>
            <p className="p-regular supporting-headline">Kelola booking secara otomatis, berkomunikasi dengan calon <br /> tamu, memperbarui harga villa, melihat riwayat booking</p>
            
            <Button variant="primary"
                    behavior="hug-content"
                    size="large"
                    state="active"
                    label="Buat Akun"

                    onClickHandler={() => {
                        navigate({ to: "/register" });
                    }}
            />
        </section>
    )
}