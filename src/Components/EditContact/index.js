import { useState } from 'react';
import styles from './index.module.css';
import {updateUser} from '../../Services/user';
import { FaFacebook, FaPinterest, FaUserAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const EditContacts = ({ me, setEdit }) => {
    const [update, setUpdate] = useState({});
    const changeHandler = (e) => {
        setUpdate({
            [e.target.id]: e.target.value,
        })
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        setEdit(false)
        updateUser(me._id, update)
            .then((res) => setEdit(false))
            .catch(err => console.log(err))

    }
    return (
        <form className={ styles.updateForm } id="updateInfo" onSubmit={ submitHandler }>
            <div className={ styles.nameWrapper }>
                <FaUserAlt className={ styles.icons } />
                <div className={ styles.nameInputWrapper }>
                    <input className={ styles.nameInput } defaultValue={ me.name } type="text" id="name" onChange={ changeHandler } />
                    <input className={ styles.nameInput } defaultValue={ me.surname } type="text" id="surname" onChange={ changeHandler } />
                </div>
            </div>
            <div className={ styles.editSocial }>
                <div className={ styles.divWrapper }>
                    <FaFacebook className={ styles.icons } />
                    <input className={ styles.inputEdit } defaultValue={ me.fb } id="fb" type="text" onChange={ changeHandler } />
                </div>
                <div className={ styles.divWrapper }>
                    <RiInstagramFill className={ styles.icons } />
                    <input className={ styles.inputEdit } defaultValue={ me.insta } id="insta" type="text" onChange={ changeHandler } />
                </div>
                <div className={ styles.divWrapper }>
                    <FaPinterest className={ styles.icons } />
                    <input className={ styles.inputEdit } defaultValue={ me.pin } id="pin" type="text" onChange={ changeHandler } />
                </div>
            </div>
            <button className={ styles.button }>UPDATE</button>
        </form>
    );
}

export default EditContacts;