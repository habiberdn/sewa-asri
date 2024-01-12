import { useState } from "react";
import { InputField, FacilityOption } from "../components";

import { ICreateVilla } from '../utils/interface';

import { IBathroomFacility, IBedroomFacility } from "./../utils/interface";

export function VillaDetailForm({ villaRef }: { villaRef: React.MutableRefObject<ICreateVilla> }) {
    return (
        <article className="villa-detail-form">
            <h3 className="h3-medium">
                Detail villa
            </h3>
                    
            <InputField     label="Name"
                            placeholder="Villa Pesona Lestari"
                            variant="text"
                            width="wide"

                            onChangeInputHandler={(event) => {
                                villaRef.current.name = event.target.value;
                            }}
                            />

            <InputField     label="Description"
                            placeholder="Villa Pesona Lestari merupakan villa yang bernuansa"
                            variant="text-area"
                            width="wide"

                            onChangeInputHandler={(event) => {
                                villaRef.current.description = event.target.value;
                            }}
                            />

            <InputField     label="Price"
                            placeholder="4700000"
                            variant="number"
                            width="wide"

                            onChangeInputHandler={(event) => {
                                villaRef.current.price = Number.parseInt(event.target.value);
                            }}
                            />

            <InputField     label="City"
                            placeholder="Bandung"
                            variant="text"
                            width="wide"

                            onChangeInputHandler={(event) => {
                                villaRef.current.location.city = event.target.value;
                            }}
                            />

            <section className="bathroom-bedroom-wrapper">
                <InputField     label="Bathroom"
                                placeholder="1"
                                variant="number"
                                width="short"

                                onChangeInputHandler={(event) => {
                                    villaRef.current.bathroom.quantity = Number.parseInt(event.target.value);
                                }}
                                 />

                <InputField     label="Bedroom"
                                placeholder="1"
                                variant="number"
                                width="short"

                                onChangeInputHandler={(event) => {
                                    villaRef.current.bedroom.quantity = Number.parseInt(event.target.value);
                                }}
                                />
            </section>

            <InputField     label="Address"
                            placeholder="Jl. Kp. Cibobos, Karangkamulyan, Kec. Cihara, Kabupaten Lebak, Banten 42392"
                            variant="text-area"
                            width="wide"
                            value={villaRef.current.location.address}

                            onChangeInputHandler={(event) => {
                                villaRef.current.location.address = event.target.value;
                            }}
                            />

        </article>

    );
}

export function AttractionForm({ villaRef }: { villaRef: React.MutableRefObject<ICreateVilla> }) {
    return (
        <article className="villa-detail-form">
            <section className="label-option-wrapper">
                <h3 className="h3-medium">
                    Detail villa
                </h3>

                <p className="label-regular">
                    optional
                </p>
            </section>
                    
            <InputField     label="Name"
                            placeholder="Air terjun"
                            variant="text"
                            width="wide"

                            onChangeInputHandler={(event) => {
                                villaRef.current.name = event.target.value;
                            }}
                            />
            
            <section className="attraction-schedule">
                <InputField     label="Open"
                                placeholder="04.00"
                                variant="text"
                                width="short"

                                onChangeInputHandler={(event) => {
                                    if (villaRef.current.attraction) {
                                        villaRef.current.attraction.open = event.target.value;
                                    }
                                }}
                                />

                <InputField     label="Close"
                                placeholder="15.00"
                                variant="text"
                                width="short"

                                onChangeInputHandler={(event) => {
                                    if (villaRef.current.attraction) {
                                        villaRef.current.attraction.close = event.target.value;
                                    }
                                }}
                                />
            </section>

            <InputField     label="Distance"
                            placeholder="100"
                            placeholderLabel="m"
                            variant="text"
                            width="wide"

                            onChangeInputHandler={(event) => {
                                villaRef.current.location.city = event.target.value;
                            }}
                            />
        </article>

    );
}

export function BedroomDetail({ villaRef }: { villaRef: React.MutableRefObject<ICreateVilla> }) {
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

                <section className="bedroom-optional-facility">
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

export function BathroomDetail({ villaRef }: { villaRef: React.MutableRefObject<ICreateVilla> }) {    
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

                <section className="bedroom-optional-facility">
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