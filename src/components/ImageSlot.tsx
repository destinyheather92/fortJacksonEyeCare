import { images, type ImageKey } from '../config/images';
import { Icon } from './Icon';

interface ImageSlotProps {
  image: ImageKey;
  /** CSS aspect-ratio for the frame. Defaults to the image's own proportions. */
  ratio?: string;
  className?: string;
  /** Above-the-fold images load eagerly. */
  priority?: boolean;
  sizes?: string;
}

/**
 * Renders a site photo from the image manifest. Until the real file is
 * supplied (manifest `ready: false`), shows a clearly labeled placeholder that
 * names the file expected at this spot.
 */
export function ImageSlot({ image, ratio, className, priority = false, sizes }: ImageSlotProps) {
  const img = images[image];
  const aspectRatio = ratio ?? `${img.width} / ${img.height}`;
  const classes = ['image-slot', className].filter(Boolean).join(' ');

  if (img.ready) {
    return (
      <div className={classes} style={{ aspectRatio }}>
        <img
          src={img.path}
          alt={img.alt}
          width={img.width}
          height={img.height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          sizes={sizes}
        />
      </div>
    );
  }

  return (
    <div
      className={`${classes} image-slot--placeholder`}
      style={{ aspectRatio }}
      role="img"
      aria-label={`Photo coming soon: ${img.alt}`}
      data-image-path={img.path}
    >
      <div className="image-slot__label" aria-hidden="true">
        <Icon name="image" size={28} />
        <span className="image-slot__title">Photo placeholder</span>
        <span className="image-slot__brief">{img.brief}</span>
        <code className="image-slot__path">public{img.path}</code>
        <span className="image-slot__size">
          {img.width}×{img.height}
        </span>
      </div>
    </div>
  );
}
