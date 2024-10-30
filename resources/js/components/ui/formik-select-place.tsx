import classNames from 'classnames';
import { useField, useFormikContext } from 'formik';
import React from 'react';
import Select, { components, Props } from 'react-select';
import { Icons } from '../icons';

type Option = {
  value: string;
  label: string;
};

type FormikSelectPlaceProps = Props<Option, false, never> & {
  name: string;
};

export default function FormikSelectPlace({
  name,
  ...props
}: FormikSelectPlaceProps): JSX.Element {
  const
    { setFieldValue } = useFormikContext(),
    [field] = useField(name);

  return (
    <Select
      {...props}
      styles={{ control: () => ({}) }}
      classNames={{
        container: () => 'font-semibold h-14',
        control: ({ isFocused }) => classNames('relative rounded-xl flex items-center gap-x-2 py-2 px-3 min-h-14', isFocused && 'bg-gray-200'),
        input: () => '!text-blue-900 !m-0 !p-0',
        placeholder: () => '!m-0',
        valueContainer: () => '!p-0',
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
      noOptionsMessage={() => null}
      onChange={(option) => setFieldValue(name, option?.value)}
      value={field.value}
    />
  );
}
