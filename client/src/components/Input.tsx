import { useState } from "react";

import eyeOpen from "./../assets/icons/eye-open.png";
import eyeClosed from "./../assets/icons/eye-closed.png";
import { Link } from "@tanstack/react-router";

type InputProps = {
    variant: "text" | "email" | "password" | "number";
    label?: string;
    required?: boolean;
    placeholder: string;
    showMessage?: boolean;
    message?: string;
    onInputHandler?: (text: string) => void;
    onPressHandler?: () => void;
}

export function Input({ 
    variant,
    label = "label", 
    required = false,
    placeholder,
    showMessage = false,
    message,
    onInputHandler
}:InputProps) {
    
    const [hidePassword, setHidePassword] = useState<boolean>(true);

    switch (variant) {
        case "email":
            return (
                <div  className="input" >
                    
                    <div  className="label-option-wrapper" >
                        <label  className="label-regular label-text">
                            { label }
                        </label>

                        {
                            required ? (
                                <h5  className="label-regular option-text">wajib</h5>
                            ) : (
                                <div   className="invisible-shape" />

                            )
                        }
                    </div>

                    <div  className="text-field" >
                        <input  onChange={(event) => {
                                    if(onInputHandler) {
                                        const text = event.target.value;
                                        onInputHandler(text);
                                    }
                                }} 
                                className="label-regular text-input placeholder"

                                type="email"
                                required={required}
                                placeholder={placeholder}
                                pattern="email"
                                />

                        <div   className="invisible-shape" />
                    </div>

                    {
                        showMessage && <h5 className="message">Pesan: { message }</h5>
                    }
                </div>
            );
            
        case "password":
            return (
                <div  className="input" >
                    
                    <div  className="label-option-wrapper" >
                        <label  className="label-regular label-text">
                            { label }
                        </label>

                        {
                            required ? (
                                <Link   to="/forgot-password"
                                        className="label-regular option-text forgot-password">
                                    lupa password?
                                </Link>
                            ) : (
                                <div   className="invisible-shape" />

                            )
                        }
                    </div>

                    <div  className="text-field" >
                        <input  onChange={(event) => {
                                    if(onInputHandler) {
                                        const text = event.target.value;
                                        onInputHandler(text);
                                    }
                                }} 
                                className="label-regular text-input"

                                type={hidePassword ? "password" : "text"}

                                required={required}
                                placeholder={placeholder}
                                pattern="password"
                                />
                        {
                            hidePassword ? (
                                <img    src={eyeOpen}
                                        className="icon" 
                                        onClick={() => setHidePassword(false)}
                                        />
                            ) : (
                                <img    src={eyeClosed} 
                                        className="icon"
                                        onClick={() => setHidePassword(true)}
                                        />
                            )
                        }
                    </div>

                    {
                        showMessage && <h5 className="message">Message: { message }</h5>
                    }
                </div>
            );

        case "number":
            return (
                <div  className="input" >
                    
                    <div  className="label-option-wrapper" >
                        <label  className="label-regular label-text">
                            { label }
                        </label>
                        {
                            required ? (
                                <h5  className="label-regular option-text">wajib</h5>
                            ) : (
                                <div   className="invisible-shape" />

                            )
                        }
                    </div>

                    <div  className="text-field" >
                        <input  onChange={(event) => {
                                    if(onInputHandler) {
                                        const text = event.target.value;
                                        onInputHandler(text);
                                    }
                                }} 
                                className="label-regular text-input"

                                type="number"
                                required={required}
                                placeholder={placeholder}
                                />

                        <div   className="invisible-shape" />
                    </div>

                    {
                        showMessage && <h5 className="message">Message: { message }</h5>
                    }
                </div>
            );
    }
}