import React from 'react'
import styles from './Cat.module.css'


const Cat = (props) => {
    return (
        <div className={styles.cat}>
            <img src={props.cat} />
        </div>
    );
}

export default Cat;