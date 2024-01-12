import { useState } from "react";
import { CreateVillaInterfaces } from "./../utils/villa-interfaces";

export function UploadPhoto({ 
    villaRef, 
    label,
    variant,
    onUploadImageHandler
}: { 
    villaRef: React.MutableRefObject<CreateVillaInterfaces>;
    label: string;
    variant: "small" | "large";
    onUploadImageHandler?: (image: File) => void;
}) {
    const [image, setImage] = useState<string | null>("");

    function setImageHandler(image: string) {
        setImage(image);
        villaRef.current.photo = image;
    }

    return (
        <section className={`upload-photo upload-photo-${variant}`}>
            {
                image ? (
                    <img src={image} className={`photo photo-${variant}`} />
                ) : (
                    <div className={`photo photo-${variant}`} />
                )
            }
            
            <label className="pick-photo label-medium" htmlFor={label}>
                Pick photo
            </label>

            <input  className="pick-photo-input"
                    type="file" 
                    id={label} 
                    name={label}
                    accept="image/png, image/jpeg" 

                    onChange={(event) => {
                        const image: File | undefined = event.target.files?.[0];
                        
                        if (image && onUploadImageHandler) {
                            setImageHandler(URL.createObjectURL(image));
                            onUploadImageHandler(image);
                        }
                        
                    }}
                    />
        </section>
    );
}