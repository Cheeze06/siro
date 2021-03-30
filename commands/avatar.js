module.exports = {
	name: "프로필",
	description: "멘션한 유저의 프로필을 보여줍니다",
	aliases: ["avatar", "프로필", "profile"],
	category: "bot",
	execute(client, message, args, embed) {
		const user = message.mentions.users.first() || message.author

		if (!user) {
			embed.setImage(user.displayAvatarURL({ size: 2048, dynamic: true }))
			message.reply(embed)
		} else {
			embed.setImage(user.displayAvatarURL({ size: 2048, dynamic: true }))
			message.reply(embed)
		}
	},
}
