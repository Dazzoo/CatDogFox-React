import React from 'react'
import styles from './Fox.module.css'


const Fox = (props) => {
    debugger
    return (
        <div className={styles.fox}>
            <img src={props.fox} />
        </div>
);
}

export default Fox;