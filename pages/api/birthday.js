// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from "./../../lib/supabaseClient";

export default async function handler(req, res) {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Mois indexés à partir de 0

  let { data, error } = await supabase.rpc("get_birthdays_by_day_and_month", {
    day: day,
    month: month,
  });

  if (error) {
    console.log("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
    return;
  }

  console.log(data);
  res.status(200).json(data);
}
