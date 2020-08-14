const Discord = require('discord.js');
const fs = require("fs");




exports.run = (bot, message, args) => {

  
  
          const noperms = new Discord.RichEmbed()
          .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> You dont have permission to use this command!**")
          
  
    if(!message.member.hasPermissions("MANAGE_CHANNELS")) return message.reply(noperms)
  
  
  let channel = message.mentions.channels.first();
  let boticon = bot.user.displayAvatarURL;






let type = new Discord.RichEmbed()
 .setColor("#d1ae18")
.setDescription(`<:zynError:725707818304405515> **Please provide a valid channel.**`)

if(!args[0]) return message.reply(type)

let validuser = new Discord.RichEmbed()
 .setColor("#d1ae18")
.setDescription(`<:zynError:725707818304405515> **Please mention a valid channel.**`)
if (!channel) return message.reply(validuser);   




let announce = new Discord.RichEmbed()
 .setColor("#d1ae18")
.setDescription(`<:zynError:725707818304405515> **Please provide the announcement.**`)








  let announcement = args.slice(1).join(" ");

if(!announcement) return message.channel.send(announce)


const hey = new Discord.RichEmbed()
.setThumbnail(boticon)
  .setColor("#d1ae18")
.setDescription(`${announcement}`)

  
 const banmessage = new Discord.RichEmbed()
 .setColor("#d1ae18")
 .setDescription(`<:zynSuccess:725709845411528704> **Announcement was sent**`)
 

  channel.send(hey)
  return message.reply(banmessage).then(msg => message.delete(2000))

}

module.exports.config = {
    name: "announce",
   description: "Send an announcement using the bot.",    
    usage: "/announce [channel name] [announcement]",
  example: "/announce #giveaways big giveaway :tada:",
  aliases: []
  
}