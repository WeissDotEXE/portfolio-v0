import React from 'react';
import styles from './Scroll.module.scss';

const Scroll=()=>{
    return(
        <div className={styles.scrollbar}>
            <div className={styles.bar}></div>
            <div className={styles.dot}></div>
        </div>
    );
}

export default Scroll;