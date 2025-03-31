import React, { ReactNode } from 'react';

import { Xbutton } from '@/shared/assets/svg';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  name: string;
}
export function Modal({ children, onClose, name }: ModalProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-[#12121266] z-50"
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
    >
      <div
        className="text-body3B bg-white p-5 rounded-lg shadow-lg max-w-lg w-full relative"
        onClick={e => e.stopPropagation()}
        aria-labelledby="modal-title"
        role="presentation"
      >
        <div className="flex justify-between mb-3">
          <h2 id="modal-title">{name}</h2>
          <button type="button" onClick={onClose} aria-label="Close modal">
            <Xbutton />
          </button>
        </div>
        <button
          type="button"
          className="absolute inset-0 w-full h-full cursor-pointer"
          onClick={onClose}
          aria-label="Close modal"
          style={{ backgroundColor: 'transparent' }}
        />
        {children}
      </div>
    </div>
  );
}
