import showerIcon from "./../assets/icons/shower-head.webp";
import bedIcon from "./../assets/icons/double-bed-icon.webp";
import locationIcon from "./../assets/icons/location.webp";

// import { useRef, useState } from "react";
// import { useNavigate } from "@tanstack/react-router";
import { useParams } from "@tanstack/react-router";
import { Chips, Header, Sidebar } from "../components";

import { DetailVillaInterface } from "../utils/villa-interfaces";
// import { IMessageBar, ICreateVilla } from '../utils/interface';

// import { AttractionForm, UploadPhoto, VillaDetailForm } from "./Forms/VillaDetail";
// import { BedroomDetail, BathroomDetail, IndoorDetail, OutdoorDetail } from "./Forms/Facility";

import villaJson from "./../data/villa.json";
import ratingJson from "./../data/reviews.json";

import { ReviewsCard, OverallRating } from "../components/Reviews";
import { useState } from "react";
import { FilterInterface } from "../utils/ratings-interfaces";

export function VillaDetailDescription() {
    const { id } = useParams({ strict: false });
    const villa = villaJson.find((villa) => villa._id === id);

    return (
        <main  className="dashboard-container">
            <Sidebar />

            <section  className="main-container">
                <Header variant="main"/>
                
                <section  className="widget villa-detail">
                    <Header variant="detail-villa" />

                    {
                        villa && (
                            <>
                                <section className="villa-detail-description">
                                    <VillaDetail villa={villa} />
                                    <DescriptionDetail description={villa.description} />
                                </section>

                                <section>
                                    <Reviews ratings={villa.ratings} />
                                </section>
                            </>
                        )
                    }

                </section>
            </section>
        </main>
    );
}

function VillaDetail({ villa }: { villa: DetailVillaInterface }) {
    return (
        <article className="villa-detail">

            <img src={villa.photo} 
                 className="photo"/>

            <section className="detail">

                <section className="created-at">
                    <p className="label-regular">
                        Created at:
                    </p>

                    <p className="label-regular">
                        18 Agustus 2023
                    </p>
                </section>

                <section className="villaid-status-wrapper">
                    <h4 className="label-regular villaid">
                        Villa ID: {villa._id}
                    </h4>

                    <section className="villa-status">
                        <div className={`dot ${ villa.isAvailable ? "green" : "red" }-dot`} />

                        <h4 className="label-regular">
                            { villa.isAvailable ? "Tersedia" : "Tidak tersedia" }
                        </h4>
                    </section>
                </section>

                <article className="information">

                    <section className="name-price-facility">
                        <h3 className="h3-medium name">
                            { villa.name }
                        </h3>

                        <section className="price">
                            <h4 className="h4-regular">
                                Rp. { villa.price }
                            </h4>
                            <p className="label-regular">/ malam</p>
                        </section>

                        <section className="facility">

                            <article className="facility-detail">
                                <img src={bedIcon} className="icon" />
                                <p className="label-regular">
                                    { villa.bedroom.quantity } Kamar tidur
                                </p>
                            </article>

                            <article className="facility-detail">
                                <img src={showerIcon} className="icon" />
                                <p className="label-regular">
                                    { villa.bathroom.quantity } Kamar mandi
                                </p>
                            </article>
                        </section>
                    </section>

                    <section className="location">
                        <img src={locationIcon} className="" />
                        
                        <p className="label-regular">
                            { villa.location.city }
                        </p>
                    </section>
                </article>
            </section>
        </article>
    );
}

function DescriptionDetail({ description }: { description: string }) {
    return (
        <article className="description-detail">
            <h3 className="h3-medium">
                Description detail
            </h3>

            <p className="p-regular">
                { description}
            </p>
        </article>
    );
}

function Reviews({ ratings }: { ratings: { _id: string } }) {
    const [filterReviews, setFilterReviews] = useState<FilterInterface>({
        oldest: false,
        newest: false,
        best: true,
        worst: false
    });

    const rating = ratingJson.find((rating) => rating._id === ratings._id);

    function setFilterReviewsHandler(option: string) {
        const filterMap = {
            oldest: false,
            newest: false,
            best: false,
            worst: false
        }

        setFilterReviews((prevState) => ({
            ...filterMap,
            [option]: prevState[option] ? false : true
        }));
    }

    return (
        <section className="reviews-villa">
            
            <article className="label-total-reviews-wrapper">
                <h3 className="h3-medium">
                    Reviews
                </h3>

                <p className="label-regular">
                    { rating?.overallRatting.totalReviews} Ulasan
                </p>
            </article>

            { rating?.overallRatting && <OverallRating overallRating={rating?.overallRatting}/> }

            <section className="filter-reviews-list">
                <Chips  label="Terlama"
                        variant="active"
                        state={filterReviews.oldest}
                        
                        onSelect={() => {
                            setFilterReviewsHandler("oldest");
                        }}
                        />

                <Chips  label="Terbaru"
                        variant="active"
                        state={filterReviews.newest}
                        
                        onSelect={() => {
                            setFilterReviewsHandler("newest");
                        }}
                        />

                <Chips  label="Terbaik"
                        variant="active"
                        state={filterReviews.best}
                        
                        onSelect={() => {
                            setFilterReviewsHandler("best");
                        }}
                        />

                <Chips  label="Terburuk"
                        variant="active"
                        state={filterReviews.worst}
                        
                        onSelect={() => {
                            setFilterReviewsHandler("worst");
                        }}
                        />
            </section>

            <section className="reviews-list">
                { rating?.reviews.map((reviews) => <ReviewsCard reviews={reviews} key={reviews._id} />) }
            </section>
        </section>
    );
}