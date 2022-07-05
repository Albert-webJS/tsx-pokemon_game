import { ReactNode } from "react";
import { Pokemon } from "../../interfaces/Pokemon";


export interface GameCardProps {
    key: number | string;
    pokemon: Pokemon;
    children?: ReactNode;
    onClickCard?: (id: number) => void;
    className?: string;
    isActive: boolean;
    minimize?: boolean;
    isSelected?: boolean;
    
}


