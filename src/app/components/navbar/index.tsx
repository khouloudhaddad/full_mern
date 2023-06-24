import React from 'react';
import { styled } from 'styled-components';
import tw from 'twin.macro';

const NavbarContainer = styled.div`
    min-height: 68px;
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;