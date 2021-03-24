module.exports = {
  name: "핑",
  description: "봇의 핑을 확인합니다.",
  aliases: ["ping", "핑", "지연시간"],
  category: "bot",
  execute(client, message, args, embed) {
    message.channel.send("핑을 측정하고 있어요!").then((msg) => {
      embed.addField(
        "봇 지연시간",
        `${msg.createdTimestamp - message.createdTimestamp}ms`
      )
      embed.addField("API 지연시간", `${client.ws.ping}ms`)

      msg.edit({ content: "현재 봇의 핑이에요!", embed })
    })
  },
}
