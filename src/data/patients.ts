import type { IconName } from '../components/Icon';
import { practice } from '../config/practice';

export interface PatientGroup {
  icon: IconName;
  label: string;
}

/** Patients the practice welcomes, as provided by the practice. */
export const patientGroups: PatientGroup[] = [
  { icon: 'star', label: 'Active-duty service members' },
  { icon: 'family', label: 'Active-duty family members' },
  { icon: 'flag', label: 'Military retirees and their families' },
  { icon: 'heart', label: 'Civilian patients of all ages' },
];

/** Practice-approved welcome message for the Home and About pages. */
export const patientsWelcome = `At ${practice.name}, we’re proud to provide comprehensive vision and eye health services to our military community and beyond. Whether you’re an active-duty service member, a military family member, a retiree, or a civilian, our team is committed to providing personalized, compassionate eye care for patients of all ages.`;
