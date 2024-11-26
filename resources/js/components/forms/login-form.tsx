import React from 'react';
import * as yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import classNames from 'classnames';
import Input from '../ui/input/input';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/index';
import Spinner from '../ui/spinner';
import { LoginCredentials } from '../../dto/auth-dto';
import Button from '../ui/button';
import { loginAction } from '../../store/auth-slice/auth-api-actions';

export default function LoginForm({
  className,
}: {
  className?: string;
}): JSX.Element {
  const
    dispatch = useAppDispatch(),
    initialValues: LoginCredentials = {
      email: '',
      password: '',
    },
    validationSchema = yup.object().shape({
      email: yup.string()
        .required('Введите адрес электронной почты.')
        .email('Неверный адрес электронной почты.'),
      password: yup.string().required('Введите Ваш пароль.'),
    }),

    onSubmit = (
      values: LoginCredentials,
      actions: FormikHelpers<LoginCredentials>
    ) => {
      dispatch(loginAction({
        dto: values,
        onError(error) {
          actions.setSubmitting(false);
          actions.setErrors({
            email: error.errors?.email?.[0],
            password: error.errors?.password?.[0],
          });
        },
      }));
    };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={classNames(className, 'flex flex-col')}>
          <Input name="email" label="Электронная почта" autoComplete="off" />

          <div className="flex flex-col mb-5">
            <Link className="flex ml-auto transform translate-y-full text-sm text-blue-600 transition-all duration-300 hover:text-blue-400" to={AppRoute.Auth.ForgotPassword}>
              Забыли пароль?
            </Link>
            <Input name="password" label="Пароль" type="password" autoComplete="off" />
          </div>

          <Button
            className={classNames('justify-center', isSubmitting && 'opacity-60')}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Spinner className="w-6 h-6 m-auto" /> : 'Войти'}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
