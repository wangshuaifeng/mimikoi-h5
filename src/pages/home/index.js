import React from 'react';
import { Link } from 'react-router-dom'
import styles from './index.module.scss';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
import img5 from './images/5.png';
import img6 from './images/6.png';
import img7 from './images/7.png';
import img8 from './images/8.png';
import img9 from './images/9.png';
import img10 from './images/10.png';
import img11 from './images/11.png';


export default function Home() {
  return (
    <div className={styles.home}>
      <img className={styles.img1} src={img1} alt="" />
      <img className={styles.img2} src={img2} alt="" />
      <img className={styles.img3} src={img3} alt="" />
      <a href="https://www.google.com">
        <img className={styles.img4} src={img4} alt="" />
      </a>
      <Link to="/pay">
        <img className={styles.img5} src={img5} alt="" />
      </Link>
      <img className={styles.img6} src={img6} alt="" />
      <img className={styles.img7} src={img7} alt="" /> 
      <img className={styles.img8} src={img8} alt="" />
      <img className={styles.img9} src={img9} alt="" />
      <img className={styles.img10} src={img10} alt="" />
      <img className={styles.img11} src={img11} alt="" />
    </div>
  );
}