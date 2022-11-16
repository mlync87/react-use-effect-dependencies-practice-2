import { useState, useEffect } from "react";

function StarshipsListItem(props) {
  const { starship } = props;

  const [firstPilot, setFirstPilot] = useState('')
  useEffect(() => {
    fetch(starship.pilots[0])
      .then((res) => res.json())
      .then((pilotData) => {
        console.log(pilotData)
        setFirstPilot(pilotData.name)
      })
  }, [starship]);
  console.log({ starship });

  return <li>{starship.name} - First Pilot {firstPilot ? firstPilot : 'No pilots'}</li>;
}

export default StarshipsListItem;
