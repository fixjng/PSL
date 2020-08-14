const Discord = require('discord.js')
const bot = new Discord.Client();

exports.run = (client, message, args) => {

  const validuser = new Discord.RichEmbed()
.setColor("#d1ae18")
.setDescription(`**You can only use commands in **<#733384173217120285>`)
if (message.channel.name != "🤖│bot-commands") return message.reply(validuser).then(msg => msg.delete(6000));
  

const voiceChannelCount = message.guild.channels.filter(c => c.type === 'voice').size;
let channelCat = message.guild.channels.filter((t) => t.type === "category").size;
let TextChannel = message.guild.channels.filter((t) => t.type === "text").size;  
  
  
const lol = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL ? message.guild.iconURL : client.user.displayAvatarURL)
.addField('🔨 Server Owner', message.guild.owner.user.tag, true)
.addField('🏳️ Region', message.guild.region, true)
   .addField("👦 Membercount", "" + message.guild.memberCount + "", true)
  .addField("👥 Humans", "" + message.guild.members.filter(m => !m.user.bot).size + "", true)
  .addField("🤖 Bots", "" + message.guild.members.filter(m => m.user.bot).size + "", true)
  .addField("🏆 Roles", "" + message.guild.roles.size + "", true)
  .addField('💬 Text Channels', TextChannel, true)
.addField('🔊 Voice Channels', voiceChannelCount, true)
.addField('📝 Categorys', channelCat, true)
.setColor("#d1ae18")
message.channel.send(lol);   

}



module.exports.config = {
name: "serverinfo",
aliases: []
}