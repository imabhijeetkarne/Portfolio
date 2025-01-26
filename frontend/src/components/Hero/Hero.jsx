

import styles from "./Hero.module.css";

export const Hero = () => {
    const downloadResume = () => {
        const resumeUrl = "/assets/hero/resume.pdf"; // Direct access to the file in the public folder
        window.open(resumeUrl, "_blank");
      };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Abhijeet Karne</h1>
        <p className={styles.description}>
          I am a full-stack developer with experience using MERN Stack and JAVA Software development. I have hands-on experience working with both front-end and back-end technologies through internships and personal projects. Committed to continuous learning and applying technical skills to develop effective solutions that meet industry standards. Reach out if you would like to learn more!
        </p>
        <div className={styles.buttonGroup}>
          <button
            onClick={downloadResume}
            className={styles.contactBtn}
          >
            Download Resume
          </button>
        </div>
      </div>
      <img
  src="/assets/hero/heroImage1.jpg"
  alt="Hero image of me"
  className={styles.heroImg}
/>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};