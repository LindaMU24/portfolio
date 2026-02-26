import styles from '../page.module.css';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <div className={styles.sectionInner}>
        <div className={styles.contactPanel}>
          <h2 className="text-5xl font-bold mb-6">Låt oss arbeta tillsammans</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Intresserad av att diskutera ett projekt eller samarbete?
            Jag älskar nya utmaningar och möjligheter!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:linda.blomkvist@gmail.com" className={styles.primaryButton}>
              ✉️ E-posta mig
            </a>
            <a
              href="https://www.linkedin.com/in/linda-blomkvist-597b13174/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.outlineButton}
            >
              💼 LinkedIn
            </a>
            <a
              href="https://github.com/LindaMU24"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.outlineButton}
            >
              🐙 GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
