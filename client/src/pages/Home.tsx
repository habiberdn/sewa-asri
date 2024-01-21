import reservationSchedule1Mockup from "./../assets/mockup/Reservation-schedule-v2-1.webp";
import reservationSchedule2Mockup from "./../assets/mockup/Reservation-schedule-v2-2-cropped.webp";

import villaManagement1Mockup from "./../assets/mockup/Management-villa-1.webp";
import villaManagement2Mockup from "./../assets/mockup/Detail-villa-1-cropped.webp";

import chat1Mockup from "./../assets/mockup/Chat-1.webp";
import chat2Mockup from "./../assets/mockup/Chat-2-cropped.webp";

import { Badge, PageHeader } from "../components";

export function Home() {

    return (
        <>
        <PageHeader />
        <main className="home-container">
            <section className="home-hero-section">
                <article>
                    <h1>Kelola Jadwal Reservasi dan Villa Dengan Sewa Asri Tenant</h1>
                </article>
            </section>
            
            <OurFeature />
        </main>
        </>
    );
}

function OurFeature() {
    return (
        <section className="our-feature-section">

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

            <section className="mockup">

                <img src={reservationSchedule1Mockup} alt="reservation Schedule 1"
                    className="main-mockup" />

                <img src={reservationSchedule2Mockup} alt="reservation Schedule 1"
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

            <section className="mockup">

                <img src={villaManagement1Mockup} alt="reservation Schedule 1"
                    className="main-mockup" />

                <img src={villaManagement2Mockup} alt="reservation Schedule 1"
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

            <section className="mockup">

                <img src={chat1Mockup} alt="reservation Schedule 1"
                    className="main-mockup" />

                <img src={chat2Mockup} alt="reservation Schedule 1"
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