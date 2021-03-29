import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import styles from "./index.module.css";
import { openImgInput } from "../../Utils/eventHandlers";
import { uploadImage } from '../../Utils/imgUploader'
import submitData from '../../Services/submitData'
import Loader from '../../Components/Loader';
const Add = () => {
  const history = useHistory();
  const [img, setImg] = useState([])
  const [loading, setLoading] = useState(false)
  const [painting, setPainting] = useState({
    profile: '',
    title: "",
    material: "",
    mediums: "",
    subject: "",
    width: "",
    length: "",
    depth: "",
    description: "",
  });

  const onChangeHandler = (e) => {
    setPainting({
      ...painting,
      [e.target.id]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    submitData(img, painting, "create")
      .then(res => {
        setLoading(false);
        history.push(`/${painting.subject}s`)
      })
      .catch(err => console.log(err))

  }
  useEffect(() => { }, [img]);

  return (
    <div className={ styles.wrapper }>
      {!loading && <Loader className={ styles.addLoader } /> }
      <h1 className={ styles.title }>Add Painting</h1>

      <form className={ `${styles.form} ${loading && styles.loading}` } onSubmit={ submitHandler }>
        <span id="addPhotos" className={ styles.addPhotos } onClick={ () => { openImgInput('fileInput') } }>
          Add Photos
        </span>
        <input className={ styles.addFile } id="fileInput" type="file" multiple="multiple" onChange={ (e) => { uploadImage(e, setImg) } } />
        <div className={ styles.imageWrapper }>{ img ? img.map((x) => <img className={ styles.images } key={ x } src={ x } />) : null }</div>
        <input className={ styles.input } type="text" id="title" placeholder="Title" onChange={ onChangeHandler } />
        <div className={ styles.selectWrapper }>
          <select name="material" className={ styles.select } id="material" onChange={ onChangeHandler }>
            <option value="">Material</option>
            <option value="canvas">Canvas</option>
            <option value="paper">Paper</option>
            <option value="canvas board">Canvas board</option>
          </select>
          <select name="mediums" className={ styles.select } id="mediums" onChange={ onChangeHandler }>
            <option value="">Mediums</option>
            <option value="acrylic">Acrylic</option>
            <option value="oil">Oil</option>
            <option value="watercolor">Watercolor</option>
            <option value="mixed media">Mixed Media</option>
          </select>
          <select name="subject" className={ styles.select } id="subject" onChange={ onChangeHandler }>
            <option value="">Subject</option>
            <option value="portrait">Portrait</option>
            <option value="abstract">Abstract</option>
            <option value="landscape">Landscape</option>
          </select>
        </div>

        <div className={ styles.sizeWrapper }>
          <input className={ styles.size } id="width" type="text" placeholder="Width" onChange={ onChangeHandler } />
          <input className={ styles.size } id="length" type="text" placeholder="Length" onChange={ onChangeHandler } />
          <input className={ styles.size } id="depth" type="text" placeholder="Depth" onChange={ onChangeHandler } />
        </div>
        <textarea className={ styles.textarea } id="description" placeholder="Art Description" onChange={ onChangeHandler } />
        <button className={ styles.button }>Submit</button>
      </form>
    </div>
  );
};

export default Add;
