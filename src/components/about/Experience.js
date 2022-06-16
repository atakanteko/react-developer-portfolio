import React from 'react';
import WorkPlace from "../../assets/icons/work.svg";
import Calendar from "../../assets/icons/calendar.svg";

const Experience = ({type, company, title, date}) => {
    return (
        <div className="border-b-2 pb-4">
            <div className="mt-2 xl:mt-3 lg:mt-3 md:mt-3">
                <div className="flex flex-row justify-between items-center">
                    <h4 className="font-light text-[#666666] tracking-wider xl:text-[20px] lg:text-[20px] md:text-[20px]">{title}</h4>
                    <div className="bg-[#D7FFE0] text-center rounded leading-none rounded-xl px-2 py-2 flex">
                        <span className="text-[9px] text-[#018C0F] font-bold xl:text-[12px] lg:text-[12px] md:text-[12px]">{type}</span>
                    </div>
                </div>
            </div>
            <div className="mt-1 xl:mt-2 lg:mt-2 md:mt-2">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center">
                        <img src={WorkPlace} alt="work place" className="w-5 xl:w-6 lg:w-6 md:w-6"/>
                        <span className="text-[#A7A7A7] xl:text-[13px] lg:text-[13px] md:text-[13px] ml-1 mt-1 xl:ml-3 lg:ml-3 md:ml-3">{company}</span>
                    </div>
                    <div className="flex">
                        <img src={Calendar} alt="work place" className="w-4"/>
                        <span className="text-[#A7A7A7] text-[11px] xl:text-[13px] lg:text-[13px] md:text-[13px] ml-1 mt-1 xl:ml-3 lg:ml-3 md:ml-3">{date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
