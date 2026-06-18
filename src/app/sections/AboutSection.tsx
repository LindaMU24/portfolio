import styles from '../page.module.css';

export function AboutSection() {
  return (
    <section className="py-24 bg-gray-950">
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitleCompact}>Om mig</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className={styles.aboutCard}>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">🎓 Utbildning</h3>
            <p className="text-gray-300 leading-relaxed">
              Utbildad som Mjukvaruutvecklare för mobilitetstjänster på Folkuniversitetet Yrkeshögskola.
              Stark grund i modern webbutveckling, JavaScript/TypeScript och fullstack-arkitektur.
            </p>
          </div>

          <div className={styles.aboutCard}>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">💡 Fokus</h3>
            <p className="text-gray-300 leading-relaxed">
              Fullstackutveckling med React, TypeScript, Java/Spring Boot och Python. 
              Clean code, performance och användarvänlig design, med särskilt intresse för AI/ML-integration, 
              REST API:er och system som skapar verklig nytta för användare och verksamhet.
            </p>
          </div>

          <div className={styles.aboutCard}>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">👤 Personligt</h3>
            <div className="text-gray-300 leading-relaxed space-y-2">
              <p>📍 Bosatt i Rydebäck</p>
              <p>👨‍👩‍👧‍👦 Gift, två barn</p>
              <p>🎂 49 år</p>
              <p>🚗 Körkort A + B</p>
            </div>
          </div>

          <div className={styles.aboutCard}>
            <h3 className="text-2xl font-bold mb-4 text-green-400">🌟 Drivkraft</h3>
            <p className="text-gray-300 leading-relaxed">
              Motiveras av att omsätta idéer till användarvänliga, robusta produkter 
              som skapar verklig nytta. Älskar att lära mig nya teknologier (särskilt AI/ML och fullstack), 
              dela kunskap med team, och förstå varför lösningar behövs, inte bara hur man kodar dem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
