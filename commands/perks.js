const Discord = module.require('discord.js');
const db = require('quick.db')

exports.run = async(bot, message, args) => {
  
          const noperms = new Discord.RichEmbed()
 .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> You have already claimed your booster perks!**")
   
  const he = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> You don't have permission to use this command!**")  
          
          if(!message.member.roles.some(r=>["[Server Booster]"].includes(r.name)))  return message.reply(he)
          
          
let points = 50


const nitro = db.get(`nitrozz_${message.guild.id}_${message.author.id}`)
if(nitro === true) {
return message.reply(noperms)
 } else {  
db.add(`money_${message.guild.id}_${message.author.id}`, points)
   
const bal = db.get(`money_${message.guild.id}_${message.author.id}`)
if(bal === null) bal = 0;
  
const yes = new Discord.RichEmbed()
.setAuthor("Transaction Successful", message.author.displayAvatarURL)          
.setColor("#d1ae18")
 .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")
  .setDescription(`<:zynSuccess:725709845411528704> **You have been awarded 50 points and <@&732944649164947537> role for boosting the server!**`)
  .addField(`${message.author.username}'s balance`, `${bal} Points`)
            
message.channel.send(yes)
 
   const div6 = message.guild.roles.find("name", "[VIP]");
   message.member.addRole(div6)
   
 db.set(`nitrozz_${message.guild.id}_${message.author.id}`, true)  
 }

}

module.exports.config = {
name: "perks",
aliases: []
}