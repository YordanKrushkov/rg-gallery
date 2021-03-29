import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import Edit from '../../Components/editDetails'
import DeleteConfirm from '../../Components/Confirm';
import Images from '../../Components/DetailsImages';
import DetailsInfo from '../../Components/DetailsInfo';
import styles from "./index.module.css";
import {getOne} from '../../Services/paintings';
import { AuthContext } from "../../Context";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
const Details = () => {

  const context = useContext(AuthContext);
  const { isAuthenticated } = context;
  const isAuth = isAuthenticated
  const [info, setInfo] = useState({});
  const [confirm, isConfirm] = useState('')
  const [confirmDelete, isConfirmDelete] = useState('')
  const [deleteEl, isDeleteEl] = useState(false);
  const [deletePainting, isDeletePainting] = useState(false);
  const [showEdit, setShowEdit] = useState(false)
  const history = useHistory();
  let id = history.location.pathname.split('/')[3];
  let path = history.location.pathname.split('/')[2];
  useEffect(() => {
    getOne(id)
      .then((data) => setInfo({ ...data }))
      .catch((e) => {
        console.log("cv error:", e);
      });
  }, [showEdit]);

  const editForm = (e) => {
    if (showEdit) {
      setShowEdit(false)
    } else {
      setShowEdit(true)
    }
  }

  return (
    <div className={ styles.container }>
      {deleteEl && <DeleteConfirm isConfirm={ isConfirm } isDeleteEl={ isDeleteEl } /> }
      {deletePainting && <DeleteConfirm isConfirm={ isConfirmDelete } isDeleteEl={ isDeletePainting } /> }
      <div className={ styles.headerWrapper }>
        <Images info={ info } id={ id } isAuth={ isAuth } showEdit={ showEdit } isDeleteEl={ isDeleteEl } setShowEdit={ setShowEdit } confirm={ confirm } isConfirm={ isConfirm } edit={ setInfo } />
        { showEdit ? <Edit info={ info } path={ path } setShowEdit={ setShowEdit } isDeletePainting={ isDeletePainting } confirmDelete={ confirmDelete } /> : <DetailsInfo info={ info } /> }
        { showEdit && isAuth
          ? <AiOutlineCloseCircle className={ styles.closeForm } onClick={ editForm } />
          : isAuth && <FaEdit className={ styles.editButton } id="editPainting" onClick={ editForm } />
        }
      </div>
    </div>
  );
};

export default Details;
