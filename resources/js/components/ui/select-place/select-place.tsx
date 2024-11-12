/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { BaseSyntheticEvent, InputHTMLAttributes, useRef, useState } from 'react';
import { Option } from '../../../types';
import { debounce } from '../../../utils';
import { useAppDispatch } from '../../../hooks';
import { fetchPlacesByName } from '../../../store/api-actions';
import { useField } from 'formik';
import { useOutsideClick } from '../../../hooks/use-outside-click';
import NotFoundMessage from './not-found-message';
import Status from './status';
import SearchResults from './search-results';

type SelectPlaceProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

export default function SelectPlace({
  name,
  ...props
}: SelectPlaceProps): JSX.Element {
  const
    dispatch = useAppDispatch(),
    inputRef = useRef<HTMLInputElement | null>(null),
    [isLoading, setIsLoading] = useState<boolean>(false),
    [isOpen, setIsOpen] = useState<boolean>(false),
    [isNotFound, setIsNotfound] = useState<boolean>(false),
    [{ value: { options, selectedOption } }, meta, helpers] = useField(name),
    containerRef = useOutsideClick<HTMLDivElement>(() => setIsOpen(false)),

    handleInputChange = async (evt: BaseSyntheticEvent) => {
      setIsLoading(true);
      helpers.setValue({ options, selectedOption: { value: '', label: '' } });

      await dispatch(fetchPlacesByName({
        name: evt.target.value,
        onSuccess: (places) => {
          helpers.setValue({
            options: places,
            selectedOption: selectedOption,
          });
          if (!places.length) {
            setIsNotfound(true);
          } else {
            setIsNotfound(false);
          }
          setIsOpen(true);
        },
      }));
      setIsLoading(false);
    },

    handleOptionSelect = (option: Option) => () => {
      helpers.setValue({ options, selectedOption: option });
      if (inputRef.current) {
        inputRef.current.value = option.label.split(',', 2)[0];
      }
      setIsOpen(false);
    },

    handleInputBlur = () => {
      if (inputRef.current && options?.[0]?.label) {
        helpers.setValue({ options, selectedOption: options[0] });
        inputRef.current.value = options[0].label.split(',', 2)[0];
        return;
      }
      if (inputRef.current) {
        helpers.setValue({ options, selectedOption: { value: '', label: '' } });
        inputRef.current.value = '';
      }
      setIsNotfound(false);
    };

  return (
    <div ref={containerRef} className="relative">
      <input
        ref={inputRef}
        className="flex items-center h-14 rounded-xl w-full focus:outline-none focus:bg-gray-200 font-semibold pl-10 pr-4 transition-colors duration-300 hover:bg-gray-200"
        type="text"
        onInput={debounce(handleInputChange)}
        onFocus={() => setIsOpen(true)}
        onBlur={handleInputBlur}
        autoComplete="off"
        defaultValue={selectedOption.label}
        {...props}
      />

      {(meta.error as any)?.selectedOption?.value && meta.touched &&
        <p className="text-xs text-red-600 absolute right-2 bottom-1">{(meta.error as any)?.selectedOption?.value}</p>}

      <Status isLoading={isLoading} />
      <NotFoundMessage isNotFound={isNotFound} />
      <SearchResults
        options={options}
        selectedOption={selectedOption}
        isOpen={isOpen}
        handleOptionSelect={handleOptionSelect}
      />
    </div>
  );
}
