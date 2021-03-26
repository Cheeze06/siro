module.exports = {
  name: "숫자뽑기",
  description: "0부터 자신이 말한수 중, 하나를 뽑습니다.",
  aliases: ["숫자뽑기", "random_count"],
  category: "bot",
  execute(client, message, args, embed) {
    let count = Math.floor(Math.random() * args[0] + 1)
    !count
      ? message.reply("숫자를 입력해주세요!")
      : message.reply(`${args}에서 ${count}를 뽑았습니다!`)
  },
}
