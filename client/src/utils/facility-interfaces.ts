interface Facility {
    name: string;
    status: string;
}

interface IndoorFacilityInterface {
    ac: Facility;
    kitchen: Facility;
    wifi: Facility;
    lounge: Facility;
    entertainmentRoom: Facility;
    dinningRoom: Facility;
}

interface OutdoorFacilityInterface {
    pool: Facility;
    garage: Facility;
    security: Facility;
    park: Facility;
    bbqArea: Facility;
}

interface BedroomFacilityInterface {
    window: Facility;
    socket: Facility;
    wardrobe: Facility;
}

interface BathroomFacilityInterface {
    waterHeater: Facility;
    shower: Facility;
    bathtube: Facility;
    squatToilet: Facility;
    sittingToilet: Facility;
}

export {
    IndoorFacilityInterface,
    OutdoorFacilityInterface,
    BedroomFacilityInterface,
    BathroomFacilityInterface
}