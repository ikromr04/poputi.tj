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
  calendar: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg viewBox="0 0 18 18" fill="none" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M0 4a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Zm4-2.5h10A2.5 2.5 0 0 1 16.5 4v.75h-15V4A2.5 2.5 0 0 1 4 1.5Zm12.5 4.75V14a2.5 2.5 0 0 1-2.5 2.5H4A2.5 2.5 0 0 1 1.5 14V6.25h15Z" clipRule="evenodd" />
      <path fill="currentColor" d="M5.5 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </svg>
  ),
  passenger: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg viewBox="0 0 18 19" width="18" height="19" fill="none" {...props}>
      <path fill="currentColor" fill-rule="evenodd" d="M1.5 16.5v.5h15v-.5c0-.597-.354-1.421-1.545-2.166C13.76 13.589 11.81 13 9 13s-4.76.588-5.955 1.334C1.854 15.08 1.5 15.905 1.5 16.5Zm-1.5 0v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1c0-2.5-3-5-9-5s-9 2.5-9 5ZM9 10a4.5 4.5 0 0 0 4.5-4.5v-1a4.5 4.5 0 1 0-9 0v1A4.5 4.5 0 0 0 9 10Zm3-4.5v-1a3 3 0 0 0-6 0v1a3 3 0 1 0 6 0Z" clip-rule="evenodd" />
    </svg>
  ),
  increment: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10 18.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm0 1.5c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z" clipRule="evenodd" />
      <path fill="currentColor" d="M10.75 6a.75.75 0 1 0-1.5 0v3.25H6a.75.75 0 0 0 0 1.5h3.25V14a.75.75 0 1 0 1.5 0v-3.25H14a.75.75 0 1 0 0-1.5h-3.25V6Z" />
    </svg>
  ),
  decrement: (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10 18.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm0 1.5c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z" clipRule="evenodd" />
      <path fill="currentColor" fillRule="evenodd" d="M5.25 10A.75.75 0 0 1 6 9.25h8a.75.75 0 1 1 0 1.5H6a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
    </svg>
  ),
};
