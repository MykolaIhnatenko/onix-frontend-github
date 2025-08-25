import IJakartaText from 'components/JakartaText/interfaces/IJakartaText';

function JakartaText({
  children, tag: Tag = 'p', className = '', capitalize = false, id,
}: IJakartaText) {
  return (
    <Tag
      id={id}
      className={`
        font-jakartaSans font-medium 
        ${capitalize ? 'capitalize' : ''}
        ${className}
      `}
    >
      {children}
    </Tag>
  );
}

export default JakartaText;
