import React from 'react';
import styles from './ActiveNav.module.scss';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
const ActiveNav=(props)=>{

    const activeNav=useSpring({
        from:{width:'0px'},
        to:{width:'2000px'},
        config:{duration:1000}
    })

    const disableNav=useSpring({
        from:{width:'2000px'},
        to:{width:'0px'},
        config:{duration:1000}
    })

    return(

        <animated.div style={activeNav} class={styles.activeNav}>
            <div className={styles.links}>
                <div id={styles.closeBtn}>
                    <i onClick={event=>props.onChange(event.target.value)} class="fas fa-times"></i>
                </div>
                <Link onClick={event=>props.onChange(event.target.value)} className={styles.links} to='/about'>About</Link>
                <Link onClick={event=>props.onChange(event.target.value)} className={styles.links} to='/portofolio'>Portofolio</Link>
                <Link onClick={event=>props.onChange(event.target.value)} className={styles.links} to='/contact'>Contact</Link>
            </div>
        </animated.div>
    );
}

export default ActiveNav;