import React, { useState } from 'react';
import styles from './SkillsItem.module.scss';
import SkillCard from '../UI/SkillCard';
import Skills from './Skills';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SkillsItem = (props) => {

    const [skillShow, setSkillShow] = useState(false);

    let skillDetail = null;
    if (skillShow) {
        skillDetail = <div>
            <SkillCard name={props.name} image={props.image} text={props.text} />
        </div>
    }

    return (
        <div className={styles.skillItem} onMouseEnter={()=>setSkillShow(true)} onMouseLeave={()=>setSkillShow(false)}>
            {skillDetail}
            <i className={props.image}></i>
            <h5>{props.name}</h5>
        </div>
    );
}

export default SkillsItem;