import { X } from '@/shared/assets/icons';
import useFilterStore from '@/shared/stores/useFilterStore';

import Button from '../Button';
import Tag from '../Tag';

interface Props {
  list: string[];
  onClick: () => void;
}

function FilterModal({ list, onClick }: Props) {
  const { state, setState } = useFilterStore();

  return (
    <div className="bg-white p-10 flex flex-col gap-[120px] rounded-lg shadow-[0_0_20px_0_#00000033] min-w-96">
      <div className="flex flex-col justify-center gap-10">
        <div className="flex justify-between items-center gap-3">
          <p className="text-black text-title3B">필터</p>
          <button type="button" className="w-9 h-9" onClick={onClick}>
            <X />
          </button>
        </div>
        <div className="w-full flex flex-wrap gap-6">
          {list.map(item => (
            <div key={`filter-${item}`}>
              <Tag text={item} disabled={state === item} onClick={() => setState(item)} />
            </div>
          ))}
        </div>
      </div>
      <Button text="확인" disabled={!state} />
    </div>
  );
}

export default FilterModal;
