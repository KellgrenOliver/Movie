import styles from "../css/TopRatedPage.module.css";
import TopRatedMovies from "../components/TopRatedMovies";

const TopRatedPage = () => {
  return (
    <div className={styles.container}>
      <TopRatedMovies />
    </div>
  );
};

export default TopRatedPage;
