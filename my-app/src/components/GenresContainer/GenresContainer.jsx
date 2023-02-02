import { Link } from "react-router-dom";
import styled from "styled-components";
import useFetchApi from "../../API/useFetchApi";

const GenresContainer = () => {
  const { genres } = useFetchApi();

  return (
    <>
      <ContainerGenres>
        <TitleContainer>
          Explorar todo
        </TitleContainer>

        <BtnContainer>
          {genres.map((genre) => (
            <GenresComponent key={genre}>
              <BtnGenres>{genre.name}</BtnGenres>
            </GenresComponent>
          ))}
        </BtnContainer>
      </ContainerGenres>
    </>
  );
};

export default GenresContainer;


const GenresComponent = styled.div``
const ContainerGenres = styled.div``;
const TitleContainer = styled.h1`
  text-align: center;
  margin: 40px;
  padding: 20px;
  position: relative;
  font-size: 40px;
`;
const BtnContainer = styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(9, 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 3px;
  margin: 10px;
  padding: 10px;
  margin-left: 10%;

  @media  (max-width:840px)  {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(9, 1fr);
    margin-left: 2px;
  }
`;
const BtnGenres = styled.button`

  margin: 12px;
  height: 5rem;
  width: 18rem;
  border-radius: 10px;
  background: #373535;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  box-shadow: -5px -5px 15px #fff9f9, 5px 5px 15px #ededed, inset 5px 5px 10px #908e8e,
    inset -5px -5px 10px #111010;
  border: none;
  font-size: 16px;
  color: rgb(161, 161, 161);
  transition: 500ms;

  &:hover {
    box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #222,
      inset -5px -5px 10px #444;
    color: #d6d6d6;
    transition: 500ms;
  }
  @media  (max-width:840px)  {
    width: 10rem;
  }
`;
