import React, { SVGAttributes } from 'react';

// eslint-disable-next-line no-undef
export interface LinkedinProps extends SVGAttributes<HTMLOrSVGElement> {}

export function LinkedinSVG({ ...props }: LinkedinProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M39.9481 39.9157V39.914H39.9581V25.2749C39.9581 18.1134 38.4163 12.5967 30.044 12.5967C26.0192 12.5967 23.3182 14.8054 22.2155 16.8993H22.0991V13.2653H14.1609V39.914H22.4267V26.7185C22.4267 23.2442 23.0853 19.8846 27.3879 19.8846C31.6273 19.8846 31.6905 23.8496 31.6905 26.9414V39.9157H39.9481Z" fill="#FFC300" />
      <path d="M0.700958 13.267H8.97681V39.9157H0.700958V13.267Z" fill="#FFC300" />
      <path d="M4.83557 0C2.18949 0 0.0423584 2.14713 0.0423584 4.79321C0.0423584 7.43929 2.18949 9.63133 4.83557 9.63133C7.48165 9.63133 9.62878 7.43929 9.62878 4.79321C9.62712 2.14713 7.47998 0 4.83557 0V0Z" fill="#FFC300" />
    </svg>

  );
}
