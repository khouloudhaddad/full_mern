import React from 'react';
import { styled } from 'styled-components';
import tw from 'twin.macro';
import { Navbar } from '../../components/navbar';
import { TopSection } from './topSection';
import { BookCard } from '../../components/bookCard';
import { Marginer } from "../../components/marginer";
import { BookingSteps } from './bookingSteps';
import { Footer } from "../../components/footer";

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export function Homepage() {
    return (
      <PageContainer>
        <Navbar />
        <TopSection />
        <Marginer direction="vertical" margin="4em" />
        <BookCard />
        <Marginer direction="vertical" margin="10em" />
        <BookingSteps />
        <Marginer direction="vertical" margin="8em" />

        <Footer />
      </PageContainer>
    );
}
