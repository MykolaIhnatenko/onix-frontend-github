import { useAppSelector } from '../../hook/reduxToolkit';
import LinkComponent from '../Link/Link';
import { IViewAllCategoriesButton } from './interfaces/IViewAllCategoriesButton';
import Icons from '../../assets/icon';

function ViewAllButton({ href, title, variant }: IViewAllCategoriesButton) {
  const { screenSizes: { isSMDevice, isXSDevice } } = useAppSelector((state) => state?.app);
  const isMobile = isXSDevice || isSMDevice;

  return (
    <LinkComponent href={href} className="flex">
      {variant && isMobile ? null : (
        <p className="font-ibmPlexMono text-[18px]/[24px] uppercase tracking-[0.36px] font-medium text-black pr-[10px]">
          {title}
        </p>
      )}
      <Icons.IconArrowUp45Blogs className="w-[14px] h-[14px] relative top-[3px]" />
    </LinkComponent>
  );
}

export default ViewAllButton;
