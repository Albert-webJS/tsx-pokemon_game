import { IPokemon } from "../../../../../../types";

export interface PlayerBoardProps {
    player: number;
    cards: IPokemon[];
    onClickCard(card: IPokemon): void;
}