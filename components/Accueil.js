import React, { useEffect,useState } from "react";
import Birthday from "./Birthday";
import Perso from "./Perso";

const Accueil = () => {
    const color =[ "bg-blues", "bg-yellows", "bg-greens", "bg-rose"]
    const [colors, setColors] = useState();
    useEffect(() => {
        const interval = setInterval(() => {
            const random = Math.floor(Math.random() * color.length);
            setColors(color[random]);
        }, 2000);
        return () => clearInterval(interval);
    }, [color]);
    return (
        <div className="flex flex-1">
            <div className="grid grid-cols-2 gap-4">
                <Birthday color={colors} />
                <Perso color={colors} />
            </div>
        </div>
    );
    }

export default Accueil;