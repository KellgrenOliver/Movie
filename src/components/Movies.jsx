import React from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import { getMovies } from "../services/API";

const Movies = () => {
  const { data, error, isError, isLoading } = useQuery(["movies"], () => {
    return getMovies();
  });

  return (
    <div>
      <Container className="py-3">
        {isLoading && <p className="my-3">Loading...</p>}

        {isError && (
          <Alert variant="warning" className="my-3">
            <strong>Error:</strong> {error.message}
          </Alert>
        )}

        {data &&
          data.moviedata.map((movie, i) => (
            <div key={i}>
              <p>{movie.title}</p>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))}
      </Container>
    </div>
  );
};

export default Movies;
