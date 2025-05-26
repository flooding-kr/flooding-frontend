import { useMutation, useQueryClient } from '@tanstack/react-query';

import patchAttend from '../api/patchAttend';

interface Props {
  id: string;
}

function useAttendReservation({ id }: Props) {
  const queryClient = useQueryClient();

  const attendReservation = useMutation({
    mutationFn: () => patchAttend({ id }),
  });

  return attendReservation;
}

export default useAttendReservation;
