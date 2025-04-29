export interface ClassroomType {
  id: number;
  floor: number;
  name: string;
  description: string;
  is_homebase: boolean;
  teacher: {
    id: string;
    name: string;
  };
}
