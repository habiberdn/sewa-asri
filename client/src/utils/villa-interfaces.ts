type availbility = "available" | "not available" | string;

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
        othersFacility: {
            window: availbility;
            socket: availbility;
            wardrobe: availbility;
        }
    };

    bathroom: {
        quantity: number;
        othersFacility: {
            waterHeater: availbility;
            shower: availbility;
            bathtube: availbility;
            squatToilet: availbility;
            sittingToilet: availbility;
        }
    };

    facility: {
        indoor: {
            ac: availbility;
            kitchen: availbility;
            wifi: availbility;
            lounge: availbility;
            entertainmentRoom: availbility;
            dinningRoom: availbility;
        };

        outdoor: {
            pool: availbility;
            garage: availbility;
            security: availbility;
            park: availbility;
            bbqArea: availbility;
        }
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