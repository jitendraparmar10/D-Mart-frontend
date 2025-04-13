import React from 'react';
import { Link } from 'react-router';
const DelightfullDiscount = () => {
    return (
        <div>
            <Link to={`/delightfull-discount/${123}`}>
                <img src="https://cdn.dmart.in/images/rwd/banners/curated/03apr25-curated-halfprice-core-mmr.jpg" alt="" className='bg-white w-[97vw] mx-auto my-2 sm:my-8  px-6 py-6 border border-gray-300'/>
            </Link>
        </div>
    );
};

export default DelightfullDiscount;