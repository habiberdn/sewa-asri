import showerIcon from "./../assets/icons/shower-head.webp";
import bedIcon from "./../assets/icons/double-bed-icon.webp";
import locationIcon from "./../assets/icons/location.webp";

import { useParams } from "@tanstack/react-router";
import { Chips, FacilityOption, Header, Sidebar } from "../components";

import villaJson from "./../data/villa.json";
import ratingJson from "./../data/reviews.json";

import { ReviewsCard, OverallRating } from "../components/Reviews";
import { useState } from "react";

import { FilterInterface } from "../utils/ratings-interfaces";
import { DetailVillaInterface } from "../utils/villa-interfaces";
import { IndoorFacilityInterface, OutdoorFacilityInterface } from "../utils/facility-interfaces";

export function VillaDetailDescription() {
    const { id } = useParams({ strict: false });
    const villa = villaJson.find((villa) => villa._id === id);

    return (
        <main  className="dashboard-container">
            <Sidebar />

            <section  className="main-container">
                <Header variant="main"/>
                
                <section  className="widget">
                    <Header variant="detail-villa" />

                    {
                        villa && (
                            <>
                                <section className="villa-detail-description">
                                    <VillaDetail villa={villa} />
                                    <DescriptionDetail description={villa.description} />
                                </section>

                                <section className="reviews-facility-nearest-attraction-detail">
                                    <Reviews ratings={villa.ratings} />

                                    <section className="facility-nearest-attraction-wrapper">
                                        <IndoorOutdoorFacility villa={villa} />
                                        <Attraction villa={villa} />
                                    </section>
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

function IndoorOutdoorFacility({ villa }: { villa: DetailVillaInterface }) {
    const indoorFacilityMap: IndoorFacilityInterface = {
        ac: { name: "AC (Air Conditioner)", status: "not available" },
        kitchen: { name: "Dapur untuk memasak", status: "not available" },
        wifi: { name: "Wifi", status: "not available" },
        lounge: { name: "Ruang tamu", status: "not available" },
        entertainmentRoom: { name: "Ruang hiburan", status: "not available" },
        dinningRoom: { name: "Ruang makan", status: "not available" }
    };

    const outdoorFacilityMap: OutdoorFacilityInterface = {
        pool: { name: "Kolam renang", status: "not available" },
        garage: { name: "Garasi parkir", status: "not available" },
        security: { name: "Keamanan 24 jam", status: "not available" },
        park: { name: "Taman", status: "not available" },
        bbqArea: { name: "Area BBQ", status: "not available" }
    };

    for (const facility in villa.facility.indoor) {
        indoorFacilityMap[facility] = villa.facility.indoor[facility];
    }

    for (const facility in villa.facility.outdoor) {
        outdoorFacilityMap[facility] = villa.facility.outdoor[facility];
    }

    const indoorFacilityKeys = Object.keys(indoorFacilityMap);
    const outdoorFacilityKeys = Object.keys(outdoorFacilityMap);

    return (
        <section className="indoor-outdoor-facility-wrapper">

            <h3 className="h3-medium">
                Indoor and outdoor facility
            </h3>

            <section className="detail">

                <article className="facility-list">
                    <h4 className="h4-regular label">
                        Fasilitas indoor
                    </h4>

                    { 
                        indoorFacilityKeys.map((facility, index) => (
                            <FacilityOption     name={indoorFacilityMap[facility].name}
                                                variant="option"
                                                status={indoorFacilityMap[facility].status}
                                                key={index + facility}
                                                />
                        ))
                    }
                </article>

                <article  className="facility-list">
                    <h4 className="h4-regular">
                        Fasilitas outdoor
                    </h4>

                    { 
                        outdoorFacilityKeys.map((facility, index) => (
                            <FacilityOption     name={outdoorFacilityMap[facility].name}
                                                variant="option"
                                                status={outdoorFacilityMap[facility].status}
                                                key={index + facility}
                                                />
                        ))
                    }
                </article>
            </section>
        </section>
    );
}

function Attraction({ villa }: { villa: DetailVillaInterface }) {
    const { attraction } = villa;

    return (
        <section className="nearest-attraction label">
            <h3 className="h4-medium">
                Nearest attraction
            </h3>

            <article className="attraction">
                {
                    attraction ? (
                        <img src={attraction.photo} className="photo" />
                    ) : (
                        <div className="photo" />
                    )
                }
                

                <section className="detail">
                    
                    <article className="name-distance-wrapper">

                        <h4 className="h4-regular">
                            { 
                                attraction ? (
                                    attraction.name
                                ) : (
                                    "Tidak ada"
                                )
                            }
                        </h4>

                        <p className="label-regular">
                            {
                                attraction ? (
                                    attraction.distance
                                ) : (
                                    "-"
                                )
                            }
                        </p>
                    </article>

                    <p className="label-regular schedule">
                        {
                            attraction ? (
                                `${attraction.open} WIB - ${attraction.close} WIB`
                            ) : (
                                "-"
                            )
                        }
                    </p>
                </section>
            </article>
        </section>
    );
}