import { useContext } from "react";
import { AuthContext } from "../context/UserContext";
import { useNavigate } from "@tanstack/react-router";
import { WidgetHeader, PageHeader, Sidebar } from "../components";

export function Chat() {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    console.count("Chat.tsx Re-render");

    if (auth.authenticated) {
        return (
            <main  className="dashboard-container">
                <Sidebar />

                <section  className="main-container">
                    <PageHeader variant="auth" />

                    <section  className="widget">

                        <WidgetHeader variant="chat" />
                    </section>
                </section>
            </main>
        );
    }
    else {
        navigate({ to: '/login' })
    }
}