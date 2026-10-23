import type { IconName } from '../components/Icon';
import type { ImageKey } from '../config/images';

export interface Service {
  /** Used as the anchor on the Services page: /services#<id> */
  id: string;
  name: string;
  icon: IconName;
  /** One or two sentences for cards and previews. */
  summary: string;
  /** Longer, patient-friendly explanation for the Services page. */
  details: string[];
  /** Optional bullet list, introduced by `listIntro`. */
  listIntro?: string;
  list?: string[];
  /** Optional safety or expectation note. */
  note?: string;
  image?: ImageKey;
  /** Show on the home page preview. */
  featuredOnHome: boolean;
}

/**
 * Services confirmed by the practice. Descriptions are general patient
 * education — they avoid guarantees, diagnoses, and unconfirmed equipment.
 */
export const services: Service[] = [
  {
    id: 'comprehensive-eye-exams',
    name: 'Comprehensive Eye Exams',
    icon: 'eye',
    summary:
      'A thorough look at how well you see and at the overall health of your eyes, inside and out.',
    details: [
      'A comprehensive eye exam goes well beyond reading letters on a chart. It’s a careful check of your vision and of the health of the structures inside and around your eyes.',
      'Many eye conditions develop gradually and may not cause noticeable symptoms early on. Routine exams give your eye doctor the chance to spot changes early, track them over time, and talk with you about next steps.',
    ],
    listIntro: 'Depending on your needs, your exam may include:',
    list: [
      'A review of your health, medications, and family eye history',
      'Vision testing and an updated glasses prescription if needed',
      'A check of eye pressure',
      'An evaluation of the front and back of the eye, which may include dilation',
    ],
    image: 'serviceComprehensive',
    featuredOnHome: true,
  },
  {
    id: 'wellness-eye-exams',
    name: 'Wellness Eye Exams',
    icon: 'shield',
    summary:
      'Preventive vision and eye-health exams for patients who aren’t aware of any eye problems.',
    details: [
      'A wellness eye exam is a preventive visit for people who aren’t currently having eye trouble. It confirms that your vision is where it should be, checks the health of your eyes, and creates a baseline that future exams can be compared against.',
      'Your eye doctor can recommend how often to return based on your age, overall health, and family history.',
    ],
    featuredOnHome: false,
  },
  {
    id: 'family-eye-care',
    name: 'Pediatric & Family Eye Care',
    icon: 'family',
    summary: 'Comprehensive eye care for every stage of life, from infants to senior adults.',
    details: [
      'Fort Jackson Eye Center provides comprehensive eye care for patients ranging from infants through senior adults, so everyone in the family can be seen by the same provider who knows their history.',
      'Eyes and vision change throughout life. Regular exams help keep track of those changes. If you have questions about when to schedule a visit for your child, please contact our office.',
    ],
    image: 'serviceFamily',
    featuredOnHome: false,
  },
  {
    id: 'eyeglasses',
    name: 'Eyeglasses',
    icon: 'glasses',
    summary: 'Accurate vision prescriptions and eyeglass services, with an optical right next door to our office.',
    details: [
      'Clear, comfortable vision starts with an accurate prescription. During your exam, your eye doctor checks how well you see at different distances and whether glasses can help.',
      'If you need glasses for the first time, or your vision has changed since your last prescription, you’ll leave with an up-to-date eyeglass prescription. Our team is also glad to answer questions about your glasses and eyewear needs.',
      'For your convenience, there’s an optical right next door to our office, so you can fill your prescription and choose your eyewear in the same trip.',
    ],
    featuredOnHome: true,
  },
  {
    id: 'contact-lens-care',
    name: 'Contact Lens Care',
    icon: 'lens',
    summary:
      'Contact lens exams, prescriptions, and fittings, plus ongoing monitoring to keep your eyes healthy while you wear lenses.',
    details: [
      'Contact lenses sit directly on the surface of the eye, so they call for their own evaluation and prescription, separate from a glasses prescription. A contact lens evaluation generally looks at the surface of your eye and at how lenses fit, feel, and perform for you.',
      'Follow-up visits let your eye doctor confirm your lenses are still a good fit and that your eyes are staying healthy with regular wear.',
    ],
    image: 'serviceContactLens',
    featuredOnHome: true,
  },
  {
    id: 'dmv-eye-exams',
    name: 'DMV Eye Exams',
    icon: 'car',
    summary: 'Vision examinations related to DMV vision requirements for your driver’s license.',
    details: [
      'Drivers are sometimes asked to complete a vision examination as part of a license application or renewal. Fort Jackson Eye Center offers vision examinations related to DMV vision requirements.',
      'If the DMV has given you a form, bring it to your appointment so it can be reviewed during your visit.',
    ],
    note: 'Licensing decisions are made by the DMV. Completing an eye examination does not guarantee license approval.',
    featuredOnHome: true,
  },
  {
    id: 'diabetic-eye-exams',
    name: 'Diabetic Eye Exams',
    icon: 'droplet',
    summary:
      'Regular eye-health monitoring for patients living with diabetes, whose eyes can change before their vision does.',
    details: [
      'Diabetes can affect the small blood vessels in the retina, the light-sensitive tissue at the back of the eye. These changes can begin before a person notices any difference in their vision.',
      'A diabetic eye exam typically includes a dilated look at the retina. Your eye doctor will explain what they see and recommend how often to return, as part of your overall diabetes care.',
    ],
    featuredOnHome: true,
  },
  {
    id: 'hypertensive-eye-exams',
    name: 'Hypertensive Eye Exams',
    icon: 'pulse',
    summary: 'Eye exams that help monitor how high blood pressure may be affecting your eyes.',
    details: [
      'High blood pressure affects blood vessels throughout the body, including the tiny vessels in the retina. An eye exam is one of the few ways those vessels can be viewed directly.',
      'For patients with hypertension, routine eye exams help monitor ocular health over time and complement the care you receive from your primary care provider.',
    ],
    featuredOnHome: false,
  },
  {
    id: 'glaucoma',
    name: 'Glaucoma Evaluation & Management',
    icon: 'gauge',
    summary:
      'Evaluation and ongoing monitoring for glaucoma, a group of conditions that affect the optic nerve.',
    details: [
      'Glaucoma is a group of eye conditions that damage the optic nerve, which carries visual information from the eye to the brain. It often develops slowly, and many people don’t notice changes in their vision until the condition has progressed.',
      'An evaluation may include checking eye pressure and examining the optic nerve, along with other testing as needed. For patients who have glaucoma or are considered at risk, regular monitoring is an important part of protecting vision, and your eye doctor will talk through a care plan with you.',
    ],
    featuredOnHome: true,
  },
  {
    id: 'macular-degeneration',
    name: 'Macular Degeneration',
    icon: 'grid',
    summary: 'Evaluation and monitoring of macular degeneration, a condition that affects your sharp, central vision.',
    details: [
      'The macula is the small center of the retina responsible for the sharp, detailed vision you use to read, drive, and recognize faces. Age-related macular degeneration affects this area and becomes more common as people get older.',
      'Early macular degeneration may not cause noticeable symptoms. A dilated eye exam lets your eye doctor look closely at the macula, and regular follow-up visits help track changes over time so you understand your condition and your next steps.',
    ],
    note: 'If straight lines start to look wavy or bent, or you notice a new blurry or dark spot in the center of your vision, contact an eye doctor promptly.',
    featuredOnHome: true,
  },
  {
    id: 'retinal-disease',
    name: 'Retinal Disease Evaluation & Management',
    icon: 'retina',
    summary:
      'Careful evaluation and follow-up for conditions that affect the retina at the back of the eye.',
    details: [
      'The retina is the thin layer of tissue at the back of the eye that turns light into the signals your brain reads as images. Conditions such as age-related macular degeneration, diabetic retinopathy, and retinal tears can affect it.',
      'A dilated eye exam allows your eye doctor to examine the retina closely. If changes are found, you’ll hear what they mean, how they will be monitored, and what the next steps in your care are.',
    ],
    note: 'Sudden changes in vision, such as a burst of new floaters, flashes of light, or a shadow or curtain over part of your vision, should be evaluated promptly.',
    featuredOnHome: false,
  },
  {
    id: 'ocular-disease-management',
    name: 'Ocular Disease Management',
    icon: 'clipboard',
    summary: 'Evaluation and ongoing management of eye diseases and related conditions to help protect your vision.',
    details: [
      'Some eye conditions need more than a routine check. Ocular disease management means evaluating a condition, explaining what it means for you, and monitoring it over time with a plan built around your needs.',
      'This includes conditions such as glaucoma, macular degeneration and other retinal diseases, and eye changes related to diabetes or high blood pressure. At each visit, your eye doctor will explain your results, answer your questions, and talk with you about next steps.',
    ],
    featuredOnHome: true,
  },
];

export const homeServices = services.filter((s) => s.featuredOnHome);
