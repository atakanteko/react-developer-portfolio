import React from 'react';

import Experience from "./Experience";
import experience from "../../assets/static/experience";
import education from "../../assets/static/education";

const About = () => {
    return (
        <div className="px-small-l xl:px-wide-l h-screen flex items-center">
            <div className="flex flex-col">
                <div className="xl:w-3/4 lg:w-3/4 md:w-3/4">
                    <h2 className="text-[#42446E] font-bold text-3xl xl:text-5xl lg:text-4xl md:text-4xl">About Me</h2>
                    <div className="mt-4 xl:mt-6 lg:mt-6 md:mt-6">
                        <p className="font-light text-[16px] text-[#666666] xl:text-[22px] lg:text-[20px] md:text-[18px]">
                            The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.
                        </p>
                    </div>
                </div>
                <div className="mt-4 xl:mt-6 lg:mt-6 md:mt-6 xl:w-3/4 lg:w-3/4 md:w-3/4">
                    <h2 className="text-[#42446E] font-bold text-2xl xl:text-3xl lg:text-3xl md:text-3xl">Work Experience</h2>
                    {
                        experience.map((item, index) => {
                            return (
                                <Experience key={index} {...item} />
                            )
                        })
                    }
                </div>
                <div className="mt-1 xl:mt-6 lg:mt-6 md:mt-6 xl:w-3/4 lg:w-3/4 md:w-3/4">
                    <h2 className="text-[#42446E] font-bold text-2xl xl:text-3xl lg:text-3xl md:text-3xl">Education</h2>
                    {
                        education.map((item, index) => {
                            return (
                                <Experience key={index} {...item} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default About;
