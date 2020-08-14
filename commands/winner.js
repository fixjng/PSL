const Discord = require("discord.js");
const db = require('quick.db')

module.exports.run = async(bot, message, args) => {

     const he = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> You don't have permission to use this command!**")
     
      const exx = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a user!**")

     
   const ex = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide the game mode the user won!\n\nAvailable Gamemodes```\nSolo\nDuo\nsDuos\nBox\nKos```**")
   
      const lx = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a valid game mode the user won!\n\nAvailable Gamemodes```\nSolo\nDuo\nsDuo\nBox\nKos```**")
   
   
  
if(!message.member.roles.some(r=>["[Scrim Host]"].includes(r.name)))  return message.reply(he)
 
  const validuser = new Discord.RichEmbed()
.setColor("#d1ae18")
.setDescription(`**You can only update user points in **<#732949703762903110>`)
if (message.channel.name != "📖│points") return message.reply(validuser).then(msg => msg.delete(6000));
  
  
  if(!args[0]) return message.reply(ex)


  
  
  
   if (args[0].toLowerCase() == 'solo') {
     
 let user = message.mentions.members.first() || message.guild.members.get(args[1]);
    if(!user) return message.reply(exx);   
 let points = 15;   
     
 db.add(`money_${message.guild.id}_${user.id}`, points)    
 let bal = db.get(`money_${message.guild.id}_${user.id}`)
if(bal === null) bal = 0;
     

 user.send("You have been awarded 15 points for winning solos scrims!")
  
     
 const lol = new Discord.RichEmbed()
          .setColor("#d1ae18")
           .setAuthor("Transaction Successful", message.author.displayAvatarURL)
            .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")
  .setDescription(`<:zynSuccess:725709845411528704> **${user} has been awarded ${points} points for winning solo scrims!**`)
  .addField(`${user.user.username}'s balance`, `${bal} Points`)
                
  await message.channel.send(lol)
     
     
           const lmao = new Discord.RichEmbed()
          .setColor("#d1ae18")
           .setAuthor("Solo Winner", message.author.displayAvatarURL)
            .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")
  .addField("Host", message.author)
  .addField("Winner", user)
   .addField(`${user.user.username}'s balance`, `${bal} Points`)
  let log = message.guild.channels.find(`name`, "🔐│winner-logs")

    message.delete().catch(O_o=>{});
    log.send(lmao);
     
     
   }
  
  
   else if (args[0].toLowerCase() == 'duo') {
     
             const xd = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide the 2nd user!**")    
     
             let user = message.mentions.members.first() || message.guild.members.get(args[1]);
    if(!user) return message.reply(exx);   
    
     //let userx = message.mentions.members.map(m => m)[1] || message.guild.members.get(args[2]);
     const userx = message.mentions.members.map(m => m)[1] || message.guild.members.get(args[2])
     if(!userx) return message.reply(xd);
     
 let points = 10;   
     
 db.add(`money_${message.guild.id}_${user.id}`, points)    
 db.add(`money_${message.guild.id}_${userx.id}`, points)  
     
 let bal = db.get(`money_${message.guild.id}_${user.id}`)
if(bal === null) bal = 0;
 
 let bal2 = db.get(`money_${message.guild.id}_${userx.id}`)
if(bal2 === null) bal2 = 0;     
     
 user.send("You have been awarded 15 points for winning duo scrims!")
userx.send("You have been awarded 15 points for winning duo scrims!")
     
 const lol = new Discord.RichEmbed()
          .setColor("#d1ae18")
           .setAuthor("Transaction Successful", message.author.displayAvatarURL)
            .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")
  .setDescription(`<:zynSuccess:725709845411528704> **${user} and ${userx} have been awarded ${points} points for winning duo scrims!**`)
  .addField(`${user.user.username}'s balance`, `${bal} Points`)
     .addField(`${userx.user.username}'s balance`, `${bal2} Points`)
 
  message.channel.send(lol)
     
                     const lmao = new Discord.RichEmbed()
          .setColor("#d1ae18")
           .setAuthor("Duo Winners", message.author.displayAvatarURL)
            .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")
  .addField("Host", message.author)
  .addField("Winners", `${user} **and** ${userx}`)
   .addField(`${user.user.username}'s balance`, `${bal} Points`)
 .addField(`${userx.user.username}'s balance`, `${bal2} Points`)
                     
  let log = message.guild.channels.find(`name`, "🔐│winner-logs")

    message.delete().catch(O_o=>{});
    log.send(lmao);
     
     
     
   } else  if (args[0].toLowerCase() == 'box') {
     
            let user = message.mentions.members.first() || message.guild.members.get(args[1]);
    if(!user) return message.reply(exx);   
 let points = 15;   
     
 db.add(`money_${message.guild.id}_${user.id}`, points)    
 let bal = db.get(`money_${message.guild.id}_${user.id}`)
if(bal === null) bal = 0;
     

 user.send("You have been awarded 15 points for winning box scrims!")
  
     
 const lol = new Discord.RichEmbed()
          .setColor("#d1ae18")
           .setAuthor("Transaction Successful", message.author.displayAvatarURL)
            .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")
  .setDescription(`<:zynSuccess:725709845411528704> **${user} has been awarded ${points} points for winning box scrims!**`)
  .addField(`${user.user.username}'s balance`, `${bal} Points`)
                
  await message.channel.send(lol)
     
               const lmao = new Discord.RichEmbed()
          .setColor("#d1ae18")
           .setAuthor("FFA Boxfights Winner", message.author.displayAvatarURL)
            .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")
  .addField("Host", message.author)
  .addField("Winner", user)
   .addField(`${user.user.username}'s balance`, `${bal} Points`)
  let log = message.guild.channels.find(`name`, "🔐│winner-logs")

    message.delete().catch(O_o=>{});
    log.send(lmao);
    
   }
  
  
 else if (args[0].toLowerCase() == 'sduo') {
     
        let user = message.mentions.members.first() || message.guild.members.get(args[1]);
    if(!user) return message.reply(exx);   
 let points = 13;   
     
 db.add(`money_${message.guild.id}_${user.id}`, points)    
 let bal = db.get(`money_${message.guild.id}_${user.id}`)
if(bal === null) bal = 0;
     

 user.send("You have been awarded 13 points for winning duo scrims as a solo!")
  
     
 const lol = new Discord.RichEmbed()
          .setColor("#d1ae18")
           .setAuthor("Transaction Successful", message.author.displayAvatarURL)
            .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")
  .setDescription(`<:zynSuccess:725709845411528704> **${user} has been awarded ${points} points for winning duo scrims as a solo!**`)
  .addField(`${user.user.username}'s balance`, `${bal} Points`)
                
  await message.channel.send(lol)
   
   
              const lmao = new Discord.RichEmbed()
          .setColor("#d1ae18")
           .setAuthor("Solo Duo Winner", message.author.displayAvatarURL)
            .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")
  .addField("Host", message.author)
  .addField("Winner", user)
   .addField(`${user.user.username}'s balance`, `${bal} Points`)
  let log = message.guild.channels.find(`name`, "🔐│winner-logs")

    message.delete().catch(O_o=>{});
    log.send(lmao);
   
   } if (args[0].toLowerCase() == 'kos') {
     
 let user = message.mentions.members.first() || message.guild.members.get(args[1]);
    if(!user) return message.reply(exx);   
 let points = 15;   
     
 db.add(`money_${message.guild.id}_${user.id}`, points)    
 let bal = db.get(`money_${message.guild.id}_${user.id}`)
if(bal === null) bal = 0;
     

 user.send("You have been awarded 10 points for winning kos scrims!")
  
     
 const lol = new Discord.RichEmbed()
          .setColor("#d1ae18")
           .setAuthor("Transaction Successful", message.author.displayAvatarURL)
            .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")
  .setDescription(`<:zynSuccess:725709845411528704> **${user} has been awarded ${points} points for winning kos scrims!**`)
  .addField(`${user.user.username}'s balance`, `${bal} Points`)
                
  await message.channel.send(lol)
     
                const lmao = new Discord.RichEmbed()
          .setColor("#d1ae18")
           .setAuthor("KOS Winner", message.author.displayAvatarURL)
            .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")
  .addField("Host", message.author)
  .addField("Winner", user)
   .addField(`${user.user.username}'s balance`, `${bal} Points`)
  let log = message.guild.channels.find(`name`, "🔐│winner-logs")

    message.delete().catch(O_o=>{});
    log.send(lmao);
     
   }
};


module.exports.config = {
name: "winner",
aliases: []
}