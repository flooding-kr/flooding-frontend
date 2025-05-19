import { ApplyType } from '@/shared/types/home';

interface Props {
  count: number;
  maxCount: number;
  activationTime: string;
  available: ApplyType;
  setText: (type: string) => void;
  setIsActive: (active: boolean) => void;
}

const checkApply = ({
  activationTime,
  count,
  maxCount,
  available,
  setIsActive,
  setText,
}: Props) => {
  const currentTime = new Intl.DateTimeFormat('kr', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format();

  const [hour, minute] = activationTime.split(':');
  const isTimeActive = currentTime >= activationTime && currentTime < '21:00';
  const isCountFull = count === maxCount;

  setIsActive(isTimeActive && !isCountFull);

  if (available === 'POSSIBLE') {
    setText('신청하기');
  } else if (!isTimeActive) {
    setText(`${hour}시 ${minute}분 시작`);
  } else if (isCountFull || available === 'IMPOSSIBLE') {
    setText('신청 불가');
  } else if (available === 'APPLIED') {
    setText('신청 취소');
  }
};

export default checkApply;
