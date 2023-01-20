export const updateUserImg = async(id,img,token) =>{
    const response = await fetch(`$S{process.env.REACT_APP_SERVER_URL}/user/${id}`,{
        method:'PATCH',
        headers:{
            Authorization:`Bearer ${token}`,
            'Content-type':'application/json; charset=UTF-8'
        },
        body: JSON.stringify({image:img})
    })
    return response.json()
}

export const updateUserImageWithFormData = async(file) =>{
    const formData = new FormData()
    formData.append('image',file)

    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/upload/`,{
                //id del usuario correspondiente
        method:'POST',
        body:formData
    })
    const data = await response.json()
    console.log(data)
    return data
}
