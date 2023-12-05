import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewMovieForm = styled.form`
  border: 1px solid #000;
  display: grid;
  gap: 10px;
  padding: 10px;
`;

const NewMovieLabel = styled.label`
  align-items: center;
  display: flex;
  gap: 10px;
`;

const NewMovieInput = styled.input`
  padding: 5px;
  width: 100%;
`;

const NewMovieSubmit = styled.button`
  background: #000;
  border: none;
  color: #fff;
  font-size: 18px;
  padding: 10px;
  width: 100%;
`;

function NewMovieFormComponent() {
  const navigate = useNavigate();
  const [newMovie, setNewMovie] = useState({
    comment: "",
    rating: "",
    title: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((movie) => ({
      ...movie,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://cautious-wasp-shift.cyclic.app/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    });

    setNewMovie({
      comment: "",
      rating: "",
      title: "",
    });

    navigate("/");
  };

  return (
    <NewMovieForm onSubmit={handleSubmit}>
      <NewMovieLabel>
        <NewMovieInput
          name="title"
          onChange={handleInputChange}
          placeholder="Título"
          required
          type="text"
          value={newMovie.title}
        />
      </NewMovieLabel>
      <NewMovieLabel>
        <NewMovieInput
          name="rating"
          onChange={handleInputChange}
          placeholder="Nota: mínimo 0 e máximo 100"
          required
          type="number"
          value={newMovie.rating}
        />
      </NewMovieLabel>
      <NewMovieLabel>
        <NewMovieInput
          name="comment"
          onChange={handleInputChange}
          placeholder="Comentário"
          required
          type="text"
          value={newMovie.comment}
        />
      </NewMovieLabel>
      <NewMovieSubmit type="submit">Criar</NewMovieSubmit>
    </NewMovieForm>
  );
}

export default NewMovieFormComponent;
