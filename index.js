const dotenv = require('dotenv').config();
const { Client, GatewayIntentBits, ActivityType, Partials } = require('discord.js');
const prefix = "&"
const figlet = require('figlet');
const colors = require("colors");
const token = dotenv.parsed.TOKEN;
const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Channel],
});

figlet('A bot fut, by: DreamCloud!', function (err, data) {
    console.log(data.blue);
});

client.on('ready', () => {
    setInterval(()=>{
        client.user.setPresence({
            activities: [{ name: `DreamCloud.hu`, type: ActivityType.Watching }],
            status: 'dnd',
          });
    },30000)
    client.user.setPresence({
        activities: [{ name: `DreamCloud.hu`, type: ActivityType.Watching }],
        status: 'dnd',
    });
    console.log(`Sikeresen bejeletkezett ${client.user.tag} néven.`)
});

client.on("messageCreate", message => {
    if (message.content.startsWith(`${prefix}ping`)){
        message.reply("Pong!")
    }
});


//ANTI CRASH
if (!token) {
    console.warn("[CRASH] Token nélkül a bot nem tud elindulni!".red + "\n")
    return process.exit();
};
client.login(token)
  .catch((err) => {
    console.error("[CRASH] Nem sikerült kapcsolódni a Discord API-hoz." + "\n");
    console.error("[CRASH] Discord hiba:" + err);
    process.exit();
});
process.on('unhandledRejection', async (err, promise) => {
    console.error(`[ANTI-CRASH] Váratlan hiba történt: ${err}`.red);
    console.error(promise);
});