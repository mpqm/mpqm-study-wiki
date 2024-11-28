import React from 'react'
import { AiOutlineUp } from 'react-icons/ai';
import styles from '../../styles/styles';

const MoveToTop = () => {
    const moveToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };
    return (<div onClick={moveToTop} className={`${styles.mtt_btn}`}><AiOutlineUp /></div>)
}

export default MoveToTop