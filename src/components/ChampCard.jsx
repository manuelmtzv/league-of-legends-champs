
export const ChampCard = ({ name, id, desc, title }) => {
  return (
    <div data-aos="zoom-in" className="champ-container__champ">
      <h1 className="champ__name">{name}</h1>
      <img className="champ__art" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`} alt="" />
      <div className="champ__info">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}