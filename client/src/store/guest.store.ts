'use client';

import { GUEST_CART } from '@/constants/local.storage.const';
import type { IChangeQuantityItem, ISimpleCartItem } from '@/types/cart.types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createId } from '@paralleldrive/cuid2';
import type { IAddToCart } from '@/types/cart.types';

interface IGuestCartStore {
  items: ISimpleCartItem[];
  addItem: ({ product, quantity, asSecondItem }: IAddToCart) => void;
  removeItem: (cartItemId: string) => void;
  changeQuantityItem: (cartItem: IChangeQuantityItem) => void;
  clearCart: () => void;
}

export const useGuestCartStore = create(
  persist<IGuestCartStore>(
    (set, get) => ({
      items: [],
      addItem: ({ product, quantity, asSecondItem = false }) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.product.id === product.id);

        if (existingItem) {
          const updated = currentItems.map((item) =>
            item.product.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + quantity,
                  asSecondItem,
                }
              : item
          );

          set({ items: updated });
        } else {
          set({
            items: [...currentItems, { id: createId(), product, asSecondItem, quantity }],
          });
        }
      },
      removeItem: (cartItemId) => {
        set({ items: get().items.filter((item) => item.id !== cartItemId) });
      },
      clearCart: () => {
        set({ items: [] });
      },
      changeQuantityItem: (cartItem: IChangeQuantityItem) => {
        const currentItems = get().items;
        const existItem = currentItems.find((item) => item.id === cartItem.id);
        let updated = currentItems;

        if (existItem) {
          if (cartItem.type === 'increment') {
            updated = currentItems.map((item) =>
              item.id === existItem.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {
            updated = currentItems.map((item) =>
              item.id === existItem.id ? { ...item, quantity: item.quantity - 1 } : item
            );
          }

          set({ items: updated });
        }
      },
    }),
    { name: GUEST_CART }
  )
);
