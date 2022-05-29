import React, {FC} from 'react';
import styled from "styled-components";
import {ICat} from "../models/ICat";
import outlinedHeart from '../assets/heart.svg'
import filledHeart from '../assets/heartFilled.svg'
import mockCatPhoto from '../assets/cat.jpg'

interface CatItemButtonProps {
    favorite?: boolean
}

const CatItemBox = styled.div`
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  &:hover {
    transform: scale(1.2);
    box-shadow: 0 6px 5px rgba(0, 0, 0, 0.24), 0 9px 18px rgba(0, 0, 0, 0.18);
    button {
      opacity: 1;
    }
  }

  @media(max-width: 1050px) {
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`

const CatItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  vertical-align: middle;
`

const CatItemButton = styled.button<CatItemButtonProps>`
  background-color: transparent;
  border: 0;
  position: absolute;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
  opacity: ${props => props.favorite ? 1 : 0};
  width: 40px;
  height: 40px;
  background-image: url("${props => props.favorite ? filledHeart : outlinedHeart}");
  background-repeat: no-repeat;
  &:hover {
    background-image: url("${filledHeart}");
  }
`
interface CatItemProps  extends ICat{
    onFavoriteHandler: (cat: ICat) => void
}

const CatItem: FC<CatItemProps> = ({image, id, name,favorite, onFavoriteHandler}) => {

    const addToFavoritesHandler = () => {
        let cat: ICat = {
            id,
            name,
            image,
            favorite: !favorite
        }
        onFavoriteHandler(cat)
    }

    return (
        <CatItemBox onClick={addToFavoritesHandler}>
            <CatItemImg src={image?.url ?? mockCatPhoto} alt=""/>
            <CatItemButton favorite={favorite} />
        </CatItemBox>
    );
};

export default CatItem;