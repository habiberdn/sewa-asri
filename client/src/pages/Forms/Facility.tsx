import { useState } from "react";
import { InputField, FacilityOption } from "./../../components";

import { IIndoorFacility, IOutdoorFacility  } from './../../utils/interface';

import { CreateVillaInterface } from "../../utils/villa-interfaces";

import { IBathroomFacility, IBedroomFacility } from "./../../utils/interface";

export function BedroomDetail({ villaRef }: { villaRef: React.MutableRefObject<CreateVillaInterface> }) {
    const [bedSize, setBedSize] = useState<"Single bed" | "Double bed">("Single bed");
    
    const [bedroomFacility, setBedroomFacility] = useState<IBedroomFacility>({
        window: "not available",
        wardrobe: "not available",
        socket: "not available"
    });

    function setBedroomFacilityHandler(facility: string) {
        setBedroomFacility((prevState) => ({
            ...prevState,
            [facility]: prevState[facility] === "not available" ? "available" : "not available",
        }));

        villaRef.current.bedroom.othersFacility = {
            ...bedroomFacility,
            [facility]: bedroomFacility[facility] === "not available" ? "available" : "not available",
        };
    }

    return (
        <article className="facility-detail">
            <h3 className="h3-medium">
                Bedroom detail
            </h3>

            <article className="bed-size">
                <h4 className="h4-regular">
                    Bed size
                </h4>

                <section className="size-option">
                    <FacilityOption     name="Single bed"
                                        currentValue={bedSize}

                                        onChangeFacilityHandler={() => {
                                            setBedSize("Single bed");
                                            villaRef.current.bedroom.bedSize = "single-bed";
                                        }}
                                        />

                    <FacilityOption     name="Double bed"
                                        currentValue={bedSize}

                                        onChangeFacilityHandler={() => {
                                            setBedSize("Double bed");
                                            villaRef.current.bedroom.bedSize = "double-bed";
                                        }}
                                        />
                </section>
            </article>
            
            <section className="room-size">
                <InputField     label="Room width"
                                placeholder="5"
                                placeholderLabel="m"
                                variant="number"
                                width="short"

                                onChangeInputHandler={(event) => {
                                    villaRef.current.bedroom.width = Number.parseInt(event.target.value);
                                }}
                                 />

                <InputField     label="Room length"
                                placeholder="3"
                                placeholderLabel="m"
                                variant="number"
                                width="short"

                                onChangeInputHandler={(event) => {
                                    villaRef.current.bedroom.length = Number.parseInt(event.target.value);
                                }}
                                />
            </section>

            <article className="other-facility">
                <section className="label-option-wrapper">
                    <h4 className="h4-regular">
                        Other facility
                    </h4>

                    <p className="label-regular">
                        optional
                    </p>
                </section>

                <section className="facility-list">
                    <FacilityOption name="Jendela"
                                    status={bedroomFacility.window}
                                    currentValue={bedSize}

                                    onChangeFacilityHandler={() => {
                                        setBedroomFacilityHandler("window");
                                    }}
                                    />
                                    
                    <FacilityOption name="Stop kontak"
                                    status={bedroomFacility.socket}
                                    currentValue={bedSize}

                                    onChangeFacilityHandler={() => {
                                        setBedroomFacilityHandler("socket");
                                    }}
                                    />

                    <FacilityOption name="Lemari pakaian"
                                    status={bedroomFacility.wardrobe}
                                    currentValue={bedSize}

                                    onChangeFacilityHandler={() => {
                                        setBedroomFacilityHandler("wardrobe");
                                    }}
                                    />
                </section>
            </article>
        </article>
    );
}

export function BathroomDetail({ villaRef }: { villaRef: React.MutableRefObject<CreateVillaInterface> }) {    
    const [bathroomFacility, setBathroomFacility] = useState<IBathroomFacility>({
        waterHeater: "not available",
        shower: "not available",
        bathtube: "not available",
        sittingToilet: "not available",
        squatToilet: "not available",
    });

    function setBathroomFacilityHandler(facility: string) {
        setBathroomFacility((prevState) => ({
            ...prevState,
            [facility]: prevState[facility] === "not available" ? "available" : "not available"
        }));

        villaRef.current.bathroom.othersFacility = {
            ...bathroomFacility,
            [facility]: bathroomFacility[facility] === "not available" ? "available" : "not available",
        };
    }

    return (
        <article className="facility-detail">
            <h3 className="h3-medium">
                Bathroom detail
            </h3>

            <article className="other-facility">
                <section className="label-option-wrapper">
                    <h4 className="h4-regular">
                        Other facility
                    </h4>

                    <p className="label-regular">
                        optional
                    </p>
                </section>

                <section className="facility-list">
                    <FacilityOption name="Penghangat air"
                                    status={bathroomFacility.waterHeater}

                                    onChangeFacilityHandler={() => {
                                        setBathroomFacilityHandler("waterHeater");
                                    }}
                                    />
                                    
                    <FacilityOption name="Pancuran air"
                                    status={bathroomFacility.shower}

                                    onChangeFacilityHandler={() => {
                                        setBathroomFacilityHandler("shower");
                                    }}
                                    />

                    <FacilityOption name="Bak mandi"
                                    status={bathroomFacility.bathtube}

                                    onChangeFacilityHandler={() => {
                                        setBathroomFacilityHandler("bathtube");
                                    }}
                                    />

                    <FacilityOption name="Toilet jongkok"
                                    status={bathroomFacility.squatToilet}

                                    onChangeFacilityHandler={() => {
                                        setBathroomFacilityHandler("squatToilet");
                                    }}
                                    />

                    <FacilityOption name="Toilet duduk"
                                    status={bathroomFacility.sittingToilet}

                                    onChangeFacilityHandler={() => {
                                        setBathroomFacilityHandler("sittingToilet");
                                    }}
                                    />
                </section>
            </article>
        </article>
    );
}

export function IndoorDetail({ villaRef }: { villaRef: React.MutableRefObject<CreateVillaInterface> }) {    
    const [indoorFacility, setIndoorFacility] = useState<IIndoorFacility>({
        ac: "not available",
        kitchen: "not available",
        wifi: "not available",
        lounge: "not available",
        entertainmentRoom: "not available",
        dinningRoom: "not available"
    });

    function setBathroomFacilityHandler(facility: string) {
        setIndoorFacility((prevState) => ({
            ...prevState,
            [facility]: prevState[facility] === "not available" ? "available" : "not available"
        }));

        villaRef.current.facility.indoor = {
            ...indoorFacility,
            [facility]: indoorFacility[facility] === "not available" ? "available" : "not available",
        };
    }

    return (
        <article className="facility-detail">
            <h3 className="h3-medium">
                Indoor facility
            </h3>

            <article className="facility-option-list-wrapper">
                <section className="label-option-wrapper">
                    <h4 className="h4-regular">
                        Other facility
                    </h4>
                </section>

                <section className="facility-list">
                    <FacilityOption name="AC (Air Conditioner)"
                                    status={indoorFacility.ac}

                                    onChangeFacilityHandler={() => {
                                        setBathroomFacilityHandler("ac");
                                    }}
                                    />
                                    
                    <FacilityOption name="Dapur untuk memasak"
                                    status={indoorFacility.kitchen}

                                    onChangeFacilityHandler={() => {
                                        setBathroomFacilityHandler("kitchen");
                                    }}
                                    />

                    <FacilityOption name="Wifi"
                                    status={indoorFacility.wifi}

                                    onChangeFacilityHandler={() => {
                                        setBathroomFacilityHandler("wifi");
                                    }}
                                    />

                    <FacilityOption name="Ruang tamu"
                                    status={indoorFacility.lounge}

                                    onChangeFacilityHandler={() => {
                                        setBathroomFacilityHandler("lounge");
                                    }}
                                    />

                    <FacilityOption name="Ruang hiburan"
                                    status={indoorFacility.entertainmentRoom}

                                    onChangeFacilityHandler={() => {
                                        setBathroomFacilityHandler("entertainmentRoom");
                                    }}
                                    />

                    <FacilityOption name="Ruang makan"
                                    status={indoorFacility.dinningRoom}

                                    onChangeFacilityHandler={() => {
                                        setBathroomFacilityHandler("dinningRoom");
                                    }}
                                    />
                </section>
            </article>
        </article>
    );
}

export function OutdoorDetail({ villaRef }: { villaRef: React.MutableRefObject<CreateVillaInterface> }) {    
    const [outdoorFacility, setOutdoorFacility] = useState<IOutdoorFacility>({
        pool: "not available",
        garage: "not available",
        security: "not available",
        park: "not available",
        bbqArea: "not available"
    });

    function setOutdoorFacilityHandler(facility: string) {
        setOutdoorFacility((prevState) => ({
            ...prevState,
            [facility]: prevState[facility] === "not available" ? "available" : "not available"
        }));

        villaRef.current.facility.outdoor = {
            ...outdoorFacility,
            [facility]: outdoorFacility[facility] === "not available" ? "available" : "not available",
        };
    }

    return (
        <article className="facility-detail">
            <h3 className="h3-medium">
                Outdoor facility
            </h3>

            <article className="facility-option-list-wrapper">
                <section className="label-option-wrapper">
                    <h4 className="h4-regular">
                        Other facility
                    </h4>
                </section>

                <section className="facility-list">
                    <FacilityOption name="Kolam renang"
                                    status={outdoorFacility.pool}

                                    onChangeFacilityHandler={() => {
                                        setOutdoorFacilityHandler("pool");
                                    }}
                                    />
                                    
                    <FacilityOption name="Garasi parkir"
                                    status={outdoorFacility.garage}

                                    onChangeFacilityHandler={() => {
                                        setOutdoorFacilityHandler("garage");
                                    }}
                                    />

                    <FacilityOption name="Keamanan 24 jam"
                                    status={outdoorFacility.security}

                                    onChangeFacilityHandler={() => {
                                        setOutdoorFacilityHandler("security");
                                    }}
                                    />

                    <FacilityOption name="Taman"
                                    status={outdoorFacility.park}

                                    onChangeFacilityHandler={() => {
                                        setOutdoorFacilityHandler("park");
                                    }}
                                    />

                    <FacilityOption name="Area BBQ"
                                    status={outdoorFacility.bbqArea}

                                    onChangeFacilityHandler={() => {
                                        setOutdoorFacilityHandler("bbqArea");
                                    }}
                                    />
                </section>
            </article>
        </article>
    );
}