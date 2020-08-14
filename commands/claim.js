const Discord = require('discord.js');
const db = require('quick.db')
module.exports.run = async (bot, message, args) => {
  
 let modlog = bot.channels.find(chans => chans.name === '🔐│ticket-logs') 


       const noperms = new Discord.RichEmbed()
      .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> You don't have permission to use this command!**")
  
   
           const ex = new Discord.RichEmbed()
           .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> This ticket is already being dealt with!**")
  


           
if (!message.channel.name.startsWith('case-')) return 

 if(!message.member.roles.some(r=>["[Special Access]", "[Owner]", "[Executive]", "[Administrator]", "[Manager]", "[Moderator]", "[Support Staff]"].includes(r.name)))  return message.reply(noperms)
   
  
const claimed = db.get(`claimed_${message.guild.id}_${message.channel.id}`)
const dealth = db.get(`dealt_${message.guild.id}_${message.author.id}`)
if(dealth === null) dealth = 0;  

if(claimed === true) {return message.reply(ex) } else {


db.set(`claimed_${message.guild.id}_${message.channel.id}`, true)
  
        const lol = new Discord.RichEmbed()
   .setColor("#d1ae18")
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
  .setDescription(`**<:zynSuccess:725709845411528704> This ticket is now being dealt with by ${message.author}**`)
  
        
  const channel = message.channel
db.add(`dealt_${message.guild.id}_${message.author.id}`, 1)
channel.send(lol)
  
}


}     
module.exports.config = {
name: "claim",
aliases: []
}