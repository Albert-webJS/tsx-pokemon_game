import { ReactNode } from "react";
import { IBoard } from "../../interfaces/IBoard";
import { IPokemon } from "../../interfaces/IPokemon";


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


