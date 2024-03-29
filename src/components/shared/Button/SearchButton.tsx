import React from "react";
import { useSearchStore } from "../../../store/useSearchStore";

const SearchButton = () => {
    const openModal = useSearchStore((state) => state.openModal);

    return (
        <button data-testid='search-button'onClick={openModal}>Search</button>
    )
}

export default SearchButton;