module.exports = {
  name: "말해",
  description: "말을 따라합니다",
  aliases: ["말해", "say"],
  category: "bot",
  execute(client, message, args, embed) {
    let ctx =
      args[0] ||
      "할 말은 적어주셔야죠!!\n" +
        "_**적힌 내용이 없으면 출력되는 내용입니다.**_"
    embed.setTitle(`${message.member.displayName}님이 말하셨어요.`)
    embed.setDescription(ctx)
    message.channel.send({ embed })
  },
}
