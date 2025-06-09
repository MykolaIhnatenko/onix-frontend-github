import IBlog from '../interfaces/IBlog';

const replaceArrows = (text: string) => text
  .replace(/<p>\[code\]&lt;/g, '<')
  .replace(/&gt;&lt;\/div&gt;\[\/code\]<\/p>/g, '></div>')
  .replace(/&gt;&lt;/g, '><');

const parseCodes = (blog: IBlog) => {
  const { attributes } = blog;
  if (attributes.content) {
    const codes = attributes?.content?.match(/<p>\[code\].*?\[\/code\]<\/p>/g);

    if (codes) {
      const newCodes = codes.map(replaceArrows);
      codes.forEach((code, index) => {
        attributes.content = attributes?.content?.replace(code, newCodes[index]);
      });
    }
  }
  return { ...blog, attributes };
};

export default parseCodes;
