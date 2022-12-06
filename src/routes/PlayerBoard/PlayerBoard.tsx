import { useState } from "react";
import { getUniqId } from "../../utils";
import { GameCard } from "../../components";
import { IPokemon } from "../../types";

import cn from "classnames";
import clasess from "./PlayerBoard.module.css";


export interface PlayerBoardProps {
    player: number;
    cards: IPokemon[];
    onClickCard(card: IPokemon): void;
}

export const PlayerBoard = ({
  player,
  cards,
  onClickCard,
}: PlayerBoardProps): JSX.Element => {
  const [isSelected, setSelected] = useState<number | null>(null);
  return (
    <>
      {cards.map((pokemon: IPokemon) => (
        <div
          key={getUniqId()}
          className={cn(clasess.cardBoard, {
            [clasess.selected]: isSelected === pokemon.id,
          })}
          onClick={() => {
            setSelected(pokemon.id);
            onClickCard && onClickCard({
                ...pokemon,
                player: player,
            });
          }}
        >
          <GameCard
            pokemon={pokemon}
            className={clasess.card}
            minimize
            isActive
          />
        </div>
      ))}
    </>
  );
};
