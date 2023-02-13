import * as React from 'react';
import styles from './StatBar.module.css';

const StatBar = ({ percentage, type }) => {
    return <div className={styles.container}>
        <div className={`${styles.bar} ${styles[type]}`} style={{width: `${percentage}%`}}></div>
    </div>
}

export default StatBar;