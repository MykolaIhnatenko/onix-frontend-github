import LinkComponent from '../../Link/Link';
import IPaginationItemArrow from '../interfaces/IPaginationItemArrow';
import Icons from '../../../assets/icon';

function PaginationItemArrow({ btnNext = false, href = '', disabled }:IPaginationItemArrow) {
  return (
    <div className={disabled ? 'pointer-events-none' : ''}>
      <LinkComponent href={href} ariaLabel="page">
        <div
          className={`d-flex d-item-center d-justify-center
            !p-[11px] border-[1.35px] border-[#504F53] rounded-full rotate-90
            cursor-pointer screen-lg:cursor-default
            hover:bg-black hover:text-white
            ${btnNext ? 'rotate-[-90deg]' : ''}`}
        >
          <Icons.IconArrowDown width={16} />
        </div>
      </LinkComponent>
    </div>
  );
}

export default PaginationItemArrow;
