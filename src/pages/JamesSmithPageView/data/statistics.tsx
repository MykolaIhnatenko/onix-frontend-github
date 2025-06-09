import Icon from '../../../assets/icon';

const statistics = (isXSDevice: boolean) => ([
  {
    id: 0,
    icon: <Icon.IconDownloadsJSA width={isXSDevice ? 44 : 88} height={isXSDevice ? 44 : 88} />,
    title: 'Downloads',
    value: '200K +',
  },
  {
    id: 1,
    icon: <Icon.IconUsersJSA width={isXSDevice ? 44 : 88} height={isXSDevice ? 44 : 88} />,
    title: 'Active Users',
    value: '30K +',
  },
  {
    id: 2,
    icon: <Icon.IconRatingsJSA width={isXSDevice ? 44 : 88} height={isXSDevice ? 44 : 88} />,
    title: 'Ratings',
    value: '4.8',
  },
]);

export default statistics;
