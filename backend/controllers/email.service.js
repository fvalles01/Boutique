const nodemailer = require('nodemailer');

sendEmail = (req, res, next)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASSWORD
        }
    });

    var mailOptions = {
        from: req.body.email,
        to: 'arnaud.lyard@gmail.com',
        subject: req.body.subject,
        text: req.body.message
    };
    transporter.sendMail(mailOptions, (err,infos)=>{
        if(err){
            console.log(err);
            res.render('contact',{
            title: "contact Page",
            error: "Désolé votre message n'a pas pu être envoyé, veuillez réessayer plus tard"});
            next();
        }else{
            console.log(infos);
            res.render('contact',{
                title: "contact Page",
                 success: "Votre message a bien été envoyé. Nous vous répondrons rapidemment."});
                 next();
        }
    })
}

module.exports = sendEmail;