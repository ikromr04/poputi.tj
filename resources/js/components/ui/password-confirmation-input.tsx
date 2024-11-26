import React, { InputHTMLAttributes, useState } from 'react';
import Input from './input/input';
import { Icons } from '../icons';

type PasswordConfirmationInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

export default function PasswordConfirmationInput({
  name,
  label,
  ...props
}: PasswordConfirmationInputProps): JSX.Element {
  const [type, setType] = useState<'password' | 'text'>('password');

  return (
    <Input
      {...props}
      name={name}
      label={label}
      iconAfter={
        <button
          className="flex items-center justify-center w-full h-full hover:bg-gray-200 transition-all duration-300"
          type="button"
          onClick={() => type === 'password' ? setType('text') : setType('password')}
        >
          {type === 'password'
            ? <Icons.eye className="text-gray-600" width={20} />
            : <Icons.eyeSlash className="text-gray-600" width={22} />}
        </button>
      }
      type={type}
    />
  );
}
