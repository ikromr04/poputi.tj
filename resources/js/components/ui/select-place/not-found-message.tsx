import React, { ReactNode } from 'react';

export default function NotFoundMessage({
  isNotFound,
}: {
  isNotFound: boolean;
}): ReactNode {
  if (!isNotFound) return null;

  return (
    <p className="absolute py-3 px-6 top-[calc(100%+9px)] left-0 z-10 bg-white shadow-md rounded-xl border p-1 flex flex-col gap-1 min-w-[380px] transition-all duration-300 text-gray-500 font-semibold">
      Указанное место не найдено.
    </p>
  );
}
