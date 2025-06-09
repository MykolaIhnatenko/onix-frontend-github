import IPageContainer from './interfaces/IPageContainer';

function PageContainer({ children, className = '', tag: Tag = 'div' }: IPageContainer) {
  return (
    <Tag className={`max-w-[1920px] mx-auto px-[15px] min-md:px-[30px] min-lg:px-[70px]
      min-xxxl:px-[80px] ${className}`}
    >
      {children}
    </Tag>
  );
}

export default PageContainer;
