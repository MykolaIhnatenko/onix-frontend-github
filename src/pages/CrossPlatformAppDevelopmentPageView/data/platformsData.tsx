import MainTitle from '../../../components/MainTitle/MainTitle';
import Icons from '../../../assets/icon';

const platformData = [
  {
    id: 1,
    title: (
      <MainTitle tag="p">
        Mobile Android/
        <wbr />
        <br />
        iOS apps
      </MainTitle>),
    icon: <Icons.IconPhone />,
  },
  {
    id: 2,
    title: (
      <MainTitle tag="p">
        Tablet Android/
        <wbr />
        <br />
        iOS apps
      </MainTitle>),
    icon: <Icons.IconTablet />,
  },
  {
    id: 3,
    title: (
      <MainTitle tag="p">
        TV apps for Apple
        {' '}
        <wbr />
        TV/
        <br />
        Android TV
      </MainTitle>),
    icon: <Icons.IconTv />,
  },
  {
    id: 4,
    title: (
      <MainTitle tag="p">
        Desktop &
        {' '}
        <wbr />
        <br />
        Web Apps
      </MainTitle>),
    icon: <Icons.IconImac />,
  },
];

export default platformData;
