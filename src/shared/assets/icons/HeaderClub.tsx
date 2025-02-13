import React from 'react';

interface Props {
  isSelected: boolean;
  mobile?: boolean;
}
export default function HeaderClub({ isSelected, mobile = false }: Props) {
  let fillColor = '#D3D3D3';

  if (isSelected) {
    fillColor = mobile ? '#5E7EF3' : 'white';
  }

  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 18.5C0.716667 18.5 0.479333 18.404 0.288 18.212C0.0966666 18.02 0.000666667 17.7827 0 17.5V16.925C0 16.2083 0.366667 15.625 1.1 15.175C1.83333 14.725 2.8 14.5 4 14.5C4.21667 14.5 4.425 14.5043 4.625 14.513C4.825 14.5217 5.01667 14.5423 5.2 14.575C4.96667 14.925 4.79167 15.2917 4.675 15.675C4.55833 16.0583 4.5 16.4583 4.5 16.875V18.5H1ZM7 18.5C6.71667 18.5 6.47933 18.404 6.288 18.212C6.09667 18.02 6.00067 17.7827 6 17.5V16.875C6 16.3417 6.146 15.854 6.438 15.412C6.73 14.97 7.14233 14.5827 7.675 14.25C8.20767 13.9173 8.84533 13.6673 9.588 13.5C10.3307 13.3327 11.1347 13.2493 12 13.25C12.8833 13.25 13.696 13.3333 14.438 13.5C15.18 13.6667 15.8173 13.9167 16.35 14.25C16.8827 14.5833 17.291 14.971 17.575 15.413C17.859 15.855 18.0007 16.3423 18 16.875V17.5C18 17.7833 17.9043 18.021 17.713 18.213C17.5217 18.405 17.284 18.5007 17 18.5H7ZM19.5 18.5V16.875C19.5 16.4417 19.446 16.0333 19.338 15.65C19.23 15.2667 19.0673 14.9083 18.85 14.575C19.0333 14.5417 19.221 14.521 19.413 14.513C19.605 14.505 19.8007 14.5007 20 14.5C21.2 14.5 22.1667 14.721 22.9 15.163C23.6333 15.605 24 16.1923 24 16.925V17.5C24 17.7833 23.904 18.021 23.712 18.213C23.52 18.405 23.2827 18.5007 23 18.5H19.5ZM8.125 16.5H15.9C15.7333 16.1667 15.2707 15.875 14.512 15.625C13.7533 15.375 12.916 15.25 12 15.25C11.084 15.25 10.2467 15.375 9.488 15.625C8.72933 15.875 8.275 16.1667 8.125 16.5ZM4 13.5C3.45 13.5 2.97933 13.3043 2.588 12.913C2.19667 12.5217 2.00067 12.0507 2 11.5C2 10.9333 2.196 10.4583 2.588 10.075C2.98 9.69167 3.45067 9.5 4 9.5C4.56667 9.5 5.04167 9.69167 5.425 10.075C5.80833 10.4583 6 10.9333 6 11.5C6 12.05 5.80833 12.521 5.425 12.913C5.04167 13.305 4.56667 13.5007 4 13.5ZM20 13.5C19.45 13.5 18.9793 13.3043 18.588 12.913C18.1967 12.5217 18.0007 12.0507 18 11.5C18 10.9333 18.196 10.4583 18.588 10.075C18.98 9.69167 19.4507 9.5 20 9.5C20.5667 9.5 21.0417 9.69167 21.425 10.075C21.8083 10.4583 22 10.9333 22 11.5C22 12.05 21.8083 12.521 21.425 12.913C21.0417 13.305 20.5667 13.5007 20 13.5ZM12 12.5C11.1667 12.5 10.4583 12.2083 9.875 11.625C9.29167 11.0417 9 10.3333 9 9.5C9 8.65 9.29167 7.93767 9.875 7.363C10.4583 6.78833 11.1667 6.50067 12 6.5C12.85 6.5 13.5627 6.78767 14.138 7.363C14.7133 7.93833 15.0007 8.65067 15 9.5C15 10.3333 14.7127 11.0417 14.138 11.625C13.5633 12.2083 12.8507 12.5 12 12.5ZM12 10.5C12.2833 10.5 12.521 10.404 12.713 10.212C12.905 10.02 13.0007 9.78267 13 9.5C12.9993 9.21733 12.9033 8.98 12.712 8.788C12.5207 8.596 12.2833 8.5 12 8.5C11.7167 8.5 11.4793 8.596 11.288 8.788C11.0967 8.98 11.0007 9.21733 11 9.5C10.9993 9.78267 11.0953 10.0203 11.288 10.213C11.4807 10.4057 11.718 10.5013 12 10.5Z"
        fill={fillColor}
      />
    </svg>
  );
}
