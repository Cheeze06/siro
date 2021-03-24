const Discord = require("discord.js")

module.exports.Permissionless = (message) => {
  const embed = new Discord.MessageEmbed()
    .setDescription(
      `${message.member.displayName}님의 권한이 부족하여 명령어를 실행할 수 없습니다.`
    )
    .setFooter(`${message.author.tag}`, message.author.avatarURL())
    .setTimestamp(new Date())
    .setColor("#FFB0CF")
  return embed
}
