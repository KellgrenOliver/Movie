import React from "react";
import { Container, Alert } from "react-bootstrap";
import { useQuery } from "react-query";
import { getActor } from "../services/API";
import styles from "../css/Details.module.css";
import { useParams, Link } from "react-router-dom";

const Actor = () => {
  const { id } = useParams();

  const { data, error, isError, isLoading } = useQuery(["person", id], () => {
    return getActor(id);
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

        {data && (
          <div className={styles.container}>
            <img
              className={styles.soloImg}
              src={`https://image.tmdb.org/t/p/w300${data.results.profile_path}`}
              alt={data.results.name}
            />
            <h1 className={styles.header}>{data.results.name}</h1>
            <b>{data.results.biography}</b>
            <h1 className={styles.header}>Involved in</h1>

            <div className={styles.imgWrapper}>
              {data &&
                data.results.combined_credits.cast.map((cast, i) => (
                  <div key={i}>
                    {cast.poster_path && (
                      <Link to={`/movie/${cast.id}`}>
                        <img
                          className={styles.img}
                          src={`https://image.tmdb.org/t/p/w200${cast.poster_path}`}
                          alt={cast.title}
                        />
                      </Link>
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Actor;
