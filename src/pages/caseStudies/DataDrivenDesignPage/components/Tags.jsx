import React, { useMemo, useState } from 'react';

import Pagination from './Pagination';
import TagItem from './TagItem';
import UpwardTextAnimation from './UpwardTextAnimation';
import BubbleAnimation from '../../../../components/BubbleAnimation/BubbleAnimation';
import { useAppSelector } from '../../../../hook/reduxToolkit';
import { LG_DEVICE } from '../../../../constants/constants';

import styles from '../sass/Tags.module.scss';

const marinersCompassIcon = '/static/images/Pages/DataDrivenDesignPage/img_marinersCompassIcon.webp';
const megaphoneIcon = '/static/images/Pages/DataDrivenDesignPage/img_megaphoneIcon.webp';
const targetIcon = '/static/images/Pages/DataDrivenDesignPage/img_targetIcon.webp';
const flashIcon = '/static/images/Pages/DataDrivenDesignPage/img_flashIcon.webp';
const starsIcon = '/static/images/Pages/DataDrivenDesignPage/img_starsIcon.webp';
const pillIcon = '/static/images/Pages/DataDrivenDesignPage/img_pillIcon.webp';
const gratzIcon = '/static/images/Pages/DataDrivenDesignPage/img_gratzIcon.webp';
const moneyIcon = '/static/images/Pages/DataDrivenDesignPage/img_moneyIcon.webp';
const kiteIcon = '/static/images/Pages/DataDrivenDesignPage/img_kiteIcon.webp';
const bugleIcon = '/static/images/Pages/DataDrivenDesignPage/img_bugleIcon.webp';
const briefcaseIcon = '/static/images/Pages/DataDrivenDesignPage/img_briefcaseIcon.webp';
const fireIcon = '/static/images/Pages/DataDrivenDesignPage/img_fireIcon.webp';
const flyingRocketIcon = '/static/images/Pages/DataDrivenDesignPage/img_flyingRocketIcon.webp';
const castleIcon = '/static/images/Pages/DataDrivenDesignPage/img_castleIcon.webp';
const brickIcon = '/static/images/Pages/DataDrivenDesignPage/img_brickIcon.webp';
const diamondIcon = '/static/images/Pages/DataDrivenDesignPage/img_diamondIcon.webp';
const eyeIcon = '/static/images/Pages/DataDrivenDesignPage/img_eyeIcon.webp';

function Tags() {
  const [currentPage, setCurrentPage] = useState(1);
  const { screenWidth } = useAppSelector((state) => state.app.screenSizes);

  const isShowPagination = screenWidth < LG_DEVICE;

  const pageSize = 4;
  const tagsDetails = [{
    id: 1,
    icon: marinersCompassIcon,
    text: 'Ensure that the product team’s work is on the right track',
  }, {
    id: 2,
    icon: megaphoneIcon,
    text: 'Promote consensus and a shared vision',
  }, {
    id: 3,
    icon: targetIcon,
    text: 'Make better decisions',
  }, {
    id: 4,
    icon: flashIcon,
    text: 'Respond to any changes in users’ behavior or market faster',
  }, {
    id: 5,
    icon: starsIcon,
    text: 'Fix UX issues and other problems with the existing product',
  }, {
    id: 6,
    icon: pillIcon,
    text: 'Eliminate the risk of design errors',
  }, {
    id: 7,
    icon: gratzIcon,
    text: 'Facilitate the overall success of a project ',
  }, {
    id: 8,
    icon: moneyIcon,
    text: 'Reduce the risk of wasting money',
  }, {
    id: 9,
    icon: kiteIcon,
    text: 'Influence users’ behavior',
  }, {
    id: 10,
    icon: bugleIcon,
    text: 'Obtain recommendations for the future',
  }, {
    id: 11,
    icon: briefcaseIcon,
    text: 'Prepare reports for investors',
  }, {
    id: 12,
    icon: fireIcon,
    text: 'Increase conversion rates, sales, and customer retention, improving business outcomes',
  }, {
    id: 13,
    icon: flyingRocketIcon,
    text: 'Drive innovation',
  }, {
    id: 14,
    icon: castleIcon,
    text: 'Create competitive user experiences and interfaces',
  }, {
    id: 15,
    icon: brickIcon,
    text: 'Head off problems and adverse behavior changes',
  }, {
    id: 16,
    icon: diamondIcon,
    text: 'Increases customer satisfaction with a more pleasant and easy-to-use interface',
  }, {
    id: 17,
    icon: eyeIcon,
    text: 'View your product from another perspective',
  }];

  const mobileTagsDetails = [{
    id: 1,
    icon: gratzIcon,
    text: 'Facilitate the overall success of a project ',
  }, {
    id: 2,
    icon: moneyIcon,
    text: 'Reduce the risk of wasting money',
  }, {
    id: 3,
    icon: kiteIcon,
    text: 'Influence users’ behavior',
  }, {
    id: 4,
    icon: bugleIcon,
    text: 'Obtain recommendations for the future',
  }, {
    id: 5,
    icon: castleIcon,
    text: 'Create competitive user experiences and interfaces',
  }, {
    id: 6,
    icon: diamondIcon,
    text: 'Increases customer satisfaction with a more pleasant and easy-to-use interface',
  }, {
    id: 7,
    icon: eyeIcon,
    text: 'View your product from another perspective',
  }, {
    id: 8,
    icon: targetIcon,
    text: 'Make better decisions',
  }, {
    id: 9,
    icon: briefcaseIcon,
    text: 'Prepare reports for investors',
  }, {
    id: 10,
    icon: brickIcon,
    text: 'Head off problems and adverse behavior changes',
  }, {
    id: 11,
    icon: pillIcon,
    text: 'Eliminate the risk of design errors',
  }, {
    id: 12,
    icon: flashIcon,
    text: 'Respond to any changes in users’ behavior or market faster',
  }, {
    id: 13,
    icon: fireIcon,
    text: 'Increase conversion rates, sales, and customer retention, improving business outcomes',
  }];

  const currentTags = useMemo(() => {
    if (isShowPagination) {
      const firstPageIndex = (currentPage - 1) * pageSize;
      const lastPageIndex = firstPageIndex + pageSize;
      return mobileTagsDetails.slice(firstPageIndex, lastPageIndex);
    }
    return tagsDetails;
  }, [screenWidth, currentPage]);

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>Benefits of the DDD approach</h2>
      <div className={styles.textContainer}>
        Measuring design and utilizing UX data are essential steps
        towards creating a successful digital product. Namely, it helps
      </div>
      <div className={styles.tagsContainer}>
        {currentTags.map((i) => (
          <UpwardTextAnimation
            key={i.id}
            classes={styles.tagContainer}
            config={{ translatey: '2vh' }}
          >
            <BubbleAnimation>
              <TagItem icon={i.icon} text={i.text} />
            </BubbleAnimation>
          </UpwardTextAnimation>
        ))}
      </div>
      {isShowPagination && (
        <Pagination
          currentPage={currentPage}
          totalCount={mobileTagsDetails.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
}

export default Tags;
