Tham khảo
*** Multi language với i18n *********************************************************
- Git : https://github.com/mashpie/i18n-node
- W3School : https://www.w3schools.com/tags/ref_language_codes.asp
{
    1. add module i18n vào dự án :
    - npm install i18n --save
    (Hoặc thêm vào file package.json -> dependencies -> "i18n": "^0.8.3", cmd npm install)
    2. Khai báo : var i18n = require("i18n");
    3. Cấu hình :
    - i18n.configure({
        locales:['vi', 'en'],
        register: global,
        fallbacks:{'vi': 'en'},
        cookie: 'language',
        defaultLocale: 'en',
        queryParameter: 'lang',
        autoReload: true,
        updateFiles: true,
        syncFiles: true,
        directory: __dirname + '/languages',
        api: {
        '__': '__',
        '__n': '__n'
        },
        preserveLegacyCase: true
    });
    - app.use(i18n.init);
    - app.use(function(req, res, next){
        if(req.query.lang) i18n.setLocale(req.query.lang);
        res.locals.clanguage = req.getLocale();
        res.locals.languages = i18n.getLocales();
        next();
    });
    4. Sử dụng :
    - __('wellcome')
    - __n('%d member', 1)
}

*** Send mail với nodemailer ********************************************************
- NodeMailer : https://nodemailer.com/about/
- W3School : https://www.w3schools.com/nodejs/nodejs_email.asp

{
    1. Add module nodemailer vào dự án : npm i nodemailer --save
    2. Cấu hình mail:
    let transporter = nodemailer.createTransport({
        // host: 'smtp.gmail.com',
        // port: 465,
        // secure: true, // secure:true for port 465, secure:false for port 587
        service: 'gmail',
        auth: {
            user: 'doihamhieu@gmail.com',
            pass: 'nhanviet1'
        }
    });
    3. Tạo option:
    let mailOptions = {
        from: '"NhanViet" <doihamhieu@gmail.com>', // sender address
        to: 'it007bk@gmail.com', // list of receivers
        subject: 'Demo mail localhost', // Subject line
        text: 'Nội dung test', // plain text body
        html: '<b>Nội dung html</b>' // html body
    };
    4. Send mail :
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}

*** Check Email exists với email-check **********************************************
- npm : https://www.npmjs.com/package/email-check

{
    1. Add module vào dự án : npm install email-check --save
    2. Khai báo : var emailCheck = require('email-check');
    3. Check mail :
    // Quick version 
    {
        emailCheck('mail@example.com')
        .then(function (res) {
            // Returns "true" if the email address exists, "false" if it doesn't. 
        })
        .catch(function (err) {
            if (err.message === 'refuse') {
            // The MX server is refusing requests from your IP address. 
            } else {
            // Decide what to do with other errors. 
            }
        });
    }
    // With custom options 
    {
        emailCheck('mail@example.com', {
        from: 'address@domain.com',
        host: 'mail.domain.com',
        timeout: 3000
        })
        .then(function (res) {
            console.log(res);
        })
        .catch(function (err) {
            console.error(err);
        });
    }
    
}



