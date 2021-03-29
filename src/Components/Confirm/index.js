import styles from './index.module.css'


const DeleteConfirm = ({ isConfirm, isDeleteEl }) => {
    const clickHandler = (e) => {
        if (e.target.textContent === "Yes") {
            isConfirm(true)
            isDeleteEl(false)

        } else if (e.target.textContent === "No") {
            isConfirm(false)
            isDeleteEl(false)

        }
    }

    return (
        <div className={ styles.container } id='confirm' onClick={ clickHandler }>
            <div className={ styles.wrapper }>
                <h5 className={ styles.h5 }>Are you sure you want to delete this item?</h5>
                <div className={ styles.buttonsWrapper }>
                    <button className={ styles.button }>Yes</button>
                    <button className={ styles.button }>No</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteConfirm;