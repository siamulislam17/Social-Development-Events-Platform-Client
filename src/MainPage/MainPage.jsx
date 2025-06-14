import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Newsletter from '../NewsLetter/NewsLetter';
import GallerySection from '../Gallery Section/GallerySection';

const MainPage = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <GallerySection></GallerySection>
            <Newsletter></Newsletter>
        </div>
    );
};

export default MainPage;