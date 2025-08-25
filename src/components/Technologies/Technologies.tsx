import { ITechnologiesData } from './interfaces/ITechnologies';
import VRARContent from '../VRARContent/VRARContent';

function Technologies({
  technologies,
  noShowIcon,
  withoutComma,
  classes,
  isJakarta = false,
  animatedText = false,
}: ITechnologiesData) {
  return (
    <>
      {Object.keys(technologies).map((key) => (
        <VRARContent
          key={key}
          withoutAnimate={!animatedText}
          className={
            `overflow-hidden [&:not(:last-child)]:border-b-2 [&:not(:last-child)]:border-black
            ${classes?.technology || ''}`
          }
        >
          <p
            className={`font-generalSans font-medium text-[20px] leading-[1.4] pt-[20px] 
              min-md:text-[30px] min-md:leading-[1.33] min-md:pt-[40px] 
              min-lg:pt-[40px] min-lg:pb-[40px] min-lg:w-[475px] min-lg:float-left 
              ${classes?.keyTitle || ''}
               ${isJakarta ? '!font-jakartaSans normal-case font-medium tracking-[-0.01em]' : ''}`}
          >
            {key}
          </p>
          <div
            className={`relative py-[15px] 
              min-md:p-[18px_0_40px_0] min-lg:overflow-auto min-lg:-left-[10px]
              min-lg:p-[20px_0_20px_20px] min-lg:pl-[20px] 
              ${classes?.technologiesList || ''}`}
          >
            {technologies[key].map((item, index) => (
              <div
                key={[index, item.title].join('_')}
                className={`
                  relative inline-block font-ibmPlexMono font-normal text-[16px]
                  leading-[1.5] mr-[15px] py-[5px] cursor-default 
                  min-md:text-[20px] min-md:leading-[1.4] min-md:py-[7px] 
                  min-lg:py-[23px] min-lg:mr-[30px] min-lg:leading-[1.75] 
                  ${classes?.item || ''}
                   ${isJakarta ? '!font-jakartaSans normal-case font-medium tracking-[-0.01em]' : ''}
                   `}
              >
                <div
                  className={`
                    relative transition-opacity duration-300
                    group
                    ${classes?.itemHover || ''}
                  `}
                >
                  {!noShowIcon && (
                    <div
                      className={`
                        absolute opacity-0 grayscale transition-opacity duration-[200ms]
                        top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2
                        group-hover:min-lg:opacity-100
                        ${classes?.icon || ''}
                      `}
                    >
                      {item.icon}
                    </div>
                  )}
                  <p
                    className={`transition-all duration-300
                      ${item.icon && !noShowIcon
                      ? 'group-hover:min-lg:opacity-0' : 'group-hover:min-lg:font-bold'}
                      ${classes?.iconTitle || ''}`}
                  >
                    {item.title}
                    {(technologies[key].length - 1 !== index && !withoutComma) && ','}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </VRARContent>
      ))}
    </>
  );
}

export default Technologies;
