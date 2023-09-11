import { useRef, useState, useEffect } from "react";
import "./App.css";
import Bar from "./Bar"

function App() {
  const barContainerRef = useRef(null);
  const [oneUnitWidth, setUnitWidth] = useState(0);
  const [oneUnitHeight, setUnitHeight] = useState(0);

  
  const nums = [];
  const length = 100;

  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * 9) + 1; // generates a random number between 0 and 9
    nums.push(randomNum);
  }

  const max = Math.max(...nums);

  useEffect(() => {
    const divWidth = barContainerRef.current.offsetWidth;
    const divHeight = barContainerRef.current.offsetHeight;
    setUnitWidth(divWidth / length);
    setUnitHeight(divHeight / max);
    consol
  }, [oneUnitHeight, oneUnitWidth]);


  return (
    <div className="view-box">
      <div className="controls"></div>
      <div className="bar-box" ref={barContainerRef}>
        {nums.map((number, iterator) => {
          <Bar className="bar" key={iterator} width={oneUnitWidth} height={oneUnitHeight * number} />
        })}
      </div>
    </div>
  );
}

export default App;
