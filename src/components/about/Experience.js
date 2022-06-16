import React from 'react';
import WorkPlace from "../../assets/icons/work.svg";
import Calendar from "../../assets/icons/calendar.svg";

const Experience = ({type, company, title, date}) => {
    return (
        <div className="border-b-2 pb-4">
            <div className="mt-2">
                <div className="flex flex-row justify-between items-center">
                    <h4 className="font-light text-[#666666] tracking-wider">{title}</h4>
                    <div className="bg-[#D7FFE0] text-center rounded leading-none rounded-xl px-2 py-2 flex">
                        <span className="text-[9px] text-[#018C0F] font-bold">{type}</span>
                    </div>
                </div>
            </div>
            <div className="mt-1">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center">
                        <img src={WorkPlace} alt="work place" className="w-5"/>
                        <span className="text-[#A7A7A7] text-[11px] ml-1 mt-1">{company}</span>
                    </div>
                    <div className="flex">
                        <img src={Calendar} alt="work place" className="w-4"/>
                        <span className="text-[#A7A7A7] text-[11px] ml-1 mt-1">{date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
