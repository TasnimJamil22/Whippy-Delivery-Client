import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Instructions from './Instructions/Instructions';
import FAQ from './FAQ/FAQ';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <Instructions></Instructions>
           <FAQ></FAQ>
           {/* modal,googles */}
        </div>
    );
};

export default Home;