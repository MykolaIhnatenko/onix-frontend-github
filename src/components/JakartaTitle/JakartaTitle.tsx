import IJakartaTitle from 'components/JakartaTitle/interfaces/IJakartaTitle';

function JakartaTitle({
  children, tag: Tag = 'h2', className = '', capitalize = false, id,
}: IJakartaTitle) {
  return (
    <Tag
      id={id}
      className={`
        font-jakartaSans font-medium text-[50px]/[1.2] screen-lg:text-[38px]/[1.2] screen-md:text-[28px]/[1.3]
        tracking-[-0.5px] screen-lg:tracking-[-0.38px] screen-md:tracking-[-0.28px]
        ${capitalize ? 'capitalize' : ''}
        ${className}
      `}
    >
      {children}
    </Tag>
  );
}

export default JakartaTitle;
