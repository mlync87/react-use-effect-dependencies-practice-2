import { useState, useEffect } from "react";
function PlanetsListItem(props) {
  const { planet } = props;

  const [firstFilm, setFirstFilm] = useState('')

  useEffect(() => {
    fetch(planet.films[0])
      .then((res) => res.json())
      .then((filmData) => {
        console.log(filmData)
        setFirstFilm(filmData.title)
      })
  }, [planet]);

  console.log("Planet", planet);

  return <li>{planet.name} - First Film {firstFilm}</li>;
}

export default PlanetsListItem;
