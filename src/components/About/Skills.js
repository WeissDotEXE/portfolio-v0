import React from 'react';
import styles from './Skills.module.scss';
import SkillsItem from './SkillsItem';
const Skills = (props) => {

    return (
        <div className={styles.skills}>
            <ul className={styles.skillsList}>
                {props.items.map((skills) => (
                    <SkillsItem
                        key={skills.id}
                        name={skills.skillName}
                        image={skills.image}
                        text={skills.text} />
                ))}
            </ul>
        </div>
    );
}

export default Skills;