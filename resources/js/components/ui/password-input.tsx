import React, { InputHTMLAttributes, useState } from 'react';
import Input from './input/input';
import { Icons } from '../icons';
import Tooltip from './tooltip';

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement> & {
  onPasswordGenerate: () => void;
  name: string;
  label: string;
};

export default function PasswordInput({
  onPasswordGenerate,
  name,
  label,
  ...props
}: PasswordInputProps): JSX.Element {
  const [type, setType] = useState<'password' | 'text'>('password');

  return (
    <Input
      {...props}
      name={name}
      label={<>
        {label}
        <button className="block ml-[6px]" type="button">
          <span className="group" onClick={onPasswordGenerate}>
            <Icons.rotate className="text-green-600" width={12} height={12} />
            <Tooltip label="Сгенерировать" position="right" />
          </span>
        </button>
      </>}
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
