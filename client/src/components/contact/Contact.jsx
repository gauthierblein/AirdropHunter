import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_jktf1yk', form.current, '1Sq8JHlMS-famfuMK')
      .then((result) => {console.log(result.text);
      }, (error) => {console.log(error.text);
      });
  }

  return (
    <div name="contact" className="contact">
      <div className="contact-container">
        <h2>Contact</h2>
        <p>Remplissez le formulaire ci-dessous pour me contacter directement</p>

        <div className="input-container">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Votre nom"/>
            <input type="text" name="email" placeholder="Votre email"/>
            <textarea
              name="message"
              placeholder="Ecrivez votre message"
              rows="8"
            ></textarea>
            <div className="btn-container">
              <button onSubmit={sendEmail}>Ecrivez-moi</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
