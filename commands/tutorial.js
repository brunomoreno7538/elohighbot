module.exports.run = async (client, message, args) => {
  message.channel.send({
    embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL,
      },
      title: "Tutorial",
      description: "",
      fields: [
        {
          name: "Lembrando que...",
          value: "Para se cadastrar é necessário possuir uma key.",
        },
        {
          name: "Tutorial",
          value: "Com uma key em mãos use o seguinte comando: .register KEY",
        },
      ],
      timestamp: new Date(),
      footer: {
        text: "© EloHigh",
      },
    },
  });
};
