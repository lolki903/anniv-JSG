import React from "react";
import Birthday from "./Birthday";
import Perso from "./Perso";

const Accueil = () => {
    return (
        <div className="flex ">
            <div className="grid grid-cols-2 gap-4">
                <Birthday />
                <Perso />
            </div>
        </div>
    );
    }

export default Accueil;