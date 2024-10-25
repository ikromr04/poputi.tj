import classNames from 'classnames';
import React from 'react';

export default function SearchForm({
  className,
}: {
  className?: string;
}) {
  return (
    <form
      className={classNames(
        'bg-white shadow-md',
        className,
      )}
    >
      form
    </form>
  );
}
