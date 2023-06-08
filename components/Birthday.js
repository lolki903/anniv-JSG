import Image from "next/image";
import React from "react";
import roundbirthday from "../assets/roundbirthday.svg";
import ombre from "../assets/ombre.svg";


const Birthday = ({color}) => {
    return (
        <div className={`${color} w-full flex flex-col`}>
            <div className="w-full justify-center">
            <Image src={ombre} alt="ombre" width={150} height={150} className="absolute z-7 left-4/12 -translate-x-50% "/>
                <div className={`flex flex-col justify-center items-center ${color} p-4.7re rounded-7xl w-1/12 absolute z-9 left-4/12 -translate-x-50% `}>

                </div>
            <Image src={roundbirthday} alt="roundbirthday" width={150} height={150} className="relative m-auto animate-spin z-45 "/>
            </div> 
        </div>
    );
}

export default Birthday;
