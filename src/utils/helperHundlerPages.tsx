import itemsBreadcrumbs from './itemsBreadcrumbs.json';
import nestedItemsBreadcrumbs from './nestedItemsBreadcrumbs.json';

export const handleScroll = (widthSize: number, setIsBannerHidden: (active: boolean) => void) => {
  const element = document.getElementById('bannerBlock');
  const scrolledY = window.scrollY;
  if (element) {
    const count = widthSize < 992 ? scrolledY >= 800 : scrolledY >= 1450;
    setIsBannerHidden(count);
  }
};

export const subItemBreadcrumbs = [
  {
    id: 2,
    title: 'Industries',
    path: '/industries',
  },
  {
    id: 2,
    title: 'Services',
    path: '/services',
  },
  {
    id: 2,
    title: 'Careers',
    path: '/careers',
  },
  {
    id: 2,
    title: 'Case Studies',
    path: '/case-studies',
  },
  {
    id: 2,
    title: 'Work',
    path: '/work',
  },
  {
    id: 2,
    title: 'Design Portfolio',
    path: '/design-portfolio',
  },
];

export const getBreadcrumbsData = (itemName: string, subItemName: string, nestedItemName = '') => {
  const body = [
    {
      id: 1,
      title: 'Onix',
      path: '/',
    },
  ];
  const subItem = subItemBreadcrumbs.findIndex((el) => el.title === subItemName);
  if (subItem !== -1) {
    body.push(subItemBreadcrumbs[subItem]);
  }
  const item = itemsBreadcrumbs.findIndex((el) => el.title === itemName);
  if (item !== -1) {
    body.push(itemsBreadcrumbs[item]);
  }
  const nestedItem = nestedItemsBreadcrumbs.findIndex((el) => el.title === nestedItemName);
  if (nestedItem !== -1) {
    body.push(nestedItemsBreadcrumbs[nestedItem]);
  }

  return body;
};
