interface ReviewsInterface {
    _id: string;
    user: {
        photo: string;
        name: string;
    };
    date: string;
    rating: number;
    comment: string;
}

interface OverallRatingInterface {
    detail: number;
    totalReviews: number;

    total_rating_1: number;
    total_rating_2: number;
    total_rating_3: number;
    total_rating_4: number;
    total_rating_5: number;
}

interface RatingsInterface {
    _id: string;
    overallRating: OverallRatingInterface;
    reviews: Array<ReviewsInterface>;
}

interface FilterInterface {
    oldest: boolean;
    newest: boolean;
    best: boolean;
    worst: boolean;
}

export { 
    RatingsInterface, 
    ReviewsInterface, 
    OverallRatingInterface, 
    FilterInterface 
};