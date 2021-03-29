import styles from './index.module.css';
import { FaFacebook, FaPinterest} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const ArtistInfo = ({ me }) => {
  return (
    <div className={ styles.contactInfo } id='contactInfo'>
      { me.name && <h1 className={ styles.author }>{ me.name } { me.surname }</h1>}
      { me.fb && <div className={ styles.socialMedia }>
        <a href={ me.fb } target="blank">
          <FaFacebook className={ styles.icons } />
        </a>
        <a href={ me.insta } target="blank">
          <RiInstagramFill className={ styles.icons } />
        </a>
        <a href={ me.pin } target="blank">
          <FaPinterest className={ styles.icons } />
        </a>
      </div>}
    </div>
  );
}

export default ArtistInfo;