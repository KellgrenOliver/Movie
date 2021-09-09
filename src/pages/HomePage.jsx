import styles from "../css/HomePage.module.css";
import headerStyles from "../css/Headers.module.css";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const renderLatest = () => {
    history.push("/latest");
  };
  const renderPopular = () => {
    history.push("/popular");
  };
  const renderTopRated = () => {
    history.push("/toprated");
  };

  return (
    <div>
      {/* <h1 className={headerStyles.header}>Welcome to Sky Cinema!</h1> */}
      <div className={styles.container}>
        <div
          onClick={() => renderLatest()}
          className={[styles.latest, styles.backgroundImage].join(" ")}
        >
          GO TO LATEST
        </div>
        <div
          onClick={() => renderPopular()}
          className={[styles.popular, styles.backgroundImage].join(" ")}
        >
          GO TO POPULAR
        </div>
        <div
          onClick={() => renderTopRated()}
          className={[styles.topRated, styles.backgroundImage].join(" ")}
        >
          GO TO TOP RATED
        </div>
      </div>
    </div>
  );
};

export default HomePage;
