import React from "react";
import { Container, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getMovie } from "../services/API";
import { useQuery } from "react-query";
import styles from "../css/Details.module.css";
import Actors from "./Actors";
const DetailMovies = () => {
  // Gets id from params
  const { id } = useParams();
  // Gets data etc from useQuery
  const { data, error, isError, isLoading } = useQuery(["Movie", id], () => {
    return getMovie(id);
  });

  return (
    <Container className="py-3">
      {/* If loading then return loading... */}
      {isLoading && <p className="my-3">Loading...</p>}
      {/* If there is an error then return error */}
      {isError && (
        <Alert variant="warning" className="my-3">
          <strong>Error:</strong> {error.message}
        </Alert>
      )}

      {/* If there are any data return info about the movie */}
      {data && (
        <div className={styles.container}>
          <img
            className={styles.soloImg}
            src={`https://image.tmdb.org/t/p/w300${data.results.poster_path}`}
            alt={data.results.title}
          />
          <h1 className={styles.header}>{data.results.title}</h1>
          <b>{data.results.overview}</b>
          <div className={styles.info}>
            {data &&
              data.results.genres.map((genre, i) => (
                <div key={i}>
                  <p className={styles.marginInfo}>{genre.name}</p>
                </div>
              ))}

            {data &&
              data.results.spoken_languages.map((language, i) => (
                <div key={i}>
                  <p className={styles.marginInfo}>{language.name} </p>
                </div>
              ))}
            <p className={styles.marginInfo}>{data.results.runtime} min</p>
            <p className={styles.marginInfo}>{data.results.release_date}</p>
          </div>
          {/* Returning actors from the movie*/}
          <Actors id={id} />
        </div>
      )}
    </Container>
  );
};

export default DetailMovies;
