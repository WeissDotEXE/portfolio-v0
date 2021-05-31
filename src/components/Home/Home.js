import React from 'react';
import styles from './Home.module.scss';
import Transition from '../Transition/Transition';
import image from '../Images/web-dev.svg';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import avatar from '../Images/avatar.jpg';
import logo from '../Images/logo wde.png';
const Home = () => {


    return (
        <div>
            <Transition />
            <div className={styles.home}>
                <h1 id={styles.titlePhone}>WeissDotExe</h1>
                <Link to="/"><img id={styles.navbarLogo} src={logo} alt="logo"/></Link>
                
                <Link to="/about" className={styles.leftSide}>
                    <div className={styles.leftSide}>
                        <h1 id={styles.aboutTxt}>About me</h1>
                        <img id={styles.leftImage} src={avatar} />
                    </div>
                </Link>

                <div className={styles.blankSpace}></div>
                
                <Link to="/portofolio" className={styles.rightSide}>
                    <div className={styles.rightSide}>
                        <h1 id={styles.portofolioTxt}>Portofolio</h1>
                        <img id={styles.rightImage} src="https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Home;