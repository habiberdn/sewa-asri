import { useState } from "react";

export function UploadPhoto({ 
    photo, 
    label,
    variant,
    onUploadImageHandler
}: { 
    photo: any;
    label: string;
    variant: "small" | "large";
    onUploadImageHandler?: (image: File) => void;
}) {
    const [image, setImage] = useState("");

    function setImageHandler(image: string) {
        setImage(image);
        photo = image;
    }

    return (
        <section className={`upload-photo upload-photo-${variant}`}>
            {
                image || photo ? (
                    <img    src={image ? image : photo} 
                            className={`photo photo-${variant}`} />
                ) : (
                    <div className={`photo photo-${variant}`}>
                        
                        <h4 className="h4-regular">
                            No photo
                        </h4>
                    </div>
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