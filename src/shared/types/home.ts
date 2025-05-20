export type ApplyType = 'IMPOSSIBLE' | 'APPLIED' | 'POSSIBLE';

export interface DormitoryData {
  current_count: number;
  limit: number;
  status: ApplyType;
}
