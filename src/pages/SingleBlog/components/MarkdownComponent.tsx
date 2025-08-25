import { memo } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkStringify from 'remark-stringify';

import IMarkdownComponent from '../interfaces/IMarkdownComponent';
import ImageComponent from '../../../components/Image/Image';

function MarkdownComponent({ html, imagesPriority }: IMarkdownComponent) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw, remarkStringify]}
      components={{
        // eslint-disable-next-line react/no-unstable-nested-components
        img: ({
          src, alt, width = 700, height = 700,
        }) => {
          if (!src) return null;

          return (
            <ImageComponent
              src={src}
              width={+width}
              height={+height}
              alt={alt || 'Blog picture'}
              priority={imagesPriority}
              sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
            />
          );
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        div: ({ children, node: _, ...props }) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <div suppressContentEditableWarning {...props}>
            {children}
          </div>
        ),
      }}
    >
      {html}
    </ReactMarkdown>
  );
}

export default memo(MarkdownComponent);
