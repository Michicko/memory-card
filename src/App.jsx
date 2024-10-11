import { useEffect, useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [memory, setMemory] = useState([]);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/20");
        const data = await res.json();
        console.log(data);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemons();
  }, []);

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
        <div className="cards"></div>
      </main>
    </>
  );
}

export default App;
