import React,{useEffect, useState} from 'react';

import BackHome from '../assets/icons/back-home.svg';
import {Link} from "react-router-dom";

import {apiOptions, fetchData} from "../utils/http/fetchData";

import ProjectCard from "../components/projects/ProjectCard";

const Projects = () => {
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const fetchPortfolio = async () => {
            const response = await fetchData('https://portfolio5.p.rapidapi.com/api/work', apiOptions);
            setPortfolio(response);
        }
        fetchPortfolio();
    },[]);
    return (
        <div className="px-small-l xl:px-wide-l py-10 flex flex-col justify-center items-center">
            <div className="self-start flex flex-row justify-center items-center">
                <Link to="/">
                    <img src={BackHome} alt="back-home" className="w-10"/>
                </Link>
                <Link to="/">
                    <span className="ml-2 text-[#313840] font-bold text-[24px]">Back Home</span>
                </Link>
            </div>
            <div className="mt-2 xl:flex xl:flex-row xl:flex-wrap">
                {
                    portfolio.map((item, index) => {
                        return (
                            <ProjectCard key={index} {...item}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Projects;
