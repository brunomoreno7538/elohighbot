const Discord = require("discord.js");
const keyAdmin = require("../workers/keyAdmin");
const keyBooster = require("../workers/keyBooster");
const keyCliente1 = require("../workers/keyCliente1");
const keyCliente2 = require("../workers/keyCliente2");
const keyCliente3 = require("../workers/keyCliente3");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
  const key = args.join(" ");
  if (key.length > 0) {
    if (keyAdmin.selectErase(key)) {
      message.channel.send("Adicionado Admin!");
      message.member.roles.add(config.admin);
    } else if (keyBooster.selectErase(key)) {
      message.channel.send("Adicionado Booster!");
      message.member.roles.add(config.booster);
    } else if (keyCliente1.selectErase(key)) {
      message.channel.send("Adicionado Cliente Lvl 1!");
      message.member.roles.add(config.cliente_lvl1);
    } else if (keyCliente2.selectErase(key)) {
      message.channel.send("Adicionado Cliente Lvl 2!");
      message.member.roles.add(config.cliente_lvl2);
    } else if (keyCliente3.selectErase(key)) {
      message.channel.send("Adicionado Cliente Lvl 3!");
      message.member.roles.add(config.cliente_lvl3);
    } else {
      message.channel.send("Key inválida!");
    }
  } else {
    message.channel.send("Key inválida!");
  }
};
