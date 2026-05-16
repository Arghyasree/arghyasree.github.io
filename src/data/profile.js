/** Edit this object to personalize your portfolio */

export const PROFILE = {
  name: 'Arghyasree Saha',
  /** Place your square photo at public/profile.jpg (recommended ≥ 400×400 px) */
  photo: '/profile.JPG',
  photoPlaceholder: '/profile-placeholder.svg',
  role: 'PhD Student | AI Researcher | Bioinformatics',
  introduction:
    'I study deep learning and statistical methods for biomedical signal analysis, with emphasis on interpretable models for neurological conditions.',
  tagline: {
    beforeAdvisor:
      'Hi, I am a PhD student at the Computer Vision and Pattern Recognition Unit, Indian Statistical Institute, Kolkata advised by ',
    advisor: {
      name: 'Prof. Utpal Garain',
      href: 'https://oldweb.isical.ac.in/~utpal/',
    },
    afterAdvisor: '. My current research focuses on Deep Learning and Bioinformatics.',
  },
  email: 'arghyasree.saha_r@isical.ac.in',
  location: 'Kolkata, India',
  social: [
    {
      label: 'Scholar',
      href: 'https://scholar.google.com/citations?user=kJsemWIAAAAJ&hl=en',
    },
    { label: 'GitHub', href: 'https://github.com/Arghyasree' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/arghyasree-saha-82b07422b/',
    },
  ],
  publications: [
    {
      title:
        'DeepPark-Net: A Multimodal Deep Learning Framework for Parkinson’s Disease Detection',
      venue:
        'International Conference on Computational Intelligence in Communications and Business Analytics',
      href: 'https://link.springer.com/chapter/10.1007/978-3-032-17181-8_26',
    },
    {
      title:
        'Schizophrenia detection from electroencephalogram signals using image encoding and wrapper-based deep feature selection approach',
      venue: 'Scientific Reports',
      href: 'https://www.nature.com/articles/s41598-025-06121-7',
    },
  ],
  education: [
    {
      degree: 'PhD Student in Computer Science',
      school: 'Indian Statistical Institute, Kolkata',
      years: '2025 — Present',
      detail: 'Research in Deep Learning and Bioinformatics.',
    },
    {
      degree: 'M.E. in Software Engineering, Department of Information Technology',
      school: 'Jadavpur University',
      years: '2023 — 2025',
      detail:
        'Thesis - A Multimodal Approach to Schizophrenia Detection and Classification.',
    },
    {
      degree: 'B.Tech in Computer Science and Engineering',
      school:
        'Maulana Abul Kalam Azad University of Technology, West Bengal (formerly WBUT)',
      years: '2019 — 2023',
    },
  ],
  achievements: [
    { title: 'UGC NET-JRF (99.96 Percentile)', year: '2025' },
    {
      title:
        'University Gold Medalist for securing First Class First Position in Master of Engineering at Jadavpur University',
      year: '2025',
    },
  ],
}
