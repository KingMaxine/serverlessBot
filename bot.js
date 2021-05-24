const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
const { Telegraf } = require('telegraf');
const bot = new Telegraf('1806769124:AAEA3ocdTDN0to7wXWFulm4N3bVuwZBrpeY')
const url = 'https://serverless-bot.vercel.app'



bot.telegram.deleteWebhook().then(success => {
  success && console.log('🤖 is listening to your commands')
})



bot.telegram.setWebhook('https://serverless-bot.vercel.app/secretPath')

bot.start(async(ctx)=> {
ctx.reply('hello')
})



app.use(bodyParser.json());

app.use(bot.webhookCallback('/secretPath'))



app.get('/', (req, res) => res.send('Home Page Route'));

app.get('/about', (req, res) => res.send('About Page Route'));

app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
// Set the bot API endpoint


