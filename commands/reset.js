const db = require('quick.db')
const Discord = require('discord.js')



exports.run = async (client, message, args, config) => {
  
 let member = message.guild.members
 
   const ex = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a value to reset!```Available Values:\n\nPoints [Everyone]\n@User / User ID [Points]\nHost [Everyone]```**")
  
   if (!args[0]) return message.reply(ex)
   
 
    
    if (args[0].toLowerCase() == 'host') {  
    
  const he = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> You don't have permission to use this command!**")
    
          const lol = new Discord.RichEmbed()
              .setColor("#d1ae18")
  .setDescription(`<:zynSuccess:725709845411528704> **All host points were reset!**`)
           
if(!message.member.roles.some(r=>["[Owner]", "[Manager]", "[Administrator]", "[Executive]"].includes(r.name)))  return message.reply(he)

  
  
  
          message.channel.guild.members.forEach(user => {
 db.delete(`host_${message.guild.id}_${user.id}`)   
});
      
message.channel.send(lol)
    
    const lmao = new Discord.RichEmbed()
          .setColor("#d1ae18")
           .setAuthor("Hosts Points Reset", message.author.displayAvatarURL)
            .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")
    .addField("Type", "**Everyone**")
  .addField("Moderator", message.author)
  
  let log = message.guild.channels.find(`name`, "🔐│points-logs")

    message.delete().catch(O_o=>{});
    log.send(lmao);
    
       let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
  if (args[1].toLowerCase() == "98asba78bz78a98a") {
    
     let bal = db.get(`host_${message.guild.id}_${user.id}`)
if(bal === null) bal = 0;
    
              const lol = new Discord.RichEmbed()
              .setColor("#d1ae18")
  .setDescription(`<:zynSuccess:725709845411528704> **Successfuly resetted ${user}'s host points!**`)
              
     db.delete(`host_${message.guild.id}_${user.id}`)         
      message.channel.send(lol)
    
    
    const lmao = new Discord.RichEmbed()
          .setColor("#d1ae18")
           .setAuthor("Host Points Reset", message.author.displayAvatarURL)
            .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")
      .addField("Type", "**User**")
  .addField("Moderator", message.author)
  .addField("User", user)
  
  let log = message.guild.channels.find(`name`, "🔐│points-logs")

    message.delete().catch(O_o=>{});
    log.send(lmao);
    
  }
      
 }
  
  
  
  if (args[0].toLowerCase() == 'points') {  
    
  const he = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> You don't have permission to use this command!**")
    
          const lol = new Discord.RichEmbed()
              .setColor("#d1ae18")
  .setDescription(`<:zynSuccess:725709845411528704> **All points were reset!**`)
           
if(!message.member.roles.some(r=>["[Owner]", "[Manager]", "[Administrator]", "[Executive]"].includes(r.name)))  return message.reply(he)

  
    message.channel.guild.members.forEach(user => {
 db.delete(`money_${message.guild.id}_${user.id}`)   
});
   
  
message.channel.send(lol)
    
    const lmao = new Discord.RichEmbed()
          .setColor("#d1ae18")
           .setAuthor("Points Reset", message.author.displayAvatarURL)
            .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")
    .addField("Type", "**Everyone**")
  .addField("Moderator", message.author)
  
  let log = message.guild.channels.find(`name`, "🔐│points-logs")

    message.delete().catch(O_o=>{});
    log.send(lmao);
    
 }
  
 let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (args[0].toLowerCase() == user) {
    
      const he = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a valid user!**")
    
     if(!user) return message.reply(he);   
    
        let bal = db.get(`money_${message.guild.id}_${user.id}`)
if(bal === null) bal = 0;
    
              const lol = new Discord.RichEmbed()
              .setColor("#d1ae18")
  .setDescription(`<:zynSuccess:725709845411528704> **Successfuly resetted ${user}'s points!**`)
              
     db.delete(`money_${message.guild.id}_${user.id}`)         
      message.channel.send(lol)
    
      const lmao = new Discord.RichEmbed()
          .setColor("#d1ae18")
           .setAuthor("Points Reset", message.author.displayAvatarURL)
            .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")
      .addField("Type", "**User**")
  .addField("Moderator", message.author)
  .addField("User", user)
  
  let log = message.guild.channels.find(`name`, "🔐│points-logs")

    message.delete().catch(O_o=>{});
    log.send(lmao);
    
  }

   
}

module.exports.config = {
name: "reset",
aliases: []
}