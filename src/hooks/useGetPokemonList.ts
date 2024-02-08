import { useQuery } from "@tanstack/react-query";
import { useState } from 'react';
import { BASE_URL } from "../constants/url";
import { PokemonListItem } from "../interfaces/PokemonListItem";


interface PokemonList {
    count: number;             // This is part of the rate limiter
    next: string | null;       // This returns what is the next url to make the request that follows the amount of pokemons that you retrieved
    previous: string | null;   // This returns what was the previous url where you made the previous request
    results: PokemonListItem[];  // This returns the results of type Pokemon
}

const useGetPokemonList = () => {
    const [url, setUrl] = useState(`${BASE_URL}pokemon?limit=36`);

    const { data, isLoading, error } = useQuery<PokemonList>({
        queryKey: ['pokemonList', url],
        queryFn: async () => {
            const response = await fetch(url);
            if (!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
    });

    const goToNextPage = () => {
        if (data?.next) {
            setUrl(data.next);
        }
    };

    const goToPreviousPage = () => {
        if (data?.previous) {
            setUrl(data.previous);  
        }
    };
    // Now we need to return all the information back from our hook
    return { 
        pokemonList: data?.results ?? [], // If there is any, return the data. If not, then return an empty array.
        isLoading,                        // Return the loading response if still awaiting for the fetch
        error: error?.message ?? null,    // If there are any errors, return the message. If not, then do not return anything.
        goToNextPage: data?.next ? goToNextPage : undefined, // Function to go to next page. This function will serve as logic for creating buttons that will allow us to iterate over the pages of information that are being retrieved from the PokeAPI. Since we cant iterate forever there must be a ternary condition.
        goToPreviousPage:  data?.previous ? goToPreviousPage : undefined// Function to go to previous page
    };
};

export default useGetPokemonList;