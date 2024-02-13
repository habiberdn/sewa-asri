import "./../styles/css/components/web-sidebar.css";

import closeIcon from "./../assets/icons/cross.webp";

import { Link, useNavigate } from "@tanstack/react-router";
import { Button } from "./Button";

export function WebSidebar({ status, setStatus }: { status: string, setStatus: () => void }) {
    const navigate = useNavigate();

    return (
        <aside className={`web-sidebar web-sidebar-${status}`}>
            <img
                className="close-icon"
                src={closeIcon}
                alt="Close icon"
                
                onClick={() => setStatus()}
            />

            <nav className="navigation">
                <article className="menus">
                    <Link to="/">Home</Link>
                    <Link to="/about-us">Tentang kami</Link>
                    <Link to="/terms-and-conditions">Syarat dan ketentuan</Link>
                </article>

                <section className="actions">
                    <Button 
                        variant="primary"
                        behavior="fill-container"
                        size="large"
                        state="active"
                        label="Login"

                        onClickHandler={() => {
                            navigate({ to: "/login" });
                        }}
                    />

                    <Button 
                        variant="secondary"
                        behavior="fill-container"
                        size="large"
                        state="active"
                        label="Register"

                        onClickHandler={() => {
                            navigate({ to: "/register" });
                        }}
                    />
                </section>
            </nav>
        </aside>
    );
}