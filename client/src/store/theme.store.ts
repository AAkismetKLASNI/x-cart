import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IThemeStore {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: () => void;
}

export const useThemeStore = create(
  persist<IThemeStore>(
    (set, get) => ({
      theme: 'light',
      toggleTheme: () => {
        const currentTheme = get().theme;

        if (currentTheme === 'light') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }

        set({ theme: currentTheme === 'light' ? 'dark' : 'light' });
      },
      setTheme: () => {
        const currentTheme = get().theme;

        document.documentElement.classList.add(currentTheme);
      },
    }),

    {
      name: 'GLOBAL',
    }
  )
);
