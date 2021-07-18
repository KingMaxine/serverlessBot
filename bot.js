const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('New Home Page Route'));

app.get('/about', (req, res) => res.send('About Page Route'));

app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));


module.exports= app


//TAikfFKDvjwajv478uNnzyZoE6ir9ZpfgE

/*"<b>New Withdrawal Success\n\nAmount</b> : " +
            value +
            "\n\n <b>Request:</b> ✅Approved\n<b>Status:</b> ✅Done\n<b> Name:</b>" +
            user.first_name +
            "\n<b>Username:</b> @" +
            user.username +
            "\n<b>User Id:</b>" +
            user.telegramid +
            "\n<b>Total Invited:</b> " +
            refList.length +
            "\n\n <b>Payment Method:</b> " +
            method +
            "\n\n<b>Bot:</b> @" +
            bot.name + "\n<b>Invite Your Friends to earn</b>"*/
