import { useDispatch } from 'react-redux';

import Icons from '../../assets/icon';
import { IShowButton } from './interfaces/IShowButton';
import { toggleShowAll } from '../../store/blogs/slice';
import { ShowButtonTitleVariants } from '../../constants/enums';

function ShowButton({ title }: IShowButton) {
  const dispatch = useDispatch();
  const toggleIsShowAll = () => dispatch(toggleShowAll());

  return (
    <div
      className="flex cursor-pointer screen-lg:cursor-default"
      onClick={toggleIsShowAll}
      role="presentation"
    >
      <p
        className=" font-ibmPlexMono uppercase font-medium text-black pr-[10px] text-[16px]/[22px] tracking-[0.36px]"
      >
        {title}
      </p>
      <Icons.IconChevron
        width={13}
        className={`relative ${title === ShowButtonTitleVariants.SHOW_LESS
          ? '' : 'rotate-180'}`}
      />
    </div>
  );
}

export default ShowButton;
