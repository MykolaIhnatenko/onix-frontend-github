import IMainTitleWithoutSize from './interfaces/IMainTitleWithoutSize';

function MainTitleWithoutSize({
  children, tag: Tag = 'h2', className = '', capitalize = false, id,
}: IMainTitleWithoutSize) {
  return (
    <Tag
      id={id}
      className={`
        font-generalSans font-medium
        ${capitalize ? 'capitalize' : ''}
        ${className}
      `}
    >
      {children}
    </Tag>
  );
}

export default MainTitleWithoutSize;
