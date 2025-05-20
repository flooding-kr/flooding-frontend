import { SchoolMap } from '@/entities/club';
import { X } from '@/shared/assets/icons';
import { BuildingType } from '@/shared/types/club';
import Portal from '@/shared/ui/Portal';

interface Props {
  building: BuildingType;
  floor: number;
  onClose: () => void;
}

function MapModal({ building, floor, onClose }: Props) {
  return (
    <Portal onClose={onClose}>
      <div className="bg-white rounded-lg p-6 max-w-[1300px] w-full max-h-[450px] h-full flex flex-col gap-4">
        <header className="flex justify-between items-center">
          <p className="text-body1B text-black">
            {building} {floor}층 지도
          </p>
          <button
            type="button"
            className="w-10 h-10 flex justify-center items-center"
            onClick={onClose}
          >
            <X />
          </button>
        </header>
        <div className="w-full h-full rounded-lg border-solid border-[1px] border-gray-200">
          <SchoolMap building={building} floor={floor} />
        </div>
      </div>
    </Portal>
  );
}

export default MapModal;
