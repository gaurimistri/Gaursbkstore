import React from 'react';
import Cards from './Cards';
import list from '../../public/list.json';
import {Link} from 'react-router-dom';
function Course() {
    return (
        <div className="flex flex-col min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4">
            {/* Separate container for the content below the navbar */}
            <div className="flex-grow pt-28"> {/* Adjust pt-16 to control spacing below the navbar */}
                <div className="max-w-screen-2xl container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold md:text-4xl">
                            We're delighted to have you <span className="text-pink-500">Here! :)</span>
                        </h1>
                        <p className="mt-12 text-justify">
                            Here, you will find all the resources and information you need to get started. Whether you are here to enhance your skills or explore new topics, we are committed to providing you with a valuable learning experience. Enjoy your journey and make the most of the opportunities ahead!
                        </p>
                       <Link to="/">
                       <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
                       </Link>
                    </div>
                    {/* Grid layout for cards */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {list.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;
