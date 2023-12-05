import styled from "styled-components";

import NewMovieForm from "../hooks/NewMovie";

const NewMovie = styled.div`
  padding-top: 10px;
`;

const Title = styled.h2`
  font-size: 22px;
  padding-bottom: 10px;
`;

function New() {
  return (
    <main className="container">
      <NewMovie>
        <Title>Adicionar novo Filme ou Série</Title>
        <NewMovieForm />
      </NewMovie>
    </main>
  );
}

export default New;
