// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from "./../../lib/supabaseClient";

import nodemailer from "nodemailer";
import cron from "node-cron";
import moment from "moment-timezone";

const sendMail = async () => {

  let studentsResults = null;
  
  await getData().then(
    (data) => {
      studentsResults = data;
    }
  ).catch((error) =>  {
    console.log("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" })
    return;
  });
  

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "node38-eu.n0c.com",
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  for (const student of studentsResults) {
    await transporter.sendMail({
      from: `"Mon école" <${process.env.MAIL_USER}>`, // Expéditeur
      to: student.email, // Destinataire
      subject: "Joyeux anniversaire!", // Sujet
      text: `Joyeux anniversaire, ${student.firstname} ${student.lastname}!`, // Corps du courrier électronique
      html: `<p>Joyeux anniversaire, ${student.firstname} ${student.lastname}! de la part de ta meilleure école digitale</p>`, // Corps du courrier électronique en HTML
    });
  }

  res.status(200).json({ message: "Birthday emails sent!" });

  // console.log("Birthday emails sent!");
};

export default async function handler(req, res) {

  getData().then(
    (data) =>{
      // console.log(data);
      res.status(200).json(data);
    }

  ).catch((error) =>  {
    console.log("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" })
    return;
  });
}

// Planification de l'envoi d'e-mails à 8h du matin (heure française)
cron.schedule('0 8 * * *', () => {
   const franceTime = moment().tz('Europe/Paris');
    if (franceTime.hour() === 8 && franceTime.minute() === 0) {
        sendMail().then(r => console.log(r));
    }
});


const getData = async () => {

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Mois indexés à partir de 0

  let { data, error } = await supabase.rpc("get_birthdays_by_day_and_month", {
    day: day,
    month: month,
  });

  return data;

}