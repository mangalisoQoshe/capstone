import styles from "./DropdownItem.module.css";
import { NavLink } from "react-router-dom";

function DropdownItem({ children, name,path }) {
    const classNameFunc = ({ isActive }) => (isActive ? styles["active-link"] : "");
  return (
    <li className={styles["dropdown-item"]}>
      {children}
      <NavLink to={path} className={classNameFunc}>{name}</NavLink>
    </li>
  );
}

export default DropdownItem;
