import React, {useState, useEffect} from 'react';
import ReactPageScroller from "react-page-scroller";


import HomeContainer from "../components/homeScreen/HomeContainer";
import TechStack from "../components/stack/TechStack";
import Projects from "../components/projects/Projects";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import {apiOptions, fetchData} from '../utils/http/fetchData'

const Home = () => {
    const [currentPage, setCurrentPage] = useState(null);
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const fetchPortfolio = async () => {
            const response = await fetchData('https://portfolio5.p.rapidapi.com/api/work', apiOptions);
            setPortfolio(response);
        }
        fetchPortfolio();
    },[]);

    const handlePageChange = number => {
        setCurrentPage(number);
    };
    return (
        <React.Fragment>
            <ReactPageScroller pageOnChange={handlePageChange} customPageNumber={currentPage}>
                <HomeContainer />
                <TechStack/>
                <Projects portfolio={portfolio}/>
                <About/>
                <Contact/>
            </ReactPageScroller>
        </React.Fragment>
    );
};

export default Home;
