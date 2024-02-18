import React from "react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import useGetPokemonListByType  from "../../hooks/useGetPokemonListByType";
import {PokemonByTypeList} from "./PokemonListByType";
import { useParams } from "react-router";

jest.mock("react-router", () => ({
    useParams: jest.fn(),
    useNavigate: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // Use the actual implementations of other exports
    BrowserRouter: ({ children }: {children: React.ReactNode}) => <div>{children}</div>, // Mock BrowserRouter as a simple div wrapper
  }));

jest.mock("../../hooks/useGetPokemonListByType", () => jest.fn());

describe("PokemonByTypeList", () => {
    beforeEach(() => {
        (useParams as jest.Mock).mockReturnValue({ typeName: "fire" });
        (useGetPokemonListByType as jest.Mock).mockReturnValue({
            pokemonList: [
                { pokemon: { name: "Charmander" } },
                { pokemon: { name: "Charizard" } },
            ],
        });
    });

    afterEach(() => jest.clearAllMocks());

    it("should render a list of PokemonCards", () => {
        const { queryAllByTestId } = renderWithProviders(<PokemonByTypeList/>);
        expect(queryAllByTestId("pokemon-card")).toHaveLength(2);
    })
});