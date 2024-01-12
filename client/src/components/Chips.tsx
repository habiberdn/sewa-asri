interface Chips {
    label: string;
    state: boolean;
    variant: "active" | "passive" | "filter";
    onSelect?: () => void;
};

export function Chips({ label, state, variant, onSelect }:Chips) {
    return (
        <button className={`chips chips-${variant} chips-active-${state} label-regular`}

                onClick={() => {
                    if (onSelect) {
                        onSelect();
                    }
                }}>
                    
            { label }
        </button>
    );
}