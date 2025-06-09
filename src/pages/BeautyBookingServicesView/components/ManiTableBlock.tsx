import IManiTableBlock from '../interfaces/IManiTableBlock';
import ImageComponent from 'components/Image/Image';
import VRARMainTitle from 'components/VRARMainTitle/VRARMainTitle';
import VRARContentText from 'components/VRARContentText/VRARContentText';

import styles from '../sass/ManiTableBlock.module.scss';

function ManiTableBlock({
  title, data, headers, titleDesc, desc, background,
}: IManiTableBlock) {
  return (
    <div className={styles.container}>
      {background && (
        <ImageComponent
          src={background}
          alt="background"
          fill
          sizes="100vw"
          quality={100}
        />
      )}
      <div className={styles.titleBox}>
        <VRARMainTitle
          title={title}
          classes={{
            title: 'text-center !text-[40px]/[56px] screen-lg:!text-[36px]/[46px] screen-md:!text-[20px]/[28px]',
          }}
        />
      </div>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              {headers.map((item, index) => (
                <th
                  key={[index, item.replace(/\s/g, '')].join('_')}
                >
                  <div className={styles.textTable}>
                    <VRARMainTitle
                      tag="p"
                      title={item}
                      classes={{
                        title: '!text-[30px]/[40px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[28px]',
                      }}
                    />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={[index, 'row'].join('_')}>
                {item.map((cell, indexCell) => (
                  <td key={[indexCell, cell.replace(/\s/g, '')].join('_')}>
                    <VRARMainTitle
                      tag="p"
                      title={cell}
                      classes={{
                        title: '!text-[24px]/[34px] screen-lg:!text-[20px]/[28px] screen-md:!text-[16px]/[24px]',
                      }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.descBlock}>
        <VRARMainTitle title={titleDesc} />
        <VRARContentText
          text={desc}
          classes={{ text: styles.contentBlockText }}
        />
      </div>
    </div>
  );
}

export default ManiTableBlock;
