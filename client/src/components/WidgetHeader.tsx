import { Button, Chips, SearchBar } from ".";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

type Variant = "dashboard" | "chat" | "reservation-schedule" | "villa-management" | "add-new-villa" | "edit-villa" | "detail-villa";

interface WidgetHeaderInterface {
    variant: Variant; 
    onCreateVillaHandler?: () => void;
    onHoverProfile?: () => void;
    onSearchHandler?: () => void;
}

export function WidgetHeader({ variant, onHoverProfile, onSearchHandler, onCreateVillaHandler }: WidgetHeaderInterface) {
    const headerVariantMap = {
        main: <Dashboard />,
        chat: <Chat />,
        "reservation-schedule": <ReservationSchedule />,
        "edit-villa": <EditVilla />,
        "add-new-villa": <CreateNewVilla onCreateVillaHandler={onCreateVillaHandler} />,
        "villa-detail": <VillaDetail />,
        "villa-management": <VillaManagement    onSearchHandler={() => {
                                                    if (onSearchHandler) {
                                                        onSearchHandler();
                                                    }
                                                }}
                                            
                                                onCreateVillaHandler={() => {
                                                    if (onCreateVillaHandler) {
                                                        onCreateVillaHandler();
                                                    }
                                                }}
                                                />
        
    }
    return headerVariantMap[variant];
    
}

function Dashboard() {
    return (
        <header  className="header header-dashboard">

            <article  className="detail-overview">

                <h1  className="h1-medium header-title">
                    Dashboard
                </h1>

                <section  className="overview">
                    <article  className="overview-card">

                        <h3  className="h2-medium detail">
                            36
                        </h3>

                        <h4  className="p-regular label">
                            Reservasi di bulan September
                        </h4>
                    </article>

                    <article  className="overview-card">

                        <h3  className="h2-medium detail">
                            10
                        </h3>

                        <h4  className="p-regular label">
                            Reservasi sukses di bulan September
                        </h4>
                    </article>

                    <article  className="overview-card">

                        <h3  className="h2-medium detail">
                            4
                        </h3>

                        <h4  className="p-regular label">
                            Reservasi ditolak di bulan September
                        </h4>
                    </article>
                </section>
            </article>
        </header>
    );
}

function Chat() {
    return (
        <header  className="header header-chat">

            <article  className="detail-overview">

                <h1  className="h1-medium header-title">
                    Chat
                </h1>

                <article  className="guest-profile">
                    
                    <img  src="https://randomuser.me/api/portraits/women/70.jpg" 
                          className="photo-profile" />

                    <section>
                        <h4  className="h4-regular name">
                            Suicidal Tendencies
                        </h4>

                        <h4  className="label-regular date">
                            13 September
                        </h4>
                    </section>
                </article>
            </article>
        </header>
    );
}

function ReservationSchedule() {
    return (
        <header  className="header header-chat">

            <article  className="detail-overview">

                <h1  className="h1-medium header-title">
                    Reservation schedule
                </h1>
            </article>
        </header>
    );
}

function VillaManagement({ onSearchHandler, onCreateVillaHandler }: { onSearchHandler: () => void, onCreateVillaHandler?: () => void; }) {
    const [filterAvailability, setFilterAvailability] = useState<"Tersedia" | "Tidak tersedia">("Tersedia");

    return (
        <header  className="header villa-management">

            <article  className="detail-overview">

                <h1  className="h1-medium header-title">
                    Vila management
                </h1>

                <Button     variant="primary"
                            behavior="hug-content"
                            size="large"
                            state="active"
                            label="New villa"

                            onClickHandler={() => {
                                if (onCreateVillaHandler) {
                                    onCreateVillaHandler();
                                }
                            }}
                            />
            </article>

            <section className="search-field">
                <section className="filter">
                    <h4 className="h4-regular filter-label">
                        Filter:
                    </h4>

                    <Chips  label="Tersedia"
                            state={ filterAvailability === "Tersedia" ? true : false }
                            variant="active"
                            
                            onSelect={() => {
                                setFilterAvailability("Tersedia")
                            }}/>

                    <Chips  label="Tidak tersedia"
                            state={ filterAvailability === "Tidak tersedia" ? true : false }
                            variant="active"
                            
                            onSelect={() => {
                                setFilterAvailability("Tidak tersedia")
                            }}/>

                </section>

                <section className="search">
                    <SearchBar  placeholder="Enter villa name"
                                onInputHandler={() => {

                                }}/>

                    <Button     variant="primary"
                                behavior="hug-content"
                                size="large"
                                state="active"
                                label="Cari"

                                onClickHandler={() => {
                                    if (onSearchHandler) {
                                        onSearchHandler();
                                    }
                                }}
                                />
                </section>

            </section>
        </header>
    );
}

function EditVilla() {
    const navigate = useNavigate();

    return (
        <header  className="header villa-management-edit-new">

            <article  className="detail-overview">

                <h1  className="h1-medium header-title">
                    Edit villa
                </h1>

                <section className="actions">
                <Button     variant="secondary"
                            behavior="hug-content"
                            size="large"
                            state="active"
                            label="Cancel"

                            onClickHandler={() => {
                                navigate({ to: "/villa-management" });
                            }}
                            />
                
                <Button     variant="primary"
                            behavior="hug-content"
                            size="large"
                            state="active"
                            label="Save changes"

                            onClickHandler={() => {
                                console.info("Add new villa");
                            }}
                            />
                </section>                
            </article>
        </header>
    );
}

function CreateNewVilla({ onCreateVillaHandler }: { onCreateVillaHandler?: () => void }) {
    const navigate = useNavigate();

    return (
        <header  className="header villa-management-edit-new">

            <article  className="detail-overview">

                <h1  className="h1-medium header-title">
                    Add new villa
                </h1>

                <section className="actions">
                    <Button     variant="secondary"
                                behavior="hug-content"
                                size="large"
                                state="active"
                                label="Cancel"

                                onClickHandler={() => {
                                    navigate({ to: "/villa-management" });
                                }}
                                />
                    
                    <Button     variant="primary"
                                behavior="hug-content"
                                size="large"
                                state="active"
                                label="Create new villa"

                                onClickHandler={() => {
                                    if (onCreateVillaHandler) {
                                        onCreateVillaHandler();
                                    }
                                }}
                                />
                    </section>                
            </article>
        </header>
    );
}

function VillaDetail() {
    return (
        <header  className="header header-chat">

            <article  className="detail-overview">

                <h1  className="h1-medium header-title">
                    Villa detail description
                </h1>
                
            </article>
        </header>
    );
}