const Discord = require("discord.js");

exports.run = async(bot, message, args) => {

          const noperms = new Discord.RichEmbed()
      .setColor("#d1ae18")
  .setDescription("<:zynError:725707818304405515> **You don't have permission to use this command**")
          
               const yes = new Discord.RichEmbed()
        .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a user**")
               
                 const no = new Discord.RichEmbed()
         .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a nickname**")
                 

          
  
    if(!message.member.hasPermissions("MANAGE_NICKNAMES")) return message.reply(noperms)
  
  
  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!user) return message.channel.send(yes)
  
  let nick = args.slice(1).join(" ");
  if (!nick) return message.channel.send(no);
  
  let member = message.guild.members.get(user.id);
  
        const lmao = new Discord.RichEmbed()
       .setColor("#d1ae18")
  .setDescription(`<:zynSuccess:725709845411528704> **Successfully changed **${user}** nickname to** **${nick}**`)
  
  member.setNickname(nick) .then
  message.channel.send(lmao)
  
     
  
  }

  
  
module.exports.config = {
name: "setnick",
aliases: ["nickname","nick","changenick","changenickname"]
}
