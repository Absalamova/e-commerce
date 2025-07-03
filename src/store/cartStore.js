// src/store/cartStore.js
import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
    cartItems: [],

    addToCart: (product) => {
        const existing = get().cartItems.find(item => item.id === product.id);
        if (!existing) {
            set(state => ({
                cartItems: [...state.cartItems, { ...product, quantity: 1 }]
            }));
        }
    },

    increment: (id) => {
        set(state => ({
            cartItems: state.cartItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        }));
    },

    decrement: (id) => {
        set(state => ({
            cartItems: state.cartItems
                .map(item =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter(item => item.quantity > 0) // Remove item if quantity is 0
        }));
    },

    isInCart: (id) => !!get().cartItems.find(item => item.id === id),

    getQuantity: (id) => {
        const item = get().cartItems.find(item => item.id === id);
        return item?.quantity || 0;
    },
}));
