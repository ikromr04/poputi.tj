import React from 'react';
import { Icons } from '../icons';
import DatePicker from 'react-datepicker';
import { ru } from 'date-fns/locale';
import { useField, useFormikContext } from 'formik';
import classNames from 'classnames';
import { isToday, isTomorrow } from 'date-fns';

export default function FormikDatepicker({
  name,
}: {
  name: string;
}) {
  const
    { setFieldValue } = useFormikContext(),
    [{ value }] = useField(name);

  return (
    <div className="relative flex items-center">
      <Icons.calendar className="absolute top-1/2 left-3 z-10 transform -translate-y-1/2 text-gray-400" width={20} height={20} />
      <DatePicker
        className={classNames(
          'flex w-full pl-10 focus:outline-none min-h-14 rounded-xl focus:bg-gray-200',
          (isToday(value) || isTomorrow(value)) && 'text-transparent',
        )}
        selected={value}
        locale={ru}
        onChange={(date) => date && setFieldValue(name, date)}
        dateFormat="E, d MMM"
        placeholderText="Выберите дату"
        wrapperClassName="flex grow font-semibold"
        popperClassName="fixed top-0 left-0"
      />
      <span className="absolute top-1/2 left-10 transform -translate-y-1/2 font-semibold">
        {isToday(value) && 'Сегодня'}
        {isTomorrow(value) && 'Завтра'}
      </span>
    </div>
  );
}
