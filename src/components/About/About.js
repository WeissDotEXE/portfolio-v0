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

//STATIC list of objects witch contains skills with title, image and description
const skills = [
    { id: 0, skillName: 'HTML', image: 'fab fa-html5', text: 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.' },
    { id: 1, skillName: 'CSS', image: 'fab fa-css3-alt', text: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.' },
    { id: 2, skillName: 'Bootstrap', image: 'fab fa-bootstrap', text: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.' },
    { id: 3, skillName: 'Sass', image: 'fab fa-sass', text: 'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself.' },
    { id: 4, skillName: 'JavaScript', image: 'fab fa-js', text: 'JavaScript is the world\'s most popular programming language for web developer.' },
    { id: 5, skillName: 'React', image: 'fab fa-react', text: 'React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook' },
    { id: 6, skillName: 'Figma', image: 'fab fa-figma', text: 'Figma is a vector graphics editor and prototyping tool which is primarily web-based' },
]
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
                    <h1 data-aos="fade-right" id={styles.studies_txt2}>I am also a member of Microsoft Learn Student Ambassadors program , in Tech Department.</h1>
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
                        <p>Native: romanian</p>
                        <p>Advanced: english</p>
                        <p>Basic: chinese</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;