import classNames from 'classnames';
import React from 'react';
import { Option, Options } from '../../../types';

export default function SearchResults({
  options,
  selectedOption,
  isOpen,
  handleOptionSelect,
}: {
  options: Options;
  selectedOption: Option;
  isOpen: boolean;
  handleOptionSelect: (option: Option) => () => void;
}): JSX.Element {
  return (
    <ul className={classNames(
      'absolute top-[calc(100%+9px)] left-0 z-10 bg-white shadow-md rounded-xl border p-1 flex flex-col gap-1 w-full md:min-w-[380px] transition-all duration-300',
      (options.length && isOpen) ? 'visible opacity-100' : 'invisible opacity-0',
    )}>
      {(options || []).map((item: Option) => (
        <li key={item.value}>
          <button
            className={classNames(
              'flex w-full flex-col py-4 px-6 transition-all duration-300 hover:bg-gray-200 rounded-lg text-sm font-bold text-start',
              (item.value === selectedOption.value) && 'bg-gray-200',
            )}
            type="button"
            onClick={handleOptionSelect(item)}
          >
            <span className="text-primary-dark flex mb-1">{item.label.split(',', 2)[0]}</span>
            <span className="text-gray-500 font-semibold">{item.label.split(',', 2)[1]}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
