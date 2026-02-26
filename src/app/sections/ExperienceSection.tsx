import styles from '../page.module.css';

export function ExperienceSection() {
  return (
    <section className="py-24">
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>Erfarenhet</h2>
        <div className="space-y-6">
          <div className={styles.experienceCardBlue}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-bold">LIA Acceleratorprogrammet</h3>
              <span className={styles.statusPillBlue}>Pågående</span>
            </div>
            <p className="text-blue-400 mb-3">ZoCom | Jan 2026 - Pågående</p>
            <p className="text-gray-400 mb-3">
              Praktik i innovationsteamet med fokus på underhåll och utveckling av både befintliga och nya projekt.
              Arbetar nära senior teknisk chef och bidrar i hela flödet från behov till implementation.
            </p>
          </div>

          <div className={styles.experienceCardBlue}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-bold">Utbildning</h3>
              <span className={styles.statusPillBlue}>Sep 2024 - Pågående</span>
            </div>
            <p className="text-blue-400 mb-3">Folkuniversitetet Yrkeshögskola</p>
            <p className="text-gray-400">
              Mjukvaruutvecklare för mobilitetstjänster. Fokus på webbutveckling,
              API-integration, Java, JavaScript/TypeScript och fullstack-utveckling.
            </p>
          </div>

          <div className={styles.experienceCardBlue}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-bold">Labeldesign och kalkylerering</h3>
              <span className={styles.statusPillBlue}>2019 - 2024</span>
            </div>
            <p className="text-blue-400 mb-3">MM Eson Pac AB, Åstorp</p>
            <p className="text-gray-400">
              Optimerade kunders etikettbehov, tog fram materialförslag och stöttade säljare i tekniska produktionsfrågor.
              Projekterade artiklar i affärssystemet, deltog i kundmöten och tog fram kalkyler för en mer effektiv produktion.
              Rollen gav mig djup förståelse för affärslogik, processflöden och värdet av rätt systemstöd.
            </p>
          </div>

          <div className={styles.experienceCardBlue}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-bold">Innesäljare & Kundadministratör</h3>
              <span className={styles.statusPillBlue}>2013 - 2019</span>
            </div>
            <p className="text-blue-400 mb-3">Laritryck AB, Bjuv</p>
            <p className="text-gray-400">
              Samordnande roll med ansvar för orderhantering, kundkontakt, planering, offerter, inköp, fakturering och uppföljning.
              Arbetet mellan kunder, sälj och produktion stärkte min förståelse för kundbehov, kravhantering och användarvänliga arbetssätt.
            </p>
          </div>

          <div className={styles.experienceCardBlue}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-bold">Leverantörs- och projektansvar</h3>
              <span className={styles.statusPillBlue}>2010 - 2013</span>
            </div>
            <p className="text-blue-400 mb-3">Svenskt Pacsystem</p>
            <p className="text-gray-400">
              Ansvarade för leverantörskontakter, kundadministration, inköp, fakturering samt roller som ISO-ansvarig,
              labb-ansvarig och EU-projektansvarig inom emballagebranschen.
              Erfarenheten gav en stark grund i strukturerat kvalitetsarbete, processer och affärssystem i reglerad miljö.
            </p>
          </div>

          <div className={styles.experienceCardBlue}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-bold">Sälj, butik och produktion</h3>
              <span className={styles.statusPillBlue}>1995 - 2010</span>
            </div>
            <p className="text-blue-400 mb-3">Ekohallen, Skånska Byggvaror, Lesley Cosmetics, Zoégas Kaffe, Bayside Cabin (England)</p>
            <p className="text-gray-400">
              Roller inom försäljning, kundservice, montering, produktion och caféverksamhet, inklusive ett år i England.
              Gav mig en stabil grund i kundbemötande, kvalitetstänk, strukturerade arbetsflöden och trygg kommunikation på engelska.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
