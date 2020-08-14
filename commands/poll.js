const Discord = require('discord.js');

module.exports.run = async (client, message, args, tools) => {

     
        
  const nomention = new Discord.RichEmbed()
.setColor("#d1ae18")
 .setDescription("**<:zynError:725707818304405515> Please provide a poll to be voted on**")
        
 const lol = new Discord.RichEmbed()
.setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> You dont have permission to use this command!**")
          
  
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(lol);
  
  if(!args[0]) return message.channel.send(nomention)
  
  let member = message.author;
  
    const embed = new Discord.RichEmbed()
        .setColor("#d1ae18")
        .setTitle(args.join(' '))
        .setFooter(`Poll by ${message.author.tag}`)


    let msg = await message.channel.send(embed);

    await msg.react("725709845411528704"); 
    await msg.react("725707818304405515");

    message.delete({timeout: 1000}); 

} 

module.exports.config = {
name: "poll",
aliases: []
}