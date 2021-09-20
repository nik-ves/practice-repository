// import { Link } from "react-router-dom"; // react Link prevents the page from reloading and losing states
import { NavLink } from "react-router-dom"; // solves the problem of active class when on a page
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">Welcome</NavLink>
          </li>

          <li>
            <NavLink activeClassName={classes.active} to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
