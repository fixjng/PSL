const Discord = module.require('discord.js');

exports.run = async(bot, message, args) => {

  
  
          const noperms = new Discord.RichEmbed()
           .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> | You don't have permission to use this command!**")

            let msg = new Discord.RichEmbed()
    .setColor("#d1ae18")
  .setDescription("<:ZynGun:729676309239824394> **PSL restarted!**");
  
          
          
  if (message.author.id !== '627829503602982913') return message.reply(noperms)
  message.channel.send(msg).then(() => {
  process.exit(1);
})
};
  

module.exports.config = {
name: "restart",
aliases: []
}