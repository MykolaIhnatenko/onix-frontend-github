export interface IApp {
  screenSizes: IScreenSizes,
  navSubMenuVisibility: number,
  isFontReady: boolean,
  windowWidth: number;
}

export interface IScreenSizes {
  isXXXLDevice: boolean,
  isXXLDevice: boolean,
  isXLDevice: boolean,
  isLGDevice: boolean,
  isMDDevice: boolean,
  isSMDevice: boolean,
  isXSDevice: boolean,
  screenWidth: number,
}
