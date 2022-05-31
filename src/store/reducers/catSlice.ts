import {ICat} from "../../models/ICat";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCats} from "../action-creators/cat";

export interface CatSate {
    cats: ICat[];
    favorites: ICat[]
    loading: boolean;
    error: string;
    page: number;
    totalPages: string | null;
}

const initialState: CatSate = {
    cats: [],
    favorites: [],
    loading: false,
    error: '',
    page: 1,
    totalPages: null
}

interface FetchCatsFulfilledAction {
    data: ICat[];
    totalCount: string
}

const changeFavourValue = (cats: ICat[], cat: ICat) => {
    return cats.map(item => {
        if (item.id === cat.id) {
            return {
                ...item,
                favorite: cat.favorite
            }
        }
        return item
    })
}

export const catSlice = createSlice({
    name: 'cat',
    initialState,
    reducers: {
        toggleToFavorites: (state, action: PayloadAction<ICat>) => {
            const newFavoritesCats = state.favorites.filter((cat) => cat.id !== action.payload.id)

            if(newFavoritesCats.length === state.favorites.length) {
                state.favorites.push(action.payload)
            } else {
                state.favorites = newFavoritesCats
            }

            localStorage.setItem('cats', JSON.stringify(state.favorites))
            state.cats = changeFavourValue(state.cats, action.payload)
        },
        setFavorites: (state, action: PayloadAction<ICat[]>) => {
            state.favorites = action.payload
        },
        setPage: (state) => {
            state.page += 1
        },
        setTotalPages: (state, action: PayloadAction<string>) => {
            state.totalPages = action.payload
        }
    },
    extraReducers: {
        [fetchCats.pending.type]: (state) => {
            state.loading = true
        },
        [fetchCats.fulfilled.type]: (state, action: PayloadAction<FetchCatsFulfilledAction>) => {
            const {data, totalCount} = action.payload
            state.loading = false
            state.cats = [...state.cats, ...data.map((cat) => {
                const favoritesCat = state.favorites.find(favoritesCat => cat.id ===  favoritesCat.id)
                if (favoritesCat?.id === cat.id) {
                    return {
                        ...cat,
                        favorite: true
                    }
                } else {
                    return {
                        ...cat,
                        favorite: false
                    }
                }
            })]
            state.error = ''
            state.totalPages = String(Math.ceil(Number(totalCount) / 10))
        },
        [fetchCats.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    }
})

export const { toggleToFavorites, setPage, setTotalPages, setFavorites } = catSlice.actions

export default catSlice.reducer