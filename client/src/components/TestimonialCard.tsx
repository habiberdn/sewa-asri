export function TestimonialCard() {
    return (
        <article className="testimonial-card">
            <p className="p-regular reviews">
                Sewa Asri Tenant dinilai sangat mudah digunakan, baik oleh pengguna pemula maupun pengguna yang sudah berpengalaman. Fitur-fiturnya dirancang dengan intuitif dan mudah dipahami.
            </p>

            <section className="detail">
                <div aria-label="circle" className="circle" />

                <img    src="https://i.pinimg.com/564x/b7/ee/1e/b7ee1ed702d5c2f24663e767accafd02.jpg"
                        className="photo" />

                <article className="name-role-wrapper">
                    <h4 className="h4-regular">
                        Reny Anggraini
                    </h4>

                    <p className="label-regular">
                        Pengelola villa
                    </p>
                </article>
            </section>
        </article>
    );
}