import { Link } from "react-router-dom";
import styled from "styled-components";
import useFetchApi from "../../API/useFetchApi";



const GenresContainer = () => {
  const {genres} = useFetchApi();


  return (
    <>
      <ContainerGenres>
        <TitleContainer>
          <h2>Musical Genre</h2>
        </TitleContainer>
     
          <BtnContainer>
            {genres.map((genre) => (
              <div key={genre.id}>
                <Link to={"/GenresPage"}>
                  <BtnGenres>{genre.name}</BtnGenres>
        
                </Link>
              </div>
            ))}
          </BtnContainer>
        </ContainerGenres>
     
    </>
  );
};

export default GenresContainer;




//STYLED COMPONENT


const ContainerGenres = styled.div`
`
const TitleContainer = styled.div`
text-align: center;
`
const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(9, 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 3px;
  margin: 10px;
`
const BtnGenres = styled.button`
margin: 12px;
  height: 50px;
  width: 120px;
  border-radius: 10px;
  background: #333;
  justify-content: center;
  align-items: center;
  box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #444, inset -5px -5px 10px #222;

  border: none;
  font-size: 16px;
  color: rgb(161, 161, 161);
  transition: 500ms;

  &:hover{
    box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #222, inset -5px -5px 10px #444;
  color: #d6d6d6;
  transition: 500ms;
  }
 
`
