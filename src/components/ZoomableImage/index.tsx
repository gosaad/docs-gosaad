import {useEffect, useRef, useState} from 'react';
import Icon from '@site/src/components/Icon';
import styles from './styles.module.css';

type ZoomableImageProps = {
  alt: string;
  caption?: string;
  src: string;
};

const MIN_ZOOM = 0.75;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.25;

export default function ZoomableImage({alt, caption, src}: ZoomableImageProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  function closeDialog() {
    setIsOpen(false);
    setZoom(1);
  }

  function handleDialogClose() {
    setIsOpen(false);
    setZoom(1);
  }

  return (
    <figure className={styles.figure}>
      <button
        aria-label={`Perbesar gambar: ${alt}`}
        className={styles.previewButton}
        onClick={() => setIsOpen(true)}
        type="button">
        <img alt={alt} className={styles.previewImage} src={src} />
        <span aria-hidden="true" className={styles.zoomHint}>
          <Icon name="zoomIn" size="sm" />
          <span className={styles.zoomHintLabel}>Perbesar</span>
        </span>
      </button>
      {caption && <figcaption>{caption}</figcaption>}

      <dialog
        aria-label={`Tampilan besar: ${alt}`}
        className={styles.dialog}
        onClose={handleDialogClose}
        ref={dialogRef}>
        <div className={styles.dialogContent}>
          <div className={styles.toolbar}>
            <p>{alt}</p>
            <div className={styles.controls}>
              <button
                aria-label="Perkecil gambar"
                disabled={zoom <= MIN_ZOOM}
                onClick={() => setZoom((value) => Math.max(MIN_ZOOM, value - ZOOM_STEP))}
                title="Perkecil"
                type="button">
                <Icon name="zoomOut" size="sm" />
              </button>
              <span aria-live="polite" className={styles.zoomLevel}>
                {Math.round(zoom * 100)}%
              </span>
              <button
                aria-label="Perbesar gambar"
                disabled={zoom >= MAX_ZOOM}
                onClick={() => setZoom((value) => Math.min(MAX_ZOOM, value + ZOOM_STEP))}
                title="Perbesar"
                type="button">
                <Icon name="zoomIn" size="sm" />
              </button>
              <button
                aria-label="Kembalikan ukuran gambar"
                disabled={zoom === 1}
                onClick={() => setZoom(1)}
                title="Reset"
                type="button">
                <Icon name="reset" size="sm" />
              </button>
              <span aria-hidden="true" className={styles.divider} />
              <button
                aria-label="Tutup tampilan besar"
                onClick={closeDialog}
                title="Tutup"
                type="button">
                <Icon name="close" size="sm" />
              </button>
            </div>
          </div>
          <div className={styles.imageViewport}>
            <img
              alt={alt}
              className={styles.dialogImage}
              src={src}
              style={{width: `${zoom * 100}%`}}
            />
          </div>
        </div>
      </dialog>
    </figure>
  );
}
