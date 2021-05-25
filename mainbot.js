const { Telegraf } = require('telegraf');
const bot = new Telegraf('1806769124:AAEA3ocdTDN0to7wXWFulm4N3bVuwZBrpeY')
const app = require('./bot')
const url = 'link'

bot.telegram.deleteWebhook().then(success => {
    success && console.log('🤖 is listening to your commands')
bot.telegram.setWebhook(url+'/secretPath')
    // bot.startPolling()
  })



app.use(bot.webhookCallback('/secretPath'))

bot.start(async(ctx)=> {
    ctx.reply('hello')
    })

