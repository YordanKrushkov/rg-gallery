import { useState, useContext, useEffect } from "react";
import EditArtistBio from '../../Components/EditArtisBio';
import Loader from '../../Components/Loader'
import submitData from '../../Services/submitData'
import {getMyData} from "../../Services/user";
import { uploadSingleImage } from '../../Utils/imgUploader';
import { hoverHandler, hoverOut, openImgInput } from "../../Utils/eventHandlers";
import { AuthContext } from "../../Context";
import { Image } from 'cloudinary-react'
import { FaEdit } from "react-icons/fa";
import styles from "./index.module.css";

const About = () => {
  const [me, setMe] = useState({});
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState('');
  const [editIcons, setEditIcons] = useState(false);
  const [img, setImg] = useState([])
  const context = useContext(AuthContext);
  const { isAuthenticated } = context;
  const isAuth = isAuthenticated;

  const showEdit = () => {
    if (edit) {
      setEdit(false)
    } else {
      setEdit(true)
    }
  }

  useEffect(() => {
    getMyData()
      .then((data) => setMe({ ...data }))
      .catch((e) => {
        console.log("cv error:", e);
      });
  }, [uploadSingleImage, edit]);

  const changeProfile = (e) => {
    uploadSingleImage(e, setImg)
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    submitData(img, { id: me._id, description: description, oldImg: me.img }, 'updateUser')
      .then(res => {
        setEdit(false)
      }
      ).catch(err => console.log(err))
  };

  return (
    <div className={ styles.wrapper } onMouseEnter={ () => hoverHandler(setEditIcons) } onMouseLeave={ () => hoverOut(setEditIcons) }>
      <div className={ styles.body }>
        { me.img
          ? <div className={ styles.info }>
            <div
              className={ styles.imgWrapper }>
              { edit && isAuth && <FaEdit className={ styles.iconOne } id="editProfileImg" onClick={ () => { openImgInput("profileImgInput") } } /> }
              <input className={ styles.addFile } id="profileImgInput" type="file" multiple="multiple" onChange={ changeProfile } />
              { !img[0] ? <Image className={ styles.img } publicId={ me.img } cloudName="rggallery" /> || <Loader /> :
                <img className={ styles.img } src={ img[0] } alt="uploaded" /> }
            </div>
            <div className={ styles.text }>
              { editIcons && isAuth && <FaEdit className={ styles.icon } id="editText" onClick={ showEdit } /> }
              { !edit
                ? <p className={ styles.p } id="paragraph">{ me.bio }</p>
                : <EditArtistBio setEdit={ setEdit } submitHandler={ submitHandler } setDescription={ setDescription } me={ me } />
              }
            </div>
          </div> : <Loader /> }
      </div>
    </div>
  );
};

export default About;
