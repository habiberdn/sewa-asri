import styles from "./../styles/css/pages/reservation-schedule.module.css";

import { useContext, useState } from "react";
// import { AuthContext } from "../context/UserContext";
// import { useNavigate } from "@tanstack/react-router";

import { WidgetHeader, PageHeader, Sidebar } from "../components";
// import { ReservationTable } from "../components/Table";
import { Button } from "./../components/Button";

// import { reservationSchedule } from "./../data/reservation-schedule.json";

export function ReservationSchedule() {
    return (
        <main  className="dashboard-container">
            <Sidebar />

            <section  className="main-container">
                <PageHeader variant="auth" />

                <section  className={`widget ${styles["reservation-schedule"]}`}>

                    <WidgetHeader variant="reservation-schedule" />
                    {/* <ReservationTable data={reservationSchedule} /> */}
                    {/* <Navigation /> */}

                </section>
            </section>
        </main>
    );
}

function Navigation() {
    const [row, setRow] = useState<7 | 10 | 20>(7);

    return (
        <nav className={styles.navigation}>

            <section className={styles["row-filter"]}>
                <h4 className="label-medium">show</h4>

                <button
                    onClick={() => setRow(7)}

                    className={`${row === 7 && styles["row-selected"]} ${styles["row"]} label-regular`}
                >7</button>
                
                <button
                    onClick={() => setRow(10)}

                    className={`${row === 10 && styles["row-selected"]} ${styles["row"]} label-regular`}
                >10</button>


                <button
                    onClick={() => setRow(20)}

                    className={`${row === 20 && styles["row-selected"]} ${styles["row"]} label-regular`}
                >20</button>

                <h4 className="label-regular">row per page</h4>
            </section>

            <section className={styles["page"]}>
                <h4 className="label-regular">Page 1</h4>

                <section className={styles["actions"]}>
                    <Button     
                        variant="secondary"
                        behavior="hug-content"
                        size="large"
                        state="active"
                        label="Previous"

                        onClickHandler={() => {
                            console.info("") 
                        }}
                    />

                    <Button     
                        variant="primary"
                        behavior="hug-content"
                        size="large"
                        state="active"
                        label="Next"

                        onClickHandler={() => {
                            console.info("") 
                        }}
                    />
                </section>

            </section>
        </nav>
    );
}