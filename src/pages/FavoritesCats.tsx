import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import CatList from "../components/CatList";
import {ICat} from "../models/ICat";
import {deleteFromFavorite} from "../store/reducers/catSlice";

const FavoritesCats: FC = () => {
    const dispatch = useAppDispatch()
    const {favorites} = useAppSelector(state => state.cats)

    const onDelFromFavorites = (cat: ICat) => {
        dispatch(deleteFromFavorite(cat))
    }

    return (
        <>
            {favorites.length ?
                <CatList
                    cats={favorites}
                    onDelFromFavorites={onDelFromFavorites}
                />
                : <p>Добавьте котиков в избранное</p>}
        </>
    );
};

export default FavoritesCats;