import { motion } from "framer-motion";

const Scoreboard = ({ players, scores }) => {
  const panelStyle =
    "flex flex-col items-center px-4 py-3 w-40 rounded-xl bg-gray-800/50 backdrop-blur-md shadow-inner ring-1";

  const isX = players.X && !players.O;
  const isO = players.O && !players.X;

  return (
    <motion.div
      className="text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isX && (
        <motion.div
          className={`${panelStyle} ring-cyan-400/60`}
          whileHover={{ scale: 1.03 }}
        >
          <div className="text-sm tracking-wide text-cyan-300">Jugador X</div>
          <div className="text-xl font-extrabold text-cyan-400">
            {players.X}
          </div>
          <div className="mt-1 text-lg font-bold text-cyan-300">
            🧠 Puntos: {scores.X}
          </div>
        </motion.div>
      )}

      {isO && (
        <motion.div
          className={`${panelStyle} ring-pink-400/60`}
          whileHover={{ scale: 1.03 }}
        >
          <div className="text-sm tracking-wide text-pink-300">Jugador O</div>
          <div className="text-xl font-extrabold text-pink-400">
            {players.O}
          </div>
          <div className="mt-1 text-lg font-bold text-pink-300">
            🧠 Puntos: {scores.O}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Scoreboard;
