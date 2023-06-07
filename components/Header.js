import React, { useEffect, useState } from "react";

const Header = () => {
    const date = new Date();
    // const formatfrday = date.toLocaleDateString('fr-FR', { weekday: 'long' });
    const [formatfrday, setFormatfrday] = useState(date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }));
    useEffect(() => {
        setFormatfrday(date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }));
    }, [date]);
  return (
    <header className="flex bg-white border-solid border-b-4 justify-between py-5 px-6 font-bold">
      <p className="text-3xl">CITATION ET ANNIVERSAIRES</p>
        <p className="text-3xl uppercase">{formatfrday}</p>
    </header>
  );
};

export default Header;
