const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {
   
    const noperms = new Discord.RichEmbed()
        .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> You don't have permission to use this command**")
        
          const aamount = new Discord.RichEmbed()
          .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> There isn't any recent deleted messages.**")
  
  
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(noperms);
    const msg = bot.snipes.get(message.channel.id)
    if (!msg) return message.channel.send(aamount)

    const embed = new Discord.RichEmbed()
    .setAuthor(msg.author.tag, msg.author.displayAvatarURL)      
      .setColor("#d1ae18")
    .setDescription(msg.content)
    .setTimestamp(msg.createdAt)

    if (msg.image) {
      embed
        .setImage(msg.image)
    }

    message.channel.send(embed);
}
module.exports.config = {
    name: "snipe",
    aliases: []
}