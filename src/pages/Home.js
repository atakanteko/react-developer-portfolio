import React, {useState} from 'react';
import ReactPageScroller from "react-page-scroller";


import HomeContainer from "../components/homeScreen/HomeContainer";
import TechStack from "../components/stack/TechStack";

const Home = () => {
    const [currentPage, setCurrentPage] = useState(null);

    const handlePageChange = number => {
        setCurrentPage(number);
    };
    return (
        <React.Fragment>
            <ReactPageScroller pageOnChange={handlePageChange} customPageNumber={currentPage}>
                <HomeContainer />
                <TechStack />
            </ReactPageScroller>
        </React.Fragment>
    );
};

export default Home;
