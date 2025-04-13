import React from 'react';
import CategoryIcons from './CategoryIcons';

const categoryData = [
    {
        id:1,
        name: "Dairy",
        image : 'https://cdn.dmart.in/images/rwd-mobile/banners/cards/1may23-popularcat-dairy.png',
        slug:"dairy",
    },
    {
        id:2,
        name: "Tea",
        image : 'https://cdn.dmart.in/images/rwd-mobile/banners/cards/12sept23-popularcat-tea1.png',
        slug:"tea",
    },
    {
        id:3,
        name: "Soft drinks",
        image : 'https://cdn.dmart.in/images/rwd-mobile/banners/cards/12sept23-popularcat-softdrinks.png',
        slug:"soft-drinks",
    },
    {
        id:4,
        name: "cleaners",
        image : 'https://cdn.dmart.in/images/rwd-mobile/banners/cards/1oct24-popularcat-cleaners.png',
        slug:"cleaners",
    },
    {
        id:5,
        name: "bath soaps",
        image : 'https://cdn.dmart.in/images/rwd-mobile/banners/cards/12jan24-popularcat-soaps.png',
        slug:"bath-soaps",
    },
    {
        id:6,
        name: "toothpaste",
        image : 'https://cdn.dmart.in/images/rwd-mobile/banners/cards/12sept23-popularcat-toothpaste.png',
        slug:"toothpaste",
    },
    {
        id:7,
        name: "shampoos",
        image : 'https://cdn.dmart.in/images/rwd-mobile/banners/cards/12jan24-popularcat-shampoos.png',
        slug:"shampoos",
    },
    {
        id:8,
        name: "pooja needs",
        image : 'https://cdn.dmart.in/images/rwd-mobile/banners/cards/16jan23-popularcat-poojaneeds.png',
        slug:"pooja-needs",
    },
    {
        id:9,
        name: "towels",
        image : 'https://cdn.dmart.in/images/rwd-mobile/banners/cards/1apr24-popularcat-towels.png',
        slug:"towels",
    },
    {
        id:10,
        name: "bath utility",
        image : 'https://cdn.dmart.in/images/rwd-mobile/banners/cards/1apr24-popularcat-bathroom.png',
        slug:"bath-utility",
    },
    
]

const ProductCategories = () => {
    return (
        <div className='bg-white w-[97vw] mx-auto my-3 sm:my-8  px-6 py-6 border border-gray-300'>
            <h2 className='font-bold text-lg mb-3'>Product Categories</h2>
            <div className='flex gap-5 sm:gap-10 overflow-x-scroll sm:overflow-x-hidden items-center pr-6 scroll-p-6'>
                {
                    categoryData.map((category)=>(
                        <CategoryIcons key={category.id} {...category}/>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductCategories;