import { useContext } from "react";
import { AuthContext } from "../context/UserContext";
import { useNavigate } from "@tanstack/react-router";
import { Header, Modal, Sidebar } from "../components";

export function ReservationSchedule() {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    console.count("Dashboard.tsx Re-render");

    if (auth.authenticated) {
        return (
            <main  className="dashboard-container">
                <Sidebar />

                <section  className="main-container">
                    <Header variant="main" />

                    <section  className="widget">

                        <Header variant="reservation-schedule" />
                    </section>
                </section>
            </main>
        );
    }
    else {
        navigate({ to: '/login' })
    }
}