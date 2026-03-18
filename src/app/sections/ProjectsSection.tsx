import Image from 'next/image';
import styles from '../page.module.css';
import { GalleryId } from '../types';

type ProjectsSectionProps = {
  openImage: (galleryId: GalleryId, index: number) => void;
};

export function ProjectsSection({ openImage }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-24">
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>Senaste projekt</h2>
        <div className="space-y-8">
          <div className={styles.projectCardEmerald}>
            <div className={styles.projectCardHeader}>
              <h3 className={styles.projectCardTitle}>Book & Go – Examensarbete</h3>
              <span className={styles.projectCardIcon}>🚗</span>
            </div>
            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
              Examensarbetet <strong className="text-emerald-200">Book & Go</strong> är en webbaserad
              mobilitetstjänst för elbilsresor där användaren planerar rutt mellan start och mål, lägger till
              stopp och får laddrekommendationer längs vägen. Fokus låg på tydligt användarflöde, kartbaserad
              visualisering och praktisk nytta i verkliga resscenarier.
            </p>
            <p className="text-gray-400 mb-4">
              <strong className="text-emerald-300">Teknik & metod:</strong> frontend i JavaScript med kartstöd via
              Leaflet/OpenStreetMap, backend i Node.js och API-kommunikation för att beräkna avstånd, tid och
              laddbehov utifrån vald bilmodell och aktuell räckvidd.
            </p>
            <p className="text-gray-400 mb-6">
              <strong className="text-emerald-300">Resultat:</strong> lösningen visar ruttöversikt, uppskattad
              restid, total distans och rekommenderade laddstationer i rätt ordning längs färdvägen, vilket ger
              användaren ett konkret beslutsstöd inför längre elbilsresor.
            </p>

            <div className={styles.galleryGridThree}>
              <button type="button" onClick={() => openImage('bookGo', 0)} className={styles.galleryButtonEmerald}>
                <Image src="/book-go/book-go-login.png" alt="Book & Go - Inloggning och planeringsvy" fill className={styles.imageCover} />
              </button>
              <button type="button" onClick={() => openImage('bookGo', 1)} className={styles.galleryButtonEmerald}>
                <Image src="/book-go/book-go-route-dense.png" alt="Book & Go - Rutt med laddstationer" fill className={styles.imageCover} />
              </button>
              <button type="button" onClick={() => openImage('bookGo', 2)} className={styles.galleryButtonEmerald}>
                <Image src="/book-go/book-go-route-overview.png" alt="Book & Go - Översikt av resa och laddbehov" fill className={styles.imageCover} />
              </button>
            </div>

            <div className="flex gap-2 mb-6 flex-wrap">
              <span className={styles.tagEmerald}>JavaScript</span>
              <span className={styles.tagEmerald}>Node.js</span>
              <span className={styles.tagLime}>Leaflet</span>
              <span className={styles.tagLime}>OpenStreetMap</span>
              <span className={styles.tagEmerald}>REST API</span>
              <span className={styles.tagLime}>UX/UI</span>
            </div>
          </div>

          <div className={styles.projectCardPurple}>
            <div className={styles.projectCardHeader}>
              <h3 className={styles.projectCardTitle}>Diabetes Prediction - Maskininlärning</h3>
              <span className={styles.projectCardIcon}>🤖</span>
            </div>
            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
              Projektet är en fullständig maskininlärningspipeline för att förutsäga diabetesrisk,
              från dataanalys och feature-arbete till utvärdering av flera modeller och tydlig visualisering
              av resultat för beslutsstöd.
            </p>
            <p className="text-gray-400 mb-4">
              <strong className="text-purple-300">Teknik & metod:</strong> Python med Pandas/NumPy för databehandling,
              Scikit-learn, XGBoost, Random Forest och Logistic Regression för modellering samt Matplotlib/Seaborn
              för analys och jämförelse av prestanda.
            </p>
            <p className="text-gray-400 mb-6">
              <strong className="text-purple-300">Resultat:</strong> jämförelsen visade att Random Forest gav den mest balanserade
              prestandan med hög recall och stabil precision, vilket minimerar risken för missade diabetesfall och ger
              en robust grund för fortsatt modellutveckling.
            </p>

            <div className={styles.galleryGridTwo}>
              <button type="button" onClick={() => openImage('mlDiabetes', 0)} className={styles.galleryButtonPurple}>
                <Image src="/ml-diabetes/confusion-matrices.png" alt="Confusion Matrices för XGBoost och Random Forest" fill className={styles.imageContainWhite} />
              </button>
              <button type="button" onClick={() => openImage('mlDiabetes', 1)} className={styles.galleryButtonPurple}>
                <Image src="/ml-diabetes/roc-curves.png" alt="ROC Curves för alla modeller" fill className={styles.imageContainWhite} />
              </button>
              <button type="button" onClick={() => openImage('mlDiabetes', 2)} className={styles.galleryButtonPurple}>
                <Image src="/ml-diabetes/correlation-heatmap.png" alt="Korrelationsanalys mellan variabler" fill className={styles.imageContainWhite} />
              </button>
              <button type="button" onClick={() => openImage('mlDiabetes', 3)} className={styles.galleryButtonPurple}>
                <Image src="/ml-diabetes/dataset-overview.png" alt="Dataset overview och statistik" fill className={styles.imageContainWhite} />
              </button>
              <button type="button" onClick={() => openImage('mlDiabetes', 4)} className={styles.galleryButtonPurple}>
                <Image src="/ml-diabetes/final-validation.png" alt="Final model validation" fill className={styles.imageContainWhite} />
              </button>
              <button type="button" onClick={() => openImage('mlDiabetes', 5)} className={styles.galleryButtonPurple}>
                <Image src="/ml-diabetes/load-model-python.png" alt="Model deployment med Python" fill className={styles.imageContainWhite} />
              </button>
            </div>

            <div className="flex gap-2 mb-6 flex-wrap">
              <span className={styles.tagPurple}>Python</span>
              <span className={styles.tagPurple}>Scikit-learn</span>
              <span className={styles.tagPink}>XGBoost</span>
              <span className={styles.tagPink}>Random Forest</span>
              <span className={styles.tagPurple}>Pandas</span>
              <span className={styles.tagPurple}>NumPy</span>
              <span className={styles.tagPink}>Matplotlib</span>
              <span className={styles.tagPink}>Seaborn</span>
            </div>
            <div className="flex gap-4 flex-wrap">
              <a href="https://github.com/LindaMU24/Diabetes_model_python" target="_blank" rel="noopener noreferrer" className={styles.projectLinkPurple}>
                Se projekt på GitHub →
              </a>
              <a href="https://www.kaggle.com/datasets/iammustafatz/diabetes-prediction-dataset" target="_blank" rel="noopener noreferrer" className={styles.projectLinkPurple}>
                Se dataset på Kaggle →
              </a>
            </div>
          </div>

          <div className={styles.projectCardBattery}>
            <div className={styles.projectCardHeader}>
              <h3 className={styles.projectCardTitle}>Battery Management System</h3>
              <span className={styles.projectCardIcon}>🔋</span>
            </div>
            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
              Ett Java-baserat projekt för batterihantering där vi arbetade mot en simulator som läraren tillhandahöll.
              Lösningen fokuserar på tydlig och robust hantering av laddningsflöden, prisberäkning och batteristatus,
              med objektorienterad design och ett tydligt API-flöde för realistiska testsituationer.
            </p>
            <p className="text-gray-400 mb-4">
              <strong className="text-blue-300">Teknik & metod:</strong> Java och objektorienterad design för domänlogik,
              simulatordrivna API-anrop för test av olika laddscenarier samt validering av endpoints och svar med Postman.
            </p>
            <p className="text-gray-400 mb-6">
              <strong className="text-blue-300">Resultat:</strong> implementationen hanterar start/stopp av laddning,
              prisnivåer, formaterad förbrukning och uppdaterad batteriprocent på ett stabilt och förutsägbart sätt,
              vilket gav ett tydligt och testbart arbetsflöde.
            </p>
            <div className={styles.galleryGridThree}>
              <button type="button" onClick={() => openImage('batteryManagement', 0)} className={styles.galleryButtonBlue}>
                <Image src="/battery-management/Teachers charging_simulator.png" alt="Battery Management - Teachers charging simulator" fill className={styles.imageContainWhite} />
              </button>
              <button type="button" onClick={() => openImage('batteryManagement', 1)} className={styles.galleryButtonBlue}>
                <Image src="/battery-management/Price_rate.png" alt="Battery Management - Pris" fill className={styles.imageContainWhite} />
              </button>
              <button type="button" onClick={() => openImage('batteryManagement', 2)} className={styles.galleryButtonBlue}>
                <Image src="/battery-management/Formatted_consuption.png" alt="Battery Management - Formaterat pris" fill className={styles.imageContainWhite} />
              </button>
              <button type="button" onClick={() => openImage('batteryManagement', 3)} className={styles.galleryButtonBlue}>
                <Image src="/battery-management/Start_charging.png" alt="Battery Management - Laddning på" fill className={styles.imageContainWhite} />
              </button>
              <button type="button" onClick={() => openImage('batteryManagement', 4)} className={styles.galleryButtonBlue}>
                <Image src="/battery-management/Stop_charging.png" alt="Battery Management - Laddning stop" fill className={styles.imageContainWhite} />
              </button>
              <button type="button" onClick={() => openImage('batteryManagement', 5)} className={styles.galleryButtonBlue}>
                <Image src="/battery-management/Battery_percentage.png" alt="Battery Management - Battery percentage" fill className={styles.imageContainWhite} />
              </button>
            </div>
            <div className="flex gap-2 mb-6 flex-wrap">
              <span className={styles.tagBlue}>Java</span>
              <span className={styles.tagCyan}>OOP</span>
              <span className={styles.tagBlue}>Postman</span>
              <span className={styles.tagCyan}>API Testing</span>
            </div>
            <a href="https://github.com/LindaMU24/BatteryManagement" target="_blank" rel="noopener noreferrer" className={styles.projectLinkBlue}>
              Se projekt på GitHub →
            </a>
          </div>

          <div className={styles.projectCardBulletin}>
            <div className={styles.projectCardHeader}>
              <h3 className={styles.projectCardTitle}>The Bulletin</h3>
              <span className={styles.projectCardIcon}>📰</span>
            </div>
            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
              The Bulletin är en webbaserad bulletin board-applikation där fokus låg på tydlig struktur,
              användarvänligt flöde och stabil hantering av centrala funktioner i ett mindre fullstack-sammanhang.
            </p>
            <p className="text-gray-400 mb-4">
              <strong className="text-cyan-300">Teknik & metod:</strong> Java med enhetstester och testdriven utveckling (TDD),
              med fokus på clean code, små testbara enheter och konsekvent kodstandard.
            </p>
            <p className="text-gray-400 mb-6">
              <strong className="text-cyan-300">Resultat:</strong> lösningen blev mer robust och lättare att vidareutveckla,
              med bättre tillförlitlighet i kärnfunktionerna tack vare testfokus genom hela utvecklingsprocessen.
            </p>
            <div className={styles.galleryGridThree}>
              <button type="button" onClick={() => openImage('bulletin', 0)} className={styles.galleryButtonCyan}>
                <Image src="/bulletin/create channel too short validation.png" alt="The Bulletin - Validering vid skapande av kanal" fill className={styles.imageContainWhite} />
              </button>
              <button type="button" onClick={() => openImage('bulletin', 1)} className={styles.galleryButtonCyan}>
                <Image src="/bulletin/create user correct.png" alt="The Bulletin - Skapa användare korrekt" fill className={styles.imageContainWhite} />
              </button>
              <button type="button" onClick={() => openImage('bulletin', 2)} className={styles.galleryButtonCyan}>
                <Image src="/bulletin/create user validation wrong email.png" alt="The Bulletin - Felaktig e-post valideras" fill className={styles.imageContainWhite} />
              </button>
              <button type="button" onClick={() => openImage('bulletin', 3)} className={styles.galleryButtonCyan}>
                <Image src="/bulletin/See channels.png" alt="The Bulletin - Visa kanaler" fill className={styles.imageContainWhite} />
              </button>
              <button type="button" onClick={() => openImage('bulletin', 4)} className={styles.galleryButtonCyan}>
                <Image src="/bulletin/See posts from specific user.png" alt="The Bulletin - Visa inlägg från specifik användare" fill className={styles.imageContainWhite} />
              </button>
              <button type="button" onClick={() => openImage('bulletin', 5)} className={styles.galleryButtonCyan}>
                <Image src="/bulletin/See users and their posts.png" alt="The Bulletin - Visa användare och deras inlägg" fill className={styles.imageContainWhite} />
              </button>
            </div>
            <div className="flex gap-2 mb-6 flex-wrap">
              <span className={styles.tagCyan}>Java</span>
              <span className={styles.tagCyan}>Unit Testing</span>
              <span className={styles.tagCyan}>TDD</span>
              <span className={styles.tagSky}>Validation</span>
            </div>
            <a href="https://github.com/LindaMU24/The_Bulletin_with_test" target="_blank" rel="noopener noreferrer" className={styles.projectLinkCyan}>
              Se projekt på GitHub →
            </a>
          </div>

          <div className={styles.projectCardMinesweep}>
            <div className={styles.projectCardHeader}>
              <h3 className={styles.projectCardTitle}>Minesweeper i C++</h3>
              <span className={styles.projectCardIcon}>💣</span>
            </div>
            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
              En egen implementation av klassiska Minesweeper i C++ med fokus på spelupplevelse,
              tydlig state-hantering och robust logik från start av spel till game over-scenario.
            </p>
            <p className="text-gray-400 mb-4">
              <strong className="text-orange-300">Teknik & metod:</strong> C++ med fokus på datastrukturer,
              kontrollflöde och algoritmer för spelregler, inklusive validering av drag och hantering av olika tillstånd.
            </p>
            <p className="text-gray-400 mb-6">
              <strong className="text-orange-300">Resultat:</strong> projektet resulterade i en stabil och spelbar implementation
              med tydlig progression mellan start, aktiva drag och avslut, vilket visar både teknisk noggrannhet och
              god problemlösningsförmåga.
            </p>
            <div className={styles.galleryGridThree}>
              <button type="button" onClick={() => openImage('minesweep', 0)} className={styles.galleryButtonOrange}>
                <Image src="/minesweep/Start game.png" alt="Minesweeper - Start" fill className={styles.imageContainWhite} />
              </button>
              <button type="button" onClick={() => openImage('minesweep', 1)} className={styles.galleryButtonOrange}>
                <Image src="/minesweep/Make move.png" alt="Minesweeper - Make move" fill className={styles.imageContainWhite} />
              </button>
              <button type="button" onClick={() => openImage('minesweep', 2)} className={styles.galleryButtonOrange}>
                <Image src="/minesweep/Game over.png" alt="Minesweeper - Game over" fill className={styles.imageContainWhite} />
              </button>
            </div>
            <div className="flex gap-2 mb-6 flex-wrap">
              <span className={styles.tagOrange}>C++</span>
              <span className={styles.tagAmber}>Algorithms</span>
              <span className={styles.tagAmber}>Game Logic</span>
            </div>
            <a href="https://github.com/LindaMU24/Minesweeper" target="_blank" rel="noopener noreferrer" className={styles.projectLinkOrange}>
              Se projekt på GitHub →
            </a>
          </div>

          <div className={styles.projectCardTypeScript}>
            <div className={styles.projectCardHeader}>
              <h3 className={styles.projectCardTitle}>TypeScript Examination</h3>
              <span className={styles.projectCardIcon}>📘</span>
            </div>
            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
              Examinationsprojekt i TypeScript där fokus låg på att bygga en tydligt strukturerad lösning
              med hög läsbarhet, förutsägbart beteende och stark typkontroll i hela kodbasen.
            </p>
            <p className="text-gray-400 mb-4">
              <strong className="text-emerald-300">Teknik & metod:</strong> TypeScript med interfaces, typer och modulär kodstruktur,
              kombinerat med moderna JavaScript-principer för bättre underhållbarhet och tydliga kontrakt i koden.
            </p>
            <p className="text-gray-400 mb-6">
              <strong className="text-emerald-300">Resultat:</strong> en mer robust och lättunderhållen implementation där tidig
              typvalidering minskar fel i runtime och stärker kodkvaliteten i vidare utveckling.
            </p>
            <div className={styles.galleryGridThree}>
              <button type="button" onClick={() => openImage('todoTypescript', 0)} className={styles.galleryButtonTypeScript}>
                <Image src="/todo typescript/1Start.png" alt="TypeScript ToDo - Start" fill className={styles.imageContainWhite} />
              </button>
              <button type="button" onClick={() => openImage('todoTypescript', 1)} className={styles.galleryButtonTypeScript}>
                <Image src="/todo typescript/2Tillagda uppgifter.png" alt="TypeScript ToDo - Tillagda uppgifter" fill className={styles.imageContainWhite} />
              </button>
              <button type="button" onClick={() => openImage('todoTypescript', 2)} className={styles.galleryButtonTypeScript}>
                <Image src="/todo typescript/3Uppgift klar.png" alt="TypeScript ToDo - Uppgift klar" fill className={styles.imageContainWhite} />
              </button>
            </div>
            <div className="flex gap-2 mb-6 flex-wrap">
              <span className={styles.tagTypeScript}>TypeScript</span>
              <span className={styles.tagSky}>Type Safety</span>
            </div>
            <a href="https://github.com/LindaMU24/V43-Examination" target="_blank" rel="noopener noreferrer" className={styles.projectLinkTypeScript}>
              Se projekt på GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
