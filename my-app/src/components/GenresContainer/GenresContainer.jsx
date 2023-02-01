import { Link } from "react-router-dom";
import styled from "styled-components";
import useFetchApi from "../../API/useFetchApi";

const GenresContainer = () => {
  const { genres } = useFetchApi();

  return (
    <>
      <ContainerGenres>
        <TitleContainer>
          <h2>Explorar todo</h2>
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
const TitleContainer = styled.div`
  text-align: center;
`;
const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(9, 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 3px;
  margin: 10px;
`;
const BtnGenres = styled.button`
  margin: 12px;
  height: 5rem;
  width: 10rem;
  border-radius: 10px;
  background: #333;
  justify-content: center;
  align-items: center;
  box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #444,
    inset -5px -5px 10px #222;

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
`;
