import React, {useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import styled from "styled-components";
import {setFavorites} from "./store/reducers/catSlice";
import {useAppDispatch} from "./hooks/redux";

export const Container = styled.div`
  height: 100%;
  max-width: 1346px;
  padding: 0 15px;
  margin: 0 auto;
`
const AppWrapper = styled.div`
  padding-top: 107px;
  padding-bottom: 38px;
`



function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const cats = localStorage.getItem('cats')
        if(cats) {
            dispatch(setFavorites(JSON.parse(cats)))
        }
    }, [])

    return (
        <Container>
            <Header/>
            <AppWrapper>
                <AppRouter/>
            </AppWrapper>
        </Container>
    );
}

export default App;
