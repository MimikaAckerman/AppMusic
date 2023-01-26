const urlPlaylist = "http://localhost:4000/playlists/createplaylist";
export function addNewPlaylist(playlist,pl,setPlaylist) {
    fetch(urlPlaylist, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playlist),
    }).then((res) => res.json())
      .then((res)  => {

      setPlaylist([...pl,res.data])
      console.log(res)
    });
    
  }
  

 
  