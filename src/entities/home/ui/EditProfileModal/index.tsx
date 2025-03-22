import React from 'react';
import Cropper from 'react-easy-crop';

import { AddButton, Trash, X } from '@/shared/assets/icons';
import userProfileImage from '@/shared/assets/jpg/userProfileImage.jpg';
import { Button } from '@/shared/ui';
import Portal from '@/shared/ui/Portal';

import useProfileEdit from '../../model/useProfileEdit';

interface Props {
  src: string;
  onClose: () => void;
}

export default function EditProfileModal({ src, onClose }: Props) {
  const { crop, setCrop, zoom, setZoom, img, onCropComplete, handleChangeFile } = useProfileEdit({
    src,
  });

  return (
    <Portal onClose={onClose}>
      <div className="flex flex-col gap-4 bg-white p-5 rounded-lg">
        <header className="flex justify-between items-center">
          <p className="text-body1B text-black">프로필 수정</p>
          <button
            type="button"
            className="w-10 h-10 flex justify-center items-center"
            onClick={onClose}
          >
            <X />
          </button>
        </header>
        <div className="flex flex-col gap-5">
          <div className="relative w-[380px] h-[200px] flex justify-center">
            <Cropper
              image={img || userProfileImage.src}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              objectFit="contain"
              showGrid={false}
              style={{
                containerStyle: {
                  borderRadius: '8px',
                  color: '#E9E9E9',
                  width: '100%',
                  height: '100%',
                },
                cropAreaStyle: {
                  borderRadius: '999px',
                },
              }}
            />
          </div>
          <div className="flex flex-col gap-[13px]">
            <div className="flex gap-4">
              <label
                htmlFor="fileInput"
                className="max-w-[182px] w-full flex justify-center gap-2 bg-gray-600 rounded-lg px-10 py-4 cursor-pointer"
              >
                <AddButton color="#ffffff" />
                <p className="text-white text-body2B">업로드</p>
                <input id="fileInput" type="file" hidden onChange={handleChangeFile} />
              </label>
              <button
                type="button"
                className="max-w-[182px] w-full flex justify-center gap-2 bg-error rounded-lg px-10 py-4"
              >
                <Trash />
                <p className="text-white text-body2B">삭제</p>
              </button>
            </div>
            <Button text="완료" type="submit" />
          </div>
        </div>
      </div>
    </Portal>
  );
}
