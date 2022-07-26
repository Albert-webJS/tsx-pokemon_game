import { IPokemon } from "../../../../../../interfaces/IPokemon";

export interface PlayerBoardProps {
    player: number;
    cards: IPokemon[];
    onClickCard(card: IPokemon): void;
}