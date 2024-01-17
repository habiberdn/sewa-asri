import { UploadPhoto } from "./../../components";
import { InputField } from "./../../components";
import { CreateVillaInterface } from "../../utils/villa-interfaces";

export function AttractionForm({ villaRef }: { villaRef: React.MutableRefObject<CreateVillaInterface> }) {
    const attraction = villaRef.current.attraction;
    
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

            <UploadPhoto    photo={attraction?.photo} 
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
                            value={attraction ? attraction.name : undefined}

                            onChangeInputHandler={(event) => {
                                villaRef.current.name = event.target.value;
                            }}
                            />
            
            <section className="attraction-schedule">
                <InputField     label="Open"
                                placeholder="04.00"
                                variant="text"
                                width="short"
                                value={attraction ? attraction.open : undefined}

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
                                value={attraction ? attraction.close : undefined}

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
                            value={attraction ? attraction.distance : undefined}

                            onChangeInputHandler={(event) => {
                                villaRef.current.location.city = event.target.value;
                            }}
                            />
        </article>
    );
}