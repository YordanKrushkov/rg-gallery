import styles from './index.module.css';

const Loader = ({ className }) => {
    return (
        <div className={ `${styles.ring} ${className}` }></div>
    );
}

export default Loader;
