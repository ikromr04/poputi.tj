import React, { SVGProps } from 'react';

export const Icons = {
  profile: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg viewBox="0 0 100 100" fill="none" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M50.402 22.575c11.447 0 20.725 9.279 20.725 20.726 0 4.292-1.697 8.404-3.537 11.588-1.841 3.183-5.327 5.433-7.494 7.515 2-2.794 4.844-5.306 6-8.382 1.151-3.075 1.115-5.116 1.306-6.477-.055-.562-.111-1.124-.17-1.686l-.555.138c-1.39.226-2.795.339-4.203.338-8.637 0-16.048-4.19-19.211-10.164l-1.008-2.592-3.263 2.2a16.585 16.585 0 0 0-4.872 11.766c0 4.596 1.86 8.756 4.872 11.767l3.343 3.086c-7.439-3.147-12.658-10.512-12.658-19.097 0-11.447 9.28-20.727 20.725-20.727ZM50 3.697C24.426 3.697 3.697 24.427 3.697 50c0 11.987 4.554 22.91 12.028 31.133l.976 1.022 1.367-1.368 2.653-6.028c2.598-5.211 2.128-3.76 10.303-4.511h38.757c8.123.752 7.78-.7 9.98 4.511l1.865 4.89c.382.543 1.003 1.093 1.657 1.614l.502.386.49-.516C91.749 72.91 96.303 61.987 96.303 50c0-25.573-20.73-46.303-46.303-46.303ZM50 0c27.614 0 50 22.386 50 50s-22.386 50-50 50C22.387 100 0 77.614 0 50S22.387 0 50 0Z" clipRule="evenodd" />
    </svg>
  ),
  search: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg viewBox="0 0 19 19" fill="none" {...props}>
      <path d="M18.0002 18L12.9502 12.95M18.5002 18.5L15.0002 15" stroke="currentColor" />
      <path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="currentColor" />
    </svg>
  ),
  add: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg viewBox="0 0 22 22" fill="none" {...props}>
      <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="currentColor" />
      <path d="M14 11H11M11 11H8M11 11V8M11 11V14" stroke="currentColor" />
    </svg>
  ),
  caretDown: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg viewBox="0 0 400 286"
      fill="none" {...props}>
      <path fill="currentColor" d="m400 .625-199.925 284.75L0 .625h400Z" />
    </svg>
  ),
  circle: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z" clipRule="evenodd" />
    </svg>
  ),
};
