const Discord = require("discord.js");
const colors = require('../colours.json')
const db = require('quick.db')

module.exports.run = async(bot, message, args) => {

  const validuser = new Discord.RichEmbed()
.setColor("#d1ae18")
.setDescription(`**You can only use commands in **<#733384173217120285>`)
if (message.channel.name != "🤖│bot-commands") return message.reply(validuser).then(msg => msg.delete(6000)); 
  
  
  const noperms = new Discord.RichEmbed()
         .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a user.**")
        
 const user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author || message.guild.members.get(args[0])
    if(!user) return message.channel.send(noperms);    
             
  

let bal = db.get(`money_${message.guild.id}_${user.id}`)
if(bal === null) bal = 0;

          const hx = new Discord.RichEmbed()
       .setColor("#d1ae18")
          .setAuthor("Points", user.user.displayAvatarURL)
          .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")
 .addField(`${user.user.username}'s balance`, `${bal} Points`)
  
          
message.channel.send(hx)
    
};


module.exports.config = {
name: "points",
aliases: ["points", "bal", "balance"]
}