import React, { SVGProps } from 'react';

export const Icons = {
  profile: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <path className="transition-all duration-300 group-hover:fill-blue-800 group-[.active]:fill-blue-800" fill="#60A5FA" d="M33.074 36.305c0 2.8-1.054 3.66-2.82 3.693H9.743c-1.766-.033-2.82-.893-2.82-3.693 0-6.598 5.854-11.947 13.075-11.947 7.222 0 13.076 5.349 13.076 11.947Z" />
      <ellipse className="transition-all duration-300 group-hover:fill-blue-800 group-[.active]:fill-blue-800" cx={20} cy="16.667" fill="#60A5FA" rx="6.41" ry="6.154" />
      <path className="transition-all duration-300 group-hover:fill-blue-400 group-[.active]:fill-blue-400" fill="#1E40AF" d="M6.39 33.61a.728.728 0 0 1-1.05-.009 19.998 19.998 0 1 1 29.32 0 .728.728 0 0 1-1.05.01.774.774 0 0 1-.01-1.07 18.5 18.5 0 1 0-27.2 0 .774.774 0 0 1-.01 1.07Z" />
    </svg>
  ),
  search: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg viewBox="0 0 19 19" fill="none" {...props}>
      <path className="transition-all duration-300 group-hover:stroke-blue-400 group-[.active]:stroke-blue-400" d="M18.0002 18L12.9502 12.95M18.5002 18.5L15.0002 15" stroke="#1E40AF" />
      <path className="transition-all duration-300 group-hover:stroke-blue-800 group-[.active]:stroke-blue-800" d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="#60A5FA" />
    </svg>
  ),
  add: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg viewBox="0 0 22 22" fill="none" {...props}>
      <path className="transition-all duration-300 group-hover:stroke-blue-800 group-[.active]:stroke-blue-800" d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#60A5FA" />
      <path className="transition-all duration-300 group-hover:stroke-blue-400 group-[.active]:stroke-blue-400" d="M14 11H11M11 11H8M11 11V8M11 11V14" stroke="#1E40AF" />
    </svg>
  ),
  caretDown: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg viewBox="0 0 400 286"
     fill="none" {...props}>
      <path fill="currentColor" d="m400 .625-199.925 284.75L0 .625h400Z" />
    </svg>
  ),
};
