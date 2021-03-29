import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import styles from './index.module.css';
import { AuthContext } from '../../Context';
import authenticate from '../../Services/auth'
const url = 'https://rg-gallerybackend.herokuapp.com/login';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const context = useContext(AuthContext)
    const history = useHistory();
    const [er, setEr] = useState(false)
    const changeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const { email, password } = user;
        authenticate(url, { email, password }, (user) => {
            context.login(user.email);
            localStorage.setItem('user', user.email)
            history.push('/')
        }, (err) => {
            console.log('error submit', err);
            setEr(true);
            return
        })
    }
    if(er){
        setTimeout(()=>{
            setEr(false)
        },1000)
    }

    return (
        <div className={ styles.wrapper }>
            <h1 className={ styles.title }>Login</h1>
            {er && <h6 className={ styles.error }>Wrong password or email. Please try again!</h6> }
            <form className={ styles.form } onSubmit={ submitHandler }>
                <input className={ styles.input } type="email" name="email" onChange={ changeHandler } />
                <input className={ styles.input } type="password" name="password" onChange={ changeHandler } />
                <button className={ styles.button }>Log in</button>
            </form>
        </div>
    );
}

export default Login;