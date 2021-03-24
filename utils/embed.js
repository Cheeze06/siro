const Discord = require("discord.js")

module.exports = (message) => {
  const embed = new Discord.MessageEmbed()
  embed.setFooter(`${message.author.tag}`, message.author.avatarURL())
  embed.setTimestamp(new Date())
  embed.setColor("#f4ff61")
  return embed
}