import React from 'react';
import SearchBar from '../../Utilities/SearchBar/Searchbar';
import NavIcon from './NavIcon/NavIcon';
import styles from './Navbar.module.scss';

const Navbar = () => {
  

    return (
      <header className={styles.header}>
        <img
          src={window.location.origin + "/img/logo.png"}
          className={styles.logo}
          alt=''
        />
        <SearchBar />
        <nav className={styles.navbar}>
          <NavIcon icon={window.location.origin +"/img/sprite.svg#icon-bookmark"} notification={7} />
          <NavIcon icon={window.location.origin+"/img/sprite.svg#icon-chat"} notification={13} />
          <div className={styles.navbar__user}>
            <img
              src={window.location.origin+ "/img/user-2.jpg"}
              className={styles.navbar__userphoto}
              alt=''
            />
            <span className={styles.navbar__username}>Hilda</span>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;