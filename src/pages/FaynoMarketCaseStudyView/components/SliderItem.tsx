import ISliderItem from '../interfaces/ISliderItem';
import ContentText from 'components/ContentText/ContentText';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';

import styles from '../sass/SliderItem.module.scss';

function SliderItem({ id, title, desc }: ISliderItem) {
  return (
    <div className="flex flex-col justify-between relative w-[590px] h-[686px] p-[40px] bg-white mr-[30px]">
      <div className="w-full flex flex-col gap-[30px]">
        <MainTitleWithoutSize tag="h3" className="text-[30px] font-medium leading-[40px]">
          {title}
        </MainTitleWithoutSize>
        <div className={styles.content}>
          {desc.map((item) => {
            const isString = typeof item === 'string';
            return (
              <ContentText
                key={id}
                className={isString ? '!mt-[30px] first:!mt-0' : '!mt-[20px]'}
                marginAbsent
                tag={isString ? 'p' : 'div'}
              >
                {item}
              </ContentText>
            );
          })}

        </div>
      </div>
      <MainTitleWithoutSize
        className="text-[30px] font-medium leading-[40px]"
        tag="span"
      >
        {id}
      </MainTitleWithoutSize>
    </div>
  );
}

export default SliderItem;
