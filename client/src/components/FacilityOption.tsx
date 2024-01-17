import checkIcon from "./../assets/icons/check.webp";

// bedroom facility
import windowIcon from "./../assets/icons/window.webp";
import wardrobeIcon from "./../assets/icons/wardrobe.webp";
import socketIcon from "./../assets/icons/socket.webp";
import singleBedIcon from "./../assets/icons/single-bed-icon.webp";
import doubleBedIcon from "./../assets/icons/double-bed-icon.webp";
import move3dIcon from "./../assets/icons/move-3d.webp";

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

interface FacilityOptionProps {
    name: string;
    variant: "selectable" | "option";
    status?: string;
    currentValue?: string;
    onChangeFacilityHandler?: () => void;
}

interface FacilitySpecificationProps {
    name: string;
    value: string;
}

export function FacilityOption({ name, variant, status, currentValue, onChangeFacilityHandler }: FacilityOptionProps) {
    const currentStatus = name === currentValue && "checked";
    
    return (
        <article    className={`facility-option facility-option-${variant} facility-option-${currentValue ? currentStatus : status}`}
                    onClick={() => {
                        if (onChangeFacilityHandler) {
                            onChangeFacilityHandler();
                        }
                    }}>
            
            {
                name === "Single bed" || name === "Double bed" ? (
                    <img    className="facility-icon"
                            src={name === "Single bed" ? singleBedIcon : doubleBedIcon} />
                ) : (
                    <FacilityIcon name={name} />
                )
            }

            <h4 className="label-regular">
                { name }
            </h4>

            { (status === "available" && variant === "selectable" ) && <img className="check-icon" src={checkIcon} /> }
        </article>
    );
}

export function FacilitySpecification({ name, value }: FacilitySpecificationProps) {
    return (
        <article    className={`facility-option`}>
            <FacilitySpecificationIcon name={name} />

            <h4 className="label-regular">
                { name } { value }
            </h4>
        </article>
    );
}

function FacilityIcon({ name }: { name: string }) {
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

function FacilitySpecificationIcon({ name }: { name: string }) {
    const iconMap = {
        "Luas kamar": move3dIcon
    };
    
    return <img className="facility-icon" src={iconMap[name]} alt={name} />;
}