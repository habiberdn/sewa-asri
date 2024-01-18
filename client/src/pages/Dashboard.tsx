import Cookies from 'universal-cookie';

import { useState } from "react";
import { WidgetHeader, Sidebar, ProfilePanel, Modal, MessageBar, PageHeader } from "../components";
import { getUser } from "../utils/userStore";
import { useLogout } from "../hooks/useAuth";
import { useNavigate } from '@tanstack/react-router';

import { ModalLogout, IMessageBar } from '../utils/interface';

const cookies = new Cookies("auth-token", { path: '/' });

export function Dashboard() {
    const navigate = useNavigate();

    const user = getUser();
    const { trigger:logout } = useLogout();

    const [profilePanel, setProfilePanel] = useState<"opened" | "closed">("closed");

    const [confirmLogout, setConfirmLogout] = useState<ModalLogout>({
        modal: "closed",
        logout: false
    }); 

    const [messagebar, setMessagebar] = useState<IMessageBar>({
        showMessageBar: false,
        variant: "error",
        message: ""
    }); 

    function onLogout() {
        const token = cookies.get("auth-token");

        logout({ token: token })

        .then((response) => {
            if (response.status === "success") {
                cookies.remove("auth-token");
                navigate({ to: "/login" });
            } 
            else {
                setMessagebar({
                    showMessageBar: true,
                    message: "Logout gagal silahkan coba beberapa saat lagi"
                });
            }
        })
        .catch(() => {
            setMessagebar({
                showMessageBar: true,
                message: "Terjadi kesalahan di sisi server, silahkan soba beberapa saat lagi"
            });
        });
    }

    // if (messagebar.showMessageBar) {
    //     setTimeout(() => {
    //         setMessagebar({
    //             showMessageBar: false,
    //             message: "Logout gagal silahkan coba beberapa saat lagi "
    //         });
    //     }, 2000);
    // }

    console.count("Dashboard.tsx Re-render");

    return (
        <main  className="dashboard-container">
            <Sidebar />

            <section  className="main-container">
                <PageHeader variant="auth" onHoverProfile={() => setProfilePanel("opened")} />

                <section  className="widget">
                    <WidgetHeader variant="dashboard" />
                </section>

                <ProfilePanel   state={profilePanel} 
                                onMouseLeave={() => setProfilePanel("closed")} 
                                    
                                onLogoutHandler={() => {
                                    setConfirmLogout({
                                        modal: "opened",
                                        logout: false
                                    });
                                }}
                                    
                                name={user?.name}
                                photo={user?.photo}
                                />

                <Modal  variant="default"
                        title="Keluar"
                        description="Apakah kamu ingin mengeluarkan akun mu dari perangkat ini?"
                            
                        action1Label="Iya, keluar"
                        action2Label="Tidak"

                        state={confirmLogout.modal}

                        action1Handler={() => {
                            setConfirmLogout({
                                modal: "closed",
                                logout: true
                            });

                            onLogout();
                        }}

                        action2Handler={() => {
                            setConfirmLogout({
                                modal: "closed",
                                logout: false
                            });
                        }}
                        />

                <MessageBar message={messagebar.message}
                            variant='error'
                            showMessageBar={messagebar.showMessageBar}
                            />
            </section>
        </main>
    );
}