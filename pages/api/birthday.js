// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
  import { supabase } from './../../lib/supabaseClient';


export default async function handler(req, res) {

   let { data } = await supabase.from('userdata').select().eq('birthdate', new Date().toLocaleDateString())

   // ce que tu a maintenant : , ca te retourne les donné dont la date birthdate est = a la date du jour (jour + mois + année)

   // ce que tu dois faire : ca te retourne la donnée dont la date birthdate est = a la date du jour (jour + mois) (année pas prise en compte)

   // le eq() c'est comme un where en sql 

  res.status(200).json(data)
}
