import { useRef, useState } from "react";
import { WidgetHeader, Sidebar, MessageBar, UploadPhoto, PageHeader } from "../components";

import { IMessageBar } from "../utils/interface";
import { CreateVillaInterface } from '../utils/villa-interfaces';

import { VillaDetailForm } from "./Forms/VillaDetail";
import { AttractionForm } from "./Forms/Attraction";

import { BedroomDetail, BathroomDetail, IndoorDetail, OutdoorDetail } from "./Forms/Facility";

export function CreateVilla() {
    const villaRef = useRef<CreateVillaInterface>({
        name: "",
        description: "",
        photo: "",
        price: 1000000,

        bedroom: {
            quantity: 1,
            width: 1,
            length: 1,
            bedSize: "Single bed",
            othersFacility: {
                window: { name: "Jendela", status: "not available" },
                socket: { name: "Stop kontak", status: "not available" },
                wardrobe: { name: "Lemari pakaian", status: "not available" }
            }
        },

        bathroom: {
            quantity: 1,
            othersFacility: {
                waterHeater: { name: "Penghangat air", status: "not available" },
                shower: { name: "Pancuran air", status: "not available" },
                bathtube: { name: "Bak mandi", status: "not available" },
                squatToilet: { name: "Toilet jongkok", status: "not available" },
                sittingToilet: { name: "Toilet duduk", status: "not available" }
            }
        },

        facility: {
            indoor: {
                ac: { name: "AC (Air Conditioner)", status: "not available" },
                kitchen: { name: "Dapur untuk memasak", status: "not available" },
                wifi: { name: "Wifi", status: "not available" },
                lounge: { name: "Ruang tamu", status: "not available" },
                entertainmentRoom: { name: "Ruang hiburan", status: "not available" },
                dinningRoom: { name: "Ruang makan", status: "not available" }
            },
            outdoor: {
                pool: { name: "Kolam renang", status: "not available" },
                garage: { name: "Garasi parkir", status: "not available" },
                security: { name: "Keamanan 24 jam", status: "not available" },
                park: { name: "Taman", status: "not available" },
                bbqArea: { name: "Area BBQ", status: "not available" }
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
                <PageHeader variant="auth"/>
                
                <section  className="widget create-new">

                    <WidgetHeader variant="add-new-villa" 
                            onCreateVillaHandler={() => {
                                onCreateVilla();
                            }}/>

                    <section className="villa-detail">
                        <UploadPhoto    photo={villaRef.current.photo} 
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