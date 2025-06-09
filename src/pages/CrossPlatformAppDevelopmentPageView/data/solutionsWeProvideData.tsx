import Icons from '../../../assets/icon';
import MainTitle from '../../../components/MainTitle/MainTitle';

const solutionsWeProvideData = [
  {
    id: 1,
    icon: <Icons.IconPhone />,
    title: (
      <MainTitle tag="p">
        Mobile Android/
        <wbr />
        <br />
        iOS apps
      </MainTitle>),
  },
  {
    id: 2,
    icon: <Icons.IconTablet />,
    title: (
      <MainTitle tag="p">
        Tablet Android/
        <wbr />
        <br />
        iOS apps
      </MainTitle>
    ),
  },
  {
    id: 3,
    icon: <Icons.IconPwa />,
    title: (
      <MainTitle tag="p">
        PWAs
      </MainTitle>
    ),
  },
  {
    id: 4,
    icon: <Icons.IconTv />,
    title: (
      <MainTitle tag="p">
        TV apps for Apple
        {' '}
        <wbr />
        TV/
        <br />
        Android TV
      </MainTitle>),
  },
  {
    id: 5,
    icon: <Icons.IconImac />,
    title: (
      <MainTitle tag="p">
        Desktop Apps
      </MainTitle>),
  },
  {
    id: 6,
    icon: <Icons.IconMacbook />,
    title: (
      <MainTitle tag="p">
        Web Apps
      </MainTitle>),
  },
];

export default solutionsWeProvideData;
