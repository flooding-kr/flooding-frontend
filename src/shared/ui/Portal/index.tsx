import { MouseEvent, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: React.ReactElement;
  onClose: () => void;
}

export default function Portal({ children, onClose }: Props) {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (typeof window === 'undefined' || !isMounted) return null;

  const portal = document.getElementById('portal');
  if (!portal) throw new Error('Not Found Portal');

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return ReactDOM.createPortal(
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          onClick(e as unknown as MouseEvent<HTMLDivElement>);
        }
      }}
      className="fixed bg-[#12121266] w-dvw h-dvh flex justify-center items-center z-[999]"
    >
      {children}
    </div>,
    portal
  );
}
