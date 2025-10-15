import picture from '../assets/HeaderEsty.jpg';
import React from 'react';
import {HeaderContainer} from '../styles/Header.style'


export const Header = () => {
    return (

        <HeaderContainer>
            <img src={picture} alt='logo' />
        </HeaderContainer>
        
    )
}