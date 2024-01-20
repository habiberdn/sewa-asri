interface TestimonialCardProps {
    name: string;
    photo: string;
    role: string;
    reviews: string;
}

export function TestimonialCard({ name, photo, role, reviews }: TestimonialCardProps) {
    return (
        <article className="testimonial-card">
            <p className="p-regular reviews">
                { reviews }
            </p>

            <section className="detail">
                <div aria-label="circle" className="circle" />

                <img    src={photo}
                        className="photo" 
                        loading="lazy" />

                <article className="name-role-wrapper">
                    <h4 className="h4-regular">
                        { name }
                    </h4>

                    <p className="label-regular">
                        { role }
                    </p>
                </article>
            </section>
        </article>
    );
}