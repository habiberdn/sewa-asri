import checkIcon from "./../assets/icons/check.webp";

// bedroom facility
import windowIcon from "./../assets/icons/window.webp";
import wardrobeIcon from "./../assets/icons/wardrobe.webp";
import socketIcon from "./../assets/icons/socket.webp";
import singleBedIcon from "./../assets/icons/single-bed-icon.webp";
import doubleBedIcon from "./../assets/icons/double-bed-icon.webp";

// bathroom facility
import squatToiletIcon from "./../assets/icons/squat-toilet.webp";
import sittingToiletIcon from "./../assets/icons/sitting-toilet.webp";
import showerIcon from "./../assets/icons/shower-head.webp";
import thermometerIcon from "./../assets/icons/thermometer-hot.webp";
import bathtubeIcon from "./../assets/icons/bathtube.webp";

// indoor facility
import acIcon from "./../assets/icons/ac.webp";
import kitchenIcon from "./../assets/icons/kitchen.webp";
import wifiIcon from "./../assets/icons/wifi.webp";
import loungeIcon from "./../assets/icons/sofa.webp";
import entertainmentRoomIcon from "./../assets/icons/person.webp";
import dinningRoomIcon from "./../assets/icons/utensils.webp";

// outdoor facility
import poolIcon from "./../assets/icons/pool.webp";
import garageIcon from "./../assets/icons/garage.webp";
import securityIcon from "./../assets/icons/security.webp";
import parkIcon from "./../assets/icons/park.webp";
import bbqIcon from "./../assets/icons/bbq.webp";


type FacilityName = "Single bed" | "Double bed" | "Jendela" | "Stop kontak" | "Lemari pakaian" | "Penghangat air" | "Pancuran air" | "Bak mandi" | "Toilet jongkok" | "Toilet duduk" | "AC (Air Conditioner)" | "Garasi parkir" | "Keamanan 24 jam" | "Taman" | "Area BBQ" | "Dapur untuk memasak" | "Wifi" | "Ruang tamu" | "Ruang hiburan" | "Ruang makan" | "Kolam renang";

// type FacilityType = "bedroom" | "bathroom" | "indoor" | "outdoor";

interface Facility {
    name: FacilityName;
    status?: "available" | "not available" | undefined;
    currentValue?: string;
    onChangeFacilityHandler?: () => void;
}

export function FacilityOption({ name, status, currentValue, onChangeFacilityHandler }: Facility) {
    if (name === "Single bed" || name === "Double bed") {
        return (
            <article    className={`facility-option facility-option-${name === currentValue && "checked"}`}
                        onClick={() => {
                            if (onChangeFacilityHandler) {
                                onChangeFacilityHandler();
                            }
                        }}>
    
                <img className="facility-icon"
                     src={name === "Single bed" ? singleBedIcon : doubleBedIcon} />
    
                <h4 className="label-regular">
                    { name }
                </h4>
            </article>
        );
    }
    return (
        <article    className={`facility-option facility-option-${status}`}
                    onClick={() => {
                        if (onChangeFacilityHandler) {
                            onChangeFacilityHandler();
                        }
                    }}>
            
            <FacilityIcon name={name} />

            <h4 className="label-regular">
                { name }
            </h4>

            { status === "available" && <img className="check-icon" src={checkIcon} /> }
        </article>
    );
}

function FacilityIcon({ name }: { name: FacilityName }) {
    const iconMap = {
        "Jendela": windowIcon,
        "Lemari pakaian": wardrobeIcon,
        "Stop kontak": socketIcon,
        "Toilet jongkok": squatToiletIcon,
        "Toilet duduk": sittingToiletIcon,
        "Bak mandi": bathtubeIcon,
        "Penghangat air": thermometerIcon,
        "Pancuran air": showerIcon,
        "AC (Air Conditioner)": acIcon,
        "Dapur untuk memasak": kitchenIcon,
        "Wifi": wifiIcon,
        "Ruang tamu": loungeIcon,
        "Ruang hiburan": entertainmentRoomIcon,
        "Ruang makan": dinningRoomIcon,
        "Kolam renang": poolIcon,
        "Garasi parkir": garageIcon,
        "Keamanan 24 jam": securityIcon,
        "Taman": parkIcon,
        "Area BBQ": bbqIcon
    };
    
    return <img className="facility-icon" src={iconMap[name]} alt={name} />;
}