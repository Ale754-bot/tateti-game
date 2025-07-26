import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GameBoard = ({ players, scores, setScores, setWinner }) => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");

  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  useEffect(() => {
    let hasWinner = false;

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        setScores(prev => ({ ...prev, [board[a]]: prev[board[a]] + 1 }));
        hasWinner = true;
        break;
      }
    }

    if (!hasWinner && board.every(cell => cell !== "")) {
      setWinner("draw");
    }
  }, [board]);

  const handleClick = (i) => {
    if (!board[i]) {
      const newBoard = [...board];
      newBoard[i] = turn;
      setBoard(newBoard);
      setTurn(turn === "X" ? "O" : "X");
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center w-full px-4 sm:px-6 p-6 gap-6 max-w-5xl rounded-xl backdrop-blur-md"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundImage:
          'radial-gradient(circle at center, rgba(29, 31, 32, 0.99), transparent)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'screen',
        boxShadow: '0 0 60px rgba(0,255,255,0.3), inset 0 0 20px rgba(255, 0, 149, 0.15)',
        borderRadius: '1rem',
      }}
    >
      {/* Logo arriba */}
      <img
        src="/TATETI.png"
        alt="Logo U-MA-PIN"
        className="w-32 sm:w-40 animate-pulse drop-shadow-[0_0_14px_rgba(255,0,150,0.5)] mb-2"
      />

      {/* Panel adaptable */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 w-full mt-4">
        <div className="flex flex-col items-center gap-3">
          <motion.div
            className="text-base font-semibold text-white tracking-wide animate-pulse mb-1"
            transition={{ repeat: Infinity, duration: 1 }}
          >
            🔹 Turno de: {players[turn]}
          </motion.div>

          {/* Tablero responsive */}
          <div className="grid grid-cols-3 gap-2 aspect-square w-full max-w-xs sm:max-w-md p-4 sm:p-8 mx-auto">
            {board.map((cell, i) => (
              <motion.div
                key={i}
                onClick={() => handleClick(i)}
                className={`w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-300
                  bg-gradient-to-br from-gray-900 via-cyan-900 to-purple-900
                  border-4 border-cyan-400/60 ring-2 ring-pink-400/40
                  hover:scale-[1.07] hover:ring-4 hover:ring-cyan-300
                  shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-pink-500/50`}
                whileHover={{ scale: 1.09 }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <AnimatePresence>
                  {cell && (
                    <motion.span
                      key={cell + i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1.3, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                      className={`text-5xl ${
                        cell === "X"
                          ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]"
                          : "text-pink-400 drop-shadow-[0_0_10px_rgba(255,0,150,0.7)]"
                      }`}
                    >
                      {cell}
                    </motion.span>
                  )}
                  {!cell && <span className="text-cyan-200/20">•</span>}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GameBoard;
