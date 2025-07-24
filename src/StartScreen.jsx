import { useState } from "react";
import { motion } from "framer-motion";

export default function StartScreen({ onStart }) {
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playerX && playerO) {
      onStart({ X: playerX, O: playerO });
    }
  };

  return (
    <motion.div
      className="w-full max-w-md p-6 rounded-xl text-white backdrop-blur-md
        bg-gray-900/70 shadow-[0_0_60px_rgba(0,255,255,0.2)] ring-4 ring-pink-500/40"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* LOGO U-MA-PIN */}
      <img
        src="/public/TATETI.png"
        alt="Logo U-MA-PIN"
        className="w-48 mx-auto mb-6 drop-shadow-[0_0_16px_rgba(0,255,255,0.4)] animate-pulse"
      />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nombre jugador X"
          value={playerX}
          onChange={(e) => setPlayerX(e.target.value)}
          className="px-4 py-2 rounded-md bg-gray-800 text-cyan-300 placeholder-cyan-500 border border-cyan-400 focus:ring-2 focus:ring-pink-400/60 outline-none shadow-inner transition-all"
        />
        <input
          type="text"
          placeholder="Nombre jugador O"
          value={playerO}
          onChange={(e) => setPlayerO(e.target.value)}
          className="px-4 py-2 rounded-md bg-gray-800 text-pink-300 placeholder-pink-400 border border-pink-400 focus:ring-2 focus:ring-cyan-400/60 outline-none shadow-inner transition-all"
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-6 py-2 rounded-full font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-pink-500/40 transition-all"
        >
          Comenzar partida
        </motion.button>
      </form>
    </motion.div>
  );
}
