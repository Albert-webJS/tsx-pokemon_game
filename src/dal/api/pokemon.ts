import { AxiosResponse } from "axios";
import { IFirebaseRequest } from "../../interfaces/IFirebaseRequest";
import { PokemonsType } from "../../service/IFirebase";

export default {
    async get() {
        const getStartingColectionCard = await fetch(
            "https://reactmarathon-api.herokuapp.com/api/pokemons/starter"
        );
        const request = await getStartingColectionCard.json();
        console.log("reauest: ", request);
        return request;
    },
    create(pokemons: PokemonsType[], response: AxiosResponse<IFirebaseRequest>) {
        console.log("pokemons create: ", pokemons);
        pokemons.forEach((pokemon: PokemonsType) => {
            console.log("pokemon: ", pokemon);
            fetch(
                `https://pokemon-card-4d341-default-rtdb.firebaseio.com/${response.data.localId}/pokemons.json?auth=${response.data.idToken}`,
                {
                    method: "POST",
                    body: JSON.stringify(pokemon),
                });
        });
    }
};