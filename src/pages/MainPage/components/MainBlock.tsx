import { useDispatch } from 'react-redux';

import JakartaText from 'components/JakartaText/JakartaText';
import PageContainer from 'components/PageContainer/PageContainer';
import ButtonLight from 'components/UI/ButtonLight/ButtonLight';
import VRARContent from 'components/VRARContent/VRARContent';
import { setShowContactForm } from 'store/app/contactForm/slice';

function MainBlock() {
  const textClasses = 'text-[24px]/[1.3] screen-lg:text-[20px]/[1.4] screen-md:text-[18px]/[1.4] max-w-[910px]'
  + ' screen-xl:text-[18px] screen-xl:leading-[1.4] screen-xl:max-w-[600px]'
  + ' screen-lg:max-w-[unset] tracking-[-0.24px] screen-lg:tracking-[-0.2px] screen-md:tracking-[-0.18px]';
  const dispatch = useDispatch();

  return (
    <PageContainer
      className="pt-[200px] pb-[130px] flex flex-col justify-center
          screen-lg:py-[210px] screen-md:pt-[86px] screen-md:pb-[30px] text-color-white
          min-xxxl:pt-[289px] min-xxxl:pb-[219px] screen-xl:pt-[167px] screen-xl:pb-[97px]
        "
    >
      <VRARContent>
        <JakartaText
          tag="h1"
          className="text-[96px] leading-[1.1] max-w-[1110px] pb-[60px]
            screen-xl:text-[50px] screen-xl:leading-[1.2] screen-xl:max-w-[700px]
            screen-lg:leading-[1.2] screen-lg:text-[80px] screen-xl:pb-[40px]
            screen-md:pb-[30px] screen-md:text-[38px] screen-md:leading-[1.2]
            tracking-[-2.88px] screen-xl:tracking-[-0.5px] screen-lg:tracking-[-2.4px] screen-md:tracking-[-0.38px]"
        >
          Expert Software Rescue –
          Done Right, On Time
        </JakartaText>
      </VRARContent>
      <VRARContent>
        <JakartaText
          tag="p"
          className={`${textClasses} pb-[40px] screen-xl:pb-[30px] screen-md:pb-[20px]`}
        >
          Stalled project? Missed deadlines? We are a software development company that fixes broken software and
          rescues failing projects with speed and precision.
        </JakartaText>
      </VRARContent>
      <VRARContent>
        <JakartaText
          tag="p"
          className={`${textClasses} pb-[60px] screen-xl:pb-[40px] screen-md:pb-[30px]`}
        >
          Onix’s senior-level engineers jump in to untangle bad code, deliver missing
          features, and integrate artificial intelligence to future-proof your product.
        </JakartaText>
      </VRARContent>
      <VRARContent>
        <ButtonLight
          classes={{
            container: 'w-full max-w-[420px] screen-md:max-w-[330px]',
          }}
          text="Book a free rescue audit"
          onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
          isJakarta
        />
      </VRARContent>
    </PageContainer>
  );
}

export default MainBlock;
