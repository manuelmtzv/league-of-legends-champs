import { useEffect, useState } from "react";
import { ChampContainer } from "./components/ChampContainer";
import { Header } from "./components/Header";
import { getAllChamps } from "./services/champs/getAllChamps";

function App() {
  const [champs, setChamps] = useState([]); 
  const [tags, setTags] = useState([]); 

  const unique = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  useEffect(() => {
    getAllChamps()
      .then(data => {      
        const keys = Object.keys(data); 
        keys.forEach(key => {
          setChamps(prev => prev.concat(data[key]));
          setTags(prev => prev.concat("All"));
          setTags(prev => (prev.concat(data[key].tags)).sort());
        })
      })
  }, [])  

  return (
    <div className="App">
      <Header
        title={"League of legends champs"} /> 

      <ChampContainer
        champs={champs}
        tags={tags.filter(unique)} />             
    </div>
  );
}

export default App;
