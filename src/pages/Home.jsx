import styled from "styled-components";

const MoviesList = styled.div`
  display: grid;
  gap: 10px;
  padding-top: 10px;
`;

const Title = styled.h2`
  font-size: 22px;
`;

import Movies from "../hooks/Movies";

function Home() {
  return (
    <main className="container">
      <MoviesList>
        <Title>Lista de reviews</Title>
        <Movies />
      </MoviesList>
    </main>
  );
}

export default Home;
