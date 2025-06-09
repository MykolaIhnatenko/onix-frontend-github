import { motion } from 'framer-motion';

import ContentText from '../../ContentText/ContentText';
import Icons from '../../../assets/icon';
import IFileAttachment from '../interfaces/IFileAttachment';
import CloseButton from '../../CloseButton/CloseButton';
import RobotoFont from '../../../fonts/RobotoFont';
import ErrorComponent from './ErrorComponent';
import { ColorFileAttachment, ErrorVariant } from '../../../constants/enums';

import styles from '../sass/fileAttachment.module.scss';

function FileAttachment({
  onChange, name, value, formik, setUploadedFiles, error, colorType, variant,
}: IFileAttachment) {
  const { values: { client }, setFieldValue } = formik;
  const closeButtonHandler = async (index: number) => {
    const newClients = [...client];
    if (newClients.length > 0) {
      newClients.splice(index, 1);
      setUploadedFiles(newClients);
      await setFieldValue('client', newClients);
    }
  };

  return (
    <div className={
      `${styles.fileAttachment}
      ${colorType ? styles[colorType] : ''}
      ${RobotoFont.variable}
      ${variant ? styles[variant] : ''}
      `
      }
    >
      <div
        className={`${styles.wrapper} ${client.length ? styles.withFiles : ''}`}
      >
        <div className={styles.files}>
          {value.length !== 0 && value.map((v, idx) => (
            <div className={styles.fileBlock} key={[v.name, idx].join('_')}>
              <ContentText className={styles.fileName}>
                {v.name}
              </ContentText>
              <CloseButton
                onClick={() => closeButtonHandler(idx)}
                classes={{
                  container: 'w-[20px] h-[20px] bg-transparent flex items-center justify-center ml-[10px] relative',
                  rectangle: '!w-[17px] !bg-color-dark-gray',
                }}
                type="button"
              />
            </div>
          ))}
        </div>
        <div
          className={styles.container}
          role="presentation"
          onClick={() => document.getElementById('form')?.click()}
        >
          <input name={name} onChange={onChange} type="file" hidden multiple id="form" />
          <div className={`d-flex d-item-center ${styles.wrapper}`}>
            <motion.span
              whileTap={{ scale: 0.9 }}
              className={`d-flex d-justify-center d-item-center ${styles.clip}`}
            >
              {!colorType && <Icons.IconClip />}
              {colorType === ColorFileAttachment.WHITE_COLOR && <Icons.IconClipWhite />}
              {colorType === ColorFileAttachment.CALCULATOR && <Icons.IconClip />}
            </motion.span>
            {value.length === 0 && (
              <div className={styles.textBlock}>
                <p className={styles.text}>
                  Add an attachment
                </p>
                <p className={`${styles.additionText} ${RobotoFont.variable}`}>
                  Up to 3 files, max 5 MB each
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {error && (
        <ErrorComponent
          error={error}
          variant={ErrorVariant.ATTACH_ERROR}
        />
      )}
    </div>
  );
}

export default FileAttachment;
