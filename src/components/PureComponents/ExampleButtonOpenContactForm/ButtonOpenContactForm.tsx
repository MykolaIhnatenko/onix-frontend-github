import IButtonOpenContactForm from './interfaces/IButtonOpenContactForm';

function ButtonOpenContactForm({
  styleClass, title, openForm, idBtn,
}:IButtonOpenContactForm) {
  return (
    <button
      id={idBtn}
      onClick={openForm}
      className={`btnContactModal ${styleClass}`}
      type="button"
    >
      {title}
    </button>
  );
}

export default ButtonOpenContactForm;
