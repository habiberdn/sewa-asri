import { useRef, useState } from "react";
import { Button, Input } from "../../components";

import "./../../styles/pages/auth.css";

import logo from "./../../assets/logo.png";
import villaPhoto_1 from "./../../assets/images/image 1.png"
import villaPhoto_2 from "./../../assets/images/image 2.png"
import villaPhoto_3 from "./../../assets/images/image 3.png"
import villaPhoto_4 from "./../../assets/images/image 4.png"

import { useNavigate } from "@tanstack/react-router";
import { useSend } from "../../hooks/useOTP";
import { Message } from "../../utils/interface";

export function Register() {
    const navigate = useNavigate();
    
    const [message, setMessage] = useState<Message>({
        showMessage: false,
        name: ""
    });

    const { sendOTP, isSending } = useSend();
    const emailRef = useRef<string>("");

    console.info("Re-render Register.tsx")
    
    function onSendOtp() {
        if (emailRef.current.length > 0) {
            sendOTP({ email: emailRef.current })
            .then((response) => {
                if (response.success) {
                    navigate({ 
                        to: `/verification-register`,
                        search: { email: emailRef.current }
                    });
                } 
                else if (response.message === "Email already exist!") {
                    setMessage({
                        showMessage: true,
                        name: "Email sudah pernah digunakan"
                    });
                }
            });
        } else {
            setMessage({
                showMessage: true,
                name: "Email tidak boleh kosong"
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

                            <h3 className="h3-medium title">Selamat datang di Sewa Asri Tenant!</h3>
                            <p className="p-regular subtitle">Silahkan masukan email untuk membuat akun</p>
                        </article>
                    </header>

                    <Input  variant="email"
                            label="Email"
                            required={true}
                            placeholder="user@gmail.com"
                                
                            onInputHandler={(text) => {
                                emailRef.current = text;
                            }}

                            showMessage={false}
                            />

                    <section   className="actions" >

                        <Button     behavior="fill-container"  
                                    size="large"
                                    label="Masuk"
                                    variant="primary"
                                    state="active"
                        
                                    onClickHandler={() => {
                                        onSendOtp();                                        
                                    }}

                                    isLoading={isSending}
                                    />

                        <p  className="terms-conditions p-regular">
                            Dengan mendaftar, Anda menyetujui <span className="link">syarat</span> dan <span className="link">ketentuan</span> yang berlaku.
                        </p>
                    </section>
                </section>
            </main>
        </>
    );
}