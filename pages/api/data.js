//database route
import { supabase } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  let finput = "./data/user-data.csv";
  let fs = require("fs");
  try {
        const data = fs.readFileSync(finput, "utf8");
        const rows = data.split(/\r?\n/);
        
        for (let i = 1; i < rows.length; i++) { // Commencez à 1 pour ignorer l'en-tête
            const values = rows[i].split(";"); 
            let id = values[0]; // les valeur dans lordre 
            let nom = values[1];
            let prenom = values[2];
            let birthday = values[3];
            let email = values[4];

            // Insérer dans Supabase
            const { error } = await supabase
                .from('userdata') // le nom de la table 
                .insert([
                    {id: id, firstname: nom, lastname: prenom, birthdate: birthday ,email: email } // les valeur dans lordre
                ]);

            if (error) {
                console.error("Erreur ta gran mere", error);
                return res.status(500).json({ error: error.message });
            }
        }
        
        res.status(200).json({ message: 'nickel' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
  // try {
  //   const data = fs.readFileSync(finput, "utf8");
  //   // const data = parseCSV(csvContent);
  //   data.split(/r?\n/).forEach((line) => {
  //     console.log(`line : ${line}`);
  //     data.split(/;/).forEach((value) => {
  //       console.log(`value: ${value}`);
  //     });
  //   });
  // } catch (err) {
  //   console.error(err);
  // }
}

export function Page({ userdata }) {
  return (
    <ul>
      {userdata.map((userdatas) => (
        <li key={userdatas.id}>{userdatas.firstname}</li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from("userdata").select();

  return {
    props: {
      userdata: data,
    },
  };
}
