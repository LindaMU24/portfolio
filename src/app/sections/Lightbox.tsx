import Image from 'next/image';
import styles from '../page.module.css';
import { SelectedImage } from '../types';

type LightboxProps = {
  selectedImage: SelectedImage;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export function Lightbox({ selectedImage, onClose, onPrevious, onNext }: LightboxProps) {
  return (
    <div className="fixed inset-0 z-[60] bg-black/90 p-4 md:p-8 flex items-center justify-center" onClick={onClose}>
      <button
        type="button"
        aria-label="Stäng bildvisning"
        className={`absolute top-4 right-4 md:top-6 md:right-6 ${styles.lightboxIconButton}`}
        onClick={onClose}
      >
        ×
      </button>
      <div className="relative w-full max-w-6xl h-[80vh]" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          aria-label="Föregående bild"
          className={`absolute left-3 top-1/2 -translate-y-1/2 z-10 ${styles.lightboxIconButton}`}
          onClick={onPrevious}
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Nästa bild"
          className={`absolute right-3 top-1/2 -translate-y-1/2 z-10 ${styles.lightboxIconButton}`}
          onClick={onNext}
        >
          ›
        </button>
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          fill
          className={selectedImage.previewClassName ?? 'object-contain'}
          sizes="100vw"
        />
      </div>
    </div>
  );
}
