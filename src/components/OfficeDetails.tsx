import { acceptedPlansSentence, addressLines, directionsUrl, mapsUrl, practice } from '../config/practice';
import { Icon } from './Icon';
import { Placeholder } from './Placeholder';

type Detail = 'address' | 'phone' | 'email' | 'hours' | 'insurance' | 'directions';

interface OfficeDetailsProps {
  show?: Detail[];
  className?: string;
  /** Heading level for each item label (keeps the page outline correct). */
  labelAs?: 'h3' | 'h4' | 'p';
  /** Make the address itself a link that opens the location in Google Maps. */
  linkAddress?: boolean;
}

export const INSURANCE_VERIFY_NOTE = 'Please contact our office to verify your individual benefits and eligibility.';

/**
 * Address, phone, email, hours, insurance and directions — all from src/config/practice.ts.
 * Missing values render as labeled placeholders (email and insurance are simply hidden).
 */
export function OfficeDetails({
  show = ['address', 'phone', 'email', 'hours'],
  className,
  labelAs: Label = 'h3',
  linkAddress = false,
}: OfficeDetailsProps) {
  const { address, phone, email, officeHours, fax, insurance } = practice;
  const directions = directionsUrl();
  const map = linkAddress ? mapsUrl() : null;
  const plans = acceptedPlansSentence();

  return (
    <ul className={['office-details', className].filter(Boolean).join(' ')}>
      {show.includes('address') && (
        <li className="office-details__item">
          <Icon name="mapPin" className="office-details__icon" />
          <div>
            <Label className="office-details__label">Address</Label>
            {address ? (
              <address className="office-details__value">
                {practice.name}
                <br />
                {map ? (
                  <a href={map} target="_blank" rel="noopener noreferrer">
                    {addressLines(address)[0]}
                    <br />
                    {addressLines(address)[1]}
                    <span className="visually-hidden"> (opens in Google Maps in a new tab)</span>
                  </a>
                ) : (
                  <>
                    {addressLines(address)[0]}
                    <br />
                    {addressLines(address)[1]}
                  </>
                )}
              </address>
            ) : (
              <p className="office-details__value">
                <Placeholder>Office address</Placeholder>
              </p>
            )}
          </div>
        </li>
      )}

      {show.includes('phone') && (
        <li className="office-details__item">
          <Icon name="phone" className="office-details__icon" />
          <div>
            <Label className="office-details__label">Phone</Label>
            <p className="office-details__value">
              {phone ? <a href={`tel:${phone.tel}`}>{phone.display}</a> : <Placeholder>Phone number</Placeholder>}
            </p>
            {fax && <p className="office-details__meta">Fax: {fax.display}</p>}
          </div>
        </li>
      )}

      {show.includes('email') && email && (
        <li className="office-details__item">
          <Icon name="mail" className="office-details__icon" />
          <div>
            <Label className="office-details__label">Email</Label>
            <p className="office-details__value">
              <a href={`mailto:${email}`}>{email}</a>
            </p>
            <p className="office-details__meta">For general questions only. Please don’t email medical information.</p>
          </div>
        </li>
      )}

      {show.includes('hours') && (
        <li className="office-details__item">
          <Icon name="clock" className="office-details__icon" />
          <div>
            <Label className="office-details__label">Office Hours</Label>
            {officeHours ? (
              <dl className="hours-list">
                {officeHours.map((entry) => (
                  <div className="hours-list__row" key={entry.days}>
                    <dt>{entry.days}</dt>
                    <dd>{entry.hours}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="office-details__value">
                <Placeholder>Office hours</Placeholder>
              </p>
            )}
          </div>
        </li>
      )}

      {show.includes('insurance') && insurance && (
        <li className="office-details__item">
          <Icon name="card" className="office-details__icon" />
          <div>
            <Label className="office-details__label">Insurance</Label>
            <p className="office-details__value">{insurance}</p>
            {plans && <p className="office-details__plans">{plans}</p>}
            <p className="office-details__meta">{INSURANCE_VERIFY_NOTE}</p>
          </div>
        </li>
      )}

      {show.includes('directions') && (
        <li className="office-details__item">
          <Icon name="compass" className="office-details__icon" />
          <div>
            <Label className="office-details__label">Directions</Label>
            <p className="office-details__value">
              {directions ? (
                <a href={directions} target="_blank" rel="noopener noreferrer" className="text-link">
                  Get directions in Google Maps
                  <span className="visually-hidden"> (opens in a new tab)</span>
                  <Icon name="external" size={16} />
                </a>
              ) : (
                <Placeholder>Directions link (added with the address)</Placeholder>
              )}
            </p>
          </div>
        </li>
      )}
    </ul>
  );
}
