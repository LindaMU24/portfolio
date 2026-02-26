export type GalleryId = 'bookGo' | 'mlDiabetes' | 'batteryManagement' | 'minesweep' | 'bulletin' | 'todoTypescript';

export type LightboxImage = {
  src: string;
  alt: string;
  previewClassName?: string;
};

export type SelectedImage = LightboxImage & {
  galleryId: GalleryId;
  index: number;
};
