import React from 'react';

import { Xbutton } from '@/shared/assets/svg';

import Portal from '../Portal';

interface Props {
  onClose: () => void;
  title: string;
  description: string;
  checkText: string;
  onClick: () => void;
}

function CancelModal({ onClose, title, description, checkText, onClick }: Props) {
  return (
    <Portal onClose={onClose}>
      <div className="w-full max-w-[532px] bg-white p-5 flex flex-col justify-center items-center gap-8 rounded-lg">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-body1B text-black">{title}</h2>
          <button type="button" onClick={onClose}>
            <Xbutton />
          </button>
        </div>
        <p className="whitespace-pre-wrap text-center text-caption1R text-gray-500">
          {description}
        </p>
        <button
          type="button"
          className="w-full h-14 flex justify-center items-center bg-error rounded-lg"
          onClick={onClick}
        >
          <p className="text-body2B text-white">{checkText}</p>
        </button>
      </div>
    </Portal>
  );
}

export default CancelModal;
