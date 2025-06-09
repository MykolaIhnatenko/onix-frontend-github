import { IAboutProjectBlockProps } from './interfaces/IAboutProjectProps';
import VRARContent from '../VRARContent/VRARContent';

function AboutProjectBlock({ content, variant }: IAboutProjectBlockProps) {
  return (
    <ul className={`flex flex-wrap ${variant?.list || ''} mt-[90px] screen-lg:mt-[80px] screen-md:mt-[60px]`}>
      {content.map(({ id, title, text }, index) => (
        <li
          key={[id, title].join('_')}
          className={`w-1/2 py-[30px] ${variant?.listItem || ''}
          ${index === 2 || index === 3 ? 'pt-[80px] pb-0 border-b-0 screen-lg:pt-[30px]' : ''}
          ${index === 0 || index === 1
            ? 'pb-[80px] border-b-2 border-white screen-lg:pb-[30px] screen-lg:pt-[0px]' : ''} 
          screen-lg:even:pl-[15px]
          screen-md:w-full 
          screen-md:even:pl-0
          ${index % 2 === 0 ? 'screen-md:pb-[20px]' : ''} 
          ${index === 1 || index === 2
              ? 'screen-md:pt-[20px] screen-md:border-b-2 screen-md:border-white screen-md:pb-[20px]' : ''} 
          ${index === content.length - 1 ? 'screen-md:pt-[20px] pb-0' : ''}`}
        >
          <VRARContent>
            <p
              className={`
                ${variant?.itemTitle || ''}
                font-generalSans font-medium text-[40px]/[56px] pb-[10px] pr-[30px] 
                screen-lg:text-[30px]/[40px] screen-md:text-[25px]/[35px]
              `}
            >
              {title}
            </p>
            <p
              className={`
                ${variant?.itemText || ''}
                font-ibmPlexMono font-normal text-[18px]/[26px] 
                screen-md:text-[14px]/[20px]
              `}
            >
              {text}
            </p>
          </VRARContent>
        </li>
      ))}
    </ul>
  );
}

export default AboutProjectBlock;
