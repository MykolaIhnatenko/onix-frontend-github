import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

import { useAppDispatch } from '../../../../hook/reduxToolkit';
import subscribeMainSchema from '../../../../validators/subscribeMainSchema';
import { getFormValuesMain } from '../../../../utils/blogsHelpers';
import TextField from '../../../../components/ContactFormModal/components/TextField';
import onSendSubscribeFormMainMessage from '../../../../store/app/subscribeMainForm/onSendSubscribeFormMainMessage';
import ButtonPrimary from '../../../../components/UI/ButtonPrimary/ButtonPrimary';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import { ISubscribeFormMainValues } from '../../../../store/app/subscribeMainForm/interfaces/ISubscribeForm';
import { ErrorVariant } from '../../../../constants/enums';
import Modeltype from '../../../../constants/Modeltype';
import PagesToSalesChannels from '../../../../constants/PageToSalesChannels';

function SubscribeForm() {
  const dispatch = useAppDispatch();
  const [isDisabled, setIsDisabled] = useState(true);
  const initialValues = {
    name: '',
    position: '',
    email: '',
    blogSubscriber: true,
    salesChannel: PagesToSalesChannels.HOME,
    modeltype: Modeltype.MAIN_PAGE,
  };

  const formik = useFormik<ISubscribeFormMainValues>({
    initialValues,
    validationSchema: subscribeMainSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { resetForm }) => {
      await dispatch(onSendSubscribeFormMainMessage({ values }));
      resetForm({ values: initialValues });
    },
  });

  const {
    values: {
      name,
      position,
      email,
    },
    handleSubmit,
    handleBlur,
    handleChange,
    isValid,
  } = formik;

  useEffect(() => {
    const getDisabled = () => {
      setIsDisabled(true);

      if (name && email && position) {
        setIsDisabled(false);
      }
    };

    getDisabled();
  }, [name, email, position]);

  return (
    <form className="w-[600px] min-xxxl:min-w-[600px] min-1311:min-w-[345px] max-1310:w-full ">
      <div className="flex flex-col gap-[30px] max-1310:flex-row max-1310:flex-wrap">
        {getFormValuesMain(formik).map(({
          id, value, name: fieldName, error, label, className,
        }, index) => (
          <VRARContent
            key={id}
            className={index < 2
              ? 'w-full max-1310:w-[calc(50%-15px)] screen-md:w-full' : 'max-1310:w-full'}
          >
            <TextField
              value={value}
              name={fieldName}
              onChange={handleChange}
              error={error}
              label={label}
              className={className}
              isAsterisk
              dontFocus
              onBlurInput={handleBlur}
              errorVariant={ErrorVariant.LEAVING_FORM}
              isJakarta
            />
          </VRARContent>
        ))}
      </div>
      <VRARContent className="mt-[40px] screen-md:mt-[30px]">
        <ButtonPrimary
          text="Subscribe"
          onClick={() => handleSubmit()}
          disabled={isDisabled || !isValid}
          isJakarta
        />
      </VRARContent>
    </form>
  );
}
export default SubscribeForm;
