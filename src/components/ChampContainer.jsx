import { useState } from "react"
import { ChampCard } from "./ChampCard"
import { TagSelector } from "./TagSelector";

export const ChampContainer = (props) => {  

  const [category, setCategory] = useState("All");

  const changeCategory = (tag) => {
    setCategory(tag); 
  }

  return (
    <main className="champ-container">
      <form className="champ-container__form">
        {
          props.tags.map((tag, index) => {
            return (
              <TagSelector
                key={index}
                tag={tag}
                changeCategory={changeCategory} />
            )
          })
        }
      </form>
      <div className="champ-container__all">
        {
          props.champs
          .filter((champ) => {
            if(category === "All") 
              return true
            else if (champ.tags.find(tag => tag === category)) 
              return true
            return false;
          })
          .map(champ => {
            return (
              <ChampCard
                key={champ.id}
                name={champ.name}
                id={champ.id}
                desc={champ.blurb.replace("<br><br>", "")}
                title={champ.title} />
            )
          })
        }
      </div>
    </main>
  )
}