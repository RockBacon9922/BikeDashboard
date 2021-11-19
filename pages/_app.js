import 'tailwindcss/tailwind.css'
import * as React from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";
import "./style.css";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
