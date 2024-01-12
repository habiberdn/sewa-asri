interface Message {
    showMessage: boolean,
    name: string | ""
}

interface ParamListBase {
    [routeName: string]: object | undefined;
}

interface PasswordRef {
    password: string;
    passwordConfirm: string;
}

interface ModalLogout {
    modal: "opened" | "closed";
    logout: boolean;
}

interface IMessageBar {
    message: string;
    variant?: "info" | "success" | "error";
    showMessageBar: boolean;
}

interface IBedroomFacility {
    window: "available" | "not available";
    wardrobe: "available" | "not available";
    socket: "available" | "not available";
}

interface IBathroomFacility {
    waterHeater: "available" | "not available";
    shower: "available" | "not available";
    bathtube: "available" | "not available";
    sittingToilet: "available" | "not available";
    squatToilet: "available" | "not available";
}

interface IIndoorFacility {
    ac: "available" | "not available";
    kitchen: "available" | "not available";
    wifi: "available" | "not available";
    lounge: "available" | "not available";
    entertainmentRoom: "available" | "not available";
    dinningRoom: "available" | "not available";
}

interface IOutdoorFacility {
    pool: "available" | "not available";
    garage: "available" | "not available";
    security: "available" | "not available";
    park: "available" | "not available";
    bbqArea: "available" | "not available";
}

export {
    Message,
    ParamListBase,
    PasswordRef,
    ModalLogout,
    IMessageBar,
    IBedroomFacility,
    IBathroomFacility,
    IIndoorFacility,
    IOutdoorFacility
}