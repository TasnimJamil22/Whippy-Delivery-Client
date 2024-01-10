import React, { useContext } from 'react';
import Header from '../../Shared/Header/Header';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Instructions from './Instructions/Instructions';
import FAQ from './FAQ/FAQ';
import { AuthContext } from '../../Contexts/AuthProvider';

const Home = () => {
    const {loading} = useContext(AuthContext);
    return (
        <div>
           <Banner></Banner>
           {/* when services are fetching we show loading spinner */}
           {/* {loading &&   <span className="loading loading-spinner text-accent w-20 "></span> } */}
           {/* {!loading && <Services></Services>} */}
           <Services></Services>
           <Instructions></Instructions>
           <FAQ></FAQ>
           {/* modal,googles */}
        </div>
    );
};

export default Home;