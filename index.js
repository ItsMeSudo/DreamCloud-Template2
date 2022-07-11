const dotenv = require('dotenv').config();
const { Client, Intents } = require('discord.js');
const prefix = "&"
const figlet = require('figlet');
const token = dotenv.parsed.TOKEN;
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

figlet('A bot fut, by: DreamCloud!', function (err, data) {
    console.log(data);
});

client.on('ready', () => {
    setInterval(()=>{
        client.user.setActivity(`DreamCloud.hu`, { type: "WATCHING"})
    },30000)
    client.user.setActivity(`DreamCloud.hu`, { type: "WATCHING"})
    console.log(`Sikeresen bejeletkezett ${client.user.tag} néven.`)
});

client.on("messageCreate", message => {
    if (message.content.startsWith(`${prefix}ping`)){
        message.reply("Pong!")
    }
});

client.login(token);