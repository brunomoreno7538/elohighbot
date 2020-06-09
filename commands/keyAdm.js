const Discord = require("discord.js");
const crypto = require("crypto");
const keyAdmin = require("../workers/keyAdmin");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
  if (message.member.roles.cache.has(config.admin)) {
    const key = args.join(" ");
    if (key == "random") {
      for (var index = 0; index < 10; index++) {
        keyAdmin.writeKey(crypto.randomBytes(10).toString("hex"));
      }
      message.channel.send(
        "10 keys para Administrador adicionadas no sistema!"
      );
    } else {
      if (key.length > 0) {
        keyAdmin.writeKey(key);
        message.channel.send("Key criada com sucesso!");
      } else {
        message.channel.send("Key inválida!");
      }
    }
  } else {
    message.channel.send("Usuário sem permissão!");
  }
};
