import { jest } from '@jest/globals'; // Import jest for type assertions
import React from 'react';
import { renderWithProviders } from '../../testUtils/renderWithProviders';
import { PokemonSprites } from './PokemonSprites';
import { screen } from '@testing-library/react';
import { useGetPokemon } from '../../hooks/useGetPokemon';

// Mock the useGetPokemon hook
jest.mock('../../hooks/useGetPokemon');

// Here we explicitly cast the mocked useGetPokemon to jest.MockedFunction to inform TypeScript about its type
const mockedUseGetPokemon = useGetPokemon as jest.MockedFunction<typeof useGetPokemon>;

describe('PokemonSprites', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Clear mocks after each test
    });

    it('should render all four pokemon sprites', () => {
        // Use the mocked function with correct TypeScript typing
        mockedUseGetPokemon.mockReturnValue({
            pokemonData: {
                id: 25, // Pikachu's National Pokedex number, for example
                name: 'Pikachu',
                height: 4, // Example height in decimetres (10cm per unit)
                weight: 60, // Example weight in hectograms (100g per unit)
                sprites: {
                    front_default: 'front_default',
                    back_default: 'back_default',
                    front_shiny: 'front_shiny',
                    back_shiny: 'back_shiny',
                },
                types: [
                    {
                        slot: 1,
                        type: {
                            name: 'electric',
                            url: 'https://pokeapi.co/api/v2/type/13/' // Example URL for the electric type
                        }
                    }
                ]
            },
            isLoading: false,
            error: null,
        });

        renderWithProviders(<PokemonSprites />);

        const frontDefaultSprite = screen.getByAltText('Pikachu front default');
        expect(frontDefaultSprite).toBeInTheDocument();
        expect(frontDefaultSprite).toHaveAttribute('src', 'front_default');

        const backDefaultSprite = screen.getByAltText('Pikachu back default');
        expect(backDefaultSprite).toBeInTheDocument();
        expect(backDefaultSprite).toHaveAttribute('src', 'back_default');

        const frontShinySprite = screen.getByAltText('Pikachu front shiny');
        expect(frontShinySprite).toBeInTheDocument();
        expect(frontShinySprite).toHaveAttribute('src', 'front_shiny');

        const backShinySprite = screen.getByAltText('Pikachu back shiny');
        expect(backShinySprite).toBeInTheDocument();
        expect(backShinySprite).toHaveAttribute('src', 'back_shiny');
    });

    it('should render no sections if sprites are undefined', () => {
        // Adjust mock for the undefined sprites test case
        mockedUseGetPokemon.mockReturnValue({
            pokemonData: undefined, // Simulate undefined pokemonData for this test
            isLoading: false,
            error: null,
        });

        renderWithProviders(<PokemonSprites />);

        expect(screen.queryByAltText('Pikachu front default')).not.toBeInTheDocument();
        expect(screen.queryByAltText('Pikachu back default')).not.toBeInTheDocument();
        expect(screen.queryByAltText('Pikachu front shiny')).not.toBeInTheDocument();
        expect(screen.queryByAltText('Pikachu back shiny')).not.toBeInTheDocument();
    });
});
