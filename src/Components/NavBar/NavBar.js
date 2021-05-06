import styles from './NavBar.module.css'
import {NavLink} from "react-router-dom"
import React from 'react'

const Sidebar = (props) => {

    return (
        <div className={styles.NavBar}>
            <ul>
                <li><NavLink   to="/index" className={styles.nav} activeClassName={styles.active}>Index</NavLink></li>
                <li><NavLink   to="/cat" className={styles.nav} activeClassName={styles.active}>Cat</NavLink></li>
                <li><NavLink   to="/dog" className={styles.nav} activeClassName={styles.active}>Dog</NavLink></li>
                <li><NavLink   to="/fox" className={styles.nav} activeClassName={styles.active}>Fox</NavLink></li>
            </ul>
        </div>
    );
};

export default Sidebar;