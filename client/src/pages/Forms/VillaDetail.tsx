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
                                variant="number"
                                width="short"
                                value={villa.bedroom && villa.bedroom.quantity}

                                onChangeInputHandler={(event) => {
                                    villaRef.current.bathroom.quantity = Number.parseInt(event.target.value);
                                }}
                                 />

                <InputField     label="Bedroom"
                                placeholder="1"
                                variant="number"
                                width="short"
                                value={villa.bedroom && villa.bedroom.quantity}

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