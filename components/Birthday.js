import Image from "next/image";
import React, { useState } from "react";
import roundbirthday from "../assets/roundbirthday.svg";
import ombre from "../assets/ombre.svg";
import star from "../assets/star.svg"


const Birthday = ({color}) => {
    const [prenom ,setPrenom] = useState("Jules")
    const [nom ,setNom] = useState("Jules")

    return (
        <div className={`${color} w-full flex flex-col relative`}>
            <div className="w-full justify-center m-auto">
            <Image src={ombre} alt="ombre" width={150} height={150} className="absolute z-7 m-auto translate-x-246 w-3/10 mt-3"/>
                <div className={`flex flex-col justify-center items-center ${color} p-8re rounded-7xl w-1/12 absolute z-9 translate-x-267 `}>

                </div>
            <Image src={roundbirthday} alt="roundbirthday" width={150} height={150} className="relative m-auto animate-spin z-45 w-3/10"/>
            </div>
            <div>
                <div className="absolute top-8">
                    <Image src={star} alt={star}/>
                </div>
                <div className="absolute top-60 ml-84">
                    <Image src={star} alt={star}/>
                </div>
                <div className="absolute top-80">
                    <Image src={star} alt={star}/>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <h1 className="text-4xl uppercase">
                    {prenom} {nom}
                </h1>
            </div>
        </div>
    );
}

export default Birthday;
