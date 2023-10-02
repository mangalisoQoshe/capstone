import { useState, useEffect, useRef } from "react";
import {
  SidebarIcon,
  DashboardIcon,
  SettingsIcon,
  UserIcon,
} from "../../assets/Icons";
import Button from "../shared/button/Button";
import styles from "./Header.module.css";
import DropdownItem from "../shared/dropdown-item/DropdownItem";
import TimeAndDate from "./time-and-date/TimeAndDate";
import Marquee from "react-fast-marquee";
import { logOut } from "../../firebase";

function Header({ announcements }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleOutsideMenuClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideMenuClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideMenuClick);
    };
  }, []);

  const anouncementList = announcements.map((a) => (a.name).toUpperCase());

  return (
    <header className={styles.header}>
      <div>
        <h2 className={styles.date}>
          <TimeAndDate />
        </h2>
      </div>
      <div className={styles.marquee} >
        <Marquee pauseOnHover>{anouncementList.join(" || ")}</Marquee>
      </div>
      <div>
        <div className={styles["menu-container"]} ref={menuRef}>
          <Button
            style={styles["sidebar-btn"]}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <SidebarIcon />
          </Button>
          <div
            className={`${styles["dropdown-menu"]} ${
              isOpen ? styles.active : styles.inactive
            }`}
          >
            <ul className={styles["dropdown-list"]}>
              <DropdownItem name="Dashboard" path="/">
                <DashboardIcon />
              </DropdownItem>
       
              <DropdownItem name="Login" path="/login">
                <UserIcon />
              </DropdownItem>
              <DropdownItem name="Settings" path="/settings">
                <SettingsIcon />
              </DropdownItem>
              <button onClick={logOut} className={styles["log-out"]}>Log Out</button>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
