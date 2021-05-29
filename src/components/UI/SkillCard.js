import React, { useState } from 'react';
import styles from './SkillCard.module.scss';
import { useSpring, animated } from 'react-spring';



const SkillCard = (props) => {

    //animation for skill Detail Card
    const skillCardAnime = useSpring({
        to: { opacity: 1, transform: `translateY(0px)` },
        from: { opacity: 0, transform: `translateY(10px)` },
        config: { duration: 300 }
    })

    return (
        <animated.div style={skillCardAnime} className={styles.skillCard}>
            <div className={styles.topCard}>
                <h2>{props.name}</h2>
                <i className={props.image}></i>
            </div>
            <p>{props.text}</p>
        </animated.div>
    );
}

export default SkillCard;