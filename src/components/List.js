import { useEffect, useState } from "react";
import Character from "./Characters";

function List() {
  // setting the states of the characters and loading func
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  // the useEffect hook enables to synchronyze the component 
  // with an external system 
  useEffect(() => {
    async function fetchData() {
      const data = await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await data.json();
      setCharacters(results);
      setLoading(false);
    }
    fetchData();
  }, [characters.length]);

 
  return (
    <div>
      <div className="row">
        {
          loading ? 'Loading...' : characters.map(character => 
          <Character name={character.name} key={character.id} origin={character.origin} image={character.image}/>
          )
        }
      </div>
    </div>
  );
}

export default List;
