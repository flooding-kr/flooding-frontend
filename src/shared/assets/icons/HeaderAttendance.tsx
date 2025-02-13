import React from 'react';

interface Props {
  isSelected: boolean;
  mobile?: boolean;
}
export default function HeaderAttendance({ isSelected, mobile = false }: Props) {
  let fillColor = '#D3D3D3';

  if (isSelected) {
    fillColor = mobile ? '#5E7EF3' : 'white';
  }

  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.95 15.95L14.425 12.475C14.625 12.275 14.8667 12.175 15.15 12.175C15.4333 12.175 15.675 12.275 15.875 12.475C16.075 12.675 16.175 12.9167 16.175 13.2C16.175 13.4833 16.075 13.725 15.875 13.925L11.65 18.15C11.45 18.35 11.2167 18.45 10.95 18.45C10.6833 18.45 10.45 18.35 10.25 18.15L8.125 16.025C7.925 15.825 7.825 15.5833 7.825 15.3C7.825 15.0167 7.925 14.775 8.125 14.575C8.325 14.375 8.56667 14.275 8.85 14.275C9.13333 14.275 9.375 14.375 9.575 14.575L10.95 15.95ZM5 22.5C4.45 22.5 3.97933 22.3043 3.588 21.913C3.19667 21.5217 3.00067 21.0507 3 20.5V6.5C3 5.95 3.196 5.47934 3.588 5.088C3.98 4.69667 4.45067 4.50067 5 4.5H6V3.5C6 3.21667 6.096 2.97934 6.288 2.788C6.48 2.59667 6.71733 2.50067 7 2.5C7.28267 2.49934 7.52033 2.59534 7.713 2.788C7.90567 2.98067 8.00133 3.218 8 3.5V4.5H16V3.5C16 3.21667 16.096 2.97934 16.288 2.788C16.48 2.59667 16.7173 2.50067 17 2.5C17.2827 2.49934 17.5203 2.59534 17.713 2.788C17.9057 2.98067 18.0013 3.218 18 3.5V4.5H19C19.55 4.5 20.021 4.696 20.413 5.088C20.805 5.48 21.0007 5.95067 21 6.5V20.5C21 21.05 20.8043 21.521 20.413 21.913C20.0217 22.305 19.5507 22.5007 19 22.5H5ZM5 20.5H19V10.5H5V20.5ZM5 8.5H19V6.5H5V8.5Z"
        fill={fillColor}
      />
    </svg>
  );
}
