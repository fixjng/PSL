const Discord = require('discord.js')
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
  
   const validuser = new Discord.RichEmbed()
.setColor("#d1ae18")
.setDescription(`**You can only use commands in **<#733384173217120285>`)
if (message.channel.name != "🤖│bot-commands") return message.reply(validuser).then(msg => msg.delete(6000));
  
  
let mentionedUser = message.mentions.users.first() || message.author;
      

   let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));     
   if(!user) user = message.author;
  
  const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author || message.guild.members.get(args[0])
  
   const embed = new Discord.RichEmbed()
   .setAuthor(member.user.tag, member.user.displayAvatarURL)
.setDescription("**Avatar**")
  .setImage(member.user.displayAvatarURL)
.setColor("#d1ae18")
    message.channel.send({embed});

}



module.exports.config = {
name: "avatar",
aliases: ["av"]
}