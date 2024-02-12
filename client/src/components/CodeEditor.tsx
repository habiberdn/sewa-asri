import "./../styles/css/components/code-editor.css";

import codeEditorJulian from "./../assets/mockup/Code-editor-Julian.webp";
import codeEditorHabib from "./../assets/mockup/Code-editor-Habib.webp";
import avatarJulian from "./../assets/Avatar-Julian.webp";
import avatarHabib from "./../assets/Avatar-Habib.webp";

export function MockupCodeEditor({ variant }: { variant: string }) {
    return (
        <section className="mockup-code-editor">

            {variant === "client" ? (
                <img 
                    className="mockup"
                    src={codeEditorJulian}
                    alt="Mockup Code Editor Julian"
                />
            ) : (
                <img 
                    className="mockup"
                    src={codeEditorHabib}
                    alt="Mockup Code Editor Habib"
                />
            )}

            {variant === "client" ? (
                <Team   variant="client"
                        name="Achmad Julian" 
                        role="Frontend Developer | UI/UX Designer" />
            ) : (
                <Team   variant="backend"
                        name="M Habib Erdian" 
                        role="Fullstack Developer" />
            )}
            
        </section>
    );
}

function Team({ name, role, variant }: { name: string; role: string; variant: string; }) {
    const avatarMap = {
        "Achmad Julian": avatarJulian,
        "M Habib Erdian": avatarHabib
    };

    return (
        <figure className={`team team-${variant}`}>
            <img src={avatarMap[name]} alt="avatar photo" className="photo" />
            
            <figcaption className="detail">
                <p className="name">
                    { name }
                </p>

                <p className="role">
                    { role }
                </p>
            </figcaption>
        </figure>
    );
}