import React, { useState } from 'react';
import { useAuthContext } from '../../context/LoginContext';


import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

import {useAddPlaylistContext} from './../../context/AddPlaylistContext';
import styled from "styled-components";







const AccountPage = () => {

  //CLOUDINARY
  const[image,setImage] = useState('')
    console.log(image);
      
      



  const {isAuthenticated} = useAuthContext();
  const user = JSON.parse(localStorage.getItem("name")); 

  return (
    <>
      <div className="div-model">
        {/* contenedor */}
        <div className="card-profile">
          <div className='card-backgroud'>

          </div>
          {/* card */}
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="our-team">
        <div className="picture">
          {/* aqui va la FUNCION DE IMAGEN DE USUARIO */}
        </div>
        <div className="team-content">

      {/* <div className="img-user">
        
        <svg width="150" height="150" viewBox="0 0 24 30" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z" fill="currentColor" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z" fill="currentColor" /></svg>
      
      </div> */}

    <div className="setting">
      
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z" fill="currentColor" /><path d="M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z" fill="currentColor" /></svg>
    </div>

      <div className="bag">
        
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z" fill="currentColor" /></svg>
      </div>


        <div className="upload-img">
<Tooltip title='Upload New Image or Audio File'>
<IconButton aria-label='upload image' component='label'>
  <input hidden accept='image/*, audio/*' type='file' onChange={(e) => setImage(e.target.files[0])} />
  <AttachFileIcon />
</IconButton>
</Tooltip>

<Tooltip title='Save Image to Cloudinary'>
<IconButton aria-label='upload image' component='label' onClick={() => updateUserImageWithFormData(image)}>
  <CloudUploadIcon />
</IconButton>
</Tooltip>
</div>

          <h3 className="name">THE Name</h3>
          <h4 className="title">THE PROFILE</h4>

        </div>
      
      </div>
    </div>
    </div>

      <div className="hi-user">
      {isAuthenticated ? (
          <span className="name-user">Hi! {user}</span>
      ) : null}
</div>
</div>


    </>
  );
};

export default AccountPage;

const Prueba = styled.div`
background-color: red;
`
