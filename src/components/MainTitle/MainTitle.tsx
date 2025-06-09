import IMainTitle from './interfaces/IMainTitle';

function MainTitle({
  children, tag: Tag = 'h2', className = '', capitalize = false, id,
}: IMainTitle) {
  return (
    <Tag
      id={id}
      className={`
        font-generalSans font-medium text-[50px]/[64px] screen-lg:text-[40px]/[56px] screen-md:text-[25px]/[35px]
        ${capitalize ? 'capitalize' : ''}
        ${className}
      `}
    >
      {children}
    </Tag>
  );
}

export default MainTitle;
