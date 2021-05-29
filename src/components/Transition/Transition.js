import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Transition.module.scss';
import logo from '../Images/wde.svg';
import Particles from 'react-particles-js';
const Transition = () => {

    //animations for transition
    const loading = useSpring({
        delay: 300,
        to: { width: 500 },
        from: { width: 0 },
        config: { duration: 800 }
    })
    const fadingIn = useSpring({
        delay: 200,
        to: { opacity: 1 },
        from: { opacity: 0 },
    })
    const fadeOut = useSpring({
        delay: 1000,
        to: { opacity: 0 , zIndex:-1},
        from: { opacity: 1,zIndex:5},
        config: { duration: 700 },
    })
    return (
        <animated.div style={fadeOut} className={styles.transition}>
            <Particles height={'100vh'}/>
            <animated.img style={fadingIn, fadeOut} id={styles.logo} src={logo}></animated.img>
            <animated.div id={styles.loadingBarBack}></animated.div>
            <animated.div style={loading} id={styles.loadingBarFront}></animated.div>
            
        </animated.div>
    );
}

export default Transition;