const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");

client.on("ready", () => {
  console.log(`BOT: ${client.user.tag} online!`);
  client.user.setActivity("elojobhigh.com.br", { type: "WATCHING" });
});

client.on("message", async (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.channel.type === "dm") {
    return;
  }
  if (!message.content.startsWith(config.prefix)) {
    return;
  }
  if (
    message.content.startsWith(`<@!${client.user.id}`) ||
    message.content.startsWith(`<@${client.user.id}`)
  ) {
    return;
  }

  const args = message.content.split(" ").slice(1);
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  try {
    const commanndFile = require(`./commands/${command}.js`);
    delete require.cache[require.resolve(`./commands/${command}.js`)];
    return commanndFile.run(client, message, args);
  } catch (err) {
    throw err;
  }
});

client.login(config.token);

/* client.on('message', msg => {
    console.log()
  const key = msg.content;
  if(KeyController.selectErase(key)){
    msg.member.roles.add(config.admin);
  };
});
*/
