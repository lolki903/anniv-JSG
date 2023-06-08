//database route
import { supabase } from "../lib/supabaseClient";
// let fs = require("fs");
export default function handler(req, res) {
  let finput = "./data/user-data.csv";
  let fs = require("fs");
  try {
    const data = fs.readFileSync(finput, "utf8");
    data.split(/r?\n/).forEach((line) => {
      console.log(`line : ${line}`);
      data.split(/;/).forEach((value) => {
        console.log(`value: ${value}`);
      });
    });
  } catch (err) {
    console.error(err);
  }
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
