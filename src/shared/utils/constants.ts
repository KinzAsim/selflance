import {
  _profileP,
  _report,
  _u,
  ai,
  banner,
  business,
  category1,
  category2,
  demo,
  digital,
  eye,
  frame1,
  frame2,
  frame3,
  frame4,
  freelancer,
  gig,
  graphic,
  infocircle,
  logout,
  money_change,
  social,
  tech,
  user,
  video,
  write,
  onBoard1,
  onBoard2,
  onBoard3,
  _setting,
} from '@assets';

let isDarkThemeEnabled = false;

export const _carousel = [
  {
    img: gig,
  },
  {
    img: freelancer,
  },
  {
    img: gig,
  },
];

export function getIsDarkModeEnabled() {
  return isDarkThemeEnabled;
}

export const categoryData = [
  {id: 1, img: graphic, title: 'Graphic Designing'},
  {id: 2, img: digital, title: 'Digital Marketing'},
  {id: 3, img: write, title: 'Writing & Translation'},
  {id: 4, img: video, title: 'Video & Animation'},
  {id: 5, img: tech, title: 'Programming & Tech'},
  {id: 6, img: business, title: 'Business'},
  {id: 7, img: social, title: 'Social Media'},
  {id: 8, img: ai, title: 'AI Services'},
];

export const profileData = [
  {id: 1, img: _u, title: 'My Profile', screen: 'MyProfile'},
  {id: 2, img: _report, title: 'Add Portfolio', screen: 'Portfolio'},
  {id: 3, img: _report, title: 'Work Space', screen: 'WorkSpace'},
  {id: 4, img: _report, title: 'Report Saller'},
  {id: 5, img: _setting, title: 'Settings'},

  // {id: 4, img: video, title: 'Invite Friends'},
];

export const logOut = [{id: 1, img: logout, title: 'Log Out'}];
export const profilePolicy = [
  {id: 1, img: money_change, title: 'Refund Policy'},
  {id: 2, img: infocircle, title: 'About Us'},
  {id: 3, img: _report, title: 'Term of Use'},
  {id: 4, img: eye, title: 'Privacy Policy'},
  {id: 5, img: eye, title: "FAQ's"},
  {id: 6, img: _profileP, title: 'Invite Friends'},
];

export const companiesData = [
  {
    img: gig,
    title: 'I will do ui design, ui ux design, website ui ux design',
    type: 'app designing',
  },
  {
    img: gig,
    title: 'I will do ui design, ui ux design, website ui ux design',
    type: 'app designing',
  },
  {
    img: freelancer,
    title: 'I will do ui design, ui ux design, website ui ux design',
    type: 'app designing',
  },
];

export const freelancerData = [
  {
    img: freelancer,
    title: 'I will do ui design, ui ux design, website ui ux design',
    type: 'app designing',
  },
  {
    img: gig,
    title: 'I will do ui design, ui ux design, website ui ux design',
    type: 'app designing',
  },
  {
    img: freelancer,
    title: 'I will do ui design, ui ux design, website ui ux design',
    type: 'app designing',
  },
];

export const chatList = [
  {
    img: user,
    name: 'Kinza Umair',
    message: `It's really nice to talk to you`,
  },
  {
    img: user,
    name: 'Shan',
    message: 'Hello!',
  },
  {
    img: user,
    name: 'Shane',
    message: 'Hey there',
  },
  {
    img: user,
    name: 'Kinza Umair',
    message: `It's really nice to talk to you`,
  },
  {
    img: user,
    name: 'Shan',
    message: 'Hello!',
  },
  {
    img: user,
    name: 'Shane',
    message: 'Hey there',
  },
];

export const carousel = [
  {
    img: banner,
    message: `Get Matched With Sellers`,
  },
  {
    img: banner,
    message: 'Get Matched With Sellers',
  },
  {
    img: banner,
    message: 'Get Matched With Sellers',
  },
  {
    img: banner,
    message: `Get Matched With Sellers`,
  },
  {
    img: banner,
    message: 'Get Matched With Sellers',
  },
  {
    img: banner,
    message: 'Get Matched With Sellers',
  },
];

export const FreelancerData = [
  {
    id: 0,
    bacImage: frame1,
    des: 'I will do ui design, ui ux design, ',
    rating: '5.0',
    price: '₹678',
    level: 1,
  },
  {
    id: 1,
    bacImage: frame2,
    des: 'I will do ui design, ui ux design, ',
    rating: '5.0',
    price: '₹678',
    level: 1,
  },
  {
    id: 2,
    bacImage: frame3,
    des: 'I will do ui design, ui ux design, ',
    rating: '5.0',
    price: '₹678',
    level: 1,
  },
  {
    id: 3,
    bacImage: frame1,
    des: 'I will do ui design, ui ux design, ',
    rating: '5.0',
    price: '₹678',
    level: 1,
  },
  {
    id: 4,
    bacImage: frame4,
    des: 'I will do ui design, ui ux design, ',
    rating: '5.0',
    price: '₹678',
    level: 1,
  },
];

export const SECTIONS = [
  {
    title: 'LOGO & BRAND IDENTITY',
    content: [
      'Logo Design',
      'Brand Style Guides',
      'Fonts & Typography',
      'Business Cards & Stationery',
    ],
  },
  {
    title: 'GAMING',
    content: [
      'Logo Design',
      'Brand Style Guides',
      'Fonts & Typography',
      'Business Cards & Stationery',
    ],
  },
  {
    title: 'ART & ILLUSTRATION',
    content: [
      'Logo Design',
      'Brand Style Guides',
      'Fonts & Typography',
      'Business Cards & Stationery',
    ],
  },
];

export const _ordertabs = [
  {
    title: 'Active',
  },
  {
    title: 'Completed',
  },
  {title: 'In Revision'},
  {title: 'Pending'},
  {title: 'Cancelled'},
];
export const _profiletabs = [
  {
    title: 'About',
  },
  {
    title: 'Work Space',
  },
  {title: 'Reviews'},
  {title: 'Porfolio'},
];
export const workSpaceTabs = [
  {
    title: 'Active',
  },
  {
    title: 'Drafts',
  },
  {title: 'Paused'},
];

export const _2tabs = [
  {
    title: 'Freelancer',
  },
  {
    title: 'Company',
  },
];

export const _3tabs = [
  {
    title: 'Basics',
  },
  {
    title: 'Standard',
  },
  {
    title: 'Premium',
  },
];

export const orders = [
  {
    id: 1,
    title: 'I Will Do UI Design, UI UX Design, Website UI UX...',
    completion: 'In Revision',
    budget: '300',
    date: '21/23/2023',
  },
  {
    id: 2,
    completion: 'In Revision',
    budget: '300',
    date: '21/23/2023',
    title: 'I Will Do UI Design, UI UX Design, Website UI UX...',
  },
  {
    id: 3,
    completion: 'In Revision',
    budget: '300',
    date: '21/23/2023',
    title: 'I Will Do UI Design, UI UX Design, Website UI UX...',
  },
  {
    id: 4,
    completion: 'In Revision',
    budget: '300',
    date: '21/23/2023',
    title: 'I Will Do UI Design, UI UX Design, Website UI UX...',
  },
  {
    id: 5,
    completion: 'In Revision',
    budget: '300',
    date: '21/23/2023',
    title: 'I Will Do UI Design, UI UX Design, Website UI UX...',
  },
];

export const star = [1, 2, 3, 4, 5];

export const cancelOrder = [
  {
    title: 'He Is Just Taking More Time Then Required',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
  },
  {
    title: 'Nemo enim ipsam voluptatem quia voluptas ',
  },
  {
    title: 'Nemo enim ipsam voluptatem quia  ',
  },
  {
    title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate  ',
  },
  {
    title: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur  ',
  },
];

export const INTRO_DATA = [
  {
    key: '1',
    title: 'Title',
    description:
      'Ac Dolor Dacilisi Lacus Habitasse Lectus Lacus. Vitae Scelerisque Pellentesque Imperdiet Consectetur ',
    img: onBoard1,
  },
  {
    key: '2',
    title: 'Title',
    description:
      'Ac Dolor Dacilisi Lacus Habitasse Lectus Lacus. Vitae Scelerisque Pellentesque Imperdiet Consectetur ',
    img: onBoard2,
  },
  {
    key: '3',
    title: 'Title',
    description:
      'Ac Dolor Dacilisi Lacus Habitasse Lectus Lacus. Vitae Scelerisque Pellentesque Imperdiet Consectetur ',
    img: onBoard3,
  },
];
