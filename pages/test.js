  import { supabase } from './../lib/supabaseClient';

  export default function Page({ countries }) {
    let date = "2021-10-28"; // date de test
    let datePropre = date.split("-").reverse().join("/"); // date au bon format

    let date2 = new Date();
    return (
      <>
      <div>
        {date}
        date propre ======= {date2.toLocaleDateString()}
      </div>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>{country.continent}</li>
          ))}
      </ul>
          </>
    );
  }

  export async function getServerSideProps() {
    let { data } = await supabase.from('countries').select()
    console.log(supabase);
    return {
      props: {
       countries: data
      },
    }
  }

