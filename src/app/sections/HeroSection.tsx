import Image from 'next/image';
import styles from '../page.module.css';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-4">
      <div className={`${styles.sectionInner} py-16 w-full`}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Linda Blomkvist</span>
              </h1>
              <p className="text-xl text-gray-400 mt-2">Mjukvaruutvecklare | Full Stack Developer</p>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm">
              <p className="text-lg text-gray-300 leading-relaxed">
                Jag är en passionerad junior mjukvaruutvecklare med stark grund i objektorienterad programmering och modern systemutveckling.
                Jag har erfarenhet av frontend i TypeScript och React, backend i Java/Spring Boot, REST API:er och MySQL.
                Jag använder också Python för AI/ML och C++ för embedded.
                Min bakgrund inom kundbehov, kalkylering och affärssystem gör att jag ser helheten, <strong className="text-white">varför en lösning behövs</strong>, hur den ska användas och hur den implementeras effektivt.
                Jag trivs i agila team, lär mig snabbt nya verktyg och drivs av att omsätta idéer till användarvänliga, robusta produkter.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <a href="#contact" className={styles.primaryButton}>
                💬 Kontakta mig
              </a>
              <a href="#projects" className={styles.outlineButton}>
                📂 Se mina projekt
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-2 border-blue-500/50 shadow-2xl shadow-blue-500/20">
              <Image
                src="/linda2.png"
                alt="Linda Blomkvist - Frontend Developer"
                width={320}
                height={320}
                priority
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
