import React from 'react';
import styles from './Home.module.scss';
import Transition from '../Transition/Transition';
import image from '../Images/web-dev.svg';
import { useSpring, animated } from 'react-spring';

const Home = () => {

    const nameAnime=useSpring({
        delay:2400,
        to:{opacity:1,transform:`translateX(0px)`},
        from:{opacity:0,transform:`translateX(-110px)`},
        config:{duration:500}
    });
    const jobAnime=useSpring({
        delay:2600,
        to:{opacity:1,transform:`translateX(0px)`},
        from:{opacity:0,transform:`translateX(-110px)`},
        config:{duration:600}
    })
    const contactAnime=useSpring({
        delay:2800,
        to:{opacity:1,transform:`translateX(0px)`},
        from:{opacity:0,transform:`translateX(-110px)`},
        config:{duration:600}
    })
    const imageAnime=useSpring({
        delay:3000,
        to:{opacity:1},
        from:{opacity:0},
        config:{duration:500}
    })

    return (
        <div>
            <Transition />
            <div className={styles.presentation}>
                <div className={styles.leftPresentation}>
                    <animated.div style={nameAnime} className={styles.titleLetter}>
                        <ul className={styles.letters}>
                            <li id={styles.w}>W</li>
                            <li id={styles.e1}>e</li>
                            <li id={styles.i}>i</li>
                            <li id={styles.s1}>s</li>
                            <li id={styles.s2}>s</li>
                            <li id={styles.d}>D</li>
                            <li id={styles.o}>o</li>
                            <li id={styles.t}>t</li>
                            <li id={styles.e2}>E</li>
                            <li id={styles.x}>x</li>
                            <li id={styles.e3}>E</li>
                        </ul>
                    </animated.div>
                    <animated.div style={jobAnime} className={styles.jobs}>
                        <h3 id={styles.job1}>Front End Developer </h3>
                        <h3 id={styles.job2}>UI Designer</h3>
                    </animated.div>
                    <animated.button style={contactAnime} id={styles.contactBtn}>Contact me</animated.button>
                </div>
                <animated.div style={imageAnime} className={styles.rightPresentation}>
                    <img id={styles.image} src={image} />
                </animated.div>
            </div>
        </div>
    );
}

export default Home;