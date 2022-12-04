import firebase from "firebase/app";
import 'firebase/database';
import { IPokemon } from "../types";
import firebaseConfig from '../assets/firebaseconfig.json';
import { IFirebase } from './IFirebase';
import { PokemonsType } from './IFirebase';

firebase.initializeApp(firebaseConfig);

class Firebase implements IFirebase {
    private static instance: Firebase;
    private fire: typeof firebase;
    private database: firebase.database.Database;
    private constructor() {
        this.fire = firebase;
        this.database = this.fire.database();
    }

    public static getInstance(): Firebase {
        if (!Firebase.instance) {
            Firebase.instance = new Firebase();
        }
        return Firebase.instance;
    }

    initPokemonSoket(cb: (data: PokemonsType) => void): void {
        this.database.ref("pokemons").on("value", (snapshot) => {
            cb(snapshot.val());
        });
    }

    offPokemonSoket() {
        this.database.ref("pokemons").off();
    }
    
    async getPokemonsOnce(): Promise<PokemonsType> {
        const snapshot = await this.database.ref("pokemons").once("value");
        return snapshot.val();
    }

    postPokemon(key: string, pokemon: IPokemon): void {
        this.database.ref(`pokemons/${key}`).set(pokemon);
    }

    addPokemon(pokemon: IPokemon): void {
        const newKey = this.database.ref().child("pokemons").push().key;
        this.database.ref("pokemons/" + newKey).set(pokemon);
    }
}

export default Firebase;