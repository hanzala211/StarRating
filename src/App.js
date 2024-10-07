import { useState } from "react";
import "./styles.css";

export default function App() {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  function onClick(rating) {
    return setRating(rating);
  }
  function hoverIn(rating) {
    return setTempRating(rating);
  }
  function hoverOut(rating) {
    return setTempRating(rating);
  }
  return (
    <>
      {Array.from({ length: 5 }, (_, i) => (
        <button
          style={{ display: "inline", cursor: "pointer" }}
          onClick={() => onClick(i + 1)}
          onMouseEnter={() => setTempRating(i + 1)}
          onMouseLeave={() => setTempRating(0)}
        >
          S{i + 1}{" "}
        </button>
      ))}
      <p style={{ display: "inline" }}>{tempRating || rating || ""}</p>
    </>
  );
}
