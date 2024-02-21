import React, { useState } from "react";
import Modal from "react-modal";
import { useGetPokemon } from "../../hooks/useGetPokemon";
import { useSearchStore } from "../../store/useSearchStore";
import { PokemonCard } from "../PokemonCard/PokemonCard";


const SearchModal: React.FC = () => {
    const { isOpen, closeModal, filter, setFilter, currentSearch, setCurrentSearch, resetSearch } = useSearchStore(state => ({
        isOpen: state.isOpen,
        closeModal: state.closeModal,
        filter: state.filter,
        setFilter: state.setFilter,
        currentSearch: state.currentSearch,
        setCurrentSearch: state.setCurrentSearch,
        resetSearch: state.resetSearch
    }));
 
    const { pokemonData } = useGetPokemon(currentSearch); // This is to get the data from the pokemons since we are going to be looking for them by "name"

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setFilter(event.target.value);

    const onClickSearch = () => setCurrentSearch(filter.toLowerCase());

    const handleCloseModal = () => {
        resetSearch();
        closeModal();
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={handleCloseModal} className={"w-6/12 h-4/12 bg-white mx-auto p-5 mt-5 flex flex-col gap-5 items-center shadow-lg rounded-lg"}>
            <h6>Search</h6>
            <input
                type="text"
                value={filter}
                onChange={handleInputChange}
                className="border border-green-500 p-2"
                data-testid="search-input"
                />
                <button onClick={onClickSearch} data-testid="search-submit-button">Search</button>
            {pokemonData?.id && <PokemonCard pokemonId={pokemonData.id}/>}
        </Modal>
    );
};

export default SearchModal;