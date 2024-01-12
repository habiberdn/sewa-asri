interface SearchBar {
    placeholder: string;
    onInputHandler?: (text: string) => void;
}

export function SearchBar({ placeholder, onInputHandler }: SearchBar) {
    return (
        <input  onChange={(event) => {
                    if(onInputHandler) {
                        const text = event.target.value;
                        onInputHandler(text);
                    }
                }} 
                className="search-bar label-regular"
                type="text"
                placeholder={placeholder}
                />
    );
}