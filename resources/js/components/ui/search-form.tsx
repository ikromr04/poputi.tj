import classNames from 'classnames';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Select, { components } from 'react-select';
import { Icons } from '../icons';

type FormValues = {
  from: { value: string; label: string };
  to: { value: string; label: string };
};

export default function SearchForm({
  className,
}: {
  className?: string;
}) {
  const
    { control, handleSubmit, formState: { errors } } = useForm<FormValues>(),
    options = [],

    onSubmit: SubmitHandler<FormValues> = (data) => {
      console.log('Selected Flavor:', data.from);
    };

  return (
    <form
      className={classNames(
        'shadow-md',
        className,
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="bg-white rounded-2xl py-2 px-3">
        <label>
          <span className="sr-only">Откуда</span>
          <Controller
            name="from"
            control={control}
            rules={{ required: 'From is required' }}
            render={({ field }) => (
              <Select
                {...field}
                onChange={(e) => {
                  console.log(e);
                }}
                onInputChange={(inputValue) => {
                  console.log(inputValue);
                }}
                styles={{ control: () => ({}) }}
                classNames={{
                  container: () => 'font-semibold',
                  control: ({ isFocused }) => classNames('relative rounded-xl flex items-center py-2 px-3', isFocused && 'bg-gray-200'),
                  group: () => 'group',
                  groupHeading: () => 'group-heading',
                  input: () => '',
                  valueContainer: () => '',
                  placeholder: () => '',
                }}
                components={{
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null,
                  ClearIndicator: (props) => (
                    <components.ClearIndicator {...props}>
                      clear
                    </components.ClearIndicator>
                  ),
                  Control: (props) => (
                    <components.Control {...props}>
                      <Icons.circle className="text-gray-400" width={20} height={20} />
                      {props.children}
                    </components.Control>
                  )
                }}
                isClearable={true}
                isSearchable={true}
                options={options}
                placeholder="Откуда"
                noOptionsMessage={() => null}
              />
            )}
          />
        </label>
      </div>
    </form>
  );
}
