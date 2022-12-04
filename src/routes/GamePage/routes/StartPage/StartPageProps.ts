import { IPokemon } from "../../../../types";
import { PokemonsType } from "../../../../service/IFirebase";

export interface StartPageProps {
    onSelected: (pokemon: IPokemon, key: string ) => void;
    selectedState: PokemonsType;
}