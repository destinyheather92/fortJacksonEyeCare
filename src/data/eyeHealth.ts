import type { IconName } from '../components/Icon';

export interface EyeHealthTopic {
  id: string;
  title: string;
  icon: IconName;
  paragraphs: string[];
  tipsLabel?: string;
  tips?: string[];
}

/** Topics for the Eye Health page. General education only — not medical advice. */
export const eyeHealthTopics: EyeHealthTopic[] = [
  {
    id: 'get-an-eye-exam',
    title: 'Get an Eye Exam',
    icon: 'eye',
    paragraphs: [
      'A comprehensive dilated eye exam is an important way to evaluate the overall health of your eyes, even when you aren’t noticing any vision problems.',
      'Some eye diseases can develop without obvious early warning signs. That’s what makes routine exams such an important part of preventive eye care.',
    ],
  },
  {
    id: 'family-history',
    title: 'Know Your Family’s Eye Health History',
    icon: 'family',
    paragraphs: [
      'Some eye conditions run in families. Talking with relatives about their eye health can tell you something useful about your own.',
    ],
    tipsLabel: 'A simple way to start',
    tips: [
      'Ask parents, grandparents, and siblings whether they’ve been told they have an eye condition.',
      'Write down what you learn so it’s easy to remember.',
      'Share it with your eye doctor at your next visit.',
    ],
  },
  {
    id: 'rest-your-eyes',
    title: 'Give Your Eyes a Rest',
    icon: 'monitor',
    paragraphs: [
      'If you spend a lot of time looking at a computer, phone, or other screen, your eyes can get tired. Taking regular breaks can help reduce digital eyestrain.',
    ],
  },
  {
    id: 'eye-healthy-foods',
    title: 'Eat Eye-Healthy Foods',
    icon: 'leaf',
    paragraphs: [
      'A balanced diet with plenty of fruits and vegetables supports your overall health, and your eyes are part of that. Foods commonly included in an eye-healthy diet:',
    ],
    tips: [
      'Dark leafy greens, such as spinach and kale',
      'A variety of colorful fruits and vegetables',
      'Fish with omega-3 fatty acids, such as salmon, tuna, and halibut',
    ],
  },
  {
    id: 'wear-sunglasses',
    title: 'Wear Sunglasses',
    icon: 'sun',
    paragraphs: [
      'Sunglasses do more than cut glare. They help protect your eyes from the sun’s ultraviolet (UV) radiation.',
    ],
  },
];
