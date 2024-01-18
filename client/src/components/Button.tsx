import spinner from "./../assets/icons/spinner.png";

type ButtonProps = {
    size: "small" | "medium" | "large";
    behavior?: "hug-content" | "fill-container";
    state: "active" | "disabled";
    variant: "primary" | "secondary" | "tertiary" | "destructive";
    icon?: "default";
    label: string;
    onClickHandler?: () => void;
    isLoading?: boolean;
}

export function Button({ 
            behavior = "hug-content",
            size, 
            state, 
            variant, 
            label, 
            onClickHandler,
            isLoading = false
        }:ButtonProps) { 
    
    let buttonVariant;

    if (state === "active") {
        buttonVariant = `${variant}`;
    } else {
        buttonVariant = `${variant}-disabled`;
    }

    return (
        <button    onClick={() => {
                    if ((onClickHandler && state === "active") && !isLoading) {
                        onClickHandler();
                    }
                }}
                
                className={`button button-size-${size} button-${buttonVariant} button-behavior-${behavior} label-medium`}>
                
                <p>
                    { label }
                </p>
                
                <img    src={spinner}
                        className={`spinner spinner-loading-${isLoading}`} />

        </button>
    );
}