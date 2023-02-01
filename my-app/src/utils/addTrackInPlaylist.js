const urlTrack = "http://localhost:4000/tracks/updateTracks/";

export function addTrackInPlaylist(ts) {
  fetch(urlTrack, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ts),
  }).then((res) => res.json())
  console.log(ts);
  
}

