import { ReactNode } from "react";
import { IBoard } from "../../types/";
import { IPokemon } from "../../types/Pokemon";


export interface GameCardProps {
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
    // card?: Pokemon;s
    
}


