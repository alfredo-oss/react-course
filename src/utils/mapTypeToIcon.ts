import { PokemonTypes } from "../constants/types";
import { PokemonType } from "../interfaces/PokemonData";
import normal from '../assets/normal.svg';
import fighting from '../assets/fighting.svg';
import flying from '../assets/flying.svg';
import poison from '../assets/poison.svg';
import ground from '../assets/ground.svg';
import rock from '../assets/rock.svg';
import bug from '../assets/bug.svg';
import ghost from '../assets/ghost.svg';
import steel from '../assets/steel.svg';
import fire from '../assets/fire.svg';
import water from '../assets/water.svg';
import grass from '../assets/grass.svg';
import electric from '../assets/electric.svg';
import psychic from '../assets/psychic.svg';
import ice from '../assets/ice.svg';
import dragon from '../assets/dragon.svg';
import dark from '../assets/dark.svg';
import fairy from '../assets/fairy.svg';




export const mapTypeToIcon = (type: PokemonType) => {
    switch (type.type.name) {
        case PokemonTypes.normal:
            return normal;
        case PokemonTypes.fighting:
            return fighting;
        case PokemonTypes.flying:
            return flying;
        case PokemonTypes.poison:
            return poison;
        case PokemonTypes.ground:
            return ground;
        case PokemonTypes.rock:
            return rock;
        case PokemonTypes.bug:
            return bug;
        case PokemonTypes.ghost:
            return ghost;
        case PokemonTypes.steel:
            return steel;
        case PokemonTypes.fire:
            return fire;
        case PokemonTypes.water:
            return water;
        case PokemonTypes.grass:
            return grass;
        case PokemonTypes.electric:
            return electric;
        case PokemonTypes.psychic:
            return psychic;
        case PokemonTypes.ice:
            return ice;
        case PokemonTypes.dragon:
            return dragon;
        case PokemonTypes.dark:
            return dark;
        case PokemonTypes.fairy:
            return fairy;
        default:
            return "";                                                                            
    }
};