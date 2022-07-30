import { useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FirebaseContext } from "../context/firebaseContext";
import { PokemonsType } from "../service/IFirebase";
import { selectPokemonsData, getPokemonsAsync } from "../store/pokemons/pokemons";


export const useGamePage = () => {
    const firebase = useContext(FirebaseContext);
    const [pokemons, setPokemons] = useState<PokemonsType>({});
    const [selectedPokemons, setSelectedPokemons] = useState<PokemonsType>({});
    const pokemonsRedux = useSelector(selectPokemonsData);
    const dispatch = useDispatch();

    useEffect(() => {
        getPokemonsAsync(dispatch);
    }, [dispatch]);

    useEffect(() => {
        firebase?.initPokemonSoket((data) => setPokemons(data));
    }, [firebase]);

    const handleSelectedPokemons = (pokemons: PokemonsType): void => {
        setPokemons(() => {
            return {
                ...pokemons,
            };
        });
        setSelectedPokemons(
            Object.entries(pokemons).reduce((acc, [key, value]) => {
                if (value.selected) acc[key] = value;
                return acc;
            }, {} as PokemonsType)
        );
    };
    return { pokemons, selectedPokemons, pokemonsRedux, handleSelectedPokemons };
};