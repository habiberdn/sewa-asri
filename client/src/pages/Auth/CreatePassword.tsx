import { useRef, useState } from "react";
import { Button, Input } from "../../components";

import "./../../styles/pages/auth.css";

import logo from "./../../assets/logo.png";
import villaPhoto_1 from "./../../assets/images/image 1.png"
import villaPhoto_2 from "./../../assets/images/image 2.png"
import villaPhoto_3 from "./../../assets/images/image 3.png"
import villaPhoto_4 from "./../../assets/images/image 4.png"

import { useNavigate, useSearch } from "@tanstack/react-router";
import { useRegister } from "../../hooks/useAuth";
import { Message, PasswordRef } from "../../utils/interface";

export function CreatePassword() {
    const navigate = useNavigate();
    const { email, otp } = useSearch({ strict: false });

    const { createAccount, isCreating } = useRegister();

    const passwordRef = useRef<PasswordRef>({
        password: "",
        passwordConfirm: ""
    });

    const [message, setMessage] = useState<Message>({
        showMessage: false,
        name: ""
    });
    
    function onCreatePassword() {
        if (passwordRef.current.password === passwordRef.current.passwordConfirm) {
            createAccount({
                name: `User ${email}`,
                email: email,
                password: passwordRef.current.password,
                otp: otp
            })

            .then((response) => {
                console.info(response);
                if (response.status === "Success") {
                    navigate({ to: "/dashboard" });
                }
                else {
                    setMessage({
                        showMessage: true,
                        name: "Ada kesalahan di sisi server, mohon coba beberapa saat lagi"
                    });
                }
            })

            .catch(() => {
                setMessage({
                    showMessage: true,
                    name: "Ada kesalahan di server, mohon coba beberapa saat lagi"
                });
            });
        } 
        else {
            setMessage({
                showMessage: true,
                name: "Password harus sama!"
            });
        }
    }

    if (message.showMessage) {
        setTimeout(() => {
            setMessage({
                showMessage: false,
                name: ""
            });
        }, 2000);
    }

    return (
        <>  
            <div className="ellipse" />
            <div className="ellipse" />

            <main  className="auth-container">
                <section  className="hero-section" >
                    <h1 className="h1-bold">
                        Kelola Villa Praktis Dengan <span style={{ color: 'var(--primary-400)'}}>Sewa Asri Tenant</span>
                    </h1>

                    <article  className="image-gallery" >
                        <img className="image" src={villaPhoto_1} />
                        <img className="image" src={villaPhoto_2} />
                        <img className="image" src={villaPhoto_3} />
                        <img className="image" src={villaPhoto_4} />
                    </article>
                </section>

                <section className="form">

                    <header className="content">

                        <img src={logo} className="logo" />

                        <article className="detail">

                            <h3 className="h3-medium title">Buat password</h3>
                            <p className="p-regular subtitle">Buat password yang mudah diingat dan sulit ditebak (minimal 8 karakter)</p>
                        </article>
                    </header>

                    <Input  variant="email"
                            label="Buat password"
                            required={true}
                            placeholder="user1234"
                                
                            onInputHandler={(text) => {
                                passwordRef.current.password = text;
                            }}

                            showMessage={false}
                                
                            />

                    <Input  variant="email"
                            label="Ketik ulang password"
                            required={true}
                            placeholder="user1234"
                                
                            onInputHandler={(text) => {
                                passwordRef.current.passwordConfirm = text;
                            }}

                            showMessage={false}
                                
                            />

                    <section   className="actions" >

                        <Button     behavior="fill-container"  
                                    size="large"
                                    label="Buat password"
                                    variant="primary"
                                    state="active"
                        
                                    onClickHandler={() => {
                                        onCreatePassword();
                                    }}

                                    isLoading={isCreating}
                                    />

                    </section>
                </section>
            </main>
        </>
    );
}