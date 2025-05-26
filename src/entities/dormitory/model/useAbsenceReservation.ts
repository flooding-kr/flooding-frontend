import { useMutation } from '@tanstack/react-query';

import patchAbsence from '../api/patchAbsence';

interface Props {
  id: string;
}

function useAbsenceReservation({ id }: Props) {
  const absenceReservation = useMutation({
    mutationFn: () => patchAbsence({ id }),
  });

  return absenceReservation;
}

export default useAbsenceReservation;
