import React, {useState} from 'react';
import styles from './Navbar.module.scss';
import logo from '../Images/logo wde.png';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import ActiveNav from './ActiveNav';

const Navbar=()=>{

    const[showNavbar,setShowNavbar]=useState(false);

    //animations for navbar
    const navbarAnime=useSpring({
        delay:2000,
        to:{opacity:1,transform:`translateY(0px)`},
        from:{opacity:0,transform:`translateY(-10px)`},
        config:{duration:500}
    })
    const navbarLinksAnime=useSpring({
        delay:2300,
        to:{opacity:1,transform:`translateY(0px)`},
        from:{opacity:0,transform:`translateY(-10px)`},
        config:{duration:600}
    })
    //end of animations!!!!!

    //function for showing navbar for mobile when clicked
    if(showNavbar===true){
        return(
        <ActiveNav onChange={value=>setShowNavbar(value)}/>
        );
    }

    return(
        <animated.div style={navbarAnime} className={styles.navbar}>
            <button onClick={()=>setShowNavbar(true)} id={styles.menuBtn}><i class="fas fa-bars"></i></button>
            <Link to="/"><img id={styles.navbarLogo} src={logo} alt="logo"/></Link>
            <animated.div style={navbarLinksAnime} className={styles.links}>
                <Link  className={styles.links1} id={styles.about} to='/about'>About</Link>
                <Link className={styles.links1} id={styles.portofolio} to='/portofolio'>Portofolio</Link>
                <Link className={styles.links1} id={styles.contact} to='/contact'>Contact</Link>
            </animated.div>
        </animated.div>
    );
}

export default Navbar;