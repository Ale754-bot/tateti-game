import { motion } from "framer-motion";
import GameBoard from "./GameBoard";

const Scoreboard = ({ players, scores }) => {
  const panelStyle =
    "flex flex-col items-center px-4 py-3 w-32 sm:w-40 rounded-xl bg-gray-800/50 backdrop-blur-md shadow-inner ring-1";

  const isX = players.X && !players.O;
  const isO = players.O && !players.X;

  return (
    <motion.div
      layout
      className="flex flex-col lg:flex-col lg:items-end items-center gap-4 text-white w-full lg:w-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isX && (
        <motion.div
          className={`${panelStyle} ring-cyan-400/60`}
          whileHover={{ scale: 1.03 }}
        >
          <div className="text-xs sm:text-sm tracking-wide text-cyan-300">Jugador X</div>
          <div className="text-lg sm:text-xl font-extrabold text-cyan-400">{players.X}</div>
          <div className="mt-1 text-base sm:text-lg font-bold text-cyan-300">
            🧠 Puntos: {scores.X}
          </div>
        </motion.div>
      )}

      {isO && (
        <motion.div
          className={`${panelStyle} ring-pink-400/60`}
          whileHover={{ scale: 1.03 }}
        >
          <div className="text-xs sm:text-sm tracking-wide text-pink-300">Jugador O</div>
          <div className="text-lg sm:text-xl font-extrabold text-pink-400">{players.O}</div>
          <div className="mt-1 text-base sm:text-lg font-bold text-pink-300">
            🧠 Puntos: {scores.O}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const GameSection = ({ players, scores }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-start px-4 py-6">
      <GameBoard />
      <Scoreboard players={players} scores={scores} />
    </div>
  );
};

export default GameSection;
