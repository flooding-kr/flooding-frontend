import { useMutation, useQueryClient } from '@tanstack/react-query';

import patchAttend from '../api/patchAttend';

interface Props {
  id: string;
}

function useAttendReservation({ id }: Props) {
  const queryClient = useQueryClient();

  const attendReservation = useMutation({
    mutationFn: () => patchAttend({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['selfStudy'] });
      queryClient.invalidateQueries({ queryKey: ['selfStudyRank'] });
    },
  });

  return attendReservation;
}

export default useAttendReservation;
