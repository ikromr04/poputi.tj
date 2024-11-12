import React from 'react';
import Spinner from '../spinner';
import { Icons } from '../../icons';

export default function Status({
  isLoading,
}: {
  isLoading: boolean;
}): JSX.Element {
  if (isLoading) return <Spinner className="w-5 h-5 absolute left-[10px] top-[18px]" />;

  return <Icons.circle className="text-gray-400 absolute top-1/2 left-5 transform -translate-x-1/2 -translate-y-1/2" width={20} height={20} />;
}
