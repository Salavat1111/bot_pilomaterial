const { Markup, Composer, Scenes } = require('telegraf')

const startStep = new Composer()
startStep.on('text', async (ctx) => {
    try {
        // ctx.wizard.state.data = {}
        // ctx.wizard.state.data.userName = ctx.message.from.username
        // ctx.wizard.state.data.firstName = ctx.message.from.first_name
        // ctx.wizard.state.data.lastName = ctx.message.from.last_name
        await ctx.telegram.sendPhoto(ctx.chat.id,
            { source: './page/mainprise.png' },
        )
        return ctx.wizard.next()
    } catch (e) {
        console.log(e)
    }
})


const advanseScene = new Scenes.WizardScene('advanseWizard', startStep)
module.exports = advanseScene