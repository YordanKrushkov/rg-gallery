import { useContext, useState, useEffect } from 'react';
import styles from "./index.module.css";
import { FaEdit } from "react-icons/fa";
import EditContacts from '../../Components/EditContact'
import SendEmail from '../../Components/SendEmail'
import ArtistInfo from '../../Components/ArtistInfo'
import { hoverHandler, hoverOut, openImgInput } from '../../Utils/eventHandlers'
import { AuthContext } from "../../Context";
import Loader from '../../Components/Loader'
import {getMyData} from "../../Services/user";
const Contact = () => {
  
  const context = useContext(AuthContext);
  const { isAuthenticated } = context;
  const isAuth = isAuthenticated;
  const [me, setMe] = useState({});
  const [edit, setEdit] = useState(false);
  const [editIcon, setEditIcon] = useState(false);

  useEffect(() => {
    getMyData()
      .then((data) => setMe({ ...data }))
      .catch((e) => {
        console.log("cv error:", e);
      });

  }, [edit]);

  const showEdit = (e) => {
    if (edit) {
      setEdit(false)
    } else {
      setEdit(true)
    }
  }
  useEffect(() => {
    console.log(edit);
  }, [edit]);

  return (
    <div className={ styles.wrapper } id="contactWrapper" onMouseOver={ () => hoverHandler(setEditIcon) } onMouseLeave={ () => hoverOut(setEditIcon) }>
      <div className={ styles.container }>
        <div className={ styles.header } >
          { me.cover ? <img className={ styles.img } src={ me.cover } alt="header" /> :
            <Loader className={ styles.contactLoader } /> }
        </div>
        <div className={ styles.contactsWrapper } id="changeInfo" >
          { editIcon && isAuth &&
            <span className={ styles.name }  >
              <FaEdit onClick={ showEdit } />
            </span> }
          { edit && isAuth ? <EditContacts setEdit={ setEdit } me={ me } /> : <ArtistInfo showEdit={ showEdit } me={ me } /> }
        </div>
        { me.email ? <div className={ styles.formWrapper }>
          <h1 className={ styles.title }>Say hello</h1>
          <SendEmail />
        </div> : null }
      </div>
    </div>
  );
};

export default Contact;
