module.exports = {
	name: "킥",
	description: "멘션한 유저를 서버에서 킥합니다",
	aliases: ["킥", "kick"],
	category: "moderation",
	execute(client, message, args) {
		const user = message.mentions.members.first()

		if (!user) return message.reply("서버에서 킥하실 유저를 멘션해주세요")
		if (!message.member.hasPermission("KICK_MEMBERS"))
			return message.reply("권한이 부족합니다")
		if (!message.guild.me.hasPermission("BAN_MEMBERS"))
			return message.reply("봇의 권한이 부족합니다.")

		user
			.ban()
			.then(() => {
				return message.reply("성공적으로 해당유저를 서버에서 벤했어요!")
			})
			.catch((err) => {
				return message.reply(
					`해당유저를 벤하지 못했습니다.
          \`\`\`${err}\`\`\``
				)
			})
	},
}
