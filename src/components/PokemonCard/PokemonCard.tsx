import React, { useMemo } from "react";
import { useNavigate } from "react-router";
import { useGetPokemon } from "../../hooks/useGetPokemon";
import { PokemonListItem } from "../../interfaces/PokemonListItem";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { getMainPokemonType } from "../../utils/getMainPokemonType";
import { FavoriteButtton } from "../shared/Button/FavoriteButton";
import { Label } from "../shared/Label/Label";

interface PokemonCardProps {
  pokemon?: PokemonListItem;
  pokemonId?: number;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  pokemonId,
}) => {
  const { pokemonData } = useGetPokemon(pokemon?.name, pokemonId);
  const mainType = useMemo(
    () => pokemonData && getMainPokemonType(pokemonData),
    [pokemonData]
  );

  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/pokemon/${pokemonData?.name}`);
  }

  return (
    <div
      className={`${mainType}-background relative w-56 h-56 rounded-lg shadow-lg p-4 cursor-pointer`}
    >
      <FavoriteButtton pokemonId={pokemonData?.id ?? 0}/>
      <div className="flex flex-col items-center mx-auto" onClick={onClick}>
        <Label>{pokemonData?.name ? capitalizeFirstLetter(pokemonData?.name): ''}</Label>
        <img
          className="mx-auto w-40 h-40"
          src={pokemonData?.sprites?.front_default}
          alt={pokemonData?.name ?? ""}
        />
      </div>
    </div>
  );
};
