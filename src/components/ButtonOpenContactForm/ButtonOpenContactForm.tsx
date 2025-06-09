import { textLink } from 'components/FAQBlock/tailwindStyle/tailwindStyle';
import IButtonOpenContactForm from './interfaces/IButtonOpenContactForm';

function ButtonOpenContactForm({
  title, openForm, idBtn,
}:IButtonOpenContactForm) {
  return (
    <button
      id={idBtn}
      onClick={openForm}
      className={textLink}
      type="button"
    >
      {title}
    </button>
  );
}

export default ButtonOpenContactForm;
