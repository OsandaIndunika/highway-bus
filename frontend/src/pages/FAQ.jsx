import React, { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { questions } from "../../constants";

function FAQ({ theme, setTheme }) {
  const [activeQuestion, setActiveQuestion] = useState(null);

  return (
    <div
      className={`flex flex-col py-10 lg:py-20 ${
        theme === "light" ? "bg-cyan-500" : "bg-white"
      }`}
    >
      <div className="flex-grow flex justify-center items-center">
        <div
          className={`w-[89%] m-auto max-w-[1400px] ${
            theme === "light" ? "bg-gray-300" : "bg-white"
          } p-8 rounded-lg shadow-2xl`}
        >
          <h2
            className={`text-2xl mb-6 font-semibold ${
              theme === "light" ? "text-black" : "text-black"
            }`}
          >
            Frequently Asked Questions
          </h2>
          {questions.map((q) => (
            <div key={q.id} className="mb-4 last:mb-0">
              <button
                className={`w-full text-left text-xl focus:outline-none p-4 ${
                  theme === "light" ? "bg-gray-100" : "bg-gray-700"
                } rounded-lg shadow-md flex justify-between items-center`}
                onClick={() =>
                  setActiveQuestion(activeQuestion === q.id ? null : q.id)
                }
              >
                <span
                  className={theme === "light" ? "text-black" : "text-white"}
                >
                  {q.question}
                </span>
                {activeQuestion === q.id ? (
                  <FaMinusCircle
                    className={theme === "light" ? "text-black" : "text-white"}
                  />
                ) : (
                  <FaPlusCircle
                    className={theme === "light" ? "text-black" : "text-white"}
                  />
                )}
              </button>
              <AnimatePresence>
                {activeQuestion === q.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`mt-2 ml-4 ${
                      theme === "light" ? "text-gray-600" : "text-gray-700"
                    }`}
                  >
                    <p>{q.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
