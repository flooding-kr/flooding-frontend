import { create } from 'zustand';

interface Student {
  id: string;
  name: string;
  email: string;
  gender: string;
  student_info: {
    is_graduate: boolean;
    grade: number;
    classroom: number;
    number: number;
    year: number;
  };
}

interface Store {
  selectedStudents: Student[];
  floor: number | null;
  reason: string | null;
  period: number | null;
  selectedTable: number | null;
  selectedTableCapacity: number | null;
  setSelectedTable: (id: number | null) => void;
  setSelectedTableCapacity: (capacity: number | null) => void;
  setSelectedStudents: (students: Student[]) => void;
  addStudent: (student: Student) => void;
  removeStudent: (student: Student) => void;
  setFloor: (floor: number) => void;
  setPeriod: (period: number) => void;
  setReason: (reason: string) => void;
}

export const useStore = create<Store>(set => ({
  selectedStudents: [],
  reason: '',
  floor: 2,
  period: 8,
  selectedTable: null,
  selectedTableCapacity: null,
  setSelectedTable: id => set({ selectedTable: id }),
  setSelectedStudents: students => set({ selectedStudents: students }),
  setSelectedTableCapacity: capacity => set({ selectedTableCapacity: capacity }),
  addStudent: student =>
    set(state => {
      if (!state.selectedStudents.find(s => s.id === student.id)) {
        return { selectedStudents: [...state.selectedStudents, student] };
      }
      return state;
    }),
  removeStudent: student =>
    set(state => ({
      selectedStudents: state.selectedStudents.filter(s => s.id !== student.id),
    })),
  setFloor: floor => set({ floor }),
  setPeriod: period => set({ period }),
  setReason: reason => set({ reason }),
}));
