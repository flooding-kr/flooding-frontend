import { create } from 'zustand';

interface Store {
  selectedStudents: { id: number; name: string }[];
  floor: string | null;
  classTime: string | null;
  selectedTable: number | null;
  setSelectedTable: (id: number | null) => void;
  setSelectedStudents: (students: { id: number; name: string }[]) => void;
  addStudent: (student: { id: number; name: string }) => void;
  removeStudent: (student: { id: number; name: string }) => void;
  setFloor: (floor: string) => void;
  setClassTime: (classTime: string) => void;
}

export const useStore = create<Store>(set => ({
  selectedStudents: [],
  floor: '2층',
  classTime: '8교시',
  selectedTable: null,
  setSelectedTable: id => set({ selectedTable: id }),
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
