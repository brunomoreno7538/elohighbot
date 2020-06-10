const Discord = require("discord.js");
const crypto = require("crypto");
const keyBooster = require("../workers/keyBooster");
const config = require("../config.json");
const deleteM = require("../workers/deleteMessage");

module.exports.run = async (client, message, args) => {
  if (message.member.roles.cache.has(config.admin)) {
    const key = args.join(" ");
    if (key == "random") {
      for (var index = 0; index < 10; index++) {
        keyBooster.writeKey(crypto.randomBytes(10).toString("hex"));
      }
      message.channel
        .send("10 keys para Booster adicionadas no sistema!")
        .then((msg) => {
          deleteM.function(msg);
        });
    } else {
      if (key.length > 0) {
        keyBooster.writeKey(key);
        message.channel.send("Key criada com sucesso!").then((msg) => {
          deleteM.function(msg);
        });
      } else {
        message.channel.send("Key inválida!").then((msg) => {
          deleteM.function(msg);
        });
      }
    }
  } else {
    message.channel.send("Usuário sem permissão!").then((msg) => {
      deleteM.function(msg);
    });
  }
  deleteM.function(message);
};
