
export const TagSelector = ({ tag, changeCategory }) => {
  return (
    <div className={"champ-container__categories"}>
      <input onClick={() => changeCategory(tag)} type="radio" name="tag" id={tag} value={tag} defaultChecked={`${(tag === "All" ? "checked" : "")}`.trim()}/>
      <label htmlFor={tag}>{tag}</label>
    </div>
  )
}