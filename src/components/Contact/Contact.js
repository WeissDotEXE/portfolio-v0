import React from "react";
import styles from "./Contact.module.scss";
import Transition from "../Transition/Transition";
import background from "../Images/contact-background.jpg";

const Contact = () => {
  return (
    <div>
      <Transition />
      <div className={styles.contact}>
      <img src={background} />
      <div className={styles.text}>
        <h1>Have a question or want to work together?</h1>
        <div className={styles.email}>
          <i class="far fa-envelope"></i>
          <p>futuremail@gmail.com</p>
        </div>
      </div>
      <form>
        <label>Full Name</label>
        <input
          id={styles.simple_input}
          type="text"
          placeholder="Sebastian John"
        />
        <label>Email</label>
        <input
          id={styles.simple_input}
          type="email"
          placeholder="sebastianjohn@test.com"
        />
        <label>Message</label>
        <textarea
          id={styles.msg_input}
          type="message"
          placeholder="I just wanna say you are awesome!"
        ></textarea>
        <button type="submit">Send</button>
      </form>

      <div className={styles.social}>
        <h1 id={styles.social_txt}>Social</h1>
        <a href="https://www.linkedin.com/in/mihnea-cristian-tache-022a2b202/" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="https://www.linkedin.com/in/mihnea-cristian-tache-022a2b202/" target="_blank"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
    </div>
  );
};

export default Contact;
