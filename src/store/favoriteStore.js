import React from 'react'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
export const favoriteStore = create(
    persist(

        (set,get)=>({
            favorites:[],
            addFavorites:(item)=>set((state)=>({favorites: [...state.favorites,item]})),
            removeFavorites:(id)=>set((state)=>({favorites:state.favorites.filter(item=>item.id!==id)})),
            isFavorite:(id)=>{
                return get().favorites.some(item=>item.id === id)
            }
        })
    ),
    {
        name:"Favorite items"
    }
)




 
