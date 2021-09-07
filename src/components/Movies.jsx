import React from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import { getMoviesById } from "../services/API";

const Movies = () => {
  const { data, error, isError, isLoading } = useQuery(["movies"], () => {
    return getMoviesById();
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
          data.map((movie, i) => (
            <div>
              <p key={i}>{movie.title}HEJHEJ</p>
            </div>
          ))}
      </Container>
    </div>
  );
};

export default Movies;
