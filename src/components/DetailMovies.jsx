import React from "react";
import { Alert, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getMovie } from "../services/API";
import { useQuery } from "react-query";
import styles from "../css/DetailPage.module.css";
import Actors from "./Actors";
const DetailMovies = () => {
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
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Table bordered className={styles.table}>
              <img
                className={styles.img}
                src={`https://image.tmdb.org/t/p/w300${data.results.poster_path}`}
                alt={data.results.title}
              />
              <tbody>
                <h1 className={styles.header}>{data.results.title}</h1>
                <tr>
                  <td>Overview</td>
                  <td>
                    <p>{data.results.overview}</p>
                  </td>
                </tr>
                <tr>
                  <td>Genres</td>
                  <td>
                    <p>
                      <div className={styles.flex}>
                        {data &&
                          data.results.genres.map((genre, i) => (
                            <div key={i}>
                              <p className={styles.marginInfo}>{genre.name}</p>
                            </div>
                          ))}
                      </div>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>Language</td>
                  <td>
                    <div className={styles.flex}>
                      {data &&
                        data.results.spoken_languages.map((language, i) => (
                          <div key={i}>
                            <p className={styles.marginInfo}>
                              {language.name}{" "}
                            </p>
                          </div>
                        ))}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Time</td>
                  <td>
                    <p>{data.results.runtime} min</p>
                  </td>
                </tr>
                <tr>
                  <td>Release date</td>
                  <td>
                    <p>{data.results.release_date}</p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <Actors id={id} />
        </div>
      )}
    </div>
  );
};

export default DetailMovies;
