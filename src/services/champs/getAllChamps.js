import axios from "axios";

export const getAllChamps = () => {
  return axios.get("https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json")
    .then(res => {
      const {data} = res; 
      const champs = (data.data);
      return champs;
    })
}