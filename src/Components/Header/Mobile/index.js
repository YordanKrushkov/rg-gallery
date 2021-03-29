import styles from './index.module.css'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";

const Mobile = ({ navClick, isAuth }) => {
    return (
        <nav className={ styles.mobile } id="mobileNav" onClick={ navClick }>
            <ul className={ styles.mobileUl }>
                <li className={styles.emptylist}></li>
                <li className={ styles.mobileLi }>
                    <Link to="/" className={ styles.mobileLink }>
                        Home
        </Link>
                </li>
                <li className={ `${styles.mobileLi}` }>
                    <Link to="/about" className={ styles.mobileLink }>
                        About
        </Link>
                </li>
                <li className={ `${styles.mobileLi}` }>
                    <Link to="/portraits" className={ styles.mobileLink }>
                        Portraits
        </Link>
                </li>
                <li className={ `${styles.mobileLi}` }>
                    <Link to="/abstracts" className={ styles.mobileLink }>
                        Abstracts
        </Link>
                </li>
                <li className={ `${styles.mobileLi}` }>
                    <Link to="/landscapes" className={ styles.mobileLink }>
                        Landscapes
        </Link>
                </li>
                <li className={ `${styles.mobileLi}` }>
                    <Link to="/contacts" className={ styles.mobileLink }>
                        Contacts
        </Link>
                </li>
                { isAuth ? <li className={ `${styles.mobileLi}` }>
                    <Link to="/add" className={ styles.mobileLink }>
                        Add
        </Link>
                </li> :
                    <li className={ styles.mobileLi }>
                        <Link to="/login" className={ styles.link }>
                            <FaUser className={ styles.user } />
                        </Link>
                    </li>
                }

            </ul>
        </nav>

    )
}
export default Mobile