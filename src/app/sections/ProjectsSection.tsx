'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from '../page.module.css';
import { GalleryId } from '../types';

type ProjectsSectionProps = {
  openImage: (galleryId: GalleryId, index: number) => void;
};

type ProjectImage = {
  src: string;
  alt: string;
  className: string;
};

type ProjectTag = {
  label: string;
  className: string;
};

type ProjectLink = {
  href: string;
  label: string;
  className: string;
};

type Project = {
  id: GalleryId;
  title: string;
  icon: string;
  cardClassName: string;
  accentClassName: string;
  galleryClassName: string;
  galleryButtonClassName: string;
  summary: React.ReactNode;
  detailOneTitle: string;
  detailOne: string;
  detailTwoTitle: string;
  detailTwo: string;
  images: ProjectImage[];
  tags: ProjectTag[];
  links?: ProjectLink[];
};

const projects: Project[] = [
  {
    id: 'yhCourseMatcher',
    title: 'YH Kursmatchare - AI för lärar-CV och kompetensmatchning',
    icon: '🎯',
    cardClassName: styles.projectCardBattery,
    accentClassName: 'text-blue-300',
    galleryClassName: styles.galleryGridThree,
    galleryButtonClassName: styles.galleryButtonBlue,
    summary: (
      <>
        Pågående projekt där jag driver utveckling och vidareutveckling av ett AI-baserat kursmatchningsverktyg som
        matchar lärar-CV, kompetenser och fritext mot relevanta YH-kurser. Jag ansvarar för hela kedjan, från
        datainsamling och textutvinning till semantisk sökning, ranking och användargränssnitt.
      </>
    ),
    detailOneTitle: 'Data & extraktion:',
    detailOne:
      'pipeline-flöden för att läsa och strukturera kursunderlag från PDF:er, kvalitetssäkring av metadata, textutvinning med PyMuPDF samt OCR-fallback via OpenAI. Data normaliseras till CSV och berikas för ett jämförbart och sökbart underlag.',
    detailTwoTitle: 'Sökning & matchning:',
    detailTwo:
      'embeddings och vektorindexering i Pinecone med hybridrankning där semantisk träff kombineras med lexikal överlappning. Jag utvecklar även funktioner för filtrering, gruppering av kursresultat, relevansbedömning och export i en Streamlit-applikation, publicerad i molnmiljö på Render.',
    images: [
      {
        src: '/YH-Course.Matcher/CV extraction.png',
        alt: 'YH Kursmatchare - CV-extraktion och strukturerad text',
        className: styles.imageContainWhite,
      },
      {
        src: '/YH-Course.Matcher/Matching.png',
        alt: 'YH Kursmatchare - Matchning av kompetenser mot kursinnehåll',
        className: styles.imageContainWhite,
      },
      {
        src: '/YH-Course.Matcher/Search match.png',
        alt: 'YH Kursmatchare - Sökning och rankat kursresultat',
        className: styles.imageContainWhite,
      },
    ],
    tags: [
      { label: 'Python', className: styles.tagBlue },
      { label: 'Streamlit', className: styles.tagCyan },
      { label: 'OpenAI API', className: styles.tagSky },
      { label: 'Pinecone', className: styles.tagBlue },
      { label: 'PyMuPDF', className: styles.tagCyan },
      { label: 'python-dotenv', className: styles.tagSky },
      { label: 'tqdm', className: styles.tagSky },
      { label: 'CSV', className: styles.tagSky },
      { label: 'Git', className: styles.tagBlue },
      { label: 'Render', className: styles.tagCyan },
    ],
  },
  {
    id: 'bookGo',
    title: 'Book & Go – Examensarbete',
    icon: '🚗',
    cardClassName: styles.projectCardEmerald,
    accentClassName: 'text-emerald-300',
    galleryClassName: styles.galleryGridThree,
    galleryButtonClassName: styles.galleryButtonEmerald,
    summary: (
      <>
        Examensarbetet <strong className="text-emerald-200">Book & Go</strong> är en webbaserad mobilitetstjänst för
        elbilsresor där användaren planerar rutt mellan start och mål, lägger till stopp och får laddrekommendationer
        längs vägen. Fokus låg på tydligt användarflöde, kartbaserad visualisering och praktisk nytta i verkliga
        resscenarier.
      </>
    ),
    detailOneTitle: 'Teknik & metod:',
    detailOne:
      'frontend i JavaScript med kartstöd via Leaflet/OpenStreetMap, backend i Node.js och API-kommunikation för att beräkna avstånd, tid och laddbehov utifrån vald bilmodell och aktuell räckvidd.',
    detailTwoTitle: 'Resultat:',
    detailTwo:
      'lösningen visar ruttöversikt, uppskattad restid, total distans och rekommenderade laddstationer i rätt ordning längs färdvägen, vilket ger användaren ett konkret beslutsstöd inför längre elbilsresor.',
    images: [
      { src: '/book-go/book-go-login.png', alt: 'Book & Go - Inloggning och planeringsvy', className: styles.imageCover },
      { src: '/book-go/book-go-route-dense.png', alt: 'Book & Go - Rutt med laddstationer', className: styles.imageCover },
      { src: '/book-go/book-go-route-overview.png', alt: 'Book & Go - Översikt av resa och laddbehov', className: styles.imageCover },
    ],
    tags: [
      { label: 'JavaScript', className: styles.tagEmerald },
      { label: 'Node.js', className: styles.tagEmerald },
      { label: 'Leaflet', className: styles.tagLime },
      { label: 'OpenStreetMap', className: styles.tagLime },
      { label: 'REST API', className: styles.tagEmerald },
      { label: 'UX/UI', className: styles.tagLime },
    ],
  },
  {
    id: 'mlDiabetes',
    title: 'Diabetes Prediction - Maskininlärning',
    icon: '🤖',
    cardClassName: styles.projectCardPurple,
    accentClassName: 'text-purple-300',
    galleryClassName: styles.galleryGridTwo,
    galleryButtonClassName: styles.galleryButtonPurple,
    summary:
      'Projektet är en fullständig maskininlärningspipeline för att förutsäga diabetesrisk, från dataanalys och feature-arbete till utvärdering av flera modeller och tydlig visualisering av resultat för beslutsstöd.',
    detailOneTitle: 'Teknik & metod:',
    detailOne:
      'Python med Pandas/NumPy för databehandling, Scikit-learn, XGBoost, Random Forest och Logistic Regression för modellering samt Matplotlib/Seaborn för analys och jämförelse av prestanda.',
    detailTwoTitle: 'Resultat:',
    detailTwo:
      'jämförelsen visade att Random Forest gav den mest balanserade prestandan med hög recall och stabil precision, vilket minimerar risken för missade diabetesfall och ger en robust grund för fortsatt modellutveckling.',
    images: [
      { src: '/ml-diabetes/confusion-matrices.png', alt: 'Confusion Matrices för XGBoost och Random Forest', className: styles.imageContainWhite },
      { src: '/ml-diabetes/roc-curves.png', alt: 'ROC Curves för alla modeller', className: styles.imageContainWhite },
      { src: '/ml-diabetes/correlation-heatmap.png', alt: 'Korrelationsanalys mellan variabler', className: styles.imageContainWhite },
      { src: '/ml-diabetes/dataset-overview.png', alt: 'Dataset overview och statistik', className: styles.imageContainWhite },
      { src: '/ml-diabetes/final-validation.png', alt: 'Final model validation', className: styles.imageContainWhite },
      { src: '/ml-diabetes/load-model-python.png', alt: 'Model deployment med Python', className: styles.imageContainWhite },
    ],
    tags: [
      { label: 'Python', className: styles.tagPurple },
      { label: 'Scikit-learn', className: styles.tagPurple },
      { label: 'XGBoost', className: styles.tagPink },
      { label: 'Random Forest', className: styles.tagPink },
      { label: 'Pandas', className: styles.tagPurple },
      { label: 'NumPy', className: styles.tagPurple },
      { label: 'Matplotlib', className: styles.tagPink },
      { label: 'Seaborn', className: styles.tagPink },
    ],
    links: [
      {
        href: 'https://github.com/LindaMU24/Diabetes_model_python',
        label: 'Se projekt på GitHub →',
        className: styles.projectLinkPurple,
      },
      {
        href: 'https://www.kaggle.com/datasets/iammustafatz/diabetes-prediction-dataset',
        label: 'Se dataset på Kaggle →',
        className: styles.projectLinkPurple,
      },
    ],
  },
  {
    id: 'batteryManagement',
    title: 'Battery Management System',
    icon: '🔋',
    cardClassName: styles.projectCardBattery,
    accentClassName: 'text-blue-300',
    galleryClassName: styles.galleryGridThree,
    galleryButtonClassName: styles.galleryButtonBlue,
    summary:
      'Ett Java-baserat projekt för batterihantering där vi arbetade mot en simulator som läraren tillhandahöll. Lösningen fokuserar på tydlig och robust hantering av laddningsflöden, prisberäkning och batteristatus, med objektorienterad design och ett tydligt API-flöde för realistiska testsituationer.',
    detailOneTitle: 'Teknik & metod:',
    detailOne:
      'Java och objektorienterad design för domänlogik, simulatordrivna API-anrop för test av olika laddscenarier samt validering av endpoints och svar med Postman.',
    detailTwoTitle: 'Resultat:',
    detailTwo:
      'implementationen hanterar start/stopp av laddning, prisnivåer, formaterad förbrukning och uppdaterad batteriprocent på ett stabilt och förutsägbart sätt, vilket gav ett tydligt och testbart arbetsflöde.',
    images: [
      { src: '/battery-management/Teachers charging_simulator.png', alt: 'Battery Management - Teachers charging simulator', className: styles.imageContainWhite },
      { src: '/battery-management/Price_rate.png', alt: 'Battery Management - Pris', className: styles.imageContainWhite },
      { src: '/battery-management/Formatted_consuption.png', alt: 'Battery Management - Formaterat pris', className: styles.imageContainWhite },
      { src: '/battery-management/Start_charging.png', alt: 'Battery Management - Laddning på', className: styles.imageContainWhite },
      { src: '/battery-management/Stop_charging.png', alt: 'Battery Management - Laddning stop', className: styles.imageContainWhite },
      { src: '/battery-management/Battery_percentage.png', alt: 'Battery Management - Battery percentage', className: styles.imageContainWhite },
    ],
    tags: [
      { label: 'Java', className: styles.tagBlue },
      { label: 'OOP', className: styles.tagCyan },
      { label: 'Postman', className: styles.tagBlue },
      { label: 'API Testing', className: styles.tagCyan },
    ],
    links: [
      {
        href: 'https://github.com/LindaMU24/BatteryManagement',
        label: 'Se projekt på GitHub →',
        className: styles.projectLinkBlue,
      },
    ],
  },
  {
    id: 'bulletin',
    title: 'The Bulletin',
    icon: '📰',
    cardClassName: styles.projectCardBulletin,
    accentClassName: 'text-cyan-300',
    galleryClassName: styles.galleryGridThree,
    galleryButtonClassName: styles.galleryButtonCyan,
    summary:
      'The Bulletin är en webbaserad bulletin board-applikation där fokus låg på tydlig struktur, användarvänligt flöde och stabil hantering av centrala funktioner i ett mindre fullstack-sammanhang.',
    detailOneTitle: 'Teknik & metod:',
    detailOne:
      'Java med enhetstester och testdriven utveckling (TDD), med fokus på clean code, små testbara enheter och konsekvent kodstandard.',
    detailTwoTitle: 'Resultat:',
    detailTwo:
      'lösningen blev mer robust och lättare att vidareutveckla, med bättre tillförlitlighet i kärnfunktionerna tack vare testfokus genom hela utvecklingsprocessen.',
    images: [
      { src: '/bulletin/create channel too short validation.png', alt: 'The Bulletin - Validering vid skapande av kanal', className: styles.imageContainWhite },
      { src: '/bulletin/create user correct.png', alt: 'The Bulletin - Skapa användare korrekt', className: styles.imageContainWhite },
      { src: '/bulletin/create user validation wrong email.png', alt: 'The Bulletin - Felaktig e-post valideras', className: styles.imageContainWhite },
      { src: '/bulletin/See channels.png', alt: 'The Bulletin - Visa kanaler', className: styles.imageContainWhite },
      { src: '/bulletin/See posts from specific user.png', alt: 'The Bulletin - Visa inlägg från specifik användare', className: styles.imageContainWhite },
      { src: '/bulletin/See users and their posts.png', alt: 'The Bulletin - Visa användare och deras inlägg', className: styles.imageContainWhite },
    ],
    tags: [
      { label: 'Java', className: styles.tagCyan },
      { label: 'Unit Testing', className: styles.tagCyan },
      { label: 'TDD', className: styles.tagCyan },
      { label: 'Validation', className: styles.tagSky },
    ],
    links: [
      {
        href: 'https://github.com/LindaMU24/The_Bulletin_with_test',
        label: 'Se projekt på GitHub →',
        className: styles.projectLinkCyan,
      },
    ],
  },
  {
    id: 'minesweep',
    title: 'Minesweeper i C++',
    icon: '💣',
    cardClassName: styles.projectCardMinesweep,
    accentClassName: 'text-orange-300',
    galleryClassName: styles.galleryGridThree,
    galleryButtonClassName: styles.galleryButtonOrange,
    summary:
      'En egen implementation av klassiska Minesweeper i C++ med fokus på spelupplevelse, tydlig state-hantering och robust logik från start av spel till game over-scenario.',
    detailOneTitle: 'Teknik & metod:',
    detailOne:
      'C++ med fokus på datastrukturer, kontrollflöde och algoritmer för spelregler, inklusive validering av drag och hantering av olika tillstånd.',
    detailTwoTitle: 'Resultat:',
    detailTwo:
      'projektet resulterade i en stabil och spelbar implementation med tydlig progression mellan start, aktiva drag och avslut, vilket visar både teknisk noggrannhet och god problemlösningsförmåga.',
    images: [
      { src: '/minesweep/Start game.png', alt: 'Minesweeper - Start', className: styles.imageContainWhite },
      { src: '/minesweep/Make move.png', alt: 'Minesweeper - Make move', className: styles.imageContainWhite },
      { src: '/minesweep/Game over.png', alt: 'Minesweeper - Game over', className: styles.imageContainWhite },
    ],
    tags: [
      { label: 'C++', className: styles.tagOrange },
      { label: 'Algorithms', className: styles.tagAmber },
      { label: 'Game Logic', className: styles.tagAmber },
    ],
    links: [
      {
        href: 'https://github.com/LindaMU24/Minesweeper',
        label: 'Se projekt på GitHub →',
        className: styles.projectLinkOrange,
      },
    ],
  },
  {
    id: 'todoTypescript',
    title: 'TypeScript Examination',
    icon: '📘',
    cardClassName: styles.projectCardTypeScript,
    accentClassName: 'text-emerald-300',
    galleryClassName: styles.galleryGridThree,
    galleryButtonClassName: styles.galleryButtonTypeScript,
    summary:
      'Examinationsprojekt i TypeScript där fokus låg på att bygga en tydligt strukturerad lösning med hög läsbarhet, förutsägbart beteende och stark typkontroll i hela kodbasen.',
    detailOneTitle: 'Teknik & metod:',
    detailOne:
      'TypeScript med interfaces, typer och modulär kodstruktur, kombinerat med moderna JavaScript-principer för bättre underhållbarhet och tydliga kontrakt i koden.',
    detailTwoTitle: 'Resultat:',
    detailTwo:
      'en mer robust och lättunderhållen implementation där tidig typvalidering minskar fel i runtime och stärker kodkvaliteten i vidare utveckling.',
    images: [
      { src: '/todo typescript/1Start.png', alt: 'TypeScript ToDo - Start', className: styles.imageContainWhite },
      { src: '/todo typescript/2Tillagda uppgifter.png', alt: 'TypeScript ToDo - Tillagda uppgifter', className: styles.imageContainWhite },
      { src: '/todo typescript/3Uppgift klar.png', alt: 'TypeScript ToDo - Uppgift klar', className: styles.imageContainWhite },
    ],
    tags: [
      { label: 'TypeScript', className: styles.tagTypeScript },
      { label: 'Type Safety', className: styles.tagSky },
    ],
    links: [
      {
        href: 'https://github.com/LindaMU24/V43-Examination',
        label: 'Se projekt på GitHub →',
        className: styles.projectLinkTypeScript,
      },
    ],
  },
];

export function ProjectsSection({ openImage }: ProjectsSectionProps) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = projects[activeProjectIndex];

  const showPreviousProject = () => {
    setActiveProjectIndex((currentIndex) => (currentIndex - 1 + projects.length) % projects.length);
  };

  const showNextProject = () => {
    setActiveProjectIndex((currentIndex) => (currentIndex + 1) % projects.length);
  };

  return (
    <section id="projects" className="py-24">
      <div className={styles.sectionInner}>
        <div className={styles.carouselHint}>
          <div>
            <h2 className={styles.sectionTitle}>Senaste projekt</h2>
            <p className="text-gray-400 -mt-10 text-lg">Senaste projektet visas först. Klicka på pilarna för att se fler.</p>
          </div>

          <div className={styles.carouselNavGroup}>
            <span className={styles.carouselStatus}>
              <span className="font-semibold text-white">Projekt {activeProjectIndex + 1} av {projects.length}</span>
            </span>
            <button type="button" onClick={showPreviousProject} className={styles.carouselNavButton} aria-label="Visa föregående projekt">
              <span aria-hidden="true">←</span>
              <span>Föregående</span>
            </button>
            <button type="button" onClick={showNextProject} className={styles.carouselNavButton} aria-label="Visa nästa projekt">
              <span>Nästa</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className={activeProject.cardClassName}>
          <div className={styles.projectCardHeader}>
            <h3 className={styles.projectCardTitle}>{activeProject.title}</h3>
            <span className={styles.projectCardIcon}>{activeProject.icon}</span>
          </div>

          <p className="text-gray-300 mb-4 text-lg leading-relaxed">{activeProject.summary}</p>
          <p className="text-gray-400 mb-4">
            <strong className={activeProject.accentClassName}>{activeProject.detailOneTitle}</strong> {activeProject.detailOne}
          </p>
          <p className="text-gray-400 mb-6">
            <strong className={activeProject.accentClassName}>{activeProject.detailTwoTitle}</strong> {activeProject.detailTwo}
          </p>

          <div className={activeProject.galleryClassName}>
            {activeProject.images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => openImage(activeProject.id, index)}
                className={activeProject.galleryButtonClassName}
              >
                <Image src={image.src} alt={image.alt} fill className={image.className} />
              </button>
            ))}
          </div>

          <div className="flex gap-2 mb-6 flex-wrap">
            {activeProject.tags.map((tag) => (
              <span key={tag.label} className={tag.className}>{tag.label}</span>
            ))}
          </div>

          {activeProject.links && activeProject.links.length > 0 && (
            <div className="flex gap-4 flex-wrap">
              {activeProject.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={link.className}>
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className={styles.carouselIndicators} aria-label="Välj projekt">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveProjectIndex(index)}
              className={`${styles.carouselIndicator} ${index === activeProjectIndex ? styles.carouselIndicatorActive : ''}`.trim()}
              aria-label={`Visa ${project.title}`}
              aria-pressed={index === activeProjectIndex}
              title={project.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
