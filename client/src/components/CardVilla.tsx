import { Button } from ".";

import pinIcon from "./../assets/icons/location.webp";
import chevronIcon from "./../assets/icons/chevron-down.webp";
import { useState } from "react";

import { VillaInterfaces } from "../utils/villa-interfaces";
import { useNavigate } from "@tanstack/react-router";

interface Status {
    isAvailable: boolean;
    dropdownHandler?: () => void;
}

interface DropdownActions {
    _id: string;
    dropdown: "opened" | "closed";
    onEditHandler?: () => void;
    onDeleteHandler?: () => void;
}

interface DropdownStatus {
    dropdown: "opened" | "closed";
    onMouseLeaveHandler: () => void;
    onChangeAvailabilityHandler?: () => void;
}

export function CardVilla({ 
    data, 
    onChangeAvailabilityHandler 
}: { 
    data: VillaInterfaces, 
    onChangeAvailabilityHandler?: () => void; 
}) {
    const [dropdownStatus, setDropdownStatus] = useState<"opened" | "closed">("closed");
    const [dropdownActions, setDropdownActions] = useState<"opened" | "closed">("closed");
    const [isAvailable, setIsAvailable] = useState<boolean>(true);

    return (
        <article className="card-villa" key={data._id}>
            <img    src={data.photo}
                    className="photo"
                    loading="lazy"
                     />

            <section className="content">
                
                <section className="villaid-status-wrapper">

                    <p className="label-regular villaid"
                        onClick={(event) => {
                            const text = event.currentTarget.textContent;
                            // copyToClipboard(text)
                            console.info(text);
                        }}>
                        Villa ID: { data._id }
                    </p>
                    
                    <Status     isAvailable={isAvailable}

                                dropdownHandler={() => {
                                    setDropdownStatus("opened");
                                }}
                                />

                    <DropdownStatus dropdown={dropdownStatus}
                                    onMouseLeaveHandler={() => {
                                        setDropdownStatus("closed");
                                    }}
                                    onChangeAvailabilityHandler={() => {
                                        if (onChangeAvailabilityHandler) {
                                            onChangeAvailabilityHandler();
                                        }
                                        isAvailable ? setIsAvailable(false) : setIsAvailable(true);
                                        setDropdownStatus("closed");
                                    }} />
                </section>

                <section    className="name-price-wrapper">

                    <h3 className="h3-regular name">
                        { data.name }
                    </h3>

                    <section className="price-wrapper">
                        <h4 className="h4-regular">
                            Rp. { data.price }
                        </h4>

                        <p className="label-regular">/ malam</p>
                    </section>
                </section>

                <section className="city-actions-wrapper">
                    <section className="city">

                        <img    src={pinIcon} 
                                className="location-icon"
                                />
                        <p className="label-regular">
                            { data.location.city }
                        </p>
                    </section>

                    <Button     variant="tertiary"
                                behavior="hug-content"
                                size="small"
                                state="active"
                                label="Actions"

                                onClickHandler={() => {
                                    setDropdownActions("opened");
                                }}
                                />
                    
                    <DropdownActions    _id={data._id} 
                                        dropdown={dropdownActions}
                                        
                                        onEditHandler={() => {
                                            setDropdownActions("closed")
                                        }}
                                        
                                        onDeleteHandler={() => {
                                            setDropdownActions("closed")
                                        }}
                                        />
                </section>
            </section>
        </article>
    );
}

function Status({
    isAvailable,
    dropdownHandler
}: Status) {
    return (
        <section    className="villa-availability"
        
                    onClick={() => {
                        if (dropdownHandler) {
                            dropdownHandler();
                        }
                    }}>
            {
                isAvailable ? (
                    <>
                        <div className="dot green-dot" />

                        <p className="label-regular label">
                            Tersedia
                        </p>
                    </>
                ) : (
                    <>
                        <div className="dot red-dot" />
                        
                        <p className="label-regular label">
                            Tidak tersedia
                        </p>
                    </>
                )
            }
            
            <img    src={chevronIcon}
                    className="chevron" />
        </section>
    );
}

function DropdownStatus({ dropdown, onMouseLeaveHandler, onChangeAvailabilityHandler }: DropdownStatus) {
    return (
        <section    className={`dropdown-status dropdown-status-${dropdown}`}
                    onMouseLeave={() => {
                        if (onMouseLeaveHandler) {
                            onMouseLeaveHandler();
                        }
                    }}>

            <article    className="option"
                        onClick={() => {
                            if (onChangeAvailabilityHandler) {
                                onChangeAvailabilityHandler();
                            }
                        }}>

                <div className="dot green-dot" />
                        
                <p className="label-regular label">
                    Tersedia
                </p>
            </article>

            <article    className="option"
                        onClick={() => {
                            if (onChangeAvailabilityHandler) {
                                onChangeAvailabilityHandler();
                            }
                        }}>

                <div className="dot red-dot" />
                        
                <p className="label-regular label">
                    Tidak tersedia
                </p>
            </article>
        </section>
    );
}

function DropdownActions({
    _id,
    dropdown,
    onDeleteHandler,
    onEditHandler
}: DropdownActions) {
    const navigate = useNavigate();

    return (
        <section    className={`dropdown-actions dropdown-actions-${dropdown}`}
                    onMouseLeave={() => {
                        if (onEditHandler) {
                            onEditHandler();
                        } 
                        else if (onDeleteHandler) {
                            onDeleteHandler();
                        }
                    }}>

            <p  className="label-regular view"
                
                onClick={() => {
                    navigate({ 
                        to: "villa-detail-description/$id",
                        params: { id: _id }
                    });
                }}>
                View detail
            </p>

            <p  className="label-regular edit"

                onClick={() => {
                    if (onEditHandler) {
                        onEditHandler();
                    }
            }}>
                Edit
            </p>

            <p  className="label-regular delete"

                onClick={() => {
                    if (onDeleteHandler) {
                        onDeleteHandler();
                    }
            }}>
                Delete
            </p>
        </section>
    );
}