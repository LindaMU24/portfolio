'use client';

import { useCallback, useEffect, useState } from 'react';
import styles from './page.module.css';
import { GalleryId, LightboxImage, SelectedImage } from './types';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { HeroSection } from './sections/HeroSection';
import { Lightbox } from './sections/Lightbox';
import { Navigation } from './sections/Navigation';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';

const LIGHTBOX_GALLERIES: Record<GalleryId, LightboxImage[]> = {
  bookGo: [
    { src: '/book-go/book-go-login.png', alt: 'Book & Go - Inloggning och planeringsvy' },
    { src: '/book-go/book-go-route-dense.png', alt: 'Book & Go - Rutt med laddstationer' },
    { src: '/book-go/book-go-route-overview.png', alt: 'Book & Go - Översikt av resa och laddbehov' },
  ],
  mlDiabetes: [
    {
      src: '/ml-diabetes/confusion-matrices.png',
      alt: 'Confusion Matrices för XGBoost och Random Forest',
      previewClassName: 'object-contain bg-white p-3',
    },
    { src: '/ml-diabetes/roc-curves.png', alt: 'ROC Curves för alla modeller', previewClassName: 'object-contain bg-white p-3' },
    {
      src: '/ml-diabetes/correlation-heatmap.png',
      alt: 'Korrelationsanalys mellan variabler',
      previewClassName: 'object-contain bg-white p-3',
    },
    {
      src: '/ml-diabetes/dataset-overview.png',
      alt: 'Dataset overview och statistik',
      previewClassName: 'object-contain bg-white p-3',
    },
    { src: '/ml-diabetes/final-validation.png', alt: 'Final model validation', previewClassName: 'object-contain bg-white p-3' },
    {
      src: '/ml-diabetes/load-model-python.png',
      alt: 'Model deployment med Python',
      previewClassName: 'object-contain bg-white p-3',
    },
  ],
  batteryManagement: [
    {
      src: '/battery-management/Teachers charging_simulator.png',
      alt: 'Battery Management - Teachers charging simulator',
      previewClassName: 'object-contain bg-white p-3',
    },
    {
      src: '/battery-management/Price_rate.png',
      alt: 'Battery Management - Pris',
      previewClassName: 'object-contain bg-white p-3',
    },
    {
      src: '/battery-management/Formatted_consuption.png',
      alt: 'Battery Management - Formaterat pris',
      previewClassName: 'object-contain bg-white p-3',
    },
    {
      src: '/battery-management/Start_charging.png',
      alt: 'Battery Management - Laddning på',
      previewClassName: 'object-contain bg-white p-3',
    },
    {
      src: '/battery-management/Stop_charging.png',
      alt: 'Battery Management - Laddning stop',
      previewClassName: 'object-contain bg-white p-3',
    },
    {
      src: '/battery-management/Battery_percentage.png',
      alt: 'Battery Management - Battery percentage',
      previewClassName: 'object-contain bg-white p-3',
    },
  ],
  minesweep: [
    {
      src: '/minesweep/Start game.png',
      alt: 'Minesweeper - Start',
      previewClassName: 'object-contain bg-white p-3',
    },
    {
      src: '/minesweep/Make move.png',
      alt: 'Minesweeper - Make move',
      previewClassName: 'object-contain bg-white p-3',
    },
    {
      src: '/minesweep/Game over.png',
      alt: 'Minesweeper - Game over',
      previewClassName: 'object-contain bg-white p-3',
    },
  ],
  bulletin: [
    {
      src: '/bulletin/create channel too short validation.png',
      alt: 'The Bulletin - Validering vid skapande av kanal',
      previewClassName: 'object-contain bg-white p-3',
    },
    {
      src: '/bulletin/create user correct.png',
      alt: 'The Bulletin - Skapa användare korrekt',
      previewClassName: 'object-contain bg-white p-3',
    },
    {
      src: '/bulletin/create user validation wrong email.png',
      alt: 'The Bulletin - Felaktig e-post valideras',
      previewClassName: 'object-contain bg-white p-3',
    },
    {
      src: '/bulletin/See channels.png',
      alt: 'The Bulletin - Visa kanaler',
      previewClassName: 'object-contain bg-white p-3',
    },
    {
      src: '/bulletin/See posts from specific user.png',
      alt: 'The Bulletin - Visa inlägg från specifik användare',
      previewClassName: 'object-contain bg-white p-3',
    },
    {
      src: '/bulletin/See users and their posts.png',
      alt: 'The Bulletin - Visa användare och deras inlägg',
      previewClassName: 'object-contain bg-white p-3',
    },
  ],
  todoTypescript: [
    {
      src: '/todo typescript/1Start.png',
      alt: 'TypeScript ToDo - Start',
      previewClassName: 'object-contain bg-white p-3',
    },
    {
      src: '/todo typescript/2Tillagda uppgifter.png',
      alt: 'TypeScript ToDo - Tillagda uppgifter',
      previewClassName: 'object-contain bg-white p-3',
    },
    {
      src: '/todo typescript/3Uppgift klar.png',
      alt: 'TypeScript ToDo - Uppgift klar',
      previewClassName: 'object-contain bg-white p-3',
    },
  ],
};

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);

  const openImage = (galleryId: GalleryId, index: number) => {
    const galleryImages = LIGHTBOX_GALLERIES[galleryId];
    const image = galleryImages[index];

    if (!image) {
      return;
    }

    setSelectedImage({
      src: image.src,
      alt: image.alt,
      previewClassName: image.previewClassName,
      galleryId,
      index,
    });
  };

  const showImageAtIndex = useCallback((galleryId: GalleryId, index: number) => {
    const galleryImages = LIGHTBOX_GALLERIES[galleryId];
    const normalizedIndex = (index + galleryImages.length) % galleryImages.length;
    const image = galleryImages[normalizedIndex];

    setSelectedImage({
      src: image.src,
      alt: image.alt,
      previewClassName: image.previewClassName,
      galleryId,
      index: normalizedIndex,
    });
  }, []);

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
      if (event.key === 'ArrowRight') {
        showImageAtIndex(selectedImage.galleryId, selectedImage.index + 1);
      }
      if (event.key === 'ArrowLeft') {
        showImageAtIndex(selectedImage.galleryId, selectedImage.index - 1);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedImage, showImageAtIndex]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection openImage={openImage} />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />

      {selectedImage && (
        <Lightbox
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
          onPrevious={() => showImageAtIndex(selectedImage.galleryId, selectedImage.index - 1)}
          onNext={() => showImageAtIndex(selectedImage.galleryId, selectedImage.index + 1)}
        />
      )}

      <footer className="bg-black border-t border-gray-800 py-10">
        <div className={`${styles.sectionInner} text-center text-gray-500`}>
          <p>© 2026 Linda Blomkvist | Byggd med Next.js 16 & React 19</p>
        </div>
      </footer>
    </div>
  );
}
