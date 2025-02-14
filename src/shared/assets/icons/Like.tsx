import React from 'react';

interface Props {
  state: boolean;
}

export default function Like({ state }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 18H14.5C14.7833 18 15.046 17.929 15.288 17.787C15.53 17.645 15.7007 17.4493 15.8 17.2L17.9 12.3C17.9333 12.2167 17.9583 12.1333 17.975 12.05C17.9917 11.9667 18 11.8833 18 11.8V11C18 10.7167 17.904 10.479 17.712 10.287C17.52 10.095 17.2827 9.99933 17 10H12.4L13 6.6C13.0333 6.43333 13.025 6.275 12.975 6.125C12.925 5.975 12.8417 5.84167 12.725 5.725L12 5L7.4 10C7.26667 10.1333 7.16667 10.2833 7.1 10.45C7.03333 10.6167 7 10.8 7 11V16C7 16.55 7.196 17.021 7.588 17.413C7.98 17.805 8.45067 18.0007 9 18ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22Z"
        fill={state ? '#5E7EF3' : '#D3D3D3'}
      />
    </svg>
  );
}
