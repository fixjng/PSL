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
.setAuthor("Self Roles - Pings", boticon)
  .setColor("#d1ae18")
.setThumbnail(boticon)
.setDescription(`:camera: **|** <@&732946204740026431>\n:performing_arts: **|** <@&732950583715037236>\n:tada: **|** <@&732950495580389427>\n:trophy: **|** <@&732950665587982443>\n<:zynError:733407610342080600> **|** <@&732961688126750870>\n:droplet: **|** <@&733406644842528799>\n`)
  
 const banmessage = new Discord.RichEmbed()
 .setColor("#d1ae18")
 .setDescription(`<:zynSuccess:725709845411528704> **Self roles was sent**`)
 

  channel.send(hey)
  return message.reply(banmessage).then(msg => message.delete(2000))

}

module.exports.config = {
    name: "pingroles",
   description: "Send an announcement using the bot.",    
    usage: "/announce [channel name] [announcement]",
  example: "/announce #giveaways big giveaway :tada:",
  aliases: []
  
}