import React from 'react';
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import styled from "styled-components";

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
