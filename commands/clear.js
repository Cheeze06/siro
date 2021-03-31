module.exports = {
	name: "청소",
	description: "적은 숫자만큼 메시지를 삭제합니다!",
	aliases: ["청소", "삭제", "clear"],
	category: "moderation",
	async execute(client, message, args, embed) {
		if (!message.member.hasPermission("MANAGE_MESSAGES"))
			return message.reply("권한이 부족해요..")

		if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
			return message.reply("봇의 권한이 부족합니다")

		if (!args[0]) return message.reply("1 ~ 100까지의 숫자를 입력해주세요!")
		if (isNaN(args[0]))
			return message.reply("1 ~ 100까지의 `숫자`만 입력해주세요!")

		if (args[0] > 100 || args[0] < 1)
			return message.reply("1 ~ 100 까지의 숫자만 입력가능해요!")

		await message.channel.messages
			.fetch({ limit: args[0] })
			.then((messages) => {
				message.channel.bulkDelete(messages)
				return message
					.reply(
						`성공적으로 ${args[0]}개의 메세지를 삭제했습니다! (이 메시지는 3초뒤에 삭제됩니다.)`
					)
					.then((message) => {
						message.delete({ timeout: 3000 })
					})
			})
	},
}
