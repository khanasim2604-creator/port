import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-4 bg-pink-50">
      <motion.h1
        className="text-5xl font-bold text-pink-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Md Asim
      </motion.h1>

      <motion.p
        className="mt-4 text-gray-600 text-lg max-w-xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        UI/UX Designer • Cute • Playful • Stylish
      </motion.p>

      <div className="mt-10 w-full max-w-xl space-y-4">
        {["Realy Concept — Real Estate App",
          "Petto — Cute Pet Care App",
          "Flowly — Productivity Dashboard"].map((p,i)=>(
          <motion.div
            key={i}
            className="p-6 bg-white rounded-2xl shadow-lg border border-pink-100"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2*i }}
          >
            {p}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
