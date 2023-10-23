import {category1, category2, freelancer, gig, user} from '@assets';

let isDarkThemeEnabled = false;

export function getIsDarkModeEnabled() {
  return isDarkThemeEnabled;
}

export const categoryData = [
  {
    img: category1,
    title: 'Digital Marketing',
    subTitle: 'Related all categories',
  },
  {
    img: category2,
    title: 'Digital Marketing',
    subTitle: 'Related all categories',
  },
  {
    img: category1,
    title: 'Digital Marketing',
    subTitle: 'Related all categories',
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
