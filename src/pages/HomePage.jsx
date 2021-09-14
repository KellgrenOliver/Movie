import Search from "../components/Search";
import headerStyles from "../css/Headers.module.css";

const HomePage = () => {
  return (
    <div>
      <h1 className={headerStyles.introHeader}>WELCOME TO TIGER MOVIES</h1>
      <Search />
    </div>
  );
};

export default HomePage;
