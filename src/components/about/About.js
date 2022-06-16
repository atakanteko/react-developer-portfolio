import React from 'react';

import Experience from "./Experience";
import experience from "../../assets/static/experience";

const About = () => {
    return (
        <div className="px-small-l xl:px-wide-l pt-10">
            <div className="flex flex-col">
                <div>
                    <h2 className="text-[#42446E] font-bold text-3xl">About Me</h2>
                    <div className="mt-4">
                        <p className="font-light text-[16px] text-[#666666]">
                            The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.
                        </p>
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-[#42446E] font-bold text-2xl">Work Experience</h2>
                    {
                        experience.map((item, index) => {
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
