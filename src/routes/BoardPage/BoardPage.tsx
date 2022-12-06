import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GameCard } from "../../components/GameCard/GameCard";
import { Result } from "../../components/Result/Result";
import { PlayerBoard } from "../PlayerBoard/PlayerBoard";
import { IBoard } from "../../types";
import { IPokemon } from "../../types";
import clasess from "./BoardPage.module.css";
import { useSelector } from "react-redux";
import { selectPokemonsData } from "../../store/pokemons/pokemons";

const counterWin = (
  board: IBoard[],
  player1: IPokemon[],
  player2: IPokemon[]
) => {
  let playerCounter1: number = player1.length;
  let playerCounter2: number = player2.length;

  board.forEach((boardPosition: IBoard) => {
    if (boardPosition.card?.possession === "red") {
      playerCounter1++;
    }
    if (boardPosition.card?.possession === "blue") {
      playerCounter2++;
    }
  });
  return [playerCounter1, playerCounter2] as const;
};

const BoardPage = (): JSX.Element => {
  const pokemonsState = useSelector(selectPokemonsData);
  const [steps, setSteps] = useState<number>(0);
  const [board, setBoard] = useState<IBoard[]>([]);
  const [choiceCard, setChoiceCard] = useState<IPokemon | null>(null);
  const [playerOne, setPlayerOne] = useState<IPokemon[]>(() => {
    return Object.values(pokemonsState ?? {}).map((pokemon: IPokemon) => ({
      ...pokemon,
      possession: "blue",
    }));
  });
  const [playerTwo, setPlayerTwo] = useState<IPokemon[]>([]);

  const navigate = useNavigate();
  const convertData = Object.keys(pokemonsState ?? {});

  const getDataBoard = async () => {
    const boardResponse = await fetch(
      "https://reactmarathon-api.netlify.app/api/board"
    );
    const boardRequest = await boardResponse.json();

    setBoard(boardRequest.data);
  };
  const getDataPlayer = async () => {
    const playerTwoResponse = await fetch(
      "https://reactmarathon-api.netlify.app/api/create-player"
    );
    const playerTwoRequest = await playerTwoResponse.json();

    setPlayerTwo(() => {
      return playerTwoRequest.data.map((pokemon: IPokemon) => ({
        ...pokemon,
        possession: "red",
      }));
    });
  };

  useEffect(() => {
    getDataBoard();
    getDataPlayer();
  }, []);

  useEffect(() => {
    if (steps === 9) {
      const [count1, count2] = counterWin(board, playerOne, playerTwo);

      if (count1 > count2) {
        console.log("win...");
        <Result type="win" />;
      } else if (count1 < count2) {
        console.log("lose...");
        <Result type="lose" />;
      } else {
        console.log("draw...");
        <Result type="draw" />;
      }
    }
  }, [steps, board, playerOne, playerTwo]);

  if (convertData.length === 0) {
    navigate("/game", { replace: true });
  }

  const handleClickBoardSquare = async (position: number): Promise<void> => {
    if (choiceCard) {
      const params = {
        position,
        card: choiceCard,
        board,
      };
      const response = await fetch(
        "https://reactmarathon-api.netlify.app/api/players-turn",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        }
      );
      const request = await response.json();

      if (choiceCard?.player === 1) {
        setPlayerOne((prevState: IPokemon[]) =>
          prevState.filter((pokemon: IPokemon) => pokemon.id !== choiceCard.id)
        );
      }

      if (choiceCard?.player === 2) {
        setPlayerTwo((prevState: IPokemon[]) =>
          prevState.filter((pokemon: IPokemon) => pokemon.id !== choiceCard.id)
        );
      }
      setBoard(request.data);
      setSteps((prevCount: number) => prevCount + 1);
    }
  };

  return (
    <div className={clasess.root}>
      <div className={clasess.playerOne}>
        <PlayerBoard
          player={1}
          cards={playerOne}
          onClickCard={(card) => setChoiceCard(card)}
        />
      </div>
      <div className={clasess.board}>
        {board.map((square: IBoard) => (
          <div
            key={square.position}
            className={clasess.boardPlate}
            onClick={() =>
              !square.card && handleClickBoardSquare(square.position)
            }
          >
            {square.card && (
              <GameCard
                pokemon={square.card}
                {...square.card}
                isActive
                minimize
              />
            )}
          </div>
        ))}
      </div>
      <div className={clasess.playerTwo}>
        <PlayerBoard
          player={2}
          cards={playerTwo}
          onClickCard={(card) => setChoiceCard(card)}
        />
      </div>
    </div>
  );
};

export default BoardPage;
