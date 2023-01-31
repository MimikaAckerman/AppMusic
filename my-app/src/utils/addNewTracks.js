const urlTracks = "http://localhost:4000/tracks/createTracks";
export function addNewTracks(tracks, tr, setTracks) {
  fetch(urlTracks, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tracks),
  })
    .then((res) => res.json())
    .then((res) => {
      setTracks([...tr, res.data]);
    });
}
