import { useNotifyStore } from '@/entities/home/store/useNotifyStore';
import { Error, X } from '@/shared/assets/icons';

function MassageNotifyModal() {
  const { setModal } = useNotifyStore();

  return (
    <div className="bg-white p-5 flex flex-col gap-5 rounded-lg shadow-[0_0_20px_0_#00000033]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 mobile:gap-2">
          <div className="w-9 h-9 mobile:w-6 mobile:h-6">
            <Error color="#5E7EF3" />
          </div>
          <p className="text-main-600 text-body2B mobile:text-body3B">안마의자 신청 공지사항</p>
        </div>
        <button
          className="w-9 h-9 mobile:w-6 mobile:h-6"
          type="button"
          onClick={() => setModal(false)}
        >
          <X />
        </button>
      </div>
      <div className="bg-gray-100 p-5 flex flex-col gap-7 rounded-lg">
        <p className="text-body2R text-gray-700 mobile:text-body3R">
          20:20 ~ 21:00 에 안마의자 신청 및 취소가 가능해요. <br />
          취소 후에는 재신청이 불가능해요.
        </p>
        <p className="text-body2R text-black mobile:text-body3R">
          ※ 여학생의 경우 여자 사감선생님께 별도로 신청해주시기 바랍니다.
        </p>
      </div>
    </div>
  );
}

export default MassageNotifyModal;
