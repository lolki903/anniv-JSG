// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
  import { supabase } from './../../lib/supabaseClient';

import nodemailer from 'nodemailer';
import cron from 'node-cron';
import moment from 'moment-timezone';


const sendBirthdayEmails = async () => {
    
    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'node38-eu.n0c.com',
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
            subject: 'Joyeux anniversaire!', // Sujet
            text: `Joyeux anniversaire, ${student.firstname} ${student.lastname}!`, // Corps du courrier électronique
            html: `<p>Joyeux anniversaire, ${student.firstname} ${student.lastname}!</p>`, // Corps du courrier électronique en HTML
        });
    }

    console.log('Birthday emails sent!');
}

export default async function handler(req, res) {

   let { data } = await supabase.from('userdata').select().eq('birthdate', new Date().toLocaleDateString())

   // ce que tu a maintenant : , ca te retourne les donné dont la date birthdate est = a la date du jour (jour + mois + année)

   // ce que tu dois faire : ca te retourne la donnée dont la date birthdate est = a la date du jour (jour + mois) (année pas prise en compte)

   // le eq() c'est comme un where en sql 
   console.log(data)

  res.status(200).json(data)
}


// Planification de l'envoi d'e-mails à 8h du matin (heure française)
cron.schedule('0 8 * * *', () => {
    const franceTime = moment().tz('Europe/Paris');
    if (franceTime.hour() === 8 && franceTime.minute() === 0) {
        sendBirthdayEmails().then(r => console.log(r));
    }
});