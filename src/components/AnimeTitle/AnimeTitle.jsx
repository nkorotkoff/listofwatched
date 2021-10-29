import React from 'react';
import styled from 'styled-components'

const Main = styled.div`
    display:flex;
  margin: 0 0 30px 0;
`

const ImageOfAnime = styled.img`
    width:150px;
  height: 210px;
`

const LineBreakText = styled.p`
    width:650px;
  padding:0 15px;
  

`
const OneItem = styled.div`
    display:flex;
  flex-direction: column;
  
`
const Naming = styled.h3`
    padding-left:13px;
    margin:0;
`

const AnimeTitle = () => {
    return (
        <Main>
            <ImageOfAnime src={'https://cdn.myanimelist.net/images/anime/8/65409.jpg?s=9045a2ed86abe77a6b24f0ad7f114485'}/>
            <OneItem>
                <Naming>Вечноцветущая сакура</Naming>
            <LineBreakText>
                In a world similar to the European Middle Ages, the feared yet revered Holy Knights of Britannia use immensely powerful magic to protect the region of Britannia and its kingdoms. However, a small subs...",
            </LineBreakText>
            </OneItem>
        </Main>
    );
};

export default AnimeTitle;
