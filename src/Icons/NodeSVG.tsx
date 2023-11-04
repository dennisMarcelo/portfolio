import React, { SVGAttributes } from 'react';

// eslint-disable-next-line no-undef
export interface NodeSVGProps extends SVGAttributes<HTMLOrSVGElement> {}

export function NodeSVG({ ...props }: NodeSVGProps) {
  return (
    <svg
      viewBox="0 0 99 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M49.4758 0C47.9702 0 46.4649 0.365012 45.1655 1.09886L4.28613 24.4217C1.64613 25.9302 0 28.7863 0 31.8032V74.1172C0 77.1749 1.64613 79.9902 4.28613 81.4986L15.0176 87.614C20.2151 90.1417 22.0684 90.1382 24.4197 90.1382C32.1334 90.1382 36.5449 85.5319 36.5449 77.5412V33.8815C36.5449 33.2292 36.0125 32.695 35.3525 32.695H30.1963C29.495 32.695 28.9958 33.2292 28.9958 33.8815V77.5014C28.9958 81.089 25.2466 84.5942 19.1829 81.6181L7.95996 75.216C7.54746 75.0122 7.29932 74.5656 7.29932 74.1172V31.843C7.29932 31.3538 7.54746 30.941 7.95996 30.6964L48.8394 7.38146C49.2106 7.13684 49.7079 7.13684 50.1204 7.38146L90.9998 30.6964C91.4123 30.941 91.6604 31.3547 91.6604 31.8032V74.1172C91.6604 74.5656 91.4113 75.0122 91.04 75.216L50.1204 98.5787C49.7491 98.7826 49.2106 98.7826 48.8394 98.5787L38.3174 92.4235C38.0286 92.2197 37.6232 92.1808 37.3345 92.3439C34.4057 93.9747 33.8695 94.1772 31.147 95.1149C30.487 95.3188 29.4551 95.7252 31.5176 96.8667L45.1655 104.861C46.4855 105.595 47.9747 106 49.4597 106C50.986 106 52.4661 105.595 53.7861 104.861L94.7139 81.4986C97.3539 79.9902 99 77.1749 99 74.1172V31.843C99 28.7853 97.3539 25.97 94.7139 24.4615L53.7861 1.09886C52.4868 0.365012 50.9815 0 49.4758 0ZM60.4731 32.6393C48.7994 32.6393 41.8301 37.5284 41.8301 45.6822C41.8301 54.5292 48.7536 56.9715 59.9736 58.0723C73.3799 59.3769 74.4111 61.3395 74.4111 63.9488C74.4111 68.4334 70.746 70.3508 62.1248 70.3508C51.276 70.3508 48.8819 67.6562 48.0981 62.3562C48.0156 61.7854 47.5235 61.3768 46.946 61.3768H41.6206C40.9606 61.3768 40.4685 61.9119 40.4685 62.5234C40.4685 69.3319 44.2223 77.4376 62.1248 77.4376C75.0773 77.4376 82.5 72.3886 82.5 63.5825C82.5 54.8579 76.5178 52.5296 63.9778 50.858C51.2315 49.2273 49.9512 48.3708 49.9512 45.4354C49.9512 42.9892 51.0681 39.7739 60.4731 39.7739C68.8469 39.7739 71.9803 41.562 73.259 47.1474C73.3828 47.6774 73.8336 48.087 74.4111 48.087H79.7366C80.0666 48.087 80.3511 47.9255 80.5986 47.6809C80.8049 47.477 80.9299 47.148 80.8887 46.7811C80.0637 37.1596 73.5906 32.6393 60.4731 32.6393Z" fill="#FFC300" />
    </svg>

  );
}
