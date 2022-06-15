import React from 'react';
import stack from "../../assets/static/stack";
const TechStack = () => {
    return (
        <div className="h-screen px-small-l xl:px-wide-l flex flex-col justify-evenly" id="techStack">
            <div className="flex flex-col">
                <h2 className="text-[32px] font-bold text-[#313840] md:text-[42px] lg:text-[42px] xl:text-[42px] ">
                    My Tech Stack
                </h2>
                <span className="text-[20px] font-light text-gray-700">
                    Technologies I've used to build my projects:
                </span>
            </div>
            <div className="xl:self-center lg:self-center  md:self-center flex flex-row flex-wrap justify-center items-center xl:w-3/4 lg:w-3/4 md:w-3/4">
                {
                    stack.map((item, index) => {
                        return (
                            <div key={index} className="mb-4 mr-4 xl:mb-8 xl:mr-8">
                                <img src={item.icon} alt={item.name} width={64} height={64} className="xl:w-32 lg:w-32 md:w-32"/>
                            </div>)
                    })
                }
            </div>
            <div></div>
        </div>
    );
};

export default TechStack;
