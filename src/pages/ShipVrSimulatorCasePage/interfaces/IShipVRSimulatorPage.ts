import React from 'react';

interface IShipVRSimulatorPageProps {
  topVideoClicked: boolean,
  bottomVideoClicked: boolean,
  handleVideoClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, position: 'top' | 'bottom') => void;
  isBigTablet: boolean,
}

export type IHeroProps = Omit<IShipVRSimulatorPageProps, 'bottomVideoClicked'>;

export type ITechStackProps = Omit<IShipVRSimulatorPageProps, 'topVideoClicked'>;

export default IShipVRSimulatorPageProps;
