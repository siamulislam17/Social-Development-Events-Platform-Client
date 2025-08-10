import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Newsletter from '../NewsLetter/NewsLetter';
import GallerySection from '../Gallery Section/GallerySection';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
import PartnersSponsors from '../Sponsors/Sponsors';

const MainPage = () => {
    return (
        <div>
            <Banner></Banner>
            <UpcomingEvents></UpcomingEvents>
            <Features></Features>
            <GallerySection></GallerySection>
            <PartnersSponsors></PartnersSponsors>
            <Newsletter></Newsletter>
        </div>
    );
};

export default MainPage;