import styles from "../css/HomePage.module.css";
import headerStyles from "../css/Headers.module.css";
import { Card, Image } from "react-bootstrap";

const HomePage = () => {
  return (
    <div>
      <h1 className={headerStyles.header}>Welcome to Sky Cinema!</h1>
      <div className={styles.container}>
        <div className={styles.latest}>GO TO LATEST</div>
        <div className={styles.popular}>GO TO POPULAR</div>
        <div className={styles.toplist}>GO TO TOP LIST</div>
      </div>
    </div>
  );
};

export default HomePage;
