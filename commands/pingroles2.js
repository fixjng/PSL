const Discord = require('discord.js');
const fs = require("fs");




exports.run = (bot, message, args) => {

  
  
 const noperms = new Discord.RichEmbed()
          .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> You dont have permission to use this command!**")
          
  
    if(!message.member.hasPermissions("ADMINISTRATOR")) return message.reply(noperms)
  
  
  let channel = message.mentions.channels.first();
  let boticon = bot.user.displayAvatarURL;





const hey = new Discord.RichEmbed()
.setAuthor("Self Roles - Extra Pings", boticon)
  .setColor("#d1ae18")
.setThumbnail(boticon)
.setDescription(`:ballot_box: **|** <@&735948652039897158>\n:handshake: **|** <@&735977791425740810>\n:shirt: **|** <@&735977870639366206>\n:crossed_swords: **|** <@&736237863024197805>`)
  
 const banmessage = new Discord.RichEmbed()
 .setColor("#d1ae18")
 .setDescription(`<:zynSuccess:725709845411528704> **Self roles was sent**`)
 

  channel.send(hey)
  return message.reply(banmessage).then(msg => message.delete(2000))

}

module.exports.config = {
    name: "extrapings",
   description: "Send an announcement using the bot.",    
    usage: "/announce [channel name] [announcement]",
  example: "/announce #giveaways big giveaway :tada:",
  aliases: []
  
}