import "./../styles/css/components/testimonial-card.css";

interface TestimonialCardProps {
    name: string;
    photo: string;
    role: string;
    reviews: string;
}

export function TestimonialCard({ name, photo, role, reviews }: TestimonialCardProps) {
    return (
        <article className="testimonial-card">
            <p className="reviews">
                { reviews }
            </p>

            <section className="detail">
                <div aria-label="circle" className="circle" />

                <img    src={photo}
                        className="photo" 
                        loading="lazy" />

                <article className="name-role-wrapper">
                    <h4 className="name">
                        { name }
                    </h4>

                    <p className="role">
                        { role }
                    </p>
                </article>
            </section>
        </article>
    );
}