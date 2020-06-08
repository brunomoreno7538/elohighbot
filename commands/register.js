const Discord = require("discord.js");
const keyAdmin = require("../workers/keyAdmin");
const keyBooster = require("../workers/keyBooster");
const keyCliente = require("../workers/keyCliente");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
  const key = args.join(" ");
  if (key.length > 0) {
    if (keyAdmin.selectErase(key)) {
      message.channel.send("Adicionado Admin!");
      message.member.roles.add(config.admin);
    }
    if (keyBooster.selectErase(key)) {
      message.channel.send("Adicionado Booster!");
      message.member.roles.add(config.booster);
    } else if (keyCliente.selectErase(key)) {
      message.channel.send("Adicionado Cliente!");
      message.member.roles.add(config.cliente);
    } else {
      message.channel.send("Key inválida!");
    }
  } else {
    message.channel.send("Key inválida!");
  }
};
