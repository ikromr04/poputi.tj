import classNames from 'classnames';
import { Form, Formik } from 'formik';
import React from 'react';
import dayjs from 'dayjs';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import { PlaceId } from '../../../types';
import FormikSelectPlace from '../../ui/formik-select-place';
import FormikDatepicker from '../../ui/formik-datepicker';
import PassengersField from './passengers-field';

type FormValues = {
  from: PlaceId | null;
  to: PlaceId | null;
  date: Date;
  passengers: number;
};

export default function SearchTrip({
  className,
}: {
  className?: string;
}): JSX.Element {
  const
    initialValues: FormValues = {
      from: null,
      to: null,
      date: dayjs().toDate(),
      passengers: 1,
    },
    validationSchema = Yup.object().shape({
      from: Yup.string()
        .required('Обязательное поле'),
      to: Yup.string()
        .required('Обязательное поле'),
      date: Yup.date()
        .required('Обязательное поле')
        .typeError('Неправильный формат даты'),
      passengers: Yup.number()
        .required('Обязательное поле')
        .min(1, 'Количество пассажиров не может быть ниже 1')
        .min(1, 'Количество пассажиров не может превышать 8'),
    });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(_, { setSubmitting }) => setSubmitting(true)}
    >
      {({ isSubmitting }) => (
        <Form className={classNames('shadow-md bg-white rounded-2xl lg:flex', className,)}>
          <div className="py-2 px-3 text-blue-900 md:grid md:grid-cols-2 lg:grid-cols-4 lg:p-1 lg:grow">
            <div>
              <FormikSelectPlace name="from" placeholder="Откуда" />
              <hr className="mx-3 my-1 lg:hidden" />
            </div>
            <div>
              <FormikSelectPlace name="to" placeholder="Куда" />
              <hr className="mx-3 my-1 lg:hidden" />
            </div>
            <div>
              <FormikDatepicker name="date" />
              <hr className="mx-3 my-1 md:hidden" />
            </div>
            <div>
              <PassengersField />
            </div>
          </div>
          <button
            className="flex items-center justify-center px-4 rounded-b-xl lg:rounded-l-none lg:rounded-r-xl lg:max-w-[11%] xl:max-w-[15%] min-h-14 bg-blue-500 text-center text-white w-full font-semibold"
            type="submit"
            disabled={isSubmitting}
          >
            Поиск
          </button>
        </Form>
      )}
    </Formik>
  );
}
