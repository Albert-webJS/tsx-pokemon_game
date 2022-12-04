interface Stats {
    hp: number;
    attack: number;
    defense: number;
    "special-attack": number;
    "special-defense": number;
    speed: number;
}

interface Values {
    top: number | string;
    right: number | string;
    bottom: number | string;
    left: number | string;
}

export interface IPokemon {
    player?: number
    abilities?: string[];
    possession?: string;
    stats?: Stats;
    type: string;
    img: string;
    name: string;
    base_experience?: number;
    height?: number;
    id: number;
    values: Values;
    selected?: boolean
}

