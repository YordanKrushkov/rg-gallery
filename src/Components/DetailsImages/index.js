import styles from './index.module.css';
import { useState, useEffect } from 'react'
import {deleteAndUpdate,changeProfile} from '../../Services/paintings' 
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Image } from 'cloudinary-react'
const Images = ({ info, id, isAuth, setShowEdit, showEdit, isDeleteEl, confirm }) => {

    const [deleteIMG, setDeleteImage] = useState('');
    const [first, setFirst] = useState(info.profile)
    const [state, setState] = useState({
        backgroundImage: 'none',
        backgroundPosition: '0% 0%',
    })
    const clickHandler = (e) => {
        const imgId = e.currentTarget.src.split('upload/')[1];
        setFirst(imgId)
        setState({
            backgroundImage: `none`,
            backgroundPosition: ``
        })

    }
    const handleMouseOut = () => {
        setState({
            backgroundImage: `none`,
            backgroundPosition: ``
        })
    }

    const drop = (e) => {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        e.target.src = data;
        let url = data.split('upload/')[1]
        changeProfile(info._id, url)
            .then(res => setShowEdit(false))
            .catch(err => console.log(err))
    }
    const drageventHandler = (e) => {
        e.dataTransfer.setData("text", e.target.src);
    }
    const allowDrop = (e) => {
        e.preventDefault();
    }
    const handleMouseMove = (e) => {

        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 75
        let url = e.target.src;

        setState({
            backgroundImage: `url(${url})`,
            backgroundPosition: `${x}% ${y}%`
        })
    }

    const deleteHandler = (e) => {
        let img = e.currentTarget.previousSibling.src;
        let imgid = img.split('upload/')[1];
        setDeleteImage(imgid);
        isDeleteEl(true);
    }
    useEffect(() => {
        if (confirm) {
            deleteImage(deleteIMG);
        } else {
            isDeleteEl(false)
        }

    }, [confirm])
    const deleteImage = (deleteIMG) => {
        if (confirm) {
            deleteAndUpdate(id, deleteIMG)
                .then(res => setShowEdit(false))
                .catch(err => console.log(err))
        }
    }

    return (
        <div className={ styles.mainPhotoWrapper } id="mainProfile">
            <div style={ state } className={ styles.profilePictureWrapper } onDrop={ isAuth ? drop : null } onDragOver={ isAuth ? allowDrop : null } onMouseMove={ window.innerWidth > 650 ? handleMouseMove : null } onMouseLeave={ window.innerWidth > 650 ? handleMouseOut : null }>
                <Image className={ styles.mainPhoto } publicId={ first || info.profile } cloudName="rggallery" />
            </div>
            <div className={ styles.smallImagesWrapper }>
                {
                    info.imgs
                        ? info.imgs.map(x => <div className={ styles.smallImage } key={ x }>
                            <Image className={ styles.smallImages } draggable="true" onDrag={ isAuth ? drageventHandler : null } publicId={ x } cloudName="rggallery" onClick={ clickHandler } />
                            { showEdit ? <AiOutlineCloseCircle className={ styles.close } onClick={ deleteHandler } /> : null }
                        </div>)
                        : null }
            </div>
        </div>
    );
}

export default Images;