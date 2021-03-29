import styles from './index.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className={ styles.wrapper }>
            <div className={ styles.between }>
                <div className={ styles.HomeWrapper }>
                    <h1 className={ styles.name }>Ralitsa Georgieva</h1>
                    <h6 className={ styles.prof }>Artist</h6>
                </div>
            </div>
            <Link to={ window.innerWidth > 600 ? '/live' : '/' }>
                <button className={ styles.gallery }>Live gallery
            <div className={ styles.ripple }><div className={ styles.div }></div><div className={ styles.div }></div></div>
                </button>
            </Link>
        </div>
    );
}

export default Home;