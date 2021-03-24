const config = require("./config")
const utils = require("./utils")
const Discord = require("discord.js")
const client = new Discord.Client(config.client.bot)
client.commands = new Discord.Collection()
client.category = new Discord.Collection()
const fs = require("fs")

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"))

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  client.commands.set(command.name, command)
  if (!client.category.has(command.category))
    client.category.set(command.category, command.category)
}

client.on("ready", () => {
  console.log("Bot is ready.")
})

client.on("message", async (message) => {
  if (!message.content.startsWith(config.client.prefix)) return
  if (!message.guild) return
  if (message.author.bot) return

  const args = message.content.slice(config.client.prefix.length).split(/ +/)
  const commandName = args.shift().toLowerCase()
  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    )

  if (!command) return

  if (command.dev) {
    if (
      !config.client.owners.some((author) => author.includes(message.author.id))
    )
      return utils.output.Permissionless(message)
  }
  let embed = require("./utils/embed")(message)
  command.execute(client, message, args, embed)
})

client.login(config.client.token)
