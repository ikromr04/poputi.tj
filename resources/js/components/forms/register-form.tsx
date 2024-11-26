import React, { SetStateAction } from 'react';
import * as yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import classNames from 'classnames';
import Input from '../ui/input/input';
import { useAppDispatch } from '../../hooks/index';
import Spinner from '../ui/spinner';
import { RegisterDTO } from '../../dto/auth-dto';
import Button from '../ui/button';
import { registerAction } from '../../store/auth-slice/auth-api-actions';
import PasswordInput from '../ui/password-input';
import { generateRandomPassword } from '../../utils';
import PasswordConfirmationInput from '../ui/password-confirmation-input';

export default function RegisterForm({
  className,
}: {
  className?: string;
}): JSX.Element {
  const
    dispatch = useAppDispatch(),
    initialValues: RegisterDTO = {
      name: '',
      surname: '',
      birthdate: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
    validationSchema = yup.object().shape({
      name: yup.string().required('Введите свое имя.'),
      surname: yup.string().required('Введите вашу фамилию.'),
      birthdate: yup.string().required('Укажите дату вашего рождения.'),
      email: yup.string()
        .required('Введите адрес электронной почты.')
        .email('Неверный адрес электронной почты.'),
      password: yup.string()
        .required('Пароль обязателен.')
        .min(6, 'Пароль должен содержать не менее 6 символов.'),
      password_confirmation: yup.string()
        .required('Подтверждение пароля обязателен.')
        .oneOf([yup.ref('password')], 'Подтверждение пароля не совпадает.'),
    }),

    onSubmit = (
      values: RegisterDTO,
      actions: FormikHelpers<RegisterDTO>
    ) => {
      dispatch(registerAction({
        dto: values,
        onError(error) {
          actions.setSubmitting(false);
          actions.setErrors({
            name: error.errors?.name?.[0],
            surname: error.errors?.surname?.[0],
            birthdate: error.errors?.birthdate?.[0],
            email: error.errors?.email?.[0],
            password: error.errors?.password?.[0],
          });
        },
      }));
    },

    handlePasswordGenerate = (setValues: (values: SetStateAction<RegisterDTO>, shouldValidate?: boolean) => void) => (): void => {
      const newPassword = generateRandomPassword();

      setValues((prevValues) => ({
        ...prevValues,
        password: newPassword,
        password_confirmation: newPassword,
      }));
    };;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, setValues }) => (
        <Form className={classNames(className, 'flex flex-col gap-3')}>
          <Input name="name" label="Имя" autoComplete="off" />
          <Input name="surname" label="Фамилия" autoComplete="off" />
          <Input name="birthdate" label="Дата рождения" autoComplete="off" />

          <Input name="email" label="Электронная почта" autoComplete="off" />

          <PasswordInput
            label="Пароль"
            name="password"
            onPasswordGenerate={handlePasswordGenerate(setValues)}
          />

          <PasswordConfirmationInput name="password_confirmation" label="Подтвердите пароль" />

          <Button
            className={classNames('justify-center mt-3', isSubmitting && 'opacity-60')}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Spinner className="w-6 h-6 m-auto" /> : 'Зарегистрироваться'}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
