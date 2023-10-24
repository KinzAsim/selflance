import {
  ai,
  banner,
  business,
  category1,
  category2,
  digital,
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
