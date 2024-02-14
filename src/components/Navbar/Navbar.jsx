import styles from "./Navbar.module.css";
import React, { useState } from "react";

const Navbar = () => {
  const [toggleListBtn, setToggleListBtn] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div
          className={`cursor-pointer ${styles.sideBar}`}
          onClick={() => {
            setToggleListBtn(!toggleListBtn);
          }}
        >
          <b>{toggleListBtn ? "=" : "x"}</b>
          {!toggleListBtn && <div className={styles.sideBarContainer}>Items</div>}
        </div>
        <div className={styles.headerText}>
          <h2>React To Do List App</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
