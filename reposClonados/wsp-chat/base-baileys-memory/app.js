const {
    createBot,
    createProvider,
    createFlow,
    addKeyword,
} = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flujoHola = addKeyword(['hola', 'buenas'])
    .addAnswer('Bienvenido al bot de prueba: arrech@ 🧪')
    .addAnswer('Como es tu email?', { capture: true }, (ctx, { fallBack }) => {
        if (!ctx.body.includes('@')) {
            return fallBack()
        }
        console.log('Capturando email', ctx)
    })
    .addAnswer('Gracias 🚀!!')


const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flujoHola])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
