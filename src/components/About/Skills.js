import React from "react";
import styles from "./Skills.module.scss";
import Card from "../UI/Card";

//STATIC list of objects witch contains skills with title, image and description
const hardSkills = ['Html', 'Css','Bootstrap','Javascript', 'React', 'Figma'];
const softSkills = ['Teamwork' , 'Patience', 'Hardworking' , 'Friendliness', 'Confident' , 'Desire to learn'];
const softSkillName=softSkills.map((sSkill=><p data-aos="fade-up">{sSkill}</p>));
const hardSkillName=hardSkills.map((hSkill=><p data-aos="fade-up">{hSkill}</p>));

const Skills = (props) => {
  return (
    <div className={styles.skill_card}>
      <Card>
        <h1 id={styles.skills_txt}>Soft Skills</h1>
        <i class="fas fa-user-friends"></i>
        {softSkillName}
      </Card>
      <Card id={styles.card2}>
        <h1 id={styles.skills_txt}>Hard skills</h1>
        <i class="fas fa-pencil-ruler"></i>
        {hardSkillName}
      </Card>
    </div>
  );
};

export default Skills;