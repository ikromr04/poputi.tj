import 'react-datepicker/dist/react-datepicker.css';

import React from 'react';
import classNames from 'classnames';
import { Form, Formik, FormikHelpers } from 'formik';
import dayjs from 'dayjs';
import * as Yup from 'yup';
import FormikSelectPlace from '../../ui/select-place/select-place';
import FormikDatepicker from '../../ui/formik-datepicker';
import PassengersField from './passengers-field';
import { Option, Options } from '../../../types';

type FormValues = {
  from: {
    options: Options;
    selectedOption: Option;
  };
  to: {
    options: Options;
    selectedOption: Option;
  };
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
      from: {
        options: [],
        selectedOption: { value: '', label: '' },
      },
      to: {
        options: [],
        selectedOption: { value: '', label: '' },
      },
      date: dayjs().toDate(),
      passengers: 1,
    },
    validationSchema = Yup.object().shape({
      from: Yup.object({
        selectedOption: Yup.object({
          value: Yup.string().required('Укажите место'),
        }).required(),
      }).required(),
      to: Yup.object({
        selectedOption: Yup.object({
          value: Yup.string().required('Укажите место'),
        }).required(),
      }).required(),
      date: Yup.date()
        .required('Обязательное поле')
        .typeError('Неправильный формат даты'),
      passengers: Yup.number()
        .required('Обязательное поле')
        .min(1, 'Количество пассажиров не может быть ниже 1')
        .min(1, 'Количество пассажиров не может превышать 8'),
    }),

    onSubmit = async (
      values: FormValues,
      actions: FormikHelpers<FormValues>,
    ) => {
      actions.setSubmitting(true);
      console.log({
        from: values.from.selectedOption.value,
        to: values.to.selectedOption.value,
        date: dayjs(values.date).toISOString(),
        passengers: values.passengers,
      });
    };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={classNames('shadow-md bg-white rounded-2xl lg:flex', className)}>
          <div className="py-2 px-3 text-blue-900 md:grid md:gap-x-1 lg:gap-x-0 md:grid-cols-2 lg:grid-cols-4 lg:p-1 lg:grow">
            <div className="after:flex after:mx-3 after:my-1 after:border-b lg:flex lg:after:my-3 lg:after:mx-1 lg:after:border-r lg:after:border-b-0">
              <FormikSelectPlace name="from" placeholder="Откуда" />
            </div>
            <div className="after:flex after:mx-3 after:my-1 after:border-b lg:flex lg:after:my-3 lg:after:mx-1 lg:after:border-r lg:after:border-b-0">
              <FormikSelectPlace name="to" placeholder="Куда" />
            </div>
            <div className="after:flex md:after:hidden lg:after:flex after:mx-3 after:my-1 after:border-b lg:flex lg:after:my-3 lg:after:mx-1 lg:after:border-r lg:after:border-b-0 relative z-0">
              <FormikDatepicker name="date" />
            </div>
            <PassengersField />
          </div>
          <button
            className="flex items-center justify-center px-4 rounded-b-xl lg:rounded-l-none lg:rounded-r-xl lg:max-w-[11%] xl:max-w-[15%] min-h-14 bg-primary text-center text-white w-full font-semibold"
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
