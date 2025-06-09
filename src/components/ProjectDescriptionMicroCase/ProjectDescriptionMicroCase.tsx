import IProjectDescriptionMicroCase from './interfaces/IProjectDescriptionMicroCase';

function ProjectDescriptionMicroCase({ color, item, fontSize }: IProjectDescriptionMicroCase) {
  const getStyles = (className: string) => {
    let stylesClasses = '';
    switch (className) {
      case 'industry':
        stylesClasses = 'order-1 basis-[60%] pb-10 screen-lg:pt-0 screen-lg:pb-[36px] screen-lg:!basis-[50%] '
        + 'screen-md:pb-0 screen-md:pt-0';
        break;
      case 'teamSize':
        stylesClasses = 'order-3 basis-[60%] screen-lg:pt-0 screen-lg:!basis-[50%] '
        + 'screen-md:pt-[21px]';
        break;
      case 'location':
        stylesClasses = 'order-2 basis-[40%] pb-10 screen-lg:pb-0 screen-lg:!basis-[50%] ';
        break;
      case 'projectDuration':
        stylesClasses = 'order-4 basis-[40%] screen-lg:!basis-[50%] screen-md:pt-[21px]';
        break;
      default:
        break;
    }
    return stylesClasses;
  };

  const getColorStyles = (className: string) => {
    let colorClass = '';

    switch (className) {
      case 'banskaStavnicaColor':
        colorClass = '!text-[var(--color-blue-banska-stiavnica)]';
        break;
      case 'vrColorStyle':
        colorClass = '!text-[var(--color-blue-vr-microcase)]';
        break;
      case 'cinematicVrColorStyle':
        colorClass = '!text-[var(--color-blue-cinematic-vr)]';
        break;
      case 'timescopeColor':
        colorClass = '!text-[var(--color-blue-timescope)]';
        break;
      case 'unrealSpaceColor':
        colorClass = '!text-[var(--color-blue-unreal-space)]';
        break;
      case 'holokitColor':
        colorClass = '!text-[var(--color-blue-holokit)]';
        break;
      case 'unityDSMColor':
        colorClass = '!text-[var(--color-blue-unity-dsm)]';
        break;
      case 'onixARColor':
        colorClass = '!text-[var(--color-blue-onix-ar)]';
        break;
      case 'salesforceTrackingAppColor':
        colorClass = '!text-[#0270D2]';
        break;
      case 'salesforceSupportAutomationAppColor':
        colorClass = '!text-[#3296ED]';
        break;
      case 'misterBnBColor':
        colorClass = '!text-[#0CA0BD]';
        break;
      default:
        break;
    }
    return colorClass;
  };

  return (
    <div
      className={`pt-0 max-w-[175px] screen-lg:flex-basis: 50%;
        screen-sm:pt-[21px] ${getStyles(item.className)}`}
    >
      <p
        className={`${fontSize ?? '!text-[24px] !leading-[32px] !font-medium screen-lg:!text-[20px]'} 
          pr-0 ${getColorStyles(color)}`}
      >
        {item.title}
      </p>
      <p>{item.description}</p>
    </div>
  );
}

export default ProjectDescriptionMicroCase;
