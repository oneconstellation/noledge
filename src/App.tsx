import React from 'react';
import { Header, Brand, UserMenu } from './App.styled';
import { GlobalStyle } from './globalStyles';

export const App = () => (
    <>
        <GlobalStyle />
        <Header>
            <Brand>noledge</Brand>
            <UserMenu>
                <a href="#">login</a>
            </UserMenu>
        </Header>
    </>
);