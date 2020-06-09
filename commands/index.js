const lineByLine = require("n-readlines");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
  if (message.member.roles.cache.has(config.admin)) {
    const categoria = args.join(" ");
    var dataName;
    var baseName;
    if (categoria == "cliente1" || categoria == "Cliente1") {
      dataName = "./keys/keyCliente1.txt";
      baseName = "Cliente 1";
    } else if (categoria == "cliente2" || categoria == "Cliente2") {
      dataName = "./keys/keyCliente2.txt";
      baseName = "Cliente 2";
    } else if (categoria == "cliente3" || categoria == "Cliente3") {
      dataName = "./keys/keyCliente3.txt";
      baseName = "Cliente 3";
    } else if (categoria == "booster" || categoria == "Booster") {
      dataName = "./keys/keyBooster.txt";
      baseName = "Booster";
    } else if (categoria == "administrador" || categoria == "Administrador") {
      dataName = "./keys/keyAdmin.txt";
      baseName = "Administrador";
    } else {
      dataName == undefined;
      baseName == undefined;
    }

    if (dataName == undefined && baseName == undefined) {
      message.channel.send("Cargo inválido!");
    } else {
      const lineByLine = require("n-readlines");
      const liner = new lineByLine(dataName);
      var keys = [];
      let line;
      let lineNumber = 0;

      while ((line = liner.next())) {
        keys.push(line.toString("ascii"));
        lineNumber++;
      }

      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL,
          },
          title: `Keys - ${baseName}`,
          description: `Existem ${lineNumber} keys no sistema!`,
          fields: [
            {
              name: "Keys",
              value: keys,
            },
          ],
          timestamp: new Date(),
          footer: {
            text: "© EloHigh",
          },
        },
      });
    }
  } else {
    message.channel.send("Usuário sem permissão!");
  }
};
