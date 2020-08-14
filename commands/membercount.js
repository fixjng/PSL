const Discord = require('discord.js')
const bot = new Discord.Client();

exports.run = (client, message, args) => {

  const validuser = new Discord.RichEmbed()
.setColor("#d1ae18")
.setDescription(`**You can only use commands in **<#733384173217120285>`)
if (message.channel.name != "🤖│bot-commands") return message.reply(validuser).then(msg => msg.delete(6000));

  
const lol = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL ? message.guild.iconURL : client.user.displayAvatarURL)
 .setColor("#d1ae18")
   .addField("👦 Membercount", "" + message.guild.memberCount + "", true)
  .addField("👥 Humans", "" + message.guild.members.filter(m => !m.user.bot).size + "", true)
  .addField("🤖 Bots", "" + message.guild.members.filter(m => m.user.bot).size + "", true)
message.channel.send(lol);   

}



module.exports.config = {
name: "membercount",
aliases: ["memberscount", "servermembers"]
}