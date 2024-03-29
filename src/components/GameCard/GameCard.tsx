import { ReactNode } from "react";
import { IBoard } from "../../types/";
import { IPokemon } from "../../types/Pokemon";

import classes from "./GameCard.module.css";
import cn from "classnames";

interface GameCardProps {
    key?: number | string;
    pokemon: IPokemon;
    children?: ReactNode;
    onClickCard?: (id: number) => void;
    className?: string;
    isActive?: boolean;
    minimize?: boolean;
    isSelected?: boolean;
    square?: IBoard
    // position?: number;
    // card?: Pokemons
}

export const GameCard = ({
  pokemon: { values, name, id, type, img, possession },
  minimize,
  className,
  isActive,
  isSelected,
  onClickCard,
}: GameCardProps): JSX.Element => {
  const handleClick = (): void => {
    onClickCard && onClickCard(id);
  };
  return (
    <div
      className={cn(className, classes.pokemonCard, {
        [classes.active]: isActive,
        [classes.selected]: isSelected,
      })}
      onClick={handleClick}
    >
      <div className={classes.cardFront}>
        <div className={cn(classes.wrap, classes.front)}>
          <div
            className={cn(
              classes.pokemon,
              classes[type],
              possession ? classes[possession] : null
            )}
          >
            <div className={classes.values}>
              <div className={cn(classes.count, classes.top)}>{values.top}</div>
              <div className={cn(classes.count, classes.right)}>
                {values.right}
              </div>
              <div className={cn(classes.count, classes.bottom)}>
                {values.bottom}
              </div>
              <div className={cn(classes.count, classes.left)}>
                {values.left}
              </div>
            </div>
            <div className={classes.imgContainer}>
              <img src={img} alt={name} />
            </div>
            {!minimize && (
              <div className={classes.info}>
                <span className={classes.number}>#{id}</span>
                <h3 className={classes.name}>{name}</h3>
                <small className={classes.type}>
                  Type: <span>{type}</span>
                </small>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={classes.cardBack}>
        <div className={cn(classes.wrap, classes.back)} />
      </div>
    </div>
  );
};
