const { Telegraf } = require('telegraf');
const { sum, mult, evenOdd } = require('./handlers.js');
require('dotenv').config()
console.log(process.env)

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});


const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));

bot.on('text',  (ctx) => {
if (ctx.message.text.startsWith('sum')) sum (ctx);
if (ctx.message.text.startsWith('mult')) mult (ctx);
if (ctx.message.text.startsWith('even or odd')) evenOdd (ctx);
});
bot.launch().then(() => console.log('Bot started!'))

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));


