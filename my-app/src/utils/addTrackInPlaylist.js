const urlTrack = "http://localhost:4000/tracks/updateTracks/";

export function addTrackInPlaylist(ts) {
  fetch(urlTrack, {
    method: "PATCH",
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Accept': 'application/json'
    },
    body: JSON.stringify(ts),
  }).then((res) => res.json())
  console.log(ts);
  
}