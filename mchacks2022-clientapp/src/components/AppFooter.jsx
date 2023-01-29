import React from 'react';
import {Link} from "react-router-dom";

function AppFooter(props) {
    return (
        <footer
            className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                Made with ❤️ for McHacks 10
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="https://devpost.com/software/communeaty-rx3t9b" className="mr-4 hover:underline md:mr-6 ">DevPost</a>
                </li>
                <li>
                    <Link to="/about" className="mr-4 hover:underline md:mr-6">About</Link>
                </li>
            </ul>
        </footer>

    );
}

export default AppFooter;
