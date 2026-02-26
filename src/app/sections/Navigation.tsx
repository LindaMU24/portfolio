import styles from '../page.module.css';

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className={`${styles.sectionInner} py-4 flex justify-end items-center`}>
        <div className="flex gap-8">
          <a href="#projects" className={styles.navLink}>Projekt</a>
          <a href="#skills" className={styles.navLink}>Färdigheter</a>
          <a href="#contact" className={styles.navLink}>Kontakt</a>
        </div>
      </div>
    </nav>
  );
}
