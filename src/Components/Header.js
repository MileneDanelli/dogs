import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const context = React.useContext(UserContext);

  return (
    <header className={styles.Header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs-Home" className={styles.logo}>
          <Dogs />
        </Link>
        <Link to="/login" className={styles.login}>
          {context.usuario}
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
