import { IPokemon } from "../../../../interfaces/IPokemon";
import { PokemonsType } from "../../../../service/IFirebase";

export interface StartPageProps {
    onSelected: (pokemon: IPokemon, key: string ) => void;
    selectedState: PokemonsType;
}