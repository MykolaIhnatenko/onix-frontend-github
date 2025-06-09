import { useRef } from 'react';

import { IAuthorPageView } from './interfaces/IAuthorPageView';
import IntroductionSection from './components/IntroductionSection';
import BlogsSection from './components/BlogsSection';

function AuthorPageView({
  setsScrollHeight, author, authorBlogs, pagination,
}: IAuthorPageView) {
  const {
    attributes: {
      name, surname, url,
    },
  } = author;
  const ref = useRef<HTMLDivElement>(null);
  if (ref.current && setsScrollHeight) {
    setsScrollHeight(ref.current.clientHeight);
  }

  return (
    <>
      <div ref={ref}>
        <IntroductionSection author={author} />
      </div>
      <BlogsSection
        authorBlogs={authorBlogs}
        name={name}
        surname={surname}
        url={url}
        pagination={pagination}
      />
    </>
  );
}

export default AuthorPageView;
