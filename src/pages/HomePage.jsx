import Movies from "../components/Movies";
import styles from "../css/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Movies />
    </div>
  );
};

export default HomePage;
