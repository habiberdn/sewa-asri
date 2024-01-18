import showerIcon from "./../assets/icons/shower-head.webp";
import bedIcon from "./../assets/icons/double-bed-icon.webp";
import locationIcon from "./../assets/icons/location.webp";

import { useParams } from "@tanstack/react-router";
import { Chips, FacilityOption, WidgetHeader, PageHeader, Sidebar } from "../components";

import villaJson from "./../data/villa.json";
import ratingJson from "./../data/reviews.json";

import { ReviewsCard, OverallRating } from "../components/Reviews";
import { useState } from "react";

import { FilterReviewsInterface } from "../utils/ratings-interfaces";
import { DetailVillaInterface } from "../utils/villa-interfaces";
import { IndoorFacilityInterface, OutdoorFacilityInterface } from "../utils/facility-interfaces";
import { FacilitySpecification } from "../components/FacilityOption";

export function VillaDetailDescription() {
    const { id } = useParams({ strict: false });
    const villa = villaJson.find((villa) => villa._id === id);

    return (
        <main  className="dashboard-container">
            <Sidebar />

            <section  className="main-container">
                <PageHeader variant="auth"/>
                
                <section  className="widget">
                    <WidgetHeader variant="villa-detail" />

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

                                <section className="bedroom-bathroom-specification-address-detail-wrapper">
                                    <BedroomBathroomSpecification villa={villa} />
                                    <AddressDetail address={villa.location.address} />
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
    const [filterReviews, setFilterReviews] = useState<FilterReviewsInterface>({
        all: { label: "Semua", state: true },
        oldest: { label: "Terlama", state: false },
        newest: { label: "Terbaru", state: false },
        best: { label: "Terbaik", state: false },
        worst: { label: "Terburuk", state: false }
    });
    const filterKeys = Object.keys(filterReviews);

    const rating = ratingJson.find((rating) => rating._id === ratings._id);

    function setFilterReviewsHandler(option: string) {
        const filterReviewsMap = {
            all: { label: "Semua", state: false },
            oldest: { label: "Terlama", state: false },
            newest: { label: "Terbaru", state: false },
            best: { label: "Terbaik", state: false },
            worst: { label: "Terburuk", state: false }
        }

        setFilterReviews(() => ({
            ...filterReviewsMap,
            [option]: { label: filterReviews[option].label, state: true }
        }))
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
                {
                    filterKeys.map((filter, index) => (
                        <Chips  label={filterReviews[filter].label}
                                variant="active"

                                state={filterReviews[filter].state}
                                key={filter + index}
                                
                                onSelect={() => {
                                    setFilterReviewsHandler(filter);
                                }}
                                />
                    ))
                }
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

function BedroomBathroomSpecification({ villa }: { villa: DetailVillaInterface }) {
    const bedroomFacilityKeys = Object.keys(villa.bedroom.othersFacility);
    const bathroomFacilityKeys = Object.keys(villa.bathroom.othersFacility);

    return (
        <section className="bedroom-bathroom-specification-wrapper">

            <h3 className="h3-medium">
                Bedroom and bathroom specification
            </h3>

            <section className="detail">

                <article className="facility-list">
                    <h4 className="h4-regular label">
                        Bedroom specification
                    </h4>

                    <FacilityOption     name={villa.bedroom.bedSize === "single-bed" ? "Single bed" : "Double bed"}
                                        variant="option"
                                        status={villa.bedroom.bedSize}
                                        />
 
                    <FacilitySpecification  name={"Luas kamar"}
                                            value={`${villa.bedroom.length}m x ${villa.bedroom.width}m`}
                                            />
                    

                    {
                        bedroomFacilityKeys.map((facility, index) => (
                            villa.bedroom.othersFacility[facility].status === "available" &&
                            <FacilityOption     name={villa.bedroom.othersFacility[facility].name}
                                                variant="option"
                                                status={villa.bedroom.othersFacility[facility].status}
                                                key={index + facility}
                                                />
                        ))
                    }
                </article>

                <article  className="facility-list">
                    <h4 className="h4-regular  label">
                        Bathroom specification
                    </h4>

                    { 
                        bathroomFacilityKeys.map((facility, index) => (
                            villa.bathroom.othersFacility[facility].status === "available" &&
                            <FacilityOption     name={villa.bathroom.othersFacility[facility].name}
                                                variant="option"
                                                status={villa.bathroom.othersFacility[facility].status}
                                                key={index + facility}
                                                />
                        ))
                    }
                </article>
            </section>
        </section>
    );
}

function AddressDetail({ address }: { address: string }) {
    return (
        <article className="address-detail">
            <h3 className="h3-medium">
                Address detail
            </h3>

            <p className="p-regular">
                { address }
            </p>
        </article>
    );
}