import React from 'react';
import styles from './SideBarItem.module.scss'
import {NavLink} from 'react-router-dom'

interface Props {
  name: string;
  link: string;
  icon: string;
}

const SideBarItem = ({name, link, icon}:Props) => {

    return (
      <NavLink
        to={link}
        className={styles.link}
        activeClassName={styles.active}
        exact
      >
        <svg className={styles.icon}>
          <use xlinkHref={window.location.origin + icon}></use>
        </svg>
        <span>{name}</span>
      </NavLink>
    );
}

export default SideBarItem;