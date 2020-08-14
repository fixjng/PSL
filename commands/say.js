const Discord = require("discord.js");

exports.run = (bot, message, args) => {
 const lol = new Discord.RichEmbed()
           .setColor("#ff9900")
  .setDescription("**<:zynError:725707818304405515> You dont have permission to use this command!**")
          
  
   if(!message.member.hasPermissions("ADMINISTRATOR")) return message.reply(lol)
  
  
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}

module.exports.config = {
name: "say",
aliases: []
}
