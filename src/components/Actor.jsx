import React from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import { getActor } from "../services/API";
import styles from "../css/Actors.module.css";
import { useParams } from "react-router-dom";

const Actor = () => {
  const { id } = useParams();

  console.log(id);

  const { data, error, isError, isLoading } = useQuery(["person", id], () => {
    return getActor(id);
  });

  console.log(data);

  return (
    <div>
      <Container className="py-3">
        {isLoading && <p className="my-3">Loading...</p>}

        {isError && (
          <Alert variant="warning" className="my-3">
            <strong>Error:</strong> {error.message}
          </Alert>
        )}

        <h3>ACTOR</h3>
        {data && (
          <div className={styles.imgWrapper}>
            <img
              className={styles.img}
              src={`https://image.tmdb.org/t/p/w300${data.results.profile_path}`}
              alt={data.results.name}
            />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Actor;
