import React, {useState} from 'react';
import ReactPageScroller from "react-page-scroller";


import HomeContainer from "../components/homeScreen/HomeContainer";
import Second from "../components/Second";

const Home = () => {
    const [currentPage, setCurrentPage] = useState(null);

    const handlePageChange = number => {
        setCurrentPage(number);
    };
    return (
        <React.Fragment>
            <ReactPageScroller pageOnChange={handlePageChange} customPageNumber={currentPage}>
                <HomeContainer />
                <Second />
            </ReactPageScroller>
        </React.Fragment>
    );
};

export default Home;
