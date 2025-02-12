import { create } from 'zustand';

interface Store {
  selectedStudents: { id: number; name: string }[];
  floor: string | null;
  classTime: string | null;
  setSelectedStudents: (students: { id: number; name: string }[]) => void;
  addStudent: (student: { id: number; name: string }) => void;
  removeStudent: (student: { id: number; name: string }) => void;
  setFloor: (floor: string) => void;
  setClassTime: (classTime: string) => void;
}

export const useStore = create<Store>(set => ({
  selectedStudents: [],
  floor: null,
  classTime: null,
  setSelectedStudents: students => set({ selectedStudents: students }),
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
  setClassTime: classTime => set({ classTime }),
}));
