module.exports = {
	name: "벤",
	description: "멘션한 유저를 서버에서 벤을 합니다!",
	aliases: ["벤", "ban"],
	category: "bot",
	execute(client, message, args) {
		const user = message.mentions.members.first()

		// 예외처리
		if (!user) return message.react("❌")
		if (!message.member.hasPermission("BAN_MEMBERS")) return message.react("❌")

		// 벤
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
