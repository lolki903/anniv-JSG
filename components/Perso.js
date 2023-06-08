import React, { useEffect, useState } from "react";
import coeur from "../assets/coeur.svg";
import egg from "../assets/egg.svg";
import flower from "../assets/flower.svg";
import pen from "../assets/pen.svg";
import Image from "next/image";

const Perso = ({color}) => {
    const[icon, setIcon] = useState();
    const array = [coeur, egg, flower, pen];
    useEffect(() => {
        const interval = setInterval(() => {
            const random = Math.floor(Math.random() * array.length);
            setIcon(array[random]);
        }, 1000);
        return () => clearInterval(interval);
    }, [icon]);
    return (
        <div className="pt-8 px-5">
            <div className="mb-20">
            <div className="bg-white border-2 py-5 px-6 rounded-xl shadow-lg z-3 relative w-11/12">
                <p className="text-lg">I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.</p>
                <p className="text-lg text-right">-Michael Jordan</p>
            </div>
            <div className={`${color} border-2 p-5re rounded-xl  mt-first ml-3i mr-20 z-0`}>
            </div>
        </div>
        <div>
        <div className="bg-white border-2 py-5 px-6 rounded-xl shadow-lg z-3 relative py-20 flex justify-center w-11/12">
               <Image src={icon} alt="icon" width={150} height={150} />
            </div>
            <div className={`${color} border-2 p-7re rounded-xl  mt-3l ml-3i mr-20 z-0`}>
            </div>
        </div>
    </div>
    );
    }


export default Perso;