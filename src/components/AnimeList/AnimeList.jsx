import React from 'react';
import styled from 'styled-components'

import AnimeTitle from "../AnimeTitle/AnimeTitle";

const MainBlock = styled.div`
    width:70%;
  margin:0 auto;
  
`


const Center = styled.div`
    display:flex;
    align-items: center;
  padding: 50px 0 0 0 ;
  flex-direction: column;
  background: #fcf8f7;
  min-height: 84vh;
`

const AnimeList = () => {
    return (
        <MainBlock>
        <Center>
            <AnimeTitle/>
            <AnimeTitle/>
        </Center>
        </MainBlock>
    );
};

export default AnimeList;
