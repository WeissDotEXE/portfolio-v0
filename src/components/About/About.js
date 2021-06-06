import { React, useState } from 'react';
import styles from './About.module.scss';
import Transition from '../Transition/Transition';

import { useSpring, animated } from 'react-spring';
//import images
import avatar1 from '../Images/avatar.jpg';
import avatar2 from '../Images/avatar2.jpg';
import lights from '../Images/lights.jpg';
import exam from '../Images/exam.svg';
import Skills from './Skills';


const About = () => {
    return(
        <div>
            <Transition />
            <div className={styles.about}>
                <div className={styles.intro}>

                    <h1 id={styles.intro_txt}>About me</h1>
                    <div className={styles.intro_btn}>
                        
                        <a target="_blank" href="https://github.com/WeissDotEXE">
                            <i class="fab fa-github"></i>
                        </a>

                        <a target="_blank" href="#">
                            <button>Resume</button>
                        </a>

                        <a target="_blank" href="https://github.com/WeissDotEXE">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div className={styles.presentation}>
                    <h1 data-aos="fade-up" id={styles.first_txt}>Hi. My name is Mihnea</h1>
                    <h1 data-aos="fade-up" id={styles.second_txt}>Front-End Web Developer</h1>
                    <img data-aos="fade-up" data-aos-offset="200" id={styles.avatar2} src={avatar2}/>
                    <img data-aos="fade-up" data-aos-offset="200" id={styles.avatar1} src={avatar1}/>
                </div>

                <div  className={styles.studies}>
                    <h1 data-aos="fade-right" id={styles.studies_txt}>Currently, I am student at Faculty of Cybernetics, Statistics and Informatics Bucharest , Romania</h1>
                    <h1 data-aos="fade-right" id={styles.studies_txt2}>I am member of Microsoft Learn Student Ambassadors program , in Tech Department.</h1>
                    <img src={exam}/>
                </div>
                
                <div className={styles.learning}>
                    <div id={styles.image_overlay}></div>
                    <img  src={lights}/>
                    <h1 data-aos="fade-right" id={styles.learning_txt1}>I started learning web development in the middle of 2020 due to boredom.</h1>
                    <h1 data-aos="fade-right" id={styles.learning_txt2}>Now , all my free time is invested in upgrading my web developer skills.</h1>
                </div>

                <div className={styles.so_now}>
                    <div class={styles.so_now_txt}>
                        <div id={styles.left_line}></div>
                        <h1 data-aos="fade-up" data-aos-offset="200">So now , you are able to see this website.</h1>
                    </div>
                    <iframe data-aos="fade-up" data-aos-offset="200" id={styles.gif} src="https://codetraveler.io/content/images/2019/05/giphy.gif"/>
                </div>

                <div className={styles.skills}>
                    <Skills />
                </div>

                <div className={styles.languages}>
                    <h1>Languages</h1>
                    <div className={styles.languages_txt}>
                        <p>Native</p>
                        <p id={styles.lng}>Romanian</p>
                        <p>Advanced</p>
                        <p id={styles.lng}>English</p>
                        <p>Basic</p>
                        <p id={styles.lng}>Chinese</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;