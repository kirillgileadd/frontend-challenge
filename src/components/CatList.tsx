import React, {FC} from 'react';
import styled from "styled-components";
import {ICat} from "../models/ICat";
import CatItem from "./CatItem";

export const CatListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 48px;
  grid-auto-rows: 225px;
  @media(max-width: 1360px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media(max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media(max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
  }
  @media(max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

interface CatListProps {
    cats: ICat[]
    onFavorite: (cat: ICat) => void
}

const CatList: FC<CatListProps> = ({cats, onFavorite}) => {
    return (
        <CatListStyle>
            {cats.map(cat => <CatItem
                onFavorite={onFavorite}
                key={cat.id}
                id={cat.id}
                image={cat.image}
                name={cat.name}
                favorite={cat.favorite}
            />)}
        </CatListStyle>
    );
};

export default CatList;