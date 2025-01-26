

import styles from "./Contact.module.css";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/assets/contact/emailicon.png" alt="Email icon" href="abhijeetkarne47@gmail.com" />
          <a href="abhijeetkarne47@gmail.com">abhijeetkarne47@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="/assets/contact/githubicon.png"
            href="https://www.linkedin.com/in/abhijeet-karne-a13799255"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/abhijeet-karne-a13799255/">https://www.linkedin.com/in/abhijeet-karne-a13799255/</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/linkedinicon.png" alt="Github icon" href="https://github.com/imabhijeetkarne"/>
          <a href="https://github.com/imabhijeetkarne">https://github.com/imabhijeetkarne</a>
        </li>
      </ul>
    </footer>
  );
};
