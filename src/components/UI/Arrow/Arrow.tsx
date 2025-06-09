import Icons from '../../../assets/icon';
import { ArrowVariant } from '../../../constants/enums';
import IArrow from './interfaces/IArrow';

function Arrow({ arrowVariant, classes }: IArrow) {
  return arrowVariant === ArrowVariant.DOWN
    ? (
      <Icons.IconArrowDownload
        height={20}
        width={20}
        className={`ml-[10px] ${classes?.icon || ''}`}
      />
    )
    : (
      <Icons.IconArrowUp45
        height={20}
        width={20}
        className={`ml-[10px] ${classes?.icon || ''}`}
      />
    );
}

export default Arrow;
