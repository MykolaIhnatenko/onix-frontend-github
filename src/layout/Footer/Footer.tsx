import { useState } from 'react';
import Script from 'next/script';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';

import { generalSans } from '../../fonts/MainFonts';
import jetBrains from '../../fonts/JetBrains';
import LogoBlock from './components/sections/LogoBlock';
import List from './components/common/List';
import MenuItem from './components/common/MenuItem';
import ContactUsBlock from './components/sections/ContactUsBlock';
import { getFooterData } from './data/getFooterData';
import IStore from '../../store/interfaces/IStore';
import { IScreenSizes } from '../../store/app/interfaces/IApp';
import { IFooter } from './interfaces/IFooter';
import PageLinks from '../../constants/PageLinks';
import BlogsLastSections from '../../pages/Blogs/components/BlogsLastSections';

import styles from './sass/footer.module.scss';

const Locations = dynamic(() => import('./components/common/Locations'), { ssr: false });

function Footer({
  salesChannel, topFields, bottomFields, isBlogsPage = false,
}: IFooter) {
  const [activeGroup, setActiveGroup] = useState('');
  const {
    isMDDevice, isLGDevice, isXLDevice, isXXLDevice, isXXXLDevice,
  } = useSelector<IStore, IScreenSizes>((state) => state.app.screenSizes);
  const isTablet = isMDDevice || isLGDevice;
  const isDesktop = isXLDevice || isXXLDevice || isXXXLDevice;

  return (
    <>
      {isBlogsPage && (
        <BlogsLastSections />
      )}
      <footer className={`${styles.footer} ${generalSans.variable} ${jetBrains.variable}`}>
        <div className={styles.container}>
          {isDesktop ? (
            <div className={styles.desk}>
              <div className={`d-flex ${styles.row}`}>
                <LogoBlock />
                {topFields ? topFields.map(({ sectionTitle, links }) => (
                  <List
                    key={[sectionTitle, links].join('_')}
                    listTitle={sectionTitle}
                    links={links}
                    activeGroup={activeGroup}
                    setActiveGroup={setActiveGroup}
                  />
                )) : (
                  <>
                    <List
                      listTitle="services"
                      links={getFooterData.services}
                      activeGroup={activeGroup}
                      setActiveGroup={setActiveGroup}
                    />
                    <List
                      listTitle="industries"
                      links={getFooterData.industries}
                      activeGroup={activeGroup}
                      setActiveGroup={setActiveGroup}
                    />
                  </>
                )}
                <List
                  listTitle="company"
                  links={getFooterData.company}
                  activeGroup={activeGroup}
                  setActiveGroup={setActiveGroup}
                >
                  <MenuItem title="Case Studies" url={PageLinks.CASE_STUDIES} />
                  <MenuItem title="Design portfolio" url={PageLinks.DESIGN_PORTFOLIO} />
                  <MenuItem title="Blog" url={PageLinks.BLOGS} />
                </List>
              </div>
              <hr />
              <div className={`d-flex ${styles.row}`}>
                <ContactUsBlock salesChannel={salesChannel} />
                {bottomFields ? bottomFields.map(({ sectionTitle, links }) => (
                  <List
                    key={[sectionTitle, links].join('_')}
                    listTitle={sectionTitle}
                    links={links}
                    activeGroup={activeGroup}
                    setActiveGroup={setActiveGroup}
                  />
                )) : (
                  <>
                    <List
                      listTitle="ar/vr"
                      links={getFooterData['ar/vr']}
                      activeGroup={activeGroup}
                      setActiveGroup={setActiveGroup}
                    />
                    <List
                      listTitle="ml"
                      links={getFooterData.ml}
                      activeGroup={activeGroup}
                      setActiveGroup={setActiveGroup}
                    />
                    <List
                      listTitle="product development"
                      links={getFooterData['product development']}
                      activeGroup={activeGroup}
                      setActiveGroup={setActiveGroup}
                    />
                  </>
                )}
              </div>
              <hr />
            </div>
          ) : (
            <div className={styles.mobile}>
              <LogoBlock />
              <hr />
              <ContactUsBlock salesChannel={salesChannel} />
              <hr className={styles.contactUsDivider} />
              <div className={`${styles.row} ${styles.dFlex}`}>
                {topFields ? topFields[0] && (
                  <List
                    key={[topFields[0].sectionTitle, topFields[0].links].join('_')}
                    listTitle={topFields[0].sectionTitle}
                    links={topFields[0].links}
                    activeGroup={activeGroup}
                    setActiveGroup={setActiveGroup}
                  >
                    {isTablet && <MenuItem title="Case Studies" url={PageLinks.CASE_STUDIES} />}
                    {isTablet && <MenuItem title="Blog" url={PageLinks.BLOGS} />}
                  </List>
                ) : (
                  <List
                    listTitle="services"
                    links={getFooterData.services}
                    activeGroup={activeGroup}
                    setActiveGroup={setActiveGroup}
                  >
                    {isTablet && <MenuItem title="Case Studies" url={PageLinks.CASE_STUDIES} />}
                    {isTablet && <MenuItem title="Blog" url={PageLinks.BLOGS} />}
                  </List>

                )}
                <hr className={styles.itemDivider} />
                <div>
                  {topFields ? topFields[1] && (
                    <List
                      key={[topFields[1].sectionTitle, topFields[1].links].join('_')}
                      listTitle={topFields[1].sectionTitle}
                      links={topFields[1].links}
                      activeGroup={activeGroup}
                      setActiveGroup={setActiveGroup}
                    />
                  ) : (
                    <List
                      listTitle="industries"
                      links={getFooterData.industries}
                      activeGroup={activeGroup}
                      setActiveGroup={setActiveGroup}
                    />
                  )}
                  { isTablet && (
                    <List
                      listTitle="company"
                      links={getFooterData.company}
                      activeGroup={activeGroup}
                      setActiveGroup={setActiveGroup}
                    />
                  )}
                </div>
                <hr className={styles.itemDivider} />
                {!isTablet && (
                  <List
                    listTitle="company"
                    links={getFooterData.company}
                    activeGroup={activeGroup}
                    setActiveGroup={setActiveGroup}
                  >
                    <hr className={styles.itemDivider} />
                    <MenuItem title="Case Studies" url={PageLinks.CASE_STUDIES} />
                    <hr className={styles.itemDivider} />
                    <MenuItem title="Blog" url={PageLinks.BLOGS} />
                    <hr className={styles.itemDivider} />
                  </List>
                )}
              </div>
              <hr className={styles.tabletDivider} />
              <div className={`${styles.row} ${styles.dFlex} ${styles.tabletFlex}`}>
                {bottomFields ? bottomFields.map(({ links, sectionTitle }, index) => (
                  <div key={[sectionTitle, index].join('-')}>
                    <List
                      key={[sectionTitle, index].join('--')}
                      listTitle={sectionTitle}
                      links={links}
                      activeGroup={activeGroup}
                      setActiveGroup={setActiveGroup}
                    />
                    {index !== bottomFields.length - 1 && <hr className={styles.itemDivider} />}
                  </div>
                )) : (
                  <>
                    <div>
                      <List
                        listTitle="ML"
                        links={getFooterData.ml}
                        activeGroup={activeGroup}
                        setActiveGroup={setActiveGroup}
                      />
                      <hr className={styles.itemDivider} />
                      <List
                        listTitle="product development"
                        links={getFooterData['product development']}
                        activeGroup={activeGroup}
                        setActiveGroup={setActiveGroup}
                      />
                      <hr className={styles.itemDivider} />
                    </div>
                    <div>
                      <List
                        listTitle="ar/vr"
                        links={getFooterData['ar/vr']}
                        activeGroup={activeGroup}
                        setActiveGroup={setActiveGroup}
                      />
                    </div>
                  </>
                )}
              </div>
              <hr className={styles.itemsDivider} />
            </div>
          )}
          <div className={` d-flex ${styles.row} ${styles.locations}`}>
            <Locations />
          </div>
        </div>
        <Script
          strategy="lazyOnload"
          id="clutch-widget"
          type="text/javascript"
          src="https://widget.clutch.co/static/js/widget.js"
        />
      </footer>
    </>
  );
}

export default Footer;
