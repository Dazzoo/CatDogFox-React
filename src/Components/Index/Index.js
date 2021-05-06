import React from 'react'
import styles from './Index.module.css'


const Index = (props) => {
    return (
        <div className={styles.index}>
            <img src={props.cat} />
            <img src={props.dog} />
            <img src={props.fox} />
        </div>
);
}

export default Index;