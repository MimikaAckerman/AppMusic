// import React, { useState } from 'react'
// import { getItem } from '../../services/LocalStorageFuncs';
// import { CiCircleRemove } from 'react-icons/ci'

// export const LikeSongs = () => {
//     const [data, setData] = useState( getItem('carrinhoYt') || [])

//     const removeItem = (obj) => {
//         const arrFilter = data.filter((e) => e.id !== obj.id)
//         setData(arrFilter)        
//     }
//   return (
//     <div>
//         <h1>Cart</h1>
//         <div>
//             {
//                 data.map((e) =>(
//                     <div key={e.id}>
//                         <h4>{e.title}</h4>
//                         <img src={e.thumbnail} alt={e.title} />
//                         <h4>{e.price}</h4>
//                         <button 
//                           onClick={ () => removeItem(e)}
//                         >
//                         <CiCircleRemove />
//                         </button>
//                     </div>
//                 ))
//             }
//         </div>
//     </div>
//   )
// }