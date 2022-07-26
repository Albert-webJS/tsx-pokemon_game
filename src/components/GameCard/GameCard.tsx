import { GameCardProps } from "./GameCard.props";
import clasess from "./GameCard.module.css";
import cn from "classnames";

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
      className={cn(className, clasess.pokemonCard, {
        [clasess.active]: isActive,
        [clasess.selected]: isSelected,
      })}
      onClick={handleClick}
    >
      <div className={clasess.cardFront}>
        <div className={cn(clasess.wrap, clasess.front)}>
          <div
            className={cn(
              clasess.pokemon,
              clasess[type],
              possession ? clasess[possession] : null
            )}
          >
            <div className={clasess.values}>
              <div className={cn(clasess.count, clasess.top)}>{values.top}</div>
              <div className={cn(clasess.count, clasess.right)}>
                {values.right}
              </div>
              <div className={cn(clasess.count, clasess.bottom)}>
                {values.bottom}
              </div>
              <div className={cn(clasess.count, clasess.left)}>
                {values.left}
              </div>
            </div>
            <div className={clasess.imgContainer}>
              <img src={img} alt={name} />
            </div>
            {!minimize && (
              <div className={clasess.info}>
                <span className={clasess.number}>#{id}</span>
                <h3 className={clasess.name}>{name}</h3>
                <small className={clasess.type}>
                  Type: <span>{type}</span>
                </small>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={clasess.cardBack}>
        <div className={cn(clasess.wrap, clasess.back)} />
      </div>
    </div>
  );
};
