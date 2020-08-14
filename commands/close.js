const Discord = require('discord.js');
const db = require('quick.db')
module.exports.run = async (bot, message, args) => {
  
 let modlog = bot.channels.find(chans => chans.name === '🔐│ticket-logs') 


  
   
           const ex = new Discord.RichEmbed()
           .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Logs channel not found!**")
  


if (!message.channel.name.startsWith('case-')) return message.reply("hi")

  
  const channel = message.channel

  let closeedticket = new Discord.RichEmbed()
          .setColor("#d1ae18")
          .setDescription(`**<:zynError:725707818304405515> Please provide a reason to close the ticket.**`)


 let reason = args.slice(0).join(' ')
 if(!reason) return message.channel.send(closeedticket)

    if (!modlog) return message.reply(ex)
  
    let channeldelete = message.guild.channels.get(message.channel)

  

  
    message.channel.send("**<:zynSuccess:725709845411528704>  Closing ticket..**")
 channel.delete()

  

  
  
    const embed = new Discord.RichEmbed()
   .setAuthor("Ticket Closed", bot.user.displayAvatarURL)
    .setColor("#d1ae18")
    .setTimestamp()
    .setThumbnail(message.guild.iconURL)
    .addField("**Closed by**", message.author)
    .addField("**Ticket**", message.channel.name)
    .addField("**Reason**", reason)
bot.channels.get(modlog.id).send(embed)

}     
module.exports.config = {
name: "close",
aliases: []
}