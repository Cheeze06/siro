module.exports = {
  name: "도움말",
  description: "봇의 도움말을 확인합니다.",
  aliases: ["도움", "도움말", "help"],
  category: "bot",
  execute(client, message, args, embed) {
    if (!args[0]) {
      let reply = ""
      client.category.forEach((c) => {
        let matched = client.commands.filter(
          (command) => command.category === c
        )
        let mapped = matched.map((e) => `\`${e.name}\``).join(", ")
        embed.addField(`**${c.toUpperCase()}**`, `${mapped}\n\n`)
      })
      embed.setTitle("시로 봇의 도움말!")
      message.channel.send({ embed })
    } else {
      const command =
        client.commands.get(args[0]) ||
        client.commands.find(
          (cmd) => cmd.aliases && cmd.aliases.includes(args[0])
        )

      if (!command) {
        embed.setDescription(`${args[0]}과 관련된 명령어는 없는 것 같네요.`)
        return message.channel.send({ embed })
      } else {
        embed.setTitle(`${args[0]} 명령어의 도움말이에요!`)
        embed.addField(
          "카테고리",
          `\`${command.category.toUpperCase()}\``,
          true
        )
        embed.addField("명령어", `\`${args[0]}\``, true)
        embed.addField(
          "별칭",
          `${command.aliases.map((c) => `\`${c}\``).join(", ")}`,
          false
        )
        embed.addField("관리자용", `\`${command.dev ? "맞음" : "아님"}\``, true)
        embed.setDescription(`
\`\`\`fix

설명: ${command.description}
\`\`\`
`)
        return message.channel.send({ embed })
      }
    }
  },
}
