import JulianAvatar from "./../assets/avatar/Avatar-Julian-Transparant.webp";
import HabibAvatar from "./../assets/avatar/Avatar-Habib-Transparant.webp";
import FikriAvatar from "./../assets/avatar/Avatar-Fikri-Transparant.webp";

import AndroidApp1 from "./../assets/mockup/Android App 1.webp";
import AndroidApp2 from "./../assets/mockup/Android App 2.webp";
import Macbook from "./../assets/mockup/Apple MacBook Air.webp";
import ReservationSchedule2 from "./../assets/mockup/Reservation-schedule-v2-2-cropped.webp";
import DetailVilla from "./../assets/mockup/Detail-villa-1-cropped.webp";


import { Badge, Footer, MockupCodeEditor, PageHeader } from "../components";

export function AboutUs() {
    return (
        <>
            <PageHeader />
            <main className="page-container">
                <section className="container">                
            
                <section className="hero-section">
                    
                    <article className="header-description-wrapper">
                        <h1>
                            Tentang Produk Kami <span className="highlight">Sewa Asri Tenant</span>
                        </h1>

                        <p>
                            Layanan perantara C2C (Customer to Customer) memungkinkan kedua belah pihak pemilik villa untuk menyewakan villa mereka kepada tamu secara online.
                        </p>
                    </article>
                    
                    <MockupCodeEditor variant="client" />
                </section>

                <OurHistory />
                <OurOtherProduct />
            </section>
            <Footer />
            </main>
        </>
    );
}

function OurHistory() {
    return (
        <section className="section-wrapper history-section-wrapper">
            <header className="header">

                <h4 className="h4-regular">
                    Sejarah awal kami berdiri
                </h4>

                <h2 className="h2-medium">
                    Our History
                </h2>
            </header>

            <section className="team-list">
                <TeamProfile name="Achmad Julian" role="Frontend Developer | UI/UX Designer" />
                <TeamProfile name="M Habib Erdian" role="Fullstack Developer" />
                <TeamProfile name="Fikri Abdii" role="UX Researcher" />
            </section>

            <p className="history-detail p-regular">
                Sewa Asri adalah proyek yang dibangun secara sukarela dan tidak dikomersilkan (untuk saat ini) dengan tujuan sebagai portfolio yang dapat ditaruh oleh anggota tim di CV mereka. Dan Asri Tech adalah kolektif yang terdiri dari para pengembang dan desainer muda yang bersemangat untuk belajar dan berkembang insiatif dari dua orang anggota tim yaitu Julian dan Habib.
            </p>
        </section>
    );
}

function TeamProfile({ name, role }: { name: string; role: string; }) {
    const avatarMap = {
        "Achmad Julian": JulianAvatar,
        "M Habib Erdian": HabibAvatar,
        "Fikri Abdii": FikriAvatar
    }

    return (
        <section className="team-profile">
            <img src={avatarMap[name]} 
                 alt="avatar-photo"
                 loading="lazy"
                 className="avatar" />

            <article className="detail">
                <p className="label-medium">
                    { name }
                </p>

                <p className="label-regular">
                    { role }
                </p>
            </article>
        </section>
    );
}

function OurOtherProduct() {
    return (
        <section className="section-wrapper mockup-section-wrapper">
            <header className="header">

                <h4 className="h4-regular">
                    Produk kami selain Sewa Asri
                </h4>

                <h2 className="h2-medium">
                    Our Other Product
                </h2>
            </header>

            <main className="main">

                <section className="mockup product-mockup">

                    <img src={AndroidApp1} 
                         alt="reservation Schedule 1"
                         loading="lazy"
                         className="android-mockup" />

                    <img src={AndroidApp2} 
                         alt="reservation Schedule 1"
                         loading="lazy"
                         className="android-mockup" />
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
                            <Badge label="Mencari villa" />
                            <Badge label="Unduh tiket" />
                            <Badge label="Percakapan dengan pengelola" />
                            <Badge label="Booking villa" />
                            <Badge label="Beragam metode pembayaran" />
                        </section>
                    </article>
                </section>
            </main>

            <main className="main">

                <section className="mockup product-mockup">

                    <img src={Macbook} 
                         alt="reservation Schedule 1"
                         loading="lazy"
                         className="main-mockup" />
                    
                    <img src={ReservationSchedule2} 
                         alt="reservation Schedule 1"
                         loading="lazy"
                         className="floating-mockup" />

                    <img src={DetailVilla} 
                         alt="detail villa"
                         loading="lazy"
                         className="floating-mockup" />
                </section>

                <section className="content">
                    <h2 className="h2-medium">
                        Sewa Asri Tenant - Web
                    </h2>

                    <article className="supporting-headline-badge-wrapper">
                        <p className="p-regular supporting-headline">
                            Sewa Asri Tenant adalah aplikasi pengelola villa online dapat menjadi solusi bagi villa yang Anda ingin kelola. Dengan sistem ini Anda dapat mengelola villa kapan saja dan di mana saja sehingga menghemat waktu dan tenaga.
                        </p>

                        <section className="badge-list">
                            <Badge label="Kelola jadwal reservasi" />
                            <Badge label="Unduh tiket" />
                            <Badge label="Beragam metode pembayaran" />
                            <Badge label="Riwayat status reservasi" />
                            <Badge label="Percakapan dengan calon tamu" />
                        </section>
                    </article>
                </section>
            </main>
        </section>
    );
}