import React from "react";

interface InputField {
    label: string;
    value?: string;
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

    switch (variant) {
        case "text":
        return (
            <article className={`input-field input-field-${width}`}>
        
                <label  className="label label-regular"
                        htmlFor={label}>
                    { label }
                </label>
                    
                <input  className="text-field label-regular"
                        type="text" 
                        id={label}
                        placeholder={placeholder}
                        required={true} 
                        minLength={10}
                        maxLength={40}
        
                        onChange={(event) => {
                            if (onChangeInputHandler) {
                                onChangeInputHandler(event);
                            }
                        }}
                        />
            </article>
        );

        case "text-area":
        return (
            <article className={`input-field input-field-${width}`}>
        
                <label  className="label label-regular"
                        htmlFor={label}>
                    { label }
                </label>
                    
                <textarea   className="text-area p-regular"
                            id={label}
                            placeholder={placeholder}
                            required={true} 
                            minLength={10}
                            
                            defaultValue={value}
            
                            onChange={(event) => {
                                if (onChangeInputHandler) {
                                    onChangeInputHandler(event);
                                }
                            }}
                />
            </article>
        );
    
        case "number":
        return (
            <article className={`input-field input-field-${width}`}>

                <label  className="label label-regular"
                        htmlFor={label}>
                    { label }
                </label>
                
                {
                    placeholderLabel ? (
                        <label className="text-field" htmlFor={label}>
                            <input  className="label-regular"
                                    type="number"
                                    id={label}
                                    placeholder={placeholder}
                                    required={true} 
                                    min={1}
                                    
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
                    ) : (
                        <input  className="text-field label-regular"
                                type="number"
                                id={label}
                                placeholder={placeholder}
                                required={true} 
                                min={1}
                                
                                onChange={(event) => {
                                    if (onChangeInputHandler) {
                                        onChangeInputHandler(event);
                                    }
                                }}
                                />
                    )
                }
            </article>
        );
    }

    
}