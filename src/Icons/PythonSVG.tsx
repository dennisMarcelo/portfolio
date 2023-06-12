import React, { SVGAttributes } from 'react';

// eslint-disable-next-line no-undef
export interface PythonSVGProps extends SVGAttributes<HTMLOrSVGElement> {}

export function PythonSVG({ ...props }: PythonSVGProps) {
  return (
    <svg
      width="106"
      height="106"
      viewBox="0 0 106 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M51.8478 0C31.8018 0 27.6522 10.3516 27.6522 16.3465V27.6522H50.6957V29.9565H16.3465C8.74032 29.9565 0 35.9514 0 53C0 70.0486 8.74032 76.0435 16.3465 76.0435H29.9565V62.2174C29.9565 57.1496 34.1061 53 39.1739 53H66.8261C70.7417 53 73.7391 50.0025 73.7391 46.087V16.3465C73.7391 8.28125 66.133 0 51.8478 0ZM41.4783 11.5217C44.0166 11.5217 46.087 13.5921 46.087 16.1304C46.087 18.6688 44.0166 20.7391 41.4783 20.7391C38.9399 20.7391 36.8696 18.6688 36.8696 16.1304C36.8696 13.5921 38.9399 11.5217 41.4783 11.5217ZM76.0435 29.9565V46.087C76.0435 51.1547 71.8939 55.3043 66.8261 55.3043H39.1739C35.2583 55.3043 32.2609 58.3018 32.2609 62.2174V89.6535C32.2609 97.7188 39.867 106 54.1522 106C74.1982 106 78.3478 95.6484 78.3478 89.6535V78.3478H55.3043V76.0435H89.6535C97.2597 76.0435 106 70.0486 106 53C106 35.9514 97.2597 29.9565 89.6535 29.9565H76.0435ZM64.5217 85.2609C67.0601 85.2609 69.1304 87.3312 69.1304 89.8696C69.1304 92.4079 67.0601 94.4783 64.5217 94.4783C61.9834 94.4783 59.913 92.4079 59.913 89.8696C59.913 87.3312 61.9834 85.2609 64.5217 85.2609Z" fill="#FFC300" />
    </svg>
  );
}
