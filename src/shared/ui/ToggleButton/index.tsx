'use client';

import Button from '../Button';

interface Props {
  value: string;
  setValue: (value: string) => void;
  text1: string[];
  text2: string[];
}

export default function ToggleButton({ value, setValue, text1, text2 }: Props) {
  return (
    <div className="flex gap-2">
      <Button
        text={text1[0]}
        type="button"
        closed={value === text1[1]}
        toggle={value !== text1[1]}
        onClick={() => setValue(text1[1])}
      />
      <Button
        text={text2[0]}
        type="button"
        closed={value === text2[1]}
        toggle={value !== text2[1]}
        onClick={() => setValue(text2[1])}
      />
    </div>
  );
}
