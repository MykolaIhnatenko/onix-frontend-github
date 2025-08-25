import ContentTextNew from 'components/ContentTextNew/ContentTextNew';
import LinkComponent from 'components/Link/Link';
import IBlogAiBtn from 'pages/SingleBlog/interfaces/IBlogAiBtn';

function BlogAiBtn({
  title, url, styles, icon,
}:IBlogAiBtn) {
  return (
    <LinkComponent
      href={url}
      prefetch={false}
      absolute={false}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center py-[8px] px-[16px] rounded-[21px] text-white
        screen-md:py-[5px] relative overflow-hidden cursor-pointer screen-lg:cursor-default
        transition-transform active:before:hidden group/button active:scale-[0.98]

        min-lg:hover:before:scale-x-0 min-lg:hover:before:origin-left
        before:absolute before:top-0 before:left-0 before:w-full before:h-full
        before:transition-transform before:duration-[.3s] before:ease-linear before:origin-right
        ${styles || ''}`}
    >
      <span className="flex items-center gap-[10px] justify-center relative min-lg:group-hover/button:button-animation">
        {icon}
        <ContentTextNew
          className={`!text-[16px]/[22px] uppercase screen-md:!text-[12px]/[22px]
            screen-md:tracking-[-0.12px] !font-[500]`}
          tag="span"
          text={title}
        />
      </span>
    </LinkComponent>
  );
}

export default BlogAiBtn;
