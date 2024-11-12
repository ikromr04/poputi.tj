import React from 'react';
import { Icons } from '../../icons';
import { useField, useFormikContext } from 'formik';

export default function PassengersField(): JSX.Element {
  const
    { setFieldValue } = useFormikContext(),
    name = 'passengers',
    [{ value }] = useField(name),
    MIN_PASSENGERS = 1,
    MAX_PASSENGERS = 8;

  return (
    <div className="relative flex items-center z-0">
      <Icons.passenger className="absolute top-1/2 left-3 z-10 transform -translate-y-1/2 text-gray-400" width={20} height={21} />
      <input
        className="flex w-full pl-10 focus:outline-none min-h-14 rounded-xl focus:bg-gray-200 transition-all duration-300 hover:bg-gray-200 font-semibold text-blue-900"
        name="passengers"
        type="number"
        readOnly
        value={value}
      />
      <span className="absolute top-1/2 left-[52px] transform -translate-y-1/2 text-blue-900 font-semibold pointer-events-none">
        пассажир{(value > 1 && value < 5) ? 'а' : value > 1 && 'ов'}
      </span>
      <span className="absolute top-1/2 right-3 transform -translate-y-1/2 font-semibold text-xl flex items-center gap-x-3">
        <button
          className="text-blue-400 disabled:text-gray-300"
          type="button"
          disabled={value <= MIN_PASSENGERS}
          onClick={() => setFieldValue('passengers', (value - 1))}
        >
          <span className="sr-only">Убавить</span>
          <Icons.decrement width={20} height={20} />
        </button>
        <button
          className="text-blue-400 disabled:text-gray-300"
          type="button"
          disabled={value >= MAX_PASSENGERS}
          onClick={() => setFieldValue('passengers', (value + 1))}
        >
          <span className="sr-only">Добавить</span>
          <Icons.increment width={20} height={20} />
        </button>
      </span>
    </div>
  );
}
