import VRARMainTitle from 'components/VRARMainTitle/VRARMainTitle';
import VRARContentText from 'components/VRARContentText/VRARContentText';

import styles from '../sass/InteractiveVrMuseum.module.scss';

const ProjectDetails = {
  title: 'Project details',
  content: (
    <div className={styles.contentBlock}>
      <div className={styles.firstBlock}>
        <div className={styles.firstTitle}>
          <VRARMainTitle
            tag="p"
            title="The client provided the project’s specifications, wireframes,
              graphic design elements, and other resources, so we were able to start
              the proper VR game development immediately."
            classes={{ title: '!text-[30px]/[40px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[28px]' }}
          />
        </div>
        <div className={`${styles.numberBlock} ${styles.firstNumberBlock}`}>
          <VRARMainTitle
            tag="div"
            title="01"
            classes={{ title: '!text-[30px]/[40px] screen-lg:!text-[24px]/[34px]' }}
          />
        </div>
      </div>
      <div className={styles.blocksContainer}>
        <div className={styles.block}>
          <div className={styles.listWrapper}>
            <div className={styles.firstTitle}>
              <VRARMainTitle
                tag="p"
                title="A project team was formed accordingly to include:"
                classes={{ title: '!text-[30px]/[40px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[28px]' }}
              />
            </div>
            <div className={styles.itemText}>
              <VRARContentText
                tag="p"
                text="﹂"
                classes={{ text: 'mr-[16px] screen-md:mr-[11px]' }}
              />
              <VRARContentText
                tag="p"
                text="One VR developer"
              />
            </div>
            <div className={styles.itemText}>
              <VRARContentText
                tag="p"
                text="﹂"
                classes={{ text: 'mr-[16px] screen-md:mr-[11px]' }}
              />
              <VRARContentText
                tag="p"
                text="One quality assurance engineer"
              />
            </div>
            <div className={styles.itemText}>
              <VRARContentText
                tag="p"
                text="﹂"
                classes={{ text: 'mr-[16px] screen-md:mr-[11px]' }}
              />
              <VRARContentText
                tag="p"
                text="One project manager"
              />
            </div>
          </div>
          <div className={styles.secondNumberBlock}>
            <VRARMainTitle
              tag="span"
              title="02"
              classes={{ title: '!text-[30px]/[40px] screen-lg:!text-[24px]/[34px]' }}
            />
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.listWrapper}>
            <div className={styles.firstTitle}>
              <VRARMainTitle
                tag="p"
                title="Onix’s teams adhere to Agile principles. During this small project with
                  clear requirements, we were using the Kanban framework."
                classes={{ title: '!text-[30px]/[40px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[28px]' }}
              />
            </div>
            <div className={`${styles.wrapperItem} ${styles.itemTitle}`}>
              <VRARContentText
                text="The product went through the phases of"
              />
            </div>
            <div className={`${styles.itemText} ${styles.itemTextSecond}`}>
              <VRARContentText
                tag="p"
                text="﹂"
                classes={{ text: 'mr-[16px] screen-md:mr-[11px]' }}
              />
              <VRARContentText
                tag="p"
                text="Coding the functionalities required by the VR game’s different levels"
              />
            </div>
            <div className={`${styles.itemText} ${styles.itemTextSecond}`}>
              <VRARContentText
                tag="p"
                text="﹂"
                classes={{ text: 'mr-[16px] screen-md:mr-[11px]' }}
              />
              <VRARContentText
                tag="p"
                text="Testing the game’s performance and usability"
              />
            </div>
            <div className={styles.itemText}>
              <VRARContentText
                tag="p"
                text="﹂"
                classes={{ text: 'mr-[16px] screen-md:mr-[11px]' }}
              />
              <VRARContentText
                tag="p"
                text="Deployment"
              />
            </div>
          </div>
          <div className={styles.thirdNumberBlock}>
            <VRARMainTitle
              tag="span"
              title="03"
              classes={{ title: '!text-[30px]/[40px] screen-lg:!text-[24px]/[34px]' }}
            />
          </div>
        </div>
      </div>
    </div>
  ),

};

export default ProjectDetails;
