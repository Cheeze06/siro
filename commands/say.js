module.exports = {
  name: '말해',
  description: "말을 따라합니다",
  aliases: ['말해', 'say'],
  category: "bot",
  execute(client, message, args, embed) {
    message.channel.send(args[0])
  }
}