import { UploadPhoto } from "./../../components";
import { InputField } from "./../../components";
import { CreateVillaInterface } from "../../utils/villa-interfaces";

export function VillaDetailForm({ villaRef }: { villaRef: React.MutableRefObject<CreateVillaInterface> }) {
    const villa = villaRef.current;

    return (
        <article className="form detail">
            <h3 className="h3-medium">
                Detail villa
            </h3>

            <InputField     label="Name"
                            placeholder="Villa Pesona Lestari"
                            variant="text"
                            width="wide"
                            value={villa.name && villa.name}

                            onChangeInputHandler={(event) => {
                                villaRef.current.name = event.target.value;
                            }}
                            />

            <InputField     label="Description"
                            placeholder="Villa Pesona Lestari merupakan villa yang bernuansa"
                            variant="text-area"
                            width="wide"
                            value={villa.description && villa.description}

                            onChangeInputHandler={(event) => {
                                villaRef.current.description = event.target.value;
                            }}
                            />

            <InputField     label="Price"
                            placeholder="4700000"
                            variant="number"
                            width="wide"
                            value={villa.price && villa.price}

                            onChangeInputHandler={(event) => {
                                villaRef.current.price = Number.parseInt(event.target.value);
                            }}
                            />

            <InputField     label="City"
                            placeholder="Bandung"
                            variant="text"
                            width="wide"
                            value={villa.location && villa.location.city}

                            onChangeInputHandler={(event) => {
                                villaRef.current.location.city = event.target.value;
                            }}
                            />

            <section className="bedroom-bathroom-detail">
                <InputField     label="Bathroom"
                                placeholder="1"
                                placeholderLabel="m"
                                variant="number"
                                width="short"
                                value={villa.bedroom && villa.bedroom.width}

                                onChangeInputHandler={(event) => {
                                    villaRef.current.bathroom.quantity = Number.parseInt(event.target.value);
                                }}
                                 />

                <InputField     label="Bedroom"
                                placeholder="1"
                                placeholderLabel="m"
                                variant="number"
                                width="short"
                                value={villa.bedroom && villa.bedroom.length}

                                onChangeInputHandler={(event) => {
                                    villaRef.current.bedroom.quantity = Number.parseInt(event.target.value);
                                }}
                                />
            </section>

            <InputField     label="Address"
                            placeholder="Jl. Kp. Cibobos, Karangkamulyan, Kec. Cihara, Kabupaten Lebak, Banten 42392"
                            variant="text-area"
                            width="wide"
                            value={villa.location && villa.location.address}

                            onChangeInputHandler={(event) => {
                                villaRef.current.location.address = event.target.value;
                            }}
                            />

        </article>

    );
}

export function AttractionForm({ villaRef }: { villaRef: React.MutableRefObject<CreateVillaInterface> }) {
    return (
        <article className="form attraction">
            <section className="label-option-wrapper">
                <h3 className="h3-medium">
                    Nearest attraction
                </h3>

                <p className="label-regular">
                    optional
                </p>
            </section>

            <UploadPhoto    villaRef={villaRef} 
                            variant="small"
                            label="attraction-photo"
                            
                            onUploadImageHandler={(image) => {
                                console.info(image);
                            }}
                            />
                    
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
                            variant="number"
                            width="short"

                            onChangeInputHandler={(event) => {
                                villaRef.current.location.city = event.target.value;
                            }}
                            />
        </article>

    );
}