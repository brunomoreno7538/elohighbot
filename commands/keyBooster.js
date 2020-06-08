const Discord = require("discord.js");
const keyBooster = require("../workers/keyBooster");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
  if (message.member.roles.cache.has(config.admin)) {
    const key = args.join(" ");
    if (key.length > 0) {
      keyBooster.writeKey(key);
      message.channel.send("Key criada com sucesso!!");
    } else {
      message.channel.send("Key inválida!");
    }
  } else {
    message.channel.send("Usuário sem permissão!");
  }
};
