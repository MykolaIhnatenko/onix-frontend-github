import { IImageMicroCase } from '../ImageInfoBlock/interfaces/IImageMicroCase';

import styles from './sass/imageMicroCase.module.scss';

function ImageMicroCase({
  className, shadowColor, bgColor, children, imgHeightClassName, bgStyle,
}: IImageMicroCase) {
  return (
    <div className={`${className ? styles[className] : ''} 
    ${shadowColor ? styles[shadowColor] : ''} 
    ${bgColor ? styles[bgColor] : ''} 
    ${bgStyle ? styles[bgStyle] : ''} 
    ${imgHeightClassName ? styles[imgHeightClassName] : ''}`}
    >
      {children}
    </div>
  );
}

export default ImageMicroCase;
