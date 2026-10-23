import { directionsUrl, fullAddress, mapEmbedSrc, practice } from '../config/practice';
import { Icon } from './Icon';

/** Google Maps embed for the office address (see mapEmbedSrc), or a labeled placeholder until an address exists. */
export function MapEmbed({ className }: { className?: string }) {
  const classes = ['map-embed', className].filter(Boolean).join(' ');
  const src = mapEmbedSrc();
  const directions = directionsUrl();

  if (!src) {
    return (
      <div className={`${classes} map-embed--placeholder`}>
        <Icon name="mapPin" size={32} />
        <p className="map-embed__title">Map placeholder</p>
        <p className="map-embed__text">
          An interactive map will appear here once the office address is added
          (<code>address</code> in <code>src/config/practice.ts</code>).
        </p>
      </div>
    );
  }

  const where = practice.address ? ` at ${fullAddress(practice.address)}` : '';

  return (
    <div className={classes}>
      <iframe
        src={src}
        title={`Google Map showing the location of ${practice.name}${where}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      {directions && (
        <a className="map-embed__directions btn btn--light btn--sm" href={directions} target="_blank" rel="noopener noreferrer">
          <Icon name="compass" size={18} />
          <span>Get Directions</span>
          <span className="visually-hidden"> (opens Google Maps in a new tab)</span>
        </a>
      )}
    </div>
  );
}
