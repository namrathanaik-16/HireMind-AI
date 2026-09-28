import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Interview from "./pages/Interview";
import CodingRound from "./pages/CodingRound";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coding" element={<CodingRound />} />
      <Route path="/interview" element={<Interview />} />
    </Routes>
  );
}