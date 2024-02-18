import React from "react";
import PokemonList from "./PokemonList";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import useGetPokemonList from "../../hooks/useGetPokemonList";

jest.mock("../../hooks/useGetPokemonList", () => ({
    __esModule: true, // This is important to mock a module with default exports
    default: jest.fn(), // Mock the default export
  }));
  

describe("PokemonList", () => {
    beforeEach(() => {
        (useGetPokemonList as jest.Mock).mockReturnValue({ 
            pokemonList:[
                { pokemon: { name: "Pikachu" } },
                { pokemon: { name: "Charmander" } },
            ],
            goToNextPage: jest.fn(),
            goToPreviousPage: jest.fn(),
        });
    });

    afterEach(() => jest.clearAllMocks());

    it("should render a list of Pokemon Cards", () => {
        const { queryAllByTestId } = renderWithProviders(<PokemonList />);
        expect(queryAllByTestId("pokemon-card")).toHaveLength(2); // We declared just two pokemons on the list so we should have just to cards rendered.
    });

    it("should call the goToNextPage function when the next button is clicked", () => {
        const { getByText } = renderWithProviders(<PokemonList/>);
        getByText("Next").click();
        expect(useGetPokemonList().goToNextPage).toHaveBeenCalledTimes(1);
    });

    it("should call the goToPreviousPage function when the previous button is clicked", () => {
        const { getByText } = renderWithProviders(<PokemonList/>);
        getByText("Previous").click();
        expect(useGetPokemonList().goToPreviousPage).toHaveBeenCalledTimes(1);
    });
})