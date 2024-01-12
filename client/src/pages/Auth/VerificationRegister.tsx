import { useRef, useState } from "react";
import { Button, Input } from "../../components";

import "./../../styles/pages/auth.css";

import logo from "./../../assets/logo.png";
import villaPhoto_1 from "./../../assets/images/image 1.png"
import villaPhoto_2 from "./../../assets/images/image 2.png"
import villaPhoto_3 from "./../../assets/images/image 3.png"
import villaPhoto_4 from "./../../assets/images/image 4.png"

import { useNavigate, useSearch } from "@tanstack/react-router";
import { useVerification, useSend } from "../../hooks/useOTP";
import { Message } from "../../utils/interface";

export function VerificationRegister() {
    const navigate = useNavigate();
    const { email } = useSearch({ strict: false });

    console.info(email);

    const otpRef = useRef<string | number>(0);

    const { sendOTP, isSending } = useSend();
    const { verifyOtp, isVerifying } = useVerification();

    const [message, setMessage] = useState<Message>({
        showMessage: false,
        name: ""
    });

    function onVerification() {
        const otpString = otpRef.current.toString();

        if (otpString.length === 6) {  
            const otp = Number.parseInt(otpString);

            verifyOtp({ otp: otp })

            .then((response) => {
                if (response.result === 0) {
                    setMessage({
                        showMessage: true,
                        name: "Kode verifikasi yang kamu masukan salah"
                    });
                } 
                else {
                    navigate({ 
                        to: `/create-password`,
                        search: {
                            email: email,
                            otp: otpRef.current
                        }
                    });
                }
            })
            
            .catch(() => {
                setMessage({
                    showMessage: true,
                    name: "Ada masalah di sisi server, silahkan coba beberapa saat lagi"
                });
            });         
        }
        else if (otpString.length < 6) {
            setMessage({
                showMessage: true,
                name: "Kode verifikasi tidak boleh kurang dari 6 digit"
            });
        }
        else {
            setMessage({
                showMessage: true,
                name: "Kode verifikasi tidak lebih dari 6 digit"
            });
        } 
    }

    function onSendOtp() {
        sendOTP({ email: email })
        .then((response) => {
            console.info(response);
        })
        .catch((error) => {
            console.info(error);
        });   
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

                            <h3 className="h3-medium title">Verifikasi email</h3>
                            <p className="p-regular subtitle">Kami telah mengirim kode verifikasi ke email yang anda masukan, silahkan cek kotak masuk atau folder spam.</p>
                        </article>
                    </header>

                    <Input  variant="email"
                            label="Kode verifikasi"
                            required={true}
                            placeholder="user@gmail.com"
                                
                            onInputHandler={(text) => {
                                otpRef.current = text;
                            }}

                            showMessage={false}
                            />

                    <section   className="actions" >

                        <Button     behavior="fill-container"  
                                    size="large"
                                    label="Verifikasi"
                                    variant="primary"
                                    state="active"
                        
                                    onClickHandler={() => {
                                        onVerification();
                                    }}

                                    isLoading={isVerifying}
                                    />

                        <Button     behavior="fill-container"  
                                    size="large"
                                    label="Kirim ulang kode verifikasi"
                                    variant="secondary"
                                    state="disabled"
                        
                                    onClickHandler={() => {
                                        onSendOtp();
                                    }}

                                    isLoading={isSending}
                                    />

                    </section>
                </section>
            </main>
        </>
    );
}