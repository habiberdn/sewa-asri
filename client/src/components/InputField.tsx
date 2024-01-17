import React from "react";

interface InputField {
    label: string;
    value?: string | number;
    placeholder: string;
    placeholderLabel?: string;
    width: "short" | "wide";
    variant: "text" | "text-area" | "number";
    onChangeInputHandler?: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function InputField({ 
    label, 
    value,
    placeholder, 
    placeholderLabel,
    width,
    variant, 
    onChangeInputHandler 
}: InputField) {

    const inputMarkup = {
        "text-area": 
        <>
            <label  className="label label-regular"
                    htmlFor={label}>
                { label }
            </label>
                
            <textarea   className="text-area p-regular"
                        id={label}
                        placeholder={placeholder}
                        required={true} 
                        
                        defaultValue={value}
        
                        onChange={(event) => {
                            if (onChangeInputHandler) {
                                onChangeInputHandler(event);
                            }
                        }}
                        />
        </>,

        "text-number":
        <>
        {
            placeholderLabel ? (
                <>
                    <label className="label label-regular" htmlFor={label}>
                        { label }
                    </label>
                    
                    <label className="text-field" htmlFor={label}>
                        <input  className="label-regular"
                                id={label}
                                placeholder={placeholder}
                                required={true} 

                                type={variant === "number" ? "number" : "text"}

                                min={1}
                                defaultValue={value}
                                
                                onChange={(event) => {
                                    if (onChangeInputHandler) {
                                        onChangeInputHandler(event);
                                    }
                                }}
                                />
                        <h4 className="label-regular">
                            { placeholderLabel }
                        </h4>
                    </label>
                </>
            ) : (
                <>                        
                    <label className="label label-regular" htmlFor={label}>
                        { label }
                    </label>

                    <input  className="text-field label-regular"
                            id={label}
                            placeholder={placeholder}
                            required={true} 

                            type={variant === "number" ? "number" : "text"}

                            min={1}
                            defaultValue={value}
                            
                            onChange={(event) => {
                                if (onChangeInputHandler) {
                                    onChangeInputHandler(event);
                                }
                            }}
                            />
                </>
            )
        }
        </>
    }

    return (
        <article className={`input-field input-field-${width}`}>

            { variant === "text-area" ? inputMarkup["text-area"] : inputMarkup["text-number"] }
        </article>
    );
}