import React from "react";
import { Container, Alert } from "react-bootstrap";
import { useQuery } from "react-query";
import { getGenres } from "../services/API";

const Movies = () => {
  const { data, error, isError, isLoading } = useQuery(["genres"], () => {
    return getGenres();
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

        <div>
          {data &&
            data.moviedata.map((movie, i) => (
              <div key={i}>
                <h1>GOT DATA</h1>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Movies;
