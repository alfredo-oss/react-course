import React, { useMemo } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useFavoriteStore } from "../../../store/useFavoriteStore";

interface FavoriteButttonProps {
  pokemonId: number;
}

export const FavoriteButtton: React.FC<FavoriteButttonProps> = ({
  pokemonId,
}) => {
  const [favorites, addFavorite, deleteFavorite] = useFavoriteStore((state) => [
    state.favorites,
    state.addFavorite,
    state.deleteFavorite,
  ]);

  const isFavorite = useMemo(
    () => favorites.includes(pokemonId.toString()),
    [favorites, pokemonId]
  );

  const onClick = () => {
    const idToModify = pokemonId.toString();
    isFavorite ? deleteFavorite(idToModify) : addFavorite(idToModify);
  };

  return (
    <button className="bg-white p-1 rounded-full absolute top-2 left-2" onClick={onClick}>
      {isFavorite ? <FaHeart fill="#EF4444" /> : <FaRegHeart fill="#EF4444" />}
    </button>
  );
};

//The adition of 'absolute' when defining the className is really important because it sets the button just in the card of the pokemon
