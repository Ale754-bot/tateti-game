import { useState } from "react";
import StartScreen from "./StartScreen";
import GameBoard from "./GameBoard";
import Scoreboard from "./Scoreboard";
import VictoryScreen from "./VictoryScreen";

export default function App() {
  const [players, setPlayers] = useState(null);
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [winner, setWinner] = useState(null);

  const handleRestartRound = () => {
    setWinner(null); // Solo reinicia la ronda
  };

  return (
    <div
      className="min-h-screen relative flex flex-col items-center justify-center text-white overflow-hidden px-4"
      style={{
        backgroundImage: `
          radial-gradient(circle at center, rgba(1, 69, 156, 0.79), transparent),
          url(/bg.jpg)
        `,
        backgroundColor: "#0b0c2c",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "screen",
        boxShadow: "inset 0 0 80px rgba(0,255,255,0.1)",
        backdropFilter: "blur(6px)",
      }}
    >
      {!players ? (
        <StartScreen onStart={setPlayers} />
      ) : winner ? (
        <VictoryScreen
  winnerName={
    winner === "draw"
      ? "¡Empate!"
      : `${players[winner].toUpperCase()} GANÓ LA PARTIDA`
  }
  onRestart={handleRestartRound}
/>


      ) : (
<div className="flex flex-row items-center justify-center gap-10 w-full max-w-3xl mt-6">
          {/* Scoreboard izquierda - Jugador X */}
          <Scoreboard
            players={{ X: players.X, O: "" }}
            scores={{ X: scores.X, O: 0 }}
          />

          {/* Tablero */}
          <GameBoard
            players={players}
            scores={scores}
            setScores={setScores}
            setWinner={setWinner}
          />

          {/* Scoreboard derecha - Jugador O */}
          <Scoreboard
            players={{ X: "", O: players.O }}
            scores={{ X: 0, O: scores.O }}
          />
        </div>
      )}
    </div>
  );
}
