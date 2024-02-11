import React from "react";
import { Route, Routes } from "react-router-dom";
import Providers from "../Providers";

const Pokedex = React.lazy(() => import("../views/Pokedex"));
const PokemonProfile = React.lazy(() => import("../views/PokemonProfile"));
const PokemonByType = React.lazy(() => import ("../views/PokemonType"));
const FavoritePokemon = React.lazy(() => import('../views/PokemonByFavorite'));
const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <React.Suspense fallback={<div>Loading...</div>}>
          <Pokedex />
        </React.Suspense>
      }
    />
    <Route
      path="/pokemon/:pokemonName" // When using ":pokemonName" we are creating the parameter "pokemonName". But, at the same time, we are re-directing the user to the pokemon page.
      element={
        <React.Suspense fallback={<div>Loading...</div>}>
          <PokemonProfile />
        </React.Suspense>
      }
    />
    <Route
      path="/type/:typeName" // When using ":pokemonName" we are creating the parameter "pokemonName". But, at the same time, we are re-directing the user to the pokemon page.
      element={
        <React.Suspense fallback={<div>Loading...</div>}>
          <PokemonByType/>
        </React.Suspense>
      }
      />
      <Route
      path="/favorite" // When using ":pokemonName" we are creating the parameter "pokemonName". But, at the same time, we are re-directing the user to the pokemon page.
      element={
        <React.Suspense fallback={<div>Loading...</div>}>
          <FavoritePokemon/>
        </React.Suspense>
      }
      />
  </Routes>
);

export default AppRoutes;
