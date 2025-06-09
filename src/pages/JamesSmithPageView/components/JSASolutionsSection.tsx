import React from 'react';

import { useAppSelector } from '../../../hook/reduxToolkit';
import JSAPageContainer from './JSAPageContainer';
import VRARContent from '../../../components/VRARContent/VRARContent';
import JSAText from './JSAText';
import solutionsItems from '../data/solutionsItems';
import JSASolutionItem from './JSASolutionItem';
import BlueSpan from './BlueSpan';

import styles from '../sass/JSASolutionsSection.module.scss';

function SolutionsSection() {
  const { isSMDevice, isXSDevice, isMDDevice } = useAppSelector((state) => state.app.screenSizes);
  const isSmallDevice = isXSDevice || isSMDevice || isMDDevice;

  return (
    <JSAPageContainer className={styles.solutionsSection}>
      <div className={styles.solutionsDescription}>
        <VRARContent>
          <JSAText tag="p" variant="fs16">
            Our Solutions
          </JSAText>
          <JSAText tag="h2" className={styles.title} variant="fs38">
            The client came to us with
            <BlueSpan> an already existing project </BlueSpan>
            and asked to help
            <BlueSpan> implement specific features, improve existing ones, and fix bugs.</BlueSpan>
          </JSAText>
        </VRARContent>
        <VRARContent>
          <JSAText className={styles.content}>
            On our side, we started with an audit of the app’s functionality and design to propose ideas on how to
            fix those issues. Since we found many critical problems in
            UI and UX design,
            the client and our best
            designers decided to redesign the JSA app completely.
            <br />
            <br />
            Our team’s approach is to walk in the user&apos;s shoes to understand the product inside-out. That’s
            why our designer went to the gym and did sports using the JSA application to better understand the pros
            and cons of the application and make appropriate changes.
            <br />
            <br />
            The first steps were analyzing competitors, the market, and analytics.
            Then, we worked on a new brand
            identity: logo and branding. A strong brand identity is essential for any business that wants to be
            successful. After all, branding is one of the most important ways to make your company stand out
            from the competition.
            <br />
            <br />
            A well-designed brand identity can help you attract new customers
            and build loyalty among existing ones. It can also boost your visibility,
            making it easier for potential customers to find you. And perhaps most importantly, a strong brand
            identity can help you build trust with your audience.
            <br />
            <br />
            Obtaining all necessary data and solving essential issues made it possible
            to start the development of wireframes, followed by creating a prototype
            based on them.
            <br />
            <br />
            After the wireframes and prototypes phase, we proceeded to the UI development phase, and the app took its
            final form. After that and till now, the application is constantly being improved based on user feedback
            and analytics.
          </JSAText>
        </VRARContent>
      </div>
      <VRARContent>
        <JSAText tag="h2" className={styles.subTitle} variant="fs64">
          So, summing up all our work for JSA,
          {' '}
          <br />
          these are
          <br />
          <BlueSpan> our leading solutions:</BlueSpan>
        </JSAText>
      </VRARContent>
      {solutionsItems.map((item) => <JSASolutionItem key={item.id} item={item} isSmallDevice={isSmallDevice} />)}
    </JSAPageContainer>
  );
}

export default SolutionsSection;
