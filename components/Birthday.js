import Image from "next/image";
import React from "react";
import roundbirthday from "../assets/roundbirthday.svg";


const Birthday = () => {
    return (
        <div className="bg-red-600 w-full flex flex-col">
            <div className="w-full justify-center">
            <Image src={roundbirthday} alt="roundbirthday" width={150} height={150} className="relative z-5 box-sha "/>
            </div> 
        </div>
    );
}

export default Birthday;
