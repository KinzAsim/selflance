import {
  ai,
  banner,
  business,
  category1,
  category2,
  demo,
  digital,
  frame1,
  frame2,
  frame3,
  frame4,
  freelancer,
  gig,
  graphic,
  social,
  tech,
  user,
  video,
  write,
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
  {
    img: graphic,
    title: 'Graphic Designing',
  },
  {
    img: digital,
    title: 'Digital Marketing',
  },
  {
    img: write,
    title: 'Writing & Translation',
  },
  {
    img: video,
    title: 'Video & Animation',
  },
  {
    img: tech,
    title: 'Programming & Tech',
  },
  {
    img: business,
    title: 'Business',
  },
  {
    img: social,
    title: 'Social Media',
  },
  {
    img: ai,
    title: 'AI Services',
  },
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
];
