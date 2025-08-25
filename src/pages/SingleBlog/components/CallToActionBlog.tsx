/* eslint-disable @next/next/no-img-element */

import { BLOG_ICON_BLUE_PATH, BLOG_ICON_PATH } from 'constants/general';
import ICallToActionBlog from '../interfaces/ICallToActionBlog';

function CallToActionBlog({
  background, title, btnText, url, contentType, alt, variant,
}: ICallToActionBlog) {
  const adminPath = process.env.NEXT_PUBLIC_BACKEND as string;

  const sanitizedTitle = title.replace(/&amp;/g, '&').replace(/&nbsp;/g, '');
  const sanitizedBtnText = btnText.replace(/&amp;/g, '&').replace(/&nbsp;/g, '');
  const sanitizedUrl = url.replace(/ /g, '');

  return (
    <div
      className={`containerCta ${contentType} ${variant ? 'leftContent' : ''}`}
    >
      {background && (
        <div className="background">
          <img
            src={`${adminPath}/uploads/${background}`}
            alt={alt || 'blog image'}
          />
        </div>
      )}
      <div className="contentBlock">
        <h2 className="title">
          {sanitizedTitle}
        </h2>
        <a
          href={sanitizedUrl}
          target="_blank"
          className="btnContainer"
          rel="noopener noreferrer"
        >
          <div
            className="d-flex d-row d-item-center d-justify-center content"
            role="presentation"
            onKeyDown={() => null}
          >
            <div className="textContainer">
              <span>
                {sanitizedBtnText}
              </span>
              <div className="btnIcon">
                <img
                  src={contentType === 'white'
                    ? BLOG_ICON_BLUE_PATH : BLOG_ICON_PATH}
                  alt="iconImg"
                />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default CallToActionBlog;
