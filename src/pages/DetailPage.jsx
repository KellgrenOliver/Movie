import React from "react";
import Alert from "react-bootstrap/Alert";
import { useParams } from "react-router-dom";
import { getMovie } from "../services/API";
import { useQuery } from "react-query";
import styles from "../css/DetailPage.module.css";
const DetailPage = () => {
  const { id } = useParams();
  const { data, error, isError, isLoading } = useQuery(["movie", id], () => {
    return getMovie(id);
  });

  return (
    <div className={styles.container}>
      {isLoading && <p className="my-3">Loading...</p>}
      {isError && (
        <Alert variant="warning" className="my-3">
          <strong>Error:</strong> {error.message}
        </Alert>
      )}
      {data && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200${data.results.poster_path}`}
            alt={data.results.title}
          />
          <h1>{data.results.title}</h1>
          <h1>{data.results.with_people}</h1>
          <p>{data.results.overview}</p>
          <p>{data.results.release_date}</p>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
