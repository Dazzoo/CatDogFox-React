import React from 'react'
import styles from './Dog.module.css'


const Dog = (props) => {
    return (
        <div className={styles.dog}>
            <img src={props.dog} />
        </div>
);
}

export default Dog;