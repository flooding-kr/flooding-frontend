import { useState, useEffect } from 'react';
import { Area } from 'react-easy-crop';

interface UseProfileEditProps {
  src: string;
}

export default function useProfileEdit({ src }: UseProfileEditProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [img, setImg] = useState('');
  const [croppedArea, setCroppedArea] = useState<Area>();

  const onCropComplete = (_croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedArea(croppedAreaPixels);
  };

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCroppedArea(undefined);
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) setImg(base64.toString());
    };
    if (event.target.files?.[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  useEffect(() => {
    setImg(src);
  }, [src]);

  return {
    crop,
    setCrop,
    zoom,
    setZoom,
    img,
    croppedArea,
    onCropComplete,
    handleChangeFile,
  };
}
