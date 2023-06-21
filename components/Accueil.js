import React, { useEffect, useState } from "react";
import Birthday from "./Birthday";
import Perso from "./Perso";
import axios from "axios";

const Accueil = () => {
    const color = ["bg-blues", "bg-yellows", "bg-greens", "bg-rose"];
    const [colors, setColors] = useState();
    const [personData, setPersonData] = useState([]);
    const [personIndex, setPersonIndex] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:3000/api/birthday").then((res) => {
            setPersonData(res.data);
        });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomColor = Math.floor(Math.random() * color.length);
            setColors(color[randomColor]);

            // Incrémente l'indice et boucle s'il dépasse la fin du tableau
            setPersonIndex((prevIndex) => (prevIndex + 1) % personData.length);

        }, 2000);
        return () => clearInterval(interval);
    }, [color, personData]);

    // Utilise l'indice pour accéder à la personne dans le tableau
    const prenom = personData[personIndex] ? personData[personIndex].firstname : "Jules";
    const nom = personData[personIndex] ? personData[personIndex].lastname : "Gaborit";

    return (
        <div className="flex flex-1">
            <div className="grid grid-cols-2 gap-4">
                <Birthday color={colors} prenom={prenom} nom={nom} />
                <Perso color={colors} />
            </div>
        </div>
    );
};

export default Accueil;