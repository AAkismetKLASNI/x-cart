import { create } from 'zustand';

interface IGlobalStore {
  theme: 'light' | 'dark';
}

export const useGlobalStore = () => create();
