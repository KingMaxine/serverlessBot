const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const { Telegraf, session, Extra, Markup, Scenes} = require('telegraf');
const { BaseScene, Stage } = Scenes
const bot = new Telegraf('1806769124:AAEA3ocdTDN0to7wXWFulm4N3bVuwZBrpeY')
const {enter, leave} = Stage
const stage = new Stage();
const Scene = BaseScene
bot.use(session())
bot.use(stage.middleware())
const url = 'https://serverless-bot.vercel.app/'



bot.telegram.deleteWebhook().then(success => {
  success && console.log('🤖 is listening to your commands')
})



//bot.telegram.setWebhook(url+'/secretpath')


app.use(bodyParser.json());

//app.use(bot.webhookCallback('/secret-path'))

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})



/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
});







bot.start(async(ctx)=> {
ctx.reply('hello')
})

bot.launch()

// Set the bot API endpoint


