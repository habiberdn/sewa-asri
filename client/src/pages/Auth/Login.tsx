import Cookies from 'universal-cookie';

import { useRef, useState } from "react";
import { Button, Input } from "../../components";

import { Message } from '../../utils/interface';

import "./../../styles/pages/auth.css";

import logo from "./../../assets/logo.png";
import villaPhoto_1 from "./../../assets/images/image 1.png"
import villaPhoto_2 from "./../../assets/images/image 2.png"
import villaPhoto_3 from "./../../assets/images/image 3.png"
import villaPhoto_4 from "./../../assets/images/image 4.png"

import { useNavigate } from "@tanstack/react-router";
import { useLogin } from "../../hooks/useAuth";
import { setUser } from '../../utils/userStore';

const cookies = new Cookies("auth-token", { path: '/' });

export function Login() {
    const navigate = useNavigate();
    
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const { login, isLoading } = useLogin();

    const [message, setMessage] = useState<Message>({
        showMessage: false,
        name: ""
    });


    console.info("Re-render Login.tsx");

    function onLogin() {
        if (emailRef.current.length > 0 && passwordRef.current.length > 0) {
            
            login({ email: emailRef.current, password: passwordRef.current })
            .then((response) => {
                const { id, name, photo, role } = response?.data?.user;

                if (response?.status === "Success") {
                    switch (role) {
                        case "user":
                            setMessage({
                                showMessage: true,
                                name: "Email atau password salah" 
                            });
                            break;
                    
                        case "manager":
                            cookies.set("auth-token", response.token, {
                                maxAge: Date.now() + 3 * 1000 * 60 * 60 * 24 * 3
                            });

                            setUser({
                                id: id,
                                name: name,
                                photo: photo
                            });
                            
                            navigate({ to: `/dashboard` });
                            break;
                    }
                }
                else if (response?.message === "Incorrect email or password") {
                    setMessage({
                        showMessage: true,
                        name: "Email atau password salah" 
                    });
                }
            });
        } 
        else {
            setMessage({
                showMessage: true,
                name: "Mohon isi email dan password" 
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
                        Kelola Villa Praktis Dengan <span style={{ color: '#40BF40'}}>Sewa Asri Tenant</span>
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
                            <p className="p-regular subtitle">Silahkan masukan email dan password</p>
                        </article>
                    </header>

                    <Input  variant="email"
                            label="Email"
                            required={true}
                            placeholder="user@gmail.com"
                                
                            onInputHandler={(text) => {
                                emailRef.current = text;
                            }}

                            showMessage={message.showMessage}
                            message={message.name}
                            />

                    <Input  variant="password"
                            label="Password"
                            required={true}
                            placeholder="rahasia1234"
                                
                            onInputHandler={(text) => {
                                passwordRef.current = text;
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
                                        onLogin();
                                    }}

                                    isLoading={isLoading}
                                    />

                        <Button     behavior="fill-container"  
                                    size="large"
                                    label="Buat akun"
                                    variant="secondary"
                                    state="active"
                        
                                    onClickHandler={() => {
                                        navigate({ to: "/register" });
                                    }}
                                    />
                    </section>
                </section>
            </main>
        </>
    );
}