const { Intents } = require("discord.js")

module.exports = {
  token: "",
  prefix: "시로야 ",
  owners: [],
  bot: {
    presence: {
      activity: {
        name: "시로야 도움말",
      },
    },
    ws: { intents: new Intents(Intents.ALL) },
  },
}
