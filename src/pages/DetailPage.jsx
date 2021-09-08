import DetailMovies from "../components/DetailMovies";
import styles from "../css/HomePage.module.css";

const DetailPage = () => {
  return (
    <div className={styles.container}>
      <DetailMovies />
    </div>
  );
};

export default DetailPage;
