// import villaJson from "./../data/villa.json";

import { useRef, useState } from "react";
// import { useNavigate } from "@tanstack/react-router";
import { Header, Sidebar, MessageBar, UploadPhoto } from "../components";

import { IMessageBar } from "../utils/interface";
import { CreateVillaInterfaces } from '../utils/villa-interfaces';

import { AttractionForm, VillaDetailForm } from "./Forms/VillaDetail";
import { BedroomDetail, BathroomDetail, IndoorDetail, OutdoorDetail } from "./Forms/Facility";

// import { Villa } from '../utils/interface';

export function CreateVilla() {
    // const navigate = useNavigate();

    const villaRef = useRef<CreateVillaInterfaces>({
        name: "",
        description: "",
        photo: "",
        price: 1000000,

        bedroom: {
            quantity: 1,
            width: 1,
            length: 1,
            bedSize: "single-bed",
            othersFacility: {
                window: "not available",
                socket: "not available",
                wardrobe: "not available"
            }
        },

        bathroom: {
            quantity: 1,
            othersFacility: {
                waterHeater: "not available",
                shower: "not available",
                bathtube: "not available",
                squatToilet: "not available",
                sittingToilet: "not available",
            }
        },

        facility: {
            indoor: {
                ac: "not available",
                kitchen: "not available",
                wifi: "not available",
                lounge: "not available",
                entertainmentRoom: "not available",
                dinningRoom: "not available"
            },

            outdoor: {
                pool: "not available",
                garage: "not available",
                security: "not available",
                park: "not available",
                bbqArea: "not available"
            }
        },

        location: {
            city: "",
            address: ""
        },

        attraction: null,

        isAvailable: false
    });

    const [messagebar, setMessagebar] = useState<IMessageBar>({
        showMessageBar: false,
        variant: "error",
        message: ""
    }); 

    if (messagebar.showMessageBar) {
        setTimeout(() => {
            setMessagebar({
                showMessageBar: false,
                message: "Logout gagal silahkan coba beberapa saat lagi "
            });
        }, 2000);
    }
    console.count("VillaManagement.tsx Re-render");

    function onCreateVilla() {
        console.info(villaRef.current);
    }

    return (
        <main  className="dashboard-container">
            <Sidebar />

            <section  className="main-container">
                <Header variant="main"/>
                
                <section  className="widget create-new">

                    <Header variant="add-new-villa" 
                            onCreateVillaHandler={() => {
                                onCreateVilla();
                            }}/>

                    <section className="villa-detail">
                        <UploadPhoto    villaRef={villaRef} 
                                        variant="large" 
                                        label="villa-photo"

                                        onUploadImageHandler={(image) => {
                                            console.info(image);
                                        }}
                                        />
                        <VillaDetailForm villaRef={villaRef} />
                        
                        <section className="bedroom-bathroom-wrapper">
                            <BedroomDetail villaRef={villaRef} />
                            <BathroomDetail villaRef={villaRef} />
                        </section>

                        <section className="attraction-other-facility">
                            <AttractionForm villaRef={villaRef} />

                            <section className="indoor-outdoor-facility-wrapper">
                                <IndoorDetail villaRef={villaRef} />
                                <OutdoorDetail villaRef={villaRef} />
                            </section>
                        </section>
                    </section>
                    
                </section>

                <MessageBar message={messagebar.message}
                            variant='error'
                            showMessageBar={messagebar.showMessageBar}
                            />
            </section>
        </main>
    );
}