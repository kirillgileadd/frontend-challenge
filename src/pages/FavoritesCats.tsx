import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import CatList from "../components/CatList";
import {ICat} from "../models/ICat";
import {toggleToFavorites} from "../store/reducers/catSlice";

const FavoritesCats: FC = () => {
    const dispatch = useAppDispatch()
    const {favorites} = useAppSelector(state => state.cats)

    const favoritesCatsHandler = (cat: ICat) => {
        dispatch(toggleToFavorites(cat))
    }

    return (
        <>
            {favorites.length ?
                <CatList
                    cats={favorites}
                    onFavorite={favoritesCatsHandler}
                />
                : <p>Выберите любимых котиков</p>}
        </>
    );
};

export default FavoritesCats;