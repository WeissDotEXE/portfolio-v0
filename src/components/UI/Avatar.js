import React from 'react';
import styles from './Avatar.module.scss';
import avatar from '../Images/avatar.jpg'
const Avatar = (props) => {
    return (
        <div className={styles.avatarDiv}>
            <div className={styles.avatarOverlay}></div>
            <div className={styles.avatar}>
                <img id={styles.avatarImage} src={avatar} />
            </div>
        </div>
    );
}

export default Avatar;