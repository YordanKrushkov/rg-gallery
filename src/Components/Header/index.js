import { useContext, useState } from 'react'
import { AuthContext } from '../../Context';
import styles from "./index.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Mobile from './Mobile'
import Navigation from './Navigation'

const Header = () => {
  const [mobile, setMobile] = useState(false)
  const context = useContext(AuthContext);
  const { isAuthenticated } = context
  const isAuth = isAuthenticated;

  const clickHandler = (e) => {
    if (mobile) {
      setMobile(false)
    } else {
      setMobile(true)

    }
  };
  const navClick = (e) => {
    setMobile(false);
  }

  return (
    <div className={ `${styles.wrapper} ${mobile && styles.extend}` } id="wrapper">

      <GiHamburgerMenu className={ styles.mobileMenu } onClick={ clickHandler } />
      {mobile ? <Mobile navClick={ navClick } isAuth={ isAuth } /> : <Navigation isAuth={ isAuth } /> }
    </div>
  );
};
export default Header;
