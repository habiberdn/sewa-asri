import typescriptIcon from "./../assets/typescript-plain.webp";
import avatarJulian from "./../assets/Avatar-Julian.webp";
import avatarHabib from "./../assets/Avatar-Habib.webp";

export function MockupCodeEditor({ variant }: { variant: string }) {
    const linesOfCode = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <section className="mockup-code-editor">
            <section className="code-editor">

                <header className="header-directory">

                    <img src={typescriptIcon} className="logo"/>

                    <p className="label-regular path">
                        { variant === "client" ? "client/src/page/Home.tsx" : "backend/src/app.js" }
                    </p>
                </header>

                <section className="lines-of-code-canvas-wrapper">

                    <aside className="lines-of-code">

                        {linesOfCode.map((lines, index) => {
                            return (
                                <p className="label-regular" key={lines + index}>
                                    { lines }
                                </p>
                            );
                        })}
                    </aside>

                    <article className="canvas">
                        <Code variant={variant} />
                    </article>
                </section>
            </section>

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

function Code({ variant }: { variant: string; }) {
    const codeMap = {
        client: <code className="code">
                    <span>
                        <p><span style={{color: "#BF40AB"}}>export function </span><span style={{color: "#3B7EFF"}}>{`Home() {`}</span></p>
                    </span>
                    
                    <span>
                        <div aria-label="tab" className="tab" />
                        <p><span style={{color: "#40BF40"}}>return </span><span style={{color: "#FDCC0D"}}>{`(`}</span></p>
                    </span>

                    <span>
                        <div aria-label="tab" className="tab" />
                        <div aria-label="tab" className="tab" />
                        <p style={{color: "#E7256B"}}>{`<h1>`}</p>
                    </span>

                    <span>
                        <div aria-label="tab" className="tab" />
                        <div aria-label="tab" className="tab" />
                        <div aria-label="tab" className="tab" />
                        <div aria-label="tab" className="tab" />

                        <p style={{color: "#4D4D4D"}}>
                            Hello I'm Julian from Asri Tech
                        </p>
                    </span>

                    <span>
                        <div aria-label="tab" className="tab" />
                        <div aria-label="tab" className="tab" />
                        <div aria-label="tab" className="tab" />
                        <div aria-label="tab" className="tab" />

                        <p style={{color: "#4D4D4D"}}>
                            currently building page Home!
                        </p>
                    </span>

                    <span>
                        <div aria-label="tab" className="tab" />
                        <div aria-label="tab" className="tab" />
                        <p style={{color: "#E7256B"}}>{`</h1>`}</p>
                    </span>

                    <span>
                        <div aria-label="tab" className="tab" />
                        <p style={{color: "#FDCC0D"}}>{`);`}</p>
                    </span>

                    <span>
                        <p style={{color: "#3B7EFF"}}>{`}`}</p>
                    </span>
                </code>,

        backend: <code className="code">
                    <span>
                        <p><span style={{color: "#BF40AB"}}>const </span><span style={{color: "#40BF40"}}> express </span><span style={{color: "#4D4D4D"}}>= </span><span style={{color: "#40BF40"}}> require</span><span style={{color: "#BF4040"}}>(</span><span style={{color: "#407ABF"}}>'express'</span><span style={{color: "#BF4040"}}>);</span></p>
                    </span>
                    
                    <span>
                        <p><span style={{color: "#BF40AB"}}>const</span><span style={{color: "#BF4040"}}> app </span><span style={{color: "#4D4D4D"}}>=</span><span style={{color: "#40BF40"}}> express()</span><span style={{color: "#BF4040"}}>;</span></p>
                    </span>

                    <span>                        
                        <p><span style={{color: "#407ABF"}}>app</span><span style={{color: "#4D4D4D"}}>.</span><span style={{color: "#BF4040"}}>get</span><span style={{color: "#BF40AB"}}>{`(`}</span><span style={{color: "#407ABF"}}>'/'</span><span style={{color: "#4D4D4D"}}>, </span><span style={{color: "#BF40AB"}}>{`(`}</span>req, res<span style={{color: "#BF40AB"}}>{`) => {`}</span></p>
                    </span>

                    <span>
                        <div aria-label="tab" className="tab" />
                        <p style={{color: "#4D4D4D"}}><span style={{color: "#BF4040"}}>res</span><span style={{color: "#4D4D4D"}}>.</span><span style={{color: "#BF4040"}}>status</span><span style={{color: "#BF40AB"}}>{`(`}</span><span style={{color: "#BF4040"}}>200</span><span style={{color: "#BF40AB"}}>{`).`}</span><span style={{color: "#407ABF"}}>send</span><span>{`(`}</span><span style={{color: "#4D4D4D"}}>'Welcome to Sewa Asri'</span><span style={{color: "#BF40AB"}}>{`);`}</span>
                        </p>
                    </span>

                    <span>
                        <p><span style={{color: "#BF40AB"}}>{`}`}</span><span style={{color: "#BF4040"}}>{`);`}</span></p>
                    </span>

                    <span>
                        <p style={{color: "#FDCC0D"}}><span style={{color: "#407ABF"}}>app</span><span style={{color: "#4D4D4D"}}>.</span><span style={{color: "#BF40AB"}}>listen</span><span style={{color: "#BF4040"}}>{`(`}</span><span style={{color: "#4D4D4D"}}>3000, </span><span style={{color: "#BF40AB"}}>{`function () {`}</span></p>
                    </span>

                    <span>
                        <div aria-label="tab" className="tab" />
                        <p><span style={{color: "#407ABF"}}>console</span><span style={{color: "#4D4D4D"}}>.</span><span style={{color: "#808080"}}>log</span><span style={{color: "#BF40AB"}}>{`(`}</span><span style={{color: "#4D4D4D"}}>'Ready'</span><span style={{color: "#BF40AB"}}>{`);`}</span></p>
                    </span>

                    <span>
                        <p><span style={{color: "#BF40AB"}}>{`}`}</span><span style={{color: "#BF4040"}}>{`);`}</span></p>
                    </span>
                </code>
    }
    return codeMap[variant];
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
                <p className="label-medium">
                    { name }
                </p>

                <p>
                    { role }
                </p>
            </figcaption>
        </figure>
    );
}