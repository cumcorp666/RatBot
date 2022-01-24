const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTM0OTE3MjU2NzkyNjYyMTI5.Ye3Diw.EQH3oMchx_vdi5MQl3b1cgAVDdU"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if(message.content == "hi") {
        message.reply("Hello Rat Gang!!")
    }
})

client.login(process.env.TOKEN)