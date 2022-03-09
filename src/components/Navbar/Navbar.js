import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const activeLink = ({isActive}) => isActive ? classes.active : classes.item;

const Navbar = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
          <NavLink to="/profile" className = {activeLink}>Profile</NavLink>
      </div>
      <div className={classes.item}>
          <NavLink to="/dialogs" className={(state) => state.isActive ? classes.active : classes.item}>Messages</NavLink>
      </div>
      <div className={classes.item}>
          <NavLink to="/news" className = {activeLink}>News</NavLink>
      </div>
      <div className={classes.item}>
          <NavLink to="/music" className = {activeLink}>Music</NavLink>
      </div>
      <div className={classes.item}>
          <NavLink to="/settings" className = {activeLink}>Settings</NavLink>
      </div>

        <div>
           <Sidebar sideBar={props.state.sideBar}/>
        </div>
    </nav>
  );
};

export default Navbar;