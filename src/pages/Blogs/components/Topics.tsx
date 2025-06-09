import { FieldArray, FieldArrayRenderProps, FormikProvider } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import ITopics, { ITopicItem } from '../interfaces/ITopics';
import Icons from '../../../assets/icon';
import Topic from './Topic';
import ContentText from '../../../components/ContentText/ContentText';
import CloseButton from '../../../components/CloseButton/CloseButton';
import { useAppSelector } from '../../../hook/reduxToolkit';
import { setIsOpenTopics } from '../../../store/app/subscribeForm/slice';

import styles from '../sass/topics.module.scss';

function Topics({
  formik, categories, values,
}: ITopics) {
  const dispatch = useDispatch();
  const [topicItems, setTopicItems] = useState<ITopicItem[] | [] | undefined>([]);
  const { isOpenTopics } = useAppSelector((state) => state?.subscribeForm);

  useEffect(() => {
    const newTopicItems = categories?.data?.map(({ id, attributes: { title } }) => (
      { id, title, isChecked: false }
    ));
    setTopicItems(newTopicItems);
  }, [categories]);

  const fieldArrayRender = ({ push, remove }: FieldArrayRenderProps) => {
    const { values: { topics }, setFieldValue } = formik;
    const onChangeHandler = (value: string) => {
      if (topics.includes(value)) {
        const index = topics.indexOf(value);
        remove(index);
      } else push(value);
    };

    const closeButtonHandler = async (index: number, value: string) => {
      const newTopics = [...topics];
      if (newTopics.length > 0) {
        newTopics.splice(index, 1);
        const mappedTopics = topicItems?.map((
          item,
        ) => (item.title === value ? { ...item, isChecked: false } : { ...item }));
        setTopicItems(mappedTopics);
        await setFieldValue('topics', newTopics);
      }
    };

    return (
      <div className={styles.topics}>
        <div className={`${styles.dropdown} ${isOpenTopics ? styles.activeDropdown : ''}`}>
          {values.length !== 0 ? (
            <div className={styles.checkedItemsContainer}>
              {values.length !== 0 && values.map((value, idx) => (
                <div className={styles.topicsTitleBlock} key={[value, idx].join('_')}>
                  <ContentText className={styles.topicTitle}>
                    {value}
                  </ContentText>
                  <CloseButton
                    classes={{
                      container: 'w-[20px] h-[20px] bg-transparent ml-[10px] shrink-0',
                      rectangle: '!w-[17px] !bg-color-dark-gray',
                    }}
                    onClick={() => closeButtonHandler(idx, value)}
                    type="button"
                  />
                </div>
              ))}
            </div>
          ) : (
            <span className={styles.placeholder}>Topics</span>
          )}
          <div
            className={`${styles.icon} ${isOpenTopics ? styles.openIcon : ''}`}
            onClick={() => dispatch(setIsOpenTopics({ isOpenTopics: !isOpenTopics }))}
            role="presentation"
          >
            <Icons.IconChevron width={13} />
          </div>
        </div>
        {isOpenTopics && (
        <div className={styles.topicsWrapper}>
          <div className={styles.topicsList}>
            {categories?.data?.map(({ id, attributes: { title } }) => (
              <Topic
                key={id}
                title={title}
                onChangeHandler={onChangeHandler}
                id={id}
                isChecked={topicItems?.find((item) => item.id === id)?.isChecked}
                topicItems={topicItems || []}
                setTopicItems={setTopicItems}
              />
            ))}
          </div>
        </div>
        )}
      </div>
    );
  };

  return (
    <FormikProvider value={formik}>
      <FieldArray
        name="topics"
        render={fieldArrayRender}
      />
    </FormikProvider>
  );
}
export default Topics;
