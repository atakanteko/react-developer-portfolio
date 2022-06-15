import React, {useEffect, useState} from 'react';

import ProjectCard from "./ProjectCard";

const Projects = ({portfolio}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(portfolio);
    }, [portfolio]);

    return (
        <div className="h-screen px-small-l xl:px-wide-l flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center">
                <div className="self-start flex flex-col">
                    <h2 className="text-[32px] font-bold text-[#313840] md:text-[42px] lg:text-[42px] xl:text-[42px] ">
                        Projects
                    </h2>
                    <span className="text-[20px] font-light text-gray-700">
                    Things I’ve built so far
                </span>
                </div>
                <div className="flex flex-row w-full justify-evenly xl:mt-10 lg:mt-10 md:mt-10">
                    {
                        data.slice(0, 1).map((item, index) => {
                            return (
                                <div key={index} className="xl:hidden md:hidden lg:hidden">
                                    <ProjectCard  drawMore={true} {...item}/>
                                </div>
                            )
                        })
                    }
                    {
                        data.slice(0, 3).map((item, index) => {
                            return (
                                <div key={index} className="hidden xl:block md:block lg:block">
                                    <ProjectCard drawMore={true} {...item}/>
                                </div>
                                    )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;
