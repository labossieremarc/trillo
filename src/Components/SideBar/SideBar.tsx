import React from 'react';
import styles from './Sidebar.module.scss'
import SideBarItem from './SideBarItem/SideBarItem';

const SideBar = () => {
  const sideBarItems = [
    {
      name: "Hotel",
      link: "/trillo/hotel",
      icon: "/img/sprite.svg#icon-home",
    },
    {
      name: "Flight",
      link: "/trillo/flight",
      icon: "/img/sprite.svg#icon-aircraft-take-off",
    },
    {
      name: "Rentals",
      link: "/trillo/rental",
      icon: "/img/sprite.svg#icon-key",
    },
    {
      name: "Tours",
      link: "/trillo/tours",
      icon: "/img/sprite.svg#icon-map",
    },
  ];
    return (
      <>
        <nav className={styles.sidebar}>
          <ul className={styles.nav}>
            {sideBarItems.map((value, key) => (
            <li className={styles.nav__item} key={key}>
              <SideBarItem name={value.name} link={value.link} icon={value.icon}/>
            </li>
            ))}
          </ul>
          <div className={styles.legal}>
            &copy; 2021 by trillo. All rights reserved.
          </div>
        </nav>
      </>
    );
}

export default SideBar;