import styles from "./index.module.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Image } from 'cloudinary-react'
import {getPaintings} from '../../Services/paintings'
import Loader from '../Loader'

const Gallery = () => {

  const [paint, setPaind] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  let filter = history.location.pathname.split('/')[1].slice(0, -1);
  useEffect(() => {
    getPaintings(filter)
      .then((data) => {
        setPaind({ ...data })
        setLoading(false)
      })
      .catch((e) => {
        console.log("cv error:", e);
      });
  }, [])
  const clickHandler = (e) => {
    if (e.target.tagName === 'IMG') {
      history.push(`details/${filter}/${e.target.id}`)
    }
  }

  return (
    <div className={ styles.container }>
      <div className={ styles.wrapper } onClick={ clickHandler }>
        { loading ? <Loader />
          : Object.values(paint).map(x => {
            return (<div key={ x._id } className={ styles.imgWrapper }>
              <Image id={ x._id } publicId={ x.profile } cloudName="rggallery" className={ styles.img } />
            </div>)
          })
        }
      </div>
    </div>
  );
};

export default Gallery;
