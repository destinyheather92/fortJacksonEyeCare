import { useState, type FormEvent } from 'react';
import { Icon } from './Icon';

export const PHI_WARNING =
  'Please do not include medical information, symptoms, diagnoses, insurance information, or other private health information in this form. For appointments, please use our secure online scheduling system or contact the office directly.';

type Status = 'idle' | 'sending' | 'sent' | 'error';

/**
 * General (non-medical) contact form. Only rendered when
 * practice.contactFormEndpoint is set to an APPROVED form service — see
 * the Contact page. Collects name, email, optional phone, and a message only.
 */
export function ContactForm({ endpoint }: { endpoint: string }) {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(`Form service responded ${res.status}`);
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-describedby="phi-warning">
      <div className="notice notice--warning" id="phi-warning">
        <Icon name="shield" size={22} />
        <p>
          <strong>{PHI_WARNING}</strong>
        </p>
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="cf-name">
            Name <span className="field__req">(required)</span>
          </label>
          <input id="cf-name" name="name" type="text" autoComplete="name" required maxLength={100} />
        </div>
        <div className="field">
          <label htmlFor="cf-email">
            Email <span className="field__req">(required)</span>
          </label>
          <input id="cf-email" name="email" type="email" autoComplete="email" required maxLength={150} />
        </div>
        <div className="field">
          <label htmlFor="cf-phone">
            Phone <span className="field__opt">(optional)</span>
          </label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" maxLength={30} />
        </div>
        <div className="field field--full">
          <label htmlFor="cf-message">
            General message <span className="field__req">(required)</span>
          </label>
          <textarea id="cf-message" name="message" rows={5} required maxLength={2000} aria-describedby="cf-message-hint" />
          <p className="field__hint" id="cf-message-hint">
            General questions only. Do not include health or insurance details.
          </p>
        </div>
        <div className="field field--full field--check">
          <input id="cf-ack" name="acknowledgement" type="checkbox" required value="No private health information included" />
          <label htmlFor="cf-ack">I understand this form is not for medical information or appointment requests.</label>
        </div>
      </div>

      <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>

      <div role="status" aria-live="polite" className="form-status">
        {status === 'sent' && (
          <p className="notice notice--success">
            <Icon name="check" size={20} /> Thank you, your message has been sent. Our office will follow up with you.
          </p>
        )}
        {status === 'error' && (
          <p className="notice notice--error">
            <Icon name="info" size={20} /> Sorry, your message could not be sent. Please try again or contact our office directly.
          </p>
        )}
      </div>
    </form>
  );
}
