import React from 'react';
import styles from './HomePageComponents.module.scss';
import logo from '../../../Assets/logo-white.png';

const HomePageFooter = () => {


    return (
        <footer className={styles.footer}>
            <div className={styles.footer__logo}>
                <img src={logo} alt="Logo" className={styles.footer__logo_box}/>
            </div>
            <div className={styles.footer__nav}>
                <div className={styles.footer__nav_box}>
                    <ul className={styles.footer__list}>
                        <li className={styles.footer__item}>Company</li>
                        <li className={styles.footer__item}>Contact Us</li>
                        <li className={styles.footer__item}>Careers</li>
                        <li className={styles.footer__item}>Privacy</li>
                        <li className={styles.footer__item}>Terms</li>
                    </ul>
                </div>
            <div className={styles.footer__copyright}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis.
            </div>
            </div>
        </footer>

    )
}


export default HomePageFooter;