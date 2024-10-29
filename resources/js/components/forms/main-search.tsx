import 'react-datepicker/dist/react-datepicker.css';

import classNames from 'classnames';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import Select, { components } from 'react-select';
import { Icons } from '../icons';
import { isToday, isTomorrow } from 'date-fns';
import { ru } from 'date-fns/locale';
import DatePicker from 'react-datepicker';
import dayjs from 'dayjs';
import * as Yup from 'yup';

type FormValues = {
  from: string;
  to: string;
  date: Date;
  passengers: number;
};

export default function MainSearch({
  className,
}: {
  className?: string;
}): JSX.Element {
  const
    initialValues: FormValues = {
      from: '',
      to: '',
      date: dayjs().toDate(),
      passengers: 1,
    },
    validationSchema = Yup.object().shape({
      from: Yup.string().required('from is required'),
      to: Yup.string().required('to is required'),
      date: Yup.string().required('date is required'),
      passengersQuantity: Yup.string().required('passengersQuantity is required'),
    }),
    [startDate, setStartDate] = useState<Date>(dayjs().toDate());

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(_, { setSubmitting }) => setSubmitting(true)}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form
          className={classNames(
            'shadow-md bg-white rounded-2xl lg:flex',
            className,
          )}
        >
          <div className="py-2 px-3 text-blue-900 md:grid md:grid-cols-2 lg:grid-cols-4 lg:p-1 lg:grow">
            <div>
              <label>
                <span className="sr-only">Откуда</span>
                <Select
                  styles={{ control: () => ({}) }}
                  classNames={{
                    container: () => 'font-semibold',
                    control: ({ isFocused }) => classNames('relative rounded-xl flex items-center py-2 px-3 min-h-14', isFocused && 'bg-gray-200'),
                    input: () => '!text-blue-900'
                  }}
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                    Control: (props) => (
                      <components.Control {...props}>
                        <Icons.circle className="text-gray-400" width={20} height={20} />
                        {props.children}
                      </components.Control>
                    )
                  }}
                  placeholder="Откуда"
                  noOptionsMessage={() => null}
                />
              </label>
              <hr className="mx-3 my-1 lg:hidden" />
            </div>
            <div>
              <label>
                <span className="sr-only">Куда</span>
                <Select
                  styles={{ control: () => ({}) }}
                  classNames={{
                    container: () => 'font-semibold',
                    control: ({ isFocused }) => classNames('relative rounded-xl flex items-center py-2 px-3 min-h-14', isFocused && 'bg-gray-200'),
                    input: () => '!text-blue-900'
                  }}
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                    Control: (props) => (
                      <components.Control {...props}>
                        <Icons.circle className="text-gray-400" width={20} height={20} />
                        {props.children}
                      </components.Control>
                    )
                  }}
                  placeholder="Куда"
                  noOptionsMessage={() => null}
                />
              </label>
              <hr className="mx-3 my-1 lg:hidden" />
            </div>
            <div>
              <label className="relative flex items-center">
                <span className="sr-only">Дата поездки</span>
                <>
                  <Icons.calendar className="absolute top-1/2 left-3 z-10 transform -translate-y-1/2 text-gray-400" width={18} height={18} />
                  <DatePicker
                    selected={startDate}
                    locale={ru}
                    onChange={(date) => date && setStartDate(date)}
                    dateFormat="E, d MMM"
                    placeholderText="Выберите дату"
                    wrapperClassName="flex grow font-semibold"
                    className={classNames(
                      'flex w-full pl-10 focus:outline-none min-h-14 rounded-xl focus:bg-gray-200',
                      (isToday(startDate) || isTomorrow(startDate)) && 'text-transparent',
                    )}
                    popperClassName="fixed top-0 left-0"
                  />
                  <span className="absolute top-1/2 left-10 transform -translate-y-1/2 font-semibold">
                    {isToday(startDate) && 'Сегодня'}
                    {isTomorrow(startDate) && 'Завтра'}
                  </span>
                </>
              </label>
              <hr className="mx-3 my-1 md:hidden" />
            </div>
            <div>
              <label className="relative flex items-center">
                <span className="sr-only">Пассажиры</span>
                <Icons.passenger className="absolute top-1/2 left-3 z-10 transform -translate-y-1/2 text-gray-400" width={24} height={24} />
                <Field
                  className="flex w-full pl-10 focus:outline-none min-h-14 rounded-xl focus:bg-gray-200 font-semibold text-blue-900"
                  name="passengers"
                  type="number"
                  readOnly
                />
                <span className="absolute top-1/2 left-[52px] transform -translate-y-1/2 text-blue-900 font-semibold">
                  пассажир{(values.passengers > 1 && values.passengers < 5) ? 'а' : values.passengers > 1 && 'ов'}
                </span>
                <span className="absolute top-1/2 right-3 transform -translate-y-1/2 font-semibold text-xl flex items-center gap-x-3">
                  <button
                    className="text-blue-400 disabled:text-gray-300"
                    type="button"
                    disabled={values.passengers < 2}
                    onClick={() => setFieldValue('passengers', --values.passengers)}
                  >
                    <span className="sr-only">Убавить</span>
                    <Icons.decrement width={20} height={20} />
                  </button>
                  <button
                    className="text-blue-400 disabled:text-gray-300"
                    type="button"
                    disabled={values.passengers > 7}
                    onClick={() => setFieldValue('passengers', ++values.passengers)}
                  >
                    <span className="sr-only">Добавить</span>
                    <Icons.increment width={20} height={20} />
                  </button>
                </span>
              </label>
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
