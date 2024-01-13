import { BathroomFacilityInterface, BedroomFacilityInterface, IndoorFacilityInterface, OutdoorFacilityInterface } from "./facility-interfaces";

interface VillaInterface {
    _id: string;
    name: string;
    photo: string;
    price: number;
    bedroomQuantity: number;
    bathroomQuantity: number;
    ratings: string;
    location: {
        city: string,
        address: string
    },
    isAvailable: boolean
}

interface CreateVillaInterface {
    name: string;
    description: string;
    photo: string | File;
    price: number;

    bedroom: {
        quantity: number;
        width: number;
        length: number;
        bedSize: string;
        othersFacility: BedroomFacilityInterface;
    };

    bathroom: {
        quantity: number;
        othersFacility: BathroomFacilityInterface;
    };

    facility: {
        indoor: IndoorFacilityInterface;
        outdoor: OutdoorFacilityInterface;
    };

    location: {
        city: string,
        address: string
    };

    attraction: {
        photo: string;
        name: string;
        open: string;
        close: string;
        distance: string;
    } | null;

    isAvailable: boolean
}

interface DetailVillaInterface extends CreateVillaInterface {
    _id: string;
    photo: string;
    ratings: {
        _id: string;
    }
}

export {
    VillaInterface,
    CreateVillaInterface,
    DetailVillaInterface
}