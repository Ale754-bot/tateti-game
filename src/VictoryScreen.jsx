import { motion } from "framer-motion";

const VictoryScreen = ({ winnerName, onRestart }) => {
  const isDraw = winnerName === "¡Empate!";

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white z-10"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Título principal */}
      <motion.h1
        className={`text-4xl font-extrabold mb-4 tracking-wide drop-shadow-xl text-center ${
          isDraw ? "text-gray-300" : "text-pink-400"
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {isDraw ? "🌀 PARTIDA EMPATADA" : "🚀 ¡PALIZA PAPÁ!"}
      </motion.h1>

      {/* Mensaje de ganador o empate */}
      <motion.p
        className={`text-xl font-bold text-center mb-8 ${
          isDraw ? "text-gray-400" : "text-cyan-300"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {isDraw
          ? "Nadie logró dominar el tablero... ¡pero fue una gran batalla!"
          : `${winnerName.toUpperCase()}`}
      </motion.p>

      {/* Botón de reinicio */}
      <motion.button
        onClick={onRestart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`font-semibold px-6 py-2 rounded-full shadow-lg ${
          isDraw ? "bg-gray-500 hover:bg-gray-600" : "bg-pink-500 hover:bg-pink-600"
        }`}
      >
        Jugar otra vez 🔄
      </motion.button>
    </motion.div>
  );
};

export default VictoryScreen;
