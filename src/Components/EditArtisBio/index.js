import styles from './index.module.css';

const EditArtistBio = ({ me, setDescription, submitHandler }) => {
    const onChangeHandler = (e) => {
        setDescription(
            e.target.value
        );
    };
    return (
        <form className={ styles.form } id="aboutForm" onSubmit={ submitHandler } >
            <textarea className={ styles.textArea } defaultValue={ me.bio } name="about" id="about" onChange={ onChangeHandler } />
            <button className={ styles.button } type="submit" id="textButton">
                Submit
            </button>
        </form>
    );
}

export default EditArtistBio;