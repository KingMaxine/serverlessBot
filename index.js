const { Telegraf, session, Extra, Markup, Scenes} = require('telegraf');
const { BaseScene, Stage } = Scenes
const mongo = require('mongodb').MongoClient;
const bot = new Telegraf('1724870296:AAFVeLCTVWNUou6MCQkB2KZQ_qIG7IDzZKE')
const {enter, leave} = Stage
const stage = new Stage();
const Scene = BaseScene
bot.use(session())
bot.use(stage.middleware())

let db 

mongo.connect('mongodb+srv://venom:venom123@cluster0.ttfek.gcp.mongodb.net/venomm?retryWrites=true&w=majority', {useUnifiedTopology: true}, (err, client) => {
  if (err) {
    console.log(err)
  }

  db = client.db('testbotttt6')
  bot.telegram.deleteWebhook().then(success => {
  success && console.log('🤖 is listening to your commands')
})

})


bot.start(async(ctx)=> {
let dbData = await db.collection('allUsers').find({userId: ctx.from.id}).toArray()
if(dbData.length===0){
db.collection('allUsers').insertOne({userId: ctx.from.id, account:'level1',first_name:ctx.from.first_name, joined: new Date().toLocaleString('en-US', {timeZone: 'Africa/Accra'}) })
}
ctx.reply('hello')
})

bot.launch()