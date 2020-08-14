const db = require('quick.db')
const Discord = require('discord.js')


exports.run = async (client, message, args, config) => {
  
  
      const validuser = new Discord.RichEmbed()
.setColor("#d1ae18")
.setDescription(`**You can only update user points in **<#732948903854604329>`)
//if (message.channel.name != "📖│points") return message.reply(validuser).then(msg => msg.delete(6000));
  
  const he = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> You don't have permission to run this command!**")
    
           const noperms = new Discord.RichEmbed()
         .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a user.**")
 
              
          const ex = new Discord.RichEmbed()
       .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please make sure the given value is a number.**")
    
                    const exxx = new Discord.RichEmbed()
         .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a value over 0.**")
         
                           const aamount = new Discord.RichEmbed()
         .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide the amount of points to add.**") 
                           
                           const lol = new Discord.RichEmbed()
         .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> You cannot remove all of their points, instead use +reset.**")                           
                           
           
if(!message.member.roles.some(r=>["[Special Access]", "[Owner]", "[Executive]", "[Administrator]", "[Manager]"].includes(r.name)))  return message.reply(he)
 

let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!user) return message.reply(noperms);           
    
  if (!args[1]) return message.reply(aamount)
  if (args[1] < 1) return message.reply(exxx);
  if (isNaN(args[1])) return message.reply(ex) 
  db.subtract(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = db.get(`money_${message.guild.id}_${user.id}`)
if(bal === null) bal = 0;
  
  if (!args[1] == bal) return message.reply(lol)
  
   const lex = new Discord.RichEmbed()
          .setColor("#d1ae18")
           .setAuthor("Transaction Successful", message.author.displayAvatarURL)
                .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")
  .setDescription(`<:zynSuccess:725709845411528704> **${message.author} removed ${args[1]} points from ${user}'s balance!**`)
  .addField(`${user.user.username}'s balance`, `${bal} Points`)

               await message.channel.send(lex)
  
  
  const lmao = new Discord.RichEmbed()
          .setColor("#d1ae18")
           .setAuthor("Points Removed", message.author.displayAvatarURL)
            .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")
  .addField("Moderator", message.author)
  .addField("User", user)
  .addField("Points Removed", `${args[1]} Points`)
  .addField("New Balance", `${bal} Points`)
  
  let log = message.guild.channels.find(`name`, "🔐│points-logs")

    message.delete().catch(O_o=>{});
    log.send(lmao);
  

}

module.exports.config = {
name: "remove",
aliases: []
}