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
.setAuthor("Self Roles - Region", boticon)
  .setColor("#d1ae18")
.setThumbnail(boticon)
.setDescription(`:flag_eu: **|** <@&732951076524785694>\n:ocean: **|** <@&732951106770042952>\n:flag_us: **|** <@&732950982895599656>\n:flag_white:  **|** <@&732951042018246716>\n:earth_asia:  **|** <@&733403396345823413>`)

  
 const banmessage = new Discord.RichEmbed()
 .setColor("#d1ae18")
 .setDescription(`<:zynSuccess:725709845411528704> **Self roles was sent**`)
 

  channel.send(hey)
  return message.reply(banmessage).then(msg => message.delete(2000))

}

module.exports.config = {
    name: "selfroles",
   description: "Send an announcement using the bot.",    
    usage: "/announce [channel name] [announcement]",
  example: "/announce #giveaways big giveaway :tada:",
  aliases: []
  
}