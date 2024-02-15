import styles from "./../styles/css/components/reservation-side-panel.module.css";

import { reservationScheduleDetail } from "./../data/reservation-schedule.json";

import chevronIcon from "./../assets/icons/chevron-down.webp";
import copyIcon from "./../assets/icons/copy.webp";
import chatIcon from "./../assets/icons/chat-2.webp";

import { useState } from "react";
import { Button } from "./Button";

interface ReservationScheduleDetail {
    id: string;
    
    date: string;
    status: string;
    total: number;

    guest: {
        id: string;
        name: string;
        photo: string;
    };

    villa: {
        id: string;
        name: string;
    };
 
    schedule: {
        checkIn: string;
        checkOut: string;
    },

    history: Array<{
        id: string;
        status: string;
        date: string;
    }>
}

export function ReservationSidePanel({ 
    reservationId,
    sidePanelStatus,
    onCloseHandler
}: { 
    reservationId: string;
    sidePanelStatus: string;
    onCloseHandler: () => void;
}) {
    const data = reservationScheduleDetail.find((reservation) => reservation.id === reservationId);

    console.info(reservationId);
    console.info("Render side panel");

    return (
        <aside className={`${styles["reservation-side-panel"]} ${styles["reservation-side-panel-" + sidePanelStatus]}`}>
            
            <header className={`${styles["header"]} ${styles["main-header"]}`}>
                <img 
                    className={`${styles["chevron-icon"]}`}
                    src={chevronIcon} 
                    alt="chevron icon" 
                    onClick={onCloseHandler}
                />
                <h4 className="h4-medium label">Detail reservasi</h4>
            </header>

            <main className={styles["reservation"]}>
                <ReservationDetail data={data} />
                <HistoryDetail data={data} />
            </main>

            <footer className={`${styles["main-footer"]} ${styles["footer"]}`}>
                {(data) && data.status === "Pembayaran berhasil" ? (
                        <>
                            <Button 
                                variant="secondary"
                                behavior="hug-content"
                                size="large"
                                state="active"
                                label="Cetak invoice"

                                onClickHandler={() => {
                                    
                                }}
                            />

                            <Button 
                                variant="primary"
                                behavior="hug-content"
                                size="large"
                                state="active"
                                label="Cetak tiket"

                                onClickHandler={() => {
                                    
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <Button 
                                variant="destructive"
                                behavior="hug-content"
                                size="large"
                                state="active"
                                label="Tolak reservasi"

                                onClickHandler={() => {
                                    
                                }}
                            />

                            <Button 
                                variant="primary"
                                behavior="hug-content"
                                size="large"
                                state="active"
                                label="Terima reservasi"

                                onClickHandler={() => {
                                    
                                }}
                            />
                        </>
                    )}
            </footer>
        </aside>
    );
}

function ReservationDetail({ data }: { data: ReservationScheduleDetail | undefined }) {
    const [isAccordionOpened, setIsAccordionOpened] = useState(true);

    return (
        <section className={`${styles["detail"]} ${!isAccordionOpened && styles["detail-closed"]}`}>
            <header 
                className={`${styles["accordion"]}`}
                onClick={() => isAccordionOpened ? setIsAccordionOpened(false) : setIsAccordionOpened(true)}
            >

                <h4 className="h4-medium">Detail</h4>

                <img 
                    className={`${styles["chevron-icon"]} ${!isAccordionOpened && styles["chevron-icon-closed"]}`}
                    src={chevronIcon} 
                    alt="chevron icon" 
                />
            </header>

            { data ? (
                <main className={`
                    ${isAccordionOpened ? styles['accordion-content-opened'] : styles['accordion-content-closed']} 
                    ${styles["accordion-content"]}
                `}>
                    <figure className={styles["guest"]}>
                        <img 
                            className={styles["photo"]}
                            loading="lazy"
                            src={data && data.guest.photo}
                            alt="chevron icon"
                        />

                        <figcaption className={styles["detail"]}>
                            <section className={styles["name-chat-wrapper"]}>
                                <h4 className={`h4-regular ${styles["name"]}`}>{ data.guest.name} </h4>

                                <img
                                    className={styles["chat-icon"]}
                                    src={chatIcon}
                                    alt="chevron icon"
                                />
                            </section>
                            <h4 className={`label-regular ${styles["status"]}`}>{ data.status }</h4>
                        </figcaption>
                    </figure>

                    <section className={styles["paper-detail"]}>

                        <article className={styles["data-cell"]}>
                            <h4 className="label-regular">Reservation id</h4>

                            <section className={`${styles["data"]} ${styles["id-copy-wrapper"]}`}>
                                <h4 className={`label-regular ${styles["id"]}`}>{ data.id }</h4>

                                <img 
                                    className={styles["copy-icon"]}
                                    loading="lazy"
                                    src={copyIcon} 
                                    alt="copy icon" 

                                    onClick={() => console.info("Copied Text")}
                                />
                            </section>
                        </article>

                        <article className={styles["data-cell"]}>
                            <h4 className="label-regular">Nama villa</h4>
                            <h4 className={`label-regular ${styles["data"]}`}>{ data.villa.name }</h4>
                        </article>

                        <article className={styles["data-cell"]}>
                            <h4 className="label-regular">Harga sewa per malam</h4>
                            <h4 className={`label-regular ${styles["data"]}`}>{ data.villa.name }</h4>
                        </article>

                        <article className={styles["data-cell"]}>
                            <h4 className="label-regular">Check-in</h4>
                            <h4 className={`label-regular ${styles["data"]}`}>{ data.schedule.checkIn }</h4>
                        </article>

                        <article className={styles["data-cell"]}>
                            <h4 className="label-regular">Check-out</h4>
                            <h4 className={`label-regular ${styles["data"]}`}>{ data.schedule.checkOut }</h4>
                        </article>

                        <article className={styles["data-cell"]}>
                            <h4 className="label-regular">Total</h4>
                            <h4 className={`label-medium ${styles["data"]}`}>Rp. { data.total }</h4>
                        </article>
                    </section>
                </main>
            ) : (
                <h4 className="label-regular">Reservation not found</h4>
            )
            }            
        </section>
    );
}

function HistoryDetail({ data }: { data: ReservationScheduleDetail | undefined }) {
    const [isAccordionOpened, setIsAccordionOpened] = useState(false);

    return (
        <section className={`${styles["detail"]} ${!isAccordionOpened && styles['detail-closed']}`}>
            <header 
                className={styles["accordion"]}
                onClick={() => isAccordionOpened ? setIsAccordionOpened(false) : setIsAccordionOpened(true)}
            >

                <h4 className="h4-medium">Riwayat</h4>

                <img 
                    className={`${styles["chevron-icon"]} ${!isAccordionOpened && styles['chevron-icon-closed']}`}
                    src={chevronIcon} 
                    alt="chevron icon" 
                />
            </header>

            { data ? (
                <section className={`${styles["reservation-detail"]} ${styles["history-detail"]}`}>
                    <header className={styles["header"]}>
                        <h4 className="label-medium">Status</h4>
                    </header>

                    <main className={`
                        ${isAccordionOpened ? styles['accordion-content-opened'] : styles['accordion-content-closed']} 
                        ${styles["accordion-content"]} ${styles["body"]}
                    `}>
                        { data.history.map((history) => {
                            return (
                                <article 
                                    className={styles["row"]}
                                    key={history.id}
                                >
                                    <p 
                                        className={`
                                            label-regular ${styles["status"]}
                                            ${((history.status === "Menunggu konfirmasi") || (history.status === "Menunggu pembayaran")) && styles['status-pending']}
                                            ${history.status === "Reservasi ditolak" && styles['status-failed']}
                                            ${history.status === "Reservasi diterima" && styles['status-success']}
                                        `}
                                    >{ history.status }</p>

                                    <p className={`label-regular ${styles["date"]}`}>{ history.date }</p>
                                </article>
                            )
                        })
                        }
                    </main>
                </section>
            ) : (
                <h4 className="label-regular">History not found</h4>
            )
            }
        </section>
    );
}