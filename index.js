require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')

const bot = new TelegramBot(process.env.TG_BOT_TOKEN, { polling: true })

bot.on('pinned_message', (msg) => {
  console.log('pinned_message text', msg)
})
