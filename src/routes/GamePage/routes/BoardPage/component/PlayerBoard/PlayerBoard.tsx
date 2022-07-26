import { useState } from "react";
import { getUniqId } from "../../../../../../utils/uniqId";
import { PlayerBoardProps } from "./PlayerBoard.props";
import { GameCard } from "../../../../../../components";
import { IPokemon } from "../../../../../../interfaces/IPokemon";

import cn from "classnames";
import clasess from "./PlayerBoard.module.css";

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
