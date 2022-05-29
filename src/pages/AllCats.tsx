import React, {FC, useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchCats} from "../store/action-creators/cat";
import CatList from "../components/CatList";
import {ICat} from "../models/ICat";
import {addToFavorite, deleteFromFavorite, setPage} from "../store/reducers/catSlice";
import {useObserver} from "../hooks/useObserver";

const AllCats: FC = () => {
    const dispatch = useAppDispatch()
    const {cats, error, loading, page, totalPages} = useAppSelector(state => state.cats)
    const mounted = useRef<boolean>();
    const lastElement = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(!cats.length) {
            dispatch(fetchCats(page))
        }
    }, [])

    useEffect(() => {
        if(!mounted.current) {
            mounted.current = true;
        } else {
            dispatch(fetchCats(page))
        }
    }, [page])

    useObserver(lastElement, page < Number(totalPages), loading, () => {
       dispatch(setPage())
    })

    const addCatToFavorites = (cat: ICat) => {
        dispatch(addToFavorite(cat))
    }

    const onDelFromFavorites = (cat: ICat) => {
        dispatch(deleteFromFavorite(cat))
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <>
            <CatList
                cats={cats}
                addCatToFavorites={addCatToFavorites}
                onDelFromFavorites={onDelFromFavorites}
            />
            <div ref={lastElement} style={{height: 20}}/>
        </>
    );
};

export default AllCats;