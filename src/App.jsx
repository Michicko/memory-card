import { useCallback, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Card from "./Components/Card";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [memory, setMemory] = useState([]);
  const [characters, setCharacters] = useState([]);

  const generateRandomNumber = useCallback(() => {
    const nums = [];
    do {
      const id = uuid();
      let num = Math.floor(Math.random() * 20 + 1);
      const foundChar = nums.find((el) => el.num === num);
      if (foundChar) {
        num = Math.floor(Math.random() * 20 + 1);
      } else {
        const obj = { id, img: `${num}.png`, num };
        nums.push(obj);
      }
    } while (nums.length < 20);

    setCharacters(nums);
  }, []);

  const storeMemory = (num) => {
    const foundChar = memory.find((el) => el.num === num);

    if (foundChar) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setMemory([]);
      generateRandomNumber();
    } else {
      const char = characters.find((el) => el.num === num);
      setMemory([...memory, char]);
      setScore(() => score + 1);
      generateRandomNumber();
    }
  };

  useEffect(() => {
    generateRandomNumber();
  }, [generateRandomNumber]);

  return (
    <>
      <nav>
        <h1>Memory Card</h1>
        <div>
          <p>
            Score: <span>{score}</span>
          </p>
          <p>
            Best score: <span>{bestScore}</span>
          </p>
        </div>
      </nav>
      <main>
        <p>
          Get points by clicking on an image but don&apos;t click on any more
          than once!
        </p>
        <div className="cards">
          {characters &&
            characters.length > 0 &&
            characters.map((character) => {
              return (
                <Card
                  character={character}
                  key={character.id}
                  handleOnclick={storeMemory}
                />
              );
            })}
        </div>
      </main>
    </>
  );
}

export default App;
