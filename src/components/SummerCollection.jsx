import React from 'react';
import { Link } from 'react-router';
const SummerCollection = () => {
    return (
        

        <Link to={`/summer-collection/${123}`}>
            <img src="https://cdn.dmart.in/images/rwd/banners/curated/13mar25-curated-summer-hp.jpg" alt="" className='bg-white w-[97vw] mx-auto my-3 sm:my-8  px-6 py-5 border border-gray-300'/>
        </Link>
    );
};

export default SummerCollection;