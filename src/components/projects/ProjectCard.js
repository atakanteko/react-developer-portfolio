import React from 'react';
import Chain from "../../assets/icons/link-chain.svg";
import {Link} from "react-router-dom";
import More from "../../assets/icons/more.svg";

const ProjectCard = ({title, imgUrl,framework, link, drawMore=false}) => {

    return (
        <div className={`overflow-hidden bg-white rounded-t-2xl shadow-md xl:w-[373px] lg:w-[300px] md:w-[250px] mt-2`}>
            <div className="flex flex-col justify-center items-center">
                <div className="overflow-hidden rounded-t-2xl">
                    <img src={imgUrl} alt={title} className="w-max"/>
                </div>
                <div className="self-start px-7 pt-7 pb-2 leading-6 flex flex-col">
                    <h2 className="mb-2 text-[18px] h-[26px] font-normal text-black">{title}</h2>
                    <span className="mb-2 text-[#666666] font-extralight h-[120px]">
                            This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content
                        </span>
                    <span className="text-[#42446E] font-extralight">
                            <b>Tech Stack:</b> {framework}
                        </span>
                </div>
                <div className="self-start px-7 pb-3 w-full">
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center justify-center">
                            <img src={Chain} alt="link-chain" className="w-6"/>
                            <a href={link} target="_blank">
                                <span className="text-gray-600 underline ml-1">Live Preview</span>
                            </a>
                        </div>
                        {
                            drawMore && (
                                <Link to="/projects">
                                    <img src={More} alt="link-chain" className="w-6"/>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
