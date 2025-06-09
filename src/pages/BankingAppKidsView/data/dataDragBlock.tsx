import SliderItem from '../components/SliderItem';

const dataSliderItems = [
  {
    id: 1,
    content: (
      <SliderItem
        id="01"
        title="Sponsors (parents)"
        desc="They monitor their children's spending, set allowances, and manage allowances."
      />
    ),
  },
  {
    id: 2,
    content: (
      <SliderItem
        id="02"
        title="Wards (children)"
        desc="They manage their allowances, set savings goals, and make online and in-store purchases."
      />
    ),
  },
  {
    id: 3,
    content: (
      <SliderItem
        id="03"
        title="Administrators (client)"
        desc="Our client can access an admin panel to manage user accounts, resolve issues,
        and oversee the application's operation."
      />
    ),
  },
];

const dataDragBlock = {
  name: '[ Who this product is for ]',
  title: 'The online bank for kids serves three primary types of users, each with distinct needs and goals:',
  cards: dataSliderItems,
};

export default dataDragBlock;
