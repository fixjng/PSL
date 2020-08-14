const Discord = require("discord.js");
const colors = require('../colours.json')
const db = require('quick.db')

module.exports.run = async(bot, message, args) => {
  
 const validuser = new Discord.RichEmbed()
.setColor("#d1ae18")
.setDescription(`**You can only use commands in **<#733384173217120285>`)
if (message.channel.name != "🤖│bot-commands") return message.reply(validuser).then(msg => msg.delete(6000));
  
  let user = message.author;
  
  let bal = db.get(`money_${message.guild.id}_${user.id}`)
if(bal === null) bal = 0;
  

const div1 = message.guild.roles.find("name", "[Division I]");
  const div2 = message.guild.roles.find("name", "[Division II]");
  const div3 = message.guild.roles.find("name", "[Division III]");
  const div4 = message.guild.roles.find("name", "[Divsion IV]");
  const div5 = message.guild.roles.find("name", "[Division V]");
  const div6 = message.guild.roles.find("name", "[Division X]");
  

   const ex = new Discord.RichEmbed()
     .setColor("#d1ae18")
 .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")
  .setDescription(`**<:zynError:725707818304405515> Please provide a role to buy!\n\nAvailable Roles\n1 | <@&732945997382287382>\n2 | <@&732945995364696095>\n3 | <@&732945993309487174>\n4 | <@&732961689728843776>\n5 | <@&732946116571562024>\n6 | <@&732946184087404624>**`)
  

if(!args[0]) return message.channel.send(ex)
  
  
  if (args[0].toLowerCase() == '1') {
    
              const noperms = new Discord.RichEmbed()
          .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> You already own the <@&732945997382287382> role!**")
              
     if(message.member.roles.has("732945997382287382")) return message.reply(noperms)
    
              let amount = 150;
    
    let money = amount-bal
              
               const ex = new Discord.RichEmbed()
          .setColor("#d1ae18")
  .setDescription(`**<:zynError:725707818304405515> You need ${money} more points to buy the <@&732945997382287382> role!**`)             
              
    
   
    
    
    if (bal < amount) return message.reply(ex)

    db.subtract(`money_${message.guild.id}_${user.id}`, amount)
        let lmao = db.get(`money_${message.guild.id}_${user.id}`)
if(lmao === null) lmao = 0;
  
      message.member.addRole(div1)
    
      const lol = new Discord.RichEmbed()
   .setColor("#d1ae18")
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
  .setDescription(`**<:zynSuccess:725709845411528704> You successfuly purchased the <@&732945997382287382> role!**`)
      .addField("New Balance", `${lmao} Points`)
   message.channel.send(lol)
      
    
    
    
    
  } else if (args[0].toLowerCase() == '2') {
    
              const noperms = new Discord.RichEmbed()
          .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> You already own the <@&732945995364696095> role!**")
              
     if(message.member.roles.has("732945995364696095")) return message.reply(noperms)
    
              let amount = 250;
    
    let money = amount-bal
              
               const ex = new Discord.RichEmbed()
          .setColor("#d1ae18")
  .setDescription(`**<:zynError:725707818304405515> You need ${money} more points to buy the <@&732945995364696095> role!**`)             
              
    
   
    
    
    if (bal < amount) return message.reply(ex)

    db.subtract(`money_${message.guild.id}_${user.id}`, amount)
        let lmao = db.get(`money_${message.guild.id}_${user.id}`)
if(lmao === null) lmao = 0;
  
      message.member.addRole(div2)
    
      const lol = new Discord.RichEmbed()
   .setColor("#d1ae18")
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
  .setDescription(`**<:zynSuccess:725709845411528704> You successfuly purchased the <@&732945995364696095> role!**`)
      .addField("New Balance", `${lmao} Points`)
   message.channel.send(lol)
      
    
  } else if (args[0].toLowerCase() == '3') {
    
              const noperms = new Discord.RichEmbed()
          .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> You already own the <@&732945993309487174> role!**")
              
     if(message.member.roles.has("732945993309487174")) return message.reply(noperms)
    
              let amount = 400;
    
    let money = amount-bal
              
               const ex = new Discord.RichEmbed()
          .setColor("#d1ae18")
  .setDescription(`**<:zynError:725707818304405515> You need ${money} more points to buy the <@&732945993309487174> role!**`)             
              
    
   
    
    
    if (bal < amount) return message.reply(ex)

    db.subtract(`money_${message.guild.id}_${user.id}`, amount)
        let lmao = db.get(`money_${message.guild.id}_${user.id}`)
if(lmao === null) lmao = 0;
  
      message.member.addRole(div3)
    
      const lol = new Discord.RichEmbed()
   .setColor("#d1ae18")
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
  .setDescription(`**<:zynSuccess:725709845411528704> You successfuly purchased the <@&732945993309487174> role!**`)
      .addField("New Balance", `${lmao} Points`)
   message.channel.send(lol)
      
    
  }  else if (args[0].toLowerCase() == '4') {
    
              const noperms = new Discord.RichEmbed()
          .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> You already own the <@&732961689728843776> role!**")
              
     if(message.member.roles.has("732961689728843776")) return message.reply(noperms)
    
              let amount = 650;
    
    let money = amount-bal
              
               const ex = new Discord.RichEmbed()
          .setColor("#d1ae18")
  .setDescription(`**<:zynError:725707818304405515> You need ${money} more points to buy the <@&732961689728843776> role!**`)             
              
    
   
    
    
    if (bal < amount) return message.reply(ex)

    db.subtract(`money_${message.guild.id}_${user.id}`, amount)
        let lmao = db.get(`money_${message.guild.id}_${user.id}`)
if(lmao === null) lmao = 0;
  
      message.member.addRole(div4)
    
      const lol = new Discord.RichEmbed()
   .setColor("#d1ae18")
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
  .setDescription(`**<:zynSuccess:725709845411528704> You successfuly purchased the <@&732961689728843776> role!**`)
      .addField("New Balance", `${lmao} Points`)
   message.channel.send(lol)
      
    
  }  else if (args[0].toLowerCase() == '5') {
    
              const noperms = new Discord.RichEmbed()
          .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> You already own the <@&732946116571562024> role!**")
              
     if(message.member.roles.has("732946116571562024")) return message.reply(noperms)
    
              let amount = 800;
    
    let money = amount-bal
              
               const ex = new Discord.RichEmbed()
          .setColor("#d1ae18")
  .setDescription(`**<:zynError:725707818304405515> You need ${money} more points to buy the <@&732946116571562024> role!**`)             
              
    
   
    
    
    if (bal < amount) return message.reply(ex)

    db.subtract(`money_${message.guild.id}_${user.id}`, amount)
        let lmao = db.get(`money_${message.guild.id}_${user.id}`)
if(lmao === null) lmao = 0;
  
      message.member.addRole(div5)
    
      const lol = new Discord.RichEmbed()
   .setColor("#d1ae18")
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
  .setDescription(`**<:zynSuccess:725709845411528704> You successfuly purchased the <@&732946116571562024> role!**`)
      .addField("New Balance", `${lmao} Points`)
   message.channel.send(lol)
      
    
  } else if (args[0].toLowerCase() == '6') {
    
              const noperms = new Discord.RichEmbed()
          .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> You already own the <@&732946184087404624> role!**")
              
     if(message.member.roles.has("732946184087404624")) return message.reply(noperms)
    
              let amount = 1000;
    
    let money = amount-bal
              
               const ex = new Discord.RichEmbed()
          .setColor("#d1ae18")
  .setDescription(`**<:zynError:725707818304405515> You need ${money} more points to buy the <@&732946184087404624> role!**`)             
              
    
   
    
    
    if (bal < amount) return message.reply(ex)

    db.subtract(`money_${message.guild.id}_${user.id}`, amount)
        let lmao = db.get(`money_${message.guild.id}_${user.id}`)
if(lmao === null) lmao = 0;
  
      message.member.addRole(div6)
    
      const lol = new Discord.RichEmbed()
   .setColor("#d1ae18")
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
  .setDescription(`**<:zynSuccess:725709845411528704> You successfuly purchased the <@&732946184087404624> role!**`)
      .addField("New Balance", `${lmao} Points`)
   message.channel.send(lol)
      
    
  } 
  
  
  
  
}


module.exports.config = {
name: "buy",
aliases: []
}