import { OverallRatingInterface, ReviewsInterface } from "../utils/ratings-interfaces";

import starDefaultIcon from "./../assets/icons/star-default.webp";
import starFilledIcon from "./../assets/icons/star-filled.webp";

export function OverallRating({ overallRating }: { overallRating: OverallRatingInterface }) {
    const overallRatingBar = Array.from({ length: 5 }, (_, i) => {
        return <RatingBar overallRating={overallRating} point={i + 1} key={i} />
    });

    return (
        <section className="rating-panel">

            <article className="overall">

                <section className="point">

                    <h2 className="h2-medium">
                        { overallRating.detail }
                    </h2>

                    <img src={starFilledIcon} className="large-star-icon"/>
                </section>

                <p className="label-regular">
                    { overallRating.totalReviews } Ulasan
                </p>
            </article>

            <section className="rating-bar-list">
                { overallRatingBar }
            </section>
        </section>
    );
}

function RatingBar({ overallRating, point }: { overallRating, point: number }) {
    const barWidth = (overallRating[`total_rating_${point}`] / overallRating.totalReviews) * 350;

    return (
        <section className="rating-bar">
            <article className="point-bar-container-wrapper">
                <img src={starFilledIcon} className="star-icon" />
                    
                <p className="label-regular">
                    { point }
                </p>

                <div className={`bar-container bar-container-${point}`}>
                    <div className="bar" style={{ width: barWidth}} />
                </div>
            </article>

            <p className="label-regular amount">
                { overallRating[`total_rating_${point}`] }
            </p>
        </section>
    );
}

export function ReviewsCard({ reviews }: { reviews: ReviewsInterface }) {
    const rating = Math.floor(reviews.rating);

    const yellowStar = Array.from({ length: rating }, () => starFilledIcon);
    const greyStar = Array.from({ length: 5 - rating }, () => starDefaultIcon);

    return (
        <article className="reviews-card">
            <img src={reviews.user.photo} className="photo" />

            <section className="detail">

                <section className="name-date-wrapper">

                    <h4 className="h4-regular">
                        { reviews.user.name }
                    </h4>

                    <p className="label-regular">
                        { reviews.date }
                    </p>
                </section>

                <article className="rating-reviews-content-wrapper">
                    <section className="rating-reviews-wrapper">
                        <section className="stars">
                            { 
                                yellowStar.map((icon, i) => {
                                    return <img src={icon} className="star-icon" key={i} />;
                                })
                            }
                            { 
                                greyStar.map((icon, i) => {
                                    return <img src={icon} className="star-icon" key={i} />;
                                })
                            }
                        </section>

                        <p className="label-regular">
                            { reviews.rating }
                        </p>
                    </section>

                    <p className="p-regular reviews-content">
                        { reviews.comment }
                    </p>
                </article>
            </section>
        </article>
    );
}