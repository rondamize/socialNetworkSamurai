import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
  return (
    <header className={classes.header}>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" />
        <div className={classes.logButton}>
            {props.isAuthorised ? <div>{props.login}</div> : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
  );
};

export default Header;