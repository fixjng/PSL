const Discord = require("discord.js")

  
module.exports.run = async (bot, message, args) => {
const yo = Math.floor(Math.round(bot.ping))

const hey = new Discord.RichEmbed()
 .setColor("#d1ae18")
.setDescription(`\`\`\`Peooooing! ${yo}ms \`\`\``)

message.channel.send(hey)



}
  module.exports.config = {
    name: "ping",
    aliases: []

 
}