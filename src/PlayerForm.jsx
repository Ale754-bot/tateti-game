import { useState } from "react";
import { motion } from "framer-motion";

const PlayerForm = ({ setPlayers }) => {
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playerX && playerO) {
      setPlayers({ X: playerX, O: playerO });
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 bg-gray-800/60 backdrop-blur-md rounded-xl shadow-xl ring-1 ring-purple-500/40 w-full max-w-sm"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        className="text-center text-2xl font-bold text-pink-400 drop-shadow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        🚀 ¡Prepará tu partida!
      </motion.h2>

      <input
        type="text"
        placeholder="Jugador X"
        value={playerX}
        onChange={(e) => setPlayerX(e.target.value)}
        className="px-4 py-2 bg-gray-700 text-cyan-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400 transition-all"
      />

      <input
        type="text"
        placeholder="Jugador O"
        value={playerO}
        onChange={(e) => setPlayerO(e.target.value)}
        className="px-4 py-2 bg-gray-700 text-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-400 transition-all"
      />

      <motion.button
        type="submit"
        className="bg-indigo-500 text-white font-bold py-2 rounded-full hover:bg-indigo-600 shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Comenzar juego 💫
      </motion.button>
    </motion.form>
  );
};

export default PlayerForm;
