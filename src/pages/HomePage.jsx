import styles from "../css/HomePage.module.css";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const renderNowPlaying = () => {
    history.push("/nowplaying");
  };
  const renderPopular = () => {
    history.push("/popular");
  };
  const renderTopRated = () => {
    history.push("/toprated");
  };

  return (
    <div>
      <div className={styles.container}>
        <div
          onClick={() => renderNowPlaying()}
          className={[styles.nowplaying, styles.backgroundImage].join(" ")}
        >
          NOW PLAYING
        </div>
        <div
          onClick={() => renderPopular()}
          className={[styles.popular, styles.backgroundImage].join(" ")}
        >
          POPULAR
        </div>
        <div
          onClick={() => renderTopRated()}
          className={[styles.topRated, styles.backgroundImage].join(" ")}
        >
          TOP RATED
        </div>
      </div>
    </div>
  );
};

export default HomePage;
