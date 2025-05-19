import { Error, X } from '@/shared/assets/icons';

interface Props {
  onClose: () => void;
}

function MusicNotifyModal({ onClose }: Props) {
  return (
    <div className="bg-white p-5 flex flex-col gap-5 rounded-lg shadow-[0_0_20px_0_#00000033]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 mobile:gap-2">
          <div className="w-9 h-9 mobile:w-6 mobile:h-6">
            <Error color="#5E7EF3" />
          </div>
          <p className="text-main-600 text-body2B mobile:text-body3B">안마의자 신청 공지사항</p>
        </div>
        <button className="w-9 h-9 mobile:w-6 mobile:h-6" type="button" onClick={onClose}>
          <X />
        </button>
      </div>
      <div className="bg-gray-100 p-5 flex flex-col gap-7 rounded-lg">
        <p className="text-body2R text-gray-700 mobile:text-body3R">
          1. 기상 음악 순서는 신청 순서와는 별개로 사감선생님께서 정하십니다.
        </p>
        <p className="text-body2R text-gray-700 mobile:text-body3R">
          2. 영어, 한국어, 일본어 이외의 언어가 포함되거나 과도한 욕설이 담긴 <br />
          음악은 삭제될 수 있습니다.
        </p>
        <p className="text-body2R text-gray-700 mobile:text-body3R">
          3. 기상 음악과 관련 없는 음악 영상을 올렸을 시 삭제될 수 있습니다.
        </p>
        <p className="text-body2R text-gray-700 mobile:text-body3R">
          4. 노래 신청은 1일 1곡만 가능합니다.
        </p>
        <p className="text-body2R text-gray-700 mobile:text-body3R">
          5. 노래 신청은 취소 후 재신청이 가능합니다.
        </p>
      </div>
    </div>
  );
}

export default MusicNotifyModal;
