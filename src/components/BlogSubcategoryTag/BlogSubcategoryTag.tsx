import { ibmPlexMono } from '../../fonts/MainFonts';
import IBlogSubcategoryTag from './interfaces/IBlogSubcategoryTag';

function BlogSubcategoryTag({ text, classes }:IBlogSubcategoryTag) {
  return (
    <p
      className={`relative z-[2] px-[20px] py-[8px] text-[12px] font-[500] leading-[22px]
        tracking-[0.24px] uppercase bg-[rgba(255,255,255,0.8)] rounded-[21px]
        text-center mr-[10px] mb-[5px] whitespace-nowrap font-ibmPlexMono
        ${ibmPlexMono.variable} ${classes || ''}`}
    >
      {text}
    </p>
  );
}

export default BlogSubcategoryTag;
