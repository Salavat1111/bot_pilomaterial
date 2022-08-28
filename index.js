const { Telegraf, Scenes, Markup, session } = require('telegraf');
const advanseScene = require('./scence/advense.js')

require('dotenv').config()

const bot = new Telegraf(process.env.token);
bot.start((ctx) =>
    bot.hears(ctx.replyWithSticker
        ('https://tlgrm.ru/_/stickers/b93/f0a/b93f0a6a-0c6b-3fab-b9d9-c11cf6394f3b/6.webp')
        + ctx.reply(`Привет ${ctx.message.from.first_name}`)
        + ctx.replyWithHTML(
            '<b>В меню можно ознакомиться с цена на товар и узнать о его наличие!</b>'
        )
    ))

const stage = new Scenes.Stage([advanseScene])

bot.use(session())
bot.use(stage.middleware())


bot.hears('Получить прайс-лист', ctx => ctx.scene.enter('advanseWizard'))

bot.command('menu', async (ctx) => {
    try {
        await ctx.reply('Хотите получить прайс-лист?', Markup.keyboard([
            ['Получить прайс-лист']
        ]).oneTime().resize())
    } catch (e) {
        console.log(e)
    }

})
bot.help((ctx) => ctx.reply(text.commands))


bot.hears('Привет', (ctx) =>
    ctx.replyWithSticker('https://tlgrm.ru/_/stickers/b93/f0a/b93f0a6a-0c6b-3fab-b9d9-c11cf6394f3b/6.webp') + ctx.reply(`Привет ${ctx.message.from.first_name}`))




// bot.command('/video', (ctx) => { ctx.replyWithSticker('https://t.me/72') })

bot.command('/foto', (ctx) => { ctx.replyWithSticker('./page/re.jpeg') })

bot.on('sticker', (ctx) =>
    ctx.replyWithSticker('https://tlgrm.ru/_/stickers/b93/f0a/b93f0a6a-0c6b-3fab-b9d9-c11cf6394f3b/6.webp'))


// bot.command('menu', async (ctx) => {
//     try {

//         await ctx.telegram.sendPhoto(ctx.chat.id,
//             { source: './page/re.jpeg' },
//         )

//         await ctx.replyWithHTML('<b>1</b>', Markup.inlineKeyboard(
//             [
//                 [Markup.button.callback('Прайс-лист', 'btn_1'), Markup.button.callback('Услуги', 'btn_2')],

//                 // [Markup.button.callback('?', 'btn_3')],
//                 // [Markup.button.callback('Видео', 'btn_4',)],
//                 // [Markup.button.callback('Фото', 'btn_5')],
//             ]

//         ))

//     } catch (e) {
//         console.error(e)
//     }
// })








// addActionBot('btn_1', text,)
// addActionBot('btn_2', './page/re.jpeg', text.text2)
// addActionBot('btn_3', false, text.text3)
// addActionBot('btn_4', false, text.text4)
// addActionBot('btn_5', false, text.text5)



// bot.command('photo', (ctx) => {
//     ctx.telegram.sendChatAction(ctx.chat.id, 'upload_photo')
//     ctx.telegram.sendMediaGroup(ctx.chat.id, [
//         {
//             type: "photo",
//             media: {
//                 source: './page/r0PnELaxA6rRp4GntSKOJRezA65bsQmo.webp'
//             }
//         },
//         {
//             type: "photo",
//             media: {
//                 source: './page/r0PnELaxA6rRp4GntSKOJRezA65bsQmo.webp'
//             }
//         },
//         {
//             type: "photo",
//             media: {
//                 source: './page/r0PnELaxA6rRp4GntSKOJRezA65bsQmo.webp'
//             }
//         },
//     ]
//     )
// })



bot.launch()


