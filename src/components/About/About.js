import { React, useState } from 'react';
import styles from './About.module.scss';
import Transition from '../Transition/Transition';
import Avatar from '../UI/Avatar';
import Skills from './Skills';
import Typing from 'react-typing-animation';
import Scroll from '../UI/Scroll';
import { useSpring, animated } from 'react-spring';
import LimitBar from '../UI/LimitBar';


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
    const [skill, setSkill] = useState(skills);

    //variables for "string tags" which I can use inside jsx tags
    const aboutOpenTag = '<About>';
    const aboutClosedTag = '</About>';
    const mySkillsOpenTag = '<Main skills>';
    const mySkillsClosedTag = '</Main skills>';
    const languageOpenTag = '<Languages>';
    const languageClosedTag = '</Languages>';

    return (
        <div>
            <Transition />

            <div className={styles.about}>
                <div className={styles.resume}>
                    <a href="https://github.com/WeissDotEXE" target="_blank"><button><i class="fab fa-github"></i></button></a>
                    <button id={styles.resumeBtn}><i class="fas fa-download"></i>Resume</button>
                    <a href="https://www.linkedin.com/in/mihnea-cristian-tache-022a2b202/" target="_blank"><button><i class="fab fa-linkedin"></i></button></a>
                </div>
                <Typing startDelay={1600} speed={30} >
                    <div className={styles.aboutHeader} >
                        <p>{aboutOpenTag}</p>
                    </div>
                </Typing>
                <div className={styles.aboutText}>
                    <p id={styles.aboutTxt}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <Typing startDelay={2000} speed={30}>
                    <div className={styles.aboutHeader} >
                        <p>{aboutClosedTag}</p>
                    </div>
                </Typing>
                <LimitBar />

                <div className={styles.avatar}>
                    <Avatar />
                </div>


                <Typing startDelay={2600} speed={30}>
                    <div className={styles.aboutHeader} >
                        <p>{mySkillsOpenTag}</p>
                    </div>
                </Typing>
                <Skills items={skill} />
                <div className={styles.aboutHeader} >
                    <p>{mySkillsClosedTag}</p>
                </div>
                <LimitBar />

                <div>
                    <div className={styles.aboutHeader} >
                        <p>{languageOpenTag}</p>
                    </div>
                    <div className={styles.languages}>
                        <table>
                            <tr>
                                <th>// Native</th>
                                <th>// Advanced</th>
                                <th>// Basic</th>
                            </tr>
                            <tr>
                                <td>Romanian</td>
                                <td>English</td>
                                <td>Chinese</td>
                            </tr>
                        </table>
                    </div>
                    <div className={styles.aboutHeader} >
                        <p>{languageClosedTag}</p>
                    </div>
                </div>
                <Scroll />
            </div>
        </div>
    );
}

export default About;