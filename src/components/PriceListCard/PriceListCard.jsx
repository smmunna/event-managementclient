// PriceListCard.jsx

import React from 'react';

const PriceListCard = ({ title, price }) => {
    return (
        <div>
            <div className=" w-full lg:w-[350px] bg-white border rounded-md overflow-hidden shadow-lg mx-auto">
                <div className="px-6 py-4">
                    <div className="text-2xl font-bold mb-2">{title}</div>
                    <p className="text-gray-700 text-base">Loremti asperiores veniam ipsum fugiat tempora.</p>
                    <div className="text-2xl font-bold my-4">${price}</div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Get This Package
                    </button>
                </div>
                <div className="px-6 py-4">
                    <ul>
                        <li className="flex items-center mb-2">
                            <span className="mr-2 text-green-500">&#10003;</span>Ten links available
                        </li>
                        <li className="flex items-center mb-2">
                            <span className="mr-2 text-green-500">&#10003;</span>Own analytics platform
                        </li>
                        <li className="flex items-center mb-2">
                            <span className="mr-2 text-green-500">&#10003;</span>Mobile app
                        </li>
                        <li className="flex items-center mb-2">
                            <span className="mr-2 text-green-500">&#10003;</span>Chat Support
                        </li>
                        <li className="flex items-center mb-2">
                            <span className="mr-2 text-green-500">&#10003;</span>1000 Apps
                        </li>
                    </ul>
                </div>
                <div className="px-6 py-4">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                        See All Features
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PriceListCard;
