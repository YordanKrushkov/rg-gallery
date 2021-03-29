import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { openImgInput } from "../../Utils/eventHandlers";
import { uploadImage } from '../../Utils/imgUploader';
import submitData from '../../Services/submitData';
import {deletePainting} from '../../Services/paintings';
import Loader from '../../Components/Loader';
import styles from './index.module.css';

const Edit = ({ info, setShowEdit, isDeletePainting, confirmDelete, path }) => {
  const history = useHistory()
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(false)
  const [painting, setPainting] = useState({});
  useEffect(() => {
  }, [img])

  const onChangeHandler = async (e) => {
    setPainting({
      ...painting,
      [e.target.id]: e.target.value,
    });
  };
  useEffect(() => {
    setPainting({
      ...info
    })
  }, [])
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    submitData(img, { id: info._id, painting: painting }, 'updateone')
      .then(res => {
        setShowEdit(false);
        setLoading(false);
      }).catch(err => {
        console.log(err);
      })
  }

  const deleteHandler = (e) => {
    isDeletePainting(true);
  }

  useEffect(() => {
    if (confirmDelete) {
      setLoading(true)
      deletePainting(info._id, info.imgs)
        .then(res => {
          setLoading(false)
          history.push(`/${path}s`)
        })
        .catch(err => console.log(err))
    }
  }, [confirmDelete])

  return (
    <div className={ styles.wrapper }>
      <h2 className={ styles.h2 }>Edit painting</h2>
      <form className={ `${styles.form} ${loading && styles.inLoading}` } onSubmit={ submitHandler }>
        <div className={ styles.imageWrapper }>
          { img.length !== 0 && img.map(x => <img className={ styles.img } key={ x } src={ x } />) }
        </div>
        <span id="addPhotos" className={ styles.addPhotos } onClick={ () => { openImgInput('fileInput') } }>
          Add Photos
        </span>
        <input className={ styles.addFile } id="fileInput" type="file" multiple="multiple" onChange={ (e) => uploadImage(e, setImg) } />
        <input className={ styles.title } type="text" defaultValue={ info.title } name="title" id="title" onChange={ onChangeHandler } />
        <div className={ styles.details }>
          <select name="material" className={ styles.select } defaultValue={ info.material } id="material" onChange={ onChangeHandler } >
            <option className={ styles.option } value="canvas">Canvas</option>
            <option className={ styles.option } value="paper">Paper</option>
            <option className={ styles.option } value="canvas board">Canvas board</option>
          </select>
          <select name="mediums" className={ styles.select } defaultValue={ info.mediums } id="mediums" onChange={ onChangeHandler }>
            <option className={ styles.option } value="acrylic">Acrylic</option>
            <option className={ styles.option } value="oil">Oil</option>
            <option className={ styles.option } value="watercolor">Watercolor</option>
            <option className={ styles.option } value="mixed media">Mixed Media</option>
          </select>
          <select name="subject" className={ styles.select } defaultValue={ info.subject } id="subject" onChange={ onChangeHandler }>
            <option className={ styles.option } value="portrait">Portrait</option>
            <option className={ styles.option } value="abstract">Abstract</option>
            <option className={ styles.option } value="landscape">Landscape</option>
          </select>
        </div>
        <div className={ styles.sizeWrapper }>

          <input className={ styles.size } defaultValue={ info.length } id="length" type="text" onChange={ onChangeHandler } />
          <input className={ styles.size } defaultValue={ info.width } id="width" type="text" onChange={ onChangeHandler } />
          <input className={ styles.size } defaultValue={ info.depth } id="depth" type="text" onChange={ onChangeHandler } />
        </div>
        <textarea className={ styles.textarea } id="description" defaultValue={ info.description } onChange={ onChangeHandler } />
        <button type="submit" className={ styles.button }>Submit</button>
      </form>
      <button className={ `${styles.button} ${styles.delete}` } onClick={ deleteHandler }>Delete</button>
      {loading && <Loader className={ styles.detailsLoader } /> }

    </div>
  );
}

export default Edit;
