import { motion } from "framer-motion";
import * as React from "react";
import { render } from "react-dom";

export default function App() {
  return (
    <div className="example-container">
      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} />
    </div>
  );
};