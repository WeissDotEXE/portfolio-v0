import { React, useState } from 'react';
import styles from './About.module.scss';
import Transition from '../Transition/Transition';
import Skills from './Skills';
import { useSpring, animated } from 'react-spring';
import backgroundVideo from "../video/typing_video.mp4";
import { Player } from 'video-react';
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
    const videoSrc=backgroundVideo;
    return(
        <div className={styles.about}>
            <video autoplay loop id={styles.videoo}>
                <source src={backgroundVideo}/>
            </video>
        </div>
    );
}

export default About;