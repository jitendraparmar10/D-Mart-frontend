import React from 'react';
import Nevbar from '../components/Nevbar';
import ImageCarousel from '../components/ImageCarousel';
import ProductCategories from '../components/ProductCategories';
import SummerCollection from '../components/SummerCollection';
import DelightfullDiscount from '../components/DelightfullDiscount';

const Home = () => {
    return (
        <>
            <Nevbar />
            <ImageCarousel/>
            <ProductCategories/>
            <SummerCollection />
            <DelightfullDiscount />
        </>
    );
};

export default Home;