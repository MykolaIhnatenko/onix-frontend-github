import { useDispatch } from 'react-redux';

import MainTitle from '../../MainTitle/MainTitle';
import { IAdvantagesBlockItem } from '../interfaces/IAdvantagesBlock';
import { setShowContactForm } from '../../../store/app/contactForm/slice';
import ItemText from 'components/ItemText/ItemText';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';

function AdvantagesBlockItem({
  title, text, btnText = 'Request consultation', idBtn, classes,
}: IAdvantagesBlockItem) {
  const dispatch = useDispatch();

  return (
    <div className={`
        flex flex-col justify-center pr-[50px] pl-[60px] screen-lg:p-[0_30px_80px] screen-md:p-[0_15px_60px]
        screen-lg:last:pb-0
        ${classes?.item || ''}
      `}
    >
      {title && (
        <MainTitle
          tag="h3"
          className={`
            pb-[30px] !text-[30px]/[40px] screen-md:!text-[20px]/[28px] screen-md:pb-[20px]
            ${classes?.itemTitle || ''}
          `}
        >
          {title}
        </MainTitle>
      )}
      {text && (
        <div className={`${classes?.itemTextBlock || ''}`}>
          <ItemText
            content={text}
            marginBottomAbsent
            classes={{ itemText: classes?.itemText }}
          />
        </div>
      )}
      {idBtn && (
        <ButtonPrimary
          id={idBtn}
          styleContainer={`max-w-[420px] mt-[30px] screen-md:mt-[20px] ${classes?.button || ''}`}
          text={btnText}
          onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
        />
      )}
    </div>
  );
}

export default AdvantagesBlockItem;
