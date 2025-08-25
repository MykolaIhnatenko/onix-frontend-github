import BlogSubcategoryTag from '../BlogSubcategoryTag/BlogSubcategoryTag';
import IBlogSubcategoryTagList from '../../pages/Blogs/interfaces/IBlogSubcategoryTagList';

function BlogSubcategoryTagList({ data = [], classes }:IBlogSubcategoryTagList) {
  return (
    <div className={`hidden min-md:flex-row min-md:flex min-md:p-[15px] min-md:flex-wrap
      min-md:absolute min-md:max-w-[330px] min-lg:max-w-[407px]
      ${classes?.container || ''}`}
    >
      {data?.map(({
        id,
        attributes: { name } = {},
      }) => (
        <BlogSubcategoryTag
          key={id}
          text={name || ''}
          classes={classes?.tag || ''}
        />
      ))}
    </div>
  );
}
export default BlogSubcategoryTagList;
