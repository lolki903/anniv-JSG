  import { supabase } from './../lib/supabaseClient';

  export default function Page({ countries }) {
    return (
      <ul>
        {countries.map((country) => (
          <li key={country.id}>{country.continent}</li>
        ))}
      </ul>
    );
  }

  export async function getServerSideProps() {
    let { data } = await supabase.from('countries').select()

    return {
      props: {
       countries: data
      },
    }
  }

