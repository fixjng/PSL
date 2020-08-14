const Discord = require('discord.js');
const db = require('quick.db')
module.exports.run = async (bot, message, args) => {


        const usern = new Discord.RichEmbed()
         .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a valid user!**")   
        

        const lol = new Discord.RichEmbed()
         .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a valid logs type!**")           
        
   const ex = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide what logs you want to check!\n\nAvailable Logs```\nStaff\nHost```**")

   

   

 

  
  
   if(!args[0]) return message.reply(ex)
  
  
  if (args[0].toLowerCase() == 'staff') {
 
   const user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!user) return message.reply(usern);     
  
       const bruh = new Discord.RichEmbed()
   .setColor("#d1ae18")
  .setDescription(`**${user} hasn't claimed any tickets.**`)
    
  const claimed = db.get(`dealt_${message.guild.id}_${user.id}`)
if(claimed === null) return message.reply(bruh)
  
   const lol = new Discord.RichEmbed()
   .setColor("#d1ae18")
  .setDescription(`**${user} has claimed ${claimed} tickets.**`)

message.channel.send(lol)} else if (args[0].toLowerCase() == 'host') {
 
   const user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!user) return message.reply(usern);   
    
         const bruh = new Discord.RichEmbed()
   .setColor("#d1ae18")
  .setDescription(`**${user} hasn't hosted any scrims.**`)
  
  const hosted = db.get(`host_${message.guild.id}_${user.id}`)
if(hosted === null) return message.reply(bruh)
  
   const lol = new Discord.RichEmbed()
   .setColor("#d1ae18")
  .setDescription(`**${user} has hosted ${hosted} times.**`)

message.channel.send(lol) } else message.reply(lol)
  
  
}     
module.exports.config = {
name: "logs",
aliases: []
}