import styles from './index.module.css';
import emailjs from 'emailjs-com';

const SendEmail = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fe5eeh2', 'template_phwyfc2', e.target, 'user_guUortiRQj9e60clgIKdI')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <form className={ styles.form } onSubmit={ sendEmail }>
      <input className={ styles.input } type="text" id="name" name="name" placeholder="Name" />
      <input className={ styles.input } type="email" id="email" name="email" placeholder="Email" />
      <input className={ styles.input } type="text" id="subject" placeholder="Subject" name="subject" />
      <textarea className={ styles.textarea } name="message" id="message" cols="30" rows="10" placeholder="Message" />
      <button className={ styles.button }>Send</button>
    </form>
  );
}

export default SendEmail;