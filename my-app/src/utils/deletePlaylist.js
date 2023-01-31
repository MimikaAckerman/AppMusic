export const deleteplaylist = async (_id) => {
   /*  const urlDeleteplaylist=`http://localhost:4000/playlists/deleteplaylist/${_id}`; */
   /*  fetch(`http://localhost:4000/playlists/deleteplaylist/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(_id),
    }).then((res) => res.json())
     .then((res) => console.log(res)) */

     const response = await fetch(`http://localhost:4000/playlists/deleteplaylist/${_id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }

     })
      const data = await response.json();
      console.log(data);
     /*  console.log(res) */
   
    
  }
  
