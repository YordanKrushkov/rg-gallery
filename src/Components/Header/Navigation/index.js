import styles from './index.module.css';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";


const Navigation = ({ isAuth }) => {
    return (
        <nav className={ styles.nav }>
            <ul className={ styles.ul }>
                <li className={ styles.li }>
                    <Link to="/" className={ styles.link }>
                        Home
            </Link>
                </li>
                <li className={ `${styles.li} ${styles.border}` }>
                    <Link to="/about" className={ styles.link }>
                        About
            </Link>
                </li>
                <li className={ `${styles.li} ${styles.border}` }>
                    <Link to="/portraits" className={ styles.link }>
                        Portraits
            </Link>
                </li>
                <li className={ `${styles.li} ${styles.border}` }>
                    <Link to="/abstracts" className={ styles.link }>
                        Abstracts
            </Link>
                </li>
                <li className={ `${styles.li} ${styles.border}` }>
                    <Link to="/landscapes" className={ styles.link }>
                        Landscapes
            </Link>
                </li>
                <li className={ `${styles.li} ${styles.border}` }>
                    <Link to="/contacts" className={ styles.link }>
                        Contacts
            </Link>
                </li>
                { isAuth ? <li className={ `${styles.li} ${styles.border}` }>
                    <Link to="/add" className={ styles.link }>
                        Add
            </Link>
                </li>
                    : null }
                <li className={ `${styles.li} ${styles.border}` }>
                    <Link to="/login" className={ styles.link }>
                        <FaUser className={ styles.user } />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;