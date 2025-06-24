// data/projects.js
export const projects = [
  // {
  //   title: 'Vidhik Sahayta (Legal Aid)',
  //   slug: 'vidhik-sahayta',
  //   description: [
  //     'A web application for legal aid, where users can find and book lawyers for their cases.',
  //     'Easy Login & Registration with Client side validations.',
  //     'Developed a custom search bar to find service providers using filters such as lawyer type, case type, and required services.',
  //     'Integrated a chat feature for real-time communication between users and legal service providers.',
  //   ],
  //   tech: ['Flutter', 'Dart', 'Firebase'],
  //   link: 'https://github.com/AROR4/legal_ease',
  //   images: ['/assets/garbage.jpeg'],
  // },
  {
    title: 'E-Commerce App',
    slug: 'ecommerce-app',
    description: [
      'Developed a full-stack e-commerce application with distinct admin and customer components.',
      'Implemented user authentication and authorization using JWT Authentication.',
      'Developed a custom search bar to find products using filters such as price, brand, and type.',
      'Implemented features for product purchase, order tracking, inventory management, and product listing.',
    ],
    tech: ['Flutter', 'MongoDB', 'Express.js', 'Node.js', 'JWT Authentication'],
    link: 'https://github.com/AROR4/amazon_clone_server',
    images: ['/assets/ecom1.png',
      '/assets/ecom2.png',
      '/assets/ecom3.png',
      '/assets/ecom4.png',
      '/assets/ecom5.png',
    ],
  },
  {
    title: 'Covid-19 Tracker-APIBasedAnalysisApp',
    slug: 'covid19-tracker',
    description: [
      'Developed a COVID-19 Tracker with API-based analysis, providing real-time updates and insights on the pandemic.',
      'The app featured comprehensive data visualization and tracking capabilities.',
    ],
    tech: ['Flutter', 'Dart', 'REST APIs'],
    link: 'https://github.com/AROR4/covid19_tracker_by_api',
    images: ['/assets/covid1.png',
      '/assets/covid2.png',
      '/assets/covid3.png',
    ],
  },
  {
    title: 'Smart Bin Locator',
    slug: 'smart-bin-locator',
    description: [
      'Developed a Smart Bin Locator application to help users find the nearest waste disposal bins.',
      'The app featured a user-friendly interface, real-time location tracking, and bin status updates.',
    ],
    tech: ['Flutter', 'Dart', 'REST APIs'],
    link: 'https://github.com/thedevyash/garbage_locator',
    images: ['/assets/garbage1.jpeg',
      '/assets/garbage2.jpeg',
      '/assets/garbage3.jpeg',
    ],
  },
  {
  title: 'Sahaaya – Campaign Platform',
  slug: 'sahaaya-campaign-platform',
  description: [
    'A role-based web platform where users can discover, create, and join social campaigns.',
    'Integrated Google Authentication with JWT token-based session management.',
    'Role-based access control for Users and Admins, and NGO verification flow.',
    'Users can create or join campaigns, and NGOs can upload verification for trusted status.',
    'MongoDB used to store campaign and user data, including popularity score and verification logic.',
  ],
  tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Google Auth'],
  link: 'https://github.com/AROR4/Sahaaya', 
  images: ['/assets/sah1.png',
    '/assets/sah2.png',
    '/assets/sah3.png',
  ], // update to your project image path
}

];
