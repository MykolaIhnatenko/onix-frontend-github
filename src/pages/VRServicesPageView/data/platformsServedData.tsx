import Icons from '../../../assets/icon';
import { IPlatformsServedData } from 'components/PlatformsServed/interfaces/IPlatformsServed';

const platformsServedData: IPlatformsServedData = {
  title: 'Platforms We Serve',
  text: 'We work with popular AR & VR platforms that provide endless possibilities',
  content: [
    {
      id: 1,
      itemTitle: 'VR/AR and 3D design',
      itemContent: [
        {
          id: 1,
          itemIconTitle: 'Meta',
          icon: <Icons.IconOculus />,
          iconMobile: <Icons.IconOculusMobi />,
        },
        {
          id: 2,
          itemIconTitle: 'Google Cardboard',
          icon: <Icons.IconGoogleCardboard />,
          iconMobile: <Icons.IconGoogleCardboardMobi />,
        },
        {
          id: 3,
          itemIconTitle: 'VIVE',
          icon: <Icons.IconVIVE />,
          iconMobile: <Icons.IconVIVEMobi />,
        },
        {
          id: 4,
          itemIconTitle: 'Pico',
          icon: <Icons.IconPico />,
          iconMobile: <Icons.IconPicoMobi />,
        },
        {
          id: 5,
          itemIconTitle: 'Windows Mixed Reality',
          icon: <Icons.IconWindowsMixedReality />,
          iconMobile: <Icons.IconWindowsMixedRealityMobi />,
        },
        {
          id: 6,
          itemIconTitle: 'VALVE INDEX',
          icon: <Icons.IconValveIndex />,
          iconMobile: <Icons.IconValveIndexMobi />,
        },
      ],
    },
  ],
};

export default platformsServedData;
