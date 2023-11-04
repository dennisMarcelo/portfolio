import React, { SVGAttributes } from 'react';

// eslint-disable-next-line no-undef
export interface StencilProps extends SVGAttributes<HTMLOrSVGElement> {}

export function StencilSVG({ ...props }: StencilProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#FFC300"
      {...props}
      viewBox="0 0 512 512"
    >
      <title>ionicons-v5_logos</title>
      <path d="M188.8,334.07H386.13L279.47,448H83.2Z" />
      <path d="M512,199H106.61L0,313H405.39Z" />
      <path d="M232.2,64H428.8L322.62,177.93H125.87Z" />
    </svg>
  );
}
