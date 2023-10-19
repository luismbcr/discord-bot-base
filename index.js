import { Client, GatewayIntentBits, Partials } from "discord.js";
import dotenv from "dotenv";
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

dotenv.config();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.setMaxListeners(0);

client.once("ready", () => {
  console.log("¡Bot online!");
});

client.on("messageCreate", (message) => {
  if (message.content === "!pong") {
    message.reply("Hi, I'm awake");
  }
});

const TOKEN = process.env.DISCORD_TOKEN;
client.login(TOKEN).then(() => {
  console.log("Logged inn");
});

/*
send something automatic:
client.channels.cache
        .get("channelID")
        .send("hello world");
*/
