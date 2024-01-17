import { useState } from "react";
import { InputField, FacilityOption } from "./../../components";

import { CreateVillaInterface } from "../../utils/villa-interfaces";
import { BathroomFacilityInterface, BedroomFacilityInterface, IndoorFacilityInterface, OutdoorFacilityInterface } from "../../utils/facility-interfaces";

export function BedroomDetail({ villaRef }: { villaRef: React.MutableRefObject<CreateVillaInterface> }) {
    const villa = villaRef.current;

    const [bedSize, setBedSize] = useState<string>(villa ? villa.bedroom.bedSize : "Single Bed");
    
    const [bedroomFacility, setBedroomFacility] = useState<BedroomFacilityInterface>(villa.bedroom.othersFacility);

    let facilityStatus = "not available";

    function setBedroomFacilityHandler(facility: string) {
        if (bedroomFacility[facility].status == "not available") {
            facilityStatus = "available";
        }

        setBedroomFacility((prevState) => ({
            ...prevState,
            [facility]: { name: bedroomFacility[facility].name, status: facilityStatus }
        }));

        villa.bedroom.othersFacility = {
            ...bedroomFacility,
            [facility]: { name: bedroomFacility[facility].name, status: facilityStatus }
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
                                        variant="selectable"
                                        currentValue={bedSize}

                                        onChangeFacilityHandler={() => {
                                            setBedSize("Single bed");
                                            villaRef.current.bedroom.bedSize = "single-bed";
                                        }}
                                        />

                    <FacilityOption     name="Double bed"
                                        variant="selectable"
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
                                value={villa.bedroom && villa.bedroom.width}

                                onChangeInputHandler={(event) => {
                                    villaRef.current.bedroom.width = Number.parseInt(event.target.value);
                                }}
                                 />

                <InputField     label="Room length"
                                placeholder="3"
                                placeholderLabel="m"
                                variant="number"
                                width="short"
                                value={villa.bedroom && villa.bedroom.length}

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
                                    variant="selectable"
                                    status={bedroomFacility.window.status}
                                    currentValue={bedSize}

                                    onChangeFacilityHandler={() => {
                                        setBedroomFacilityHandler("window");
                                    }}
                                    />
                                    
                    <FacilityOption name="Stop kontak"
                                    variant="selectable"
                                    status={bedroomFacility.socket.status}
                                    currentValue={bedSize}

                                    onChangeFacilityHandler={() => {
                                        setBedroomFacilityHandler("socket");
                                    }}
                                    />

                    <FacilityOption name="Lemari pakaian"
                                    variant="selectable"
                                    status={bedroomFacility.wardrobe.status}
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
    const villa = villaRef.current;

    const [bathroomFacility, setBathroomFacility] = useState<BathroomFacilityInterface>(villa.bathroom.othersFacility);

    let facilityStatus = "not available";

    function setBathroomFacilityHandler(facility: string) {
        if (bathroomFacility[facility].status == "not available") {
            facilityStatus = "available";
        }

        setBathroomFacility((prevState) => ({
            ...prevState,
            [facility]: { name: bathroomFacility[facility].name, status: facilityStatus }
        }));

        villaRef.current.bathroom.othersFacility = {
            ...bathroomFacility,
            [facility]: { name: bathroomFacility[facility].name, status: facilityStatus }
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
                                    variant="selectable"
                                    status={bathroomFacility.waterHeater.status}

                                    onChangeFacilityHandler={() => {
                                        setBathroomFacilityHandler("waterHeater");
                                    }}
                                    />
                                    
                    <FacilityOption name="Pancuran air"
                                    variant="selectable"
                                    status={bathroomFacility.shower.status}

                                    onChangeFacilityHandler={() => {
                                        setBathroomFacilityHandler("shower");
                                    }}
                                    />

                    <FacilityOption name="Bak mandi"
                                    variant="selectable"
                                    status={bathroomFacility.bathtube.status}

                                    onChangeFacilityHandler={() => {
                                        setBathroomFacilityHandler("bathtube");
                                    }}
                                    />

                    <FacilityOption name="Toilet jongkok"
                                    variant="selectable"
                                    status={bathroomFacility.squatToilet.status}

                                    onChangeFacilityHandler={() => {
                                        setBathroomFacilityHandler("squatToilet");
                                    }}
                                    />

                    <FacilityOption name="Toilet duduk"
                                    variant="selectable"
                                    status={bathroomFacility.sittingToilet.status}

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
    const villa = villaRef.current;

    const [indoorFacility, setIndoorFacility] = useState<IndoorFacilityInterface>(villa.facility.indoor);

    let facilityStatus = "not available";

    function setBathroomFacilityHandler(facility: string) {
        if (indoorFacility[facility].status == "not available") {
            facilityStatus = "available";
        }

        setIndoorFacility((prevState) => ({
            ...prevState,
            [facility]: { name: indoorFacility[facility].name, status: facilityStatus }
        }));

        villaRef.current.facility.indoor = {
            ...indoorFacility,
            [facility]: { name: indoorFacility[facility].name, status: facilityStatus }
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
                                    variant="selectable"
                                    status={indoorFacility.ac.status}

                                    onChangeFacilityHandler={() => {
                                        setBathroomFacilityHandler("ac");
                                    }}
                                    />
                                    
                    <FacilityOption name="Dapur untuk memasak"
                                    variant="selectable"
                                    status={indoorFacility.kitchen.status}

                                    onChangeFacilityHandler={() => {
                                        setBathroomFacilityHandler("kitchen");
                                    }}
                                    />

                    <FacilityOption name="Wifi"
                                    variant="selectable"
                                    status={indoorFacility.wifi.status}

                                    onChangeFacilityHandler={() => {
                                        setBathroomFacilityHandler("wifi");
                                    }}
                                    />

                    <FacilityOption name="Ruang tamu"
                                    variant="selectable"
                                    status={indoorFacility.lounge.status}

                                    onChangeFacilityHandler={() => {
                                        setBathroomFacilityHandler("lounge");
                                    }}
                                    />

                    <FacilityOption name="Ruang hiburan"
                                    variant="selectable"
                                    status={indoorFacility.entertainmentRoom.status}

                                    onChangeFacilityHandler={() => {
                                        setBathroomFacilityHandler("entertainmentRoom");
                                    }}
                                    />

                    <FacilityOption name="Ruang makan"
                                    variant="selectable"
                                    status={indoorFacility.dinningRoom.status}

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
    const villa = villaRef.current;
   
    const [outdoorFacility, setOutdoorFacility] = useState<OutdoorFacilityInterface>(villa.facility.outdoor);

    let facilityStatus = "not available";

    function setOutdoorFacilityHandler(facility: string) {
        if (outdoorFacility[facility].status == "not available") {
            facilityStatus = "available";
        }

        setOutdoorFacility((prevState) => ({
            ...prevState,
            [facility]: { name: outdoorFacility[facility].name, status: facilityStatus }
        }));

        villaRef.current.facility.outdoor = {
            ...outdoorFacility,
            [facility]: { name: outdoorFacility[facility].name, status: facilityStatus }
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
                                    variant="selectable"
                                    status={outdoorFacility.pool.status}

                                    onChangeFacilityHandler={() => {
                                        setOutdoorFacilityHandler("pool");
                                    }}
                                    />
                                    
                    <FacilityOption name="Garasi parkir"
                                    variant="selectable"
                                    status={outdoorFacility.garage.status}

                                    onChangeFacilityHandler={() => {
                                        setOutdoorFacilityHandler("garage");
                                    }}
                                    />

                    <FacilityOption name="Keamanan 24 jam"
                                    variant="selectable"
                                    status={outdoorFacility.security.status}

                                    onChangeFacilityHandler={() => {
                                        setOutdoorFacilityHandler("security");
                                    }}
                                    />

                    <FacilityOption name="Taman"
                                    variant="selectable"
                                    status={outdoorFacility.park.status}

                                    onChangeFacilityHandler={() => {
                                        setOutdoorFacilityHandler("park");
                                    }}
                                    />

                    <FacilityOption name="Area BBQ"
                                    variant="selectable"
                                    status={outdoorFacility.bbqArea.status}

                                    onChangeFacilityHandler={() => {
                                        setOutdoorFacilityHandler("bbqArea");
                                    }}
                                    />
                </section>
            </article>
        </article>
    );
}