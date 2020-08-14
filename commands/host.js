const Discord = require("discord.js");
const db = require('quick.db')
const ms = require('ms')

module.exports.run = async(bot, message, args) => {

     const he = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> You don't have permission to run this command!**")
     
 
     
   const ex = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a game mode to host!\n\nAvailable Gamemodes```\nSolo\nDuo\nBox\nKos```**")
 
    const zyn = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a region to host!\n\nAvailable Regions```\nEU\nOCE\nNAE\nNAW\nASIA```**")
     
     const zyns = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a valid region to host!\n\nAvailable Regions```\nEU\nOCE\nNAE\nNAW\nASIA```**")
       
   
    let reportschannel = message.guild.channels.find(`name`, "🔫│open-league");
    
  if(!reportschannel) return message.reply("Scrims channel not found!");
   
  
if(!message.member.roles.some(r=>["[Scrim Host]"].includes(r.name)))  return message.reply(he)
 
  const validuser = new Discord.RichEmbed()
.setColor("#d1ae18")
.setDescription(`**You can only host in **<#732949703762903110>`)
if (message.channel.name != "🤖│host-commands") return message.reply(validuser).then(msg => msg.delete(6000));
  
  
  if(!args[0]) return message.reply(ex)

  
  
   if (args[0].toLowerCase() == 'solo') {
  

     
              const lmao = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a valid link.**") 
              
                const oof = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide how long the scrims are starting in.**")   
                
                  const bruh = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a valid time\n```s - seconds\nm - minutes```**")                 
              
     let link = args[1]
if (!link) return message.reply(lmao)
  
     
     
let duration = args[2]
if(!duration) return message.channel.send(oof)
if(isNaN(ms(duration))) return message.channel.send(bruh)   
     
let region = args[3];

 if(!region) return message.reply(zyn)      
     
 if(!region === region) return message.reply(zyns)

     let eu;
     let oce;
     let nae;
     let naw;
     let asia;
     
     let regions;
     
if(region === "eu") regions = "Europe"
if(region === "oce") regions = "Oceania"
if(region === "nae") regions = "North America East"
if(region === "naw") regions = "North America West"
if(region === "asia") regions = "Asia"
  
 let xosll = [`${eu}` + `${oce}` + `${nae}` + `${naw}` + `${asia}`];
     
          const lol = new Discord.RichEmbed() 
     .setColor("#d1ae18")
          .setTitle("**👤 Solo Box Scrims**")
           .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg") 
   .setDescription(`**\n✨ | Hosted by: ${message.author}\n\n🕒 | Starting in: ${ms(ms(duration), { long:true })}\n\n❗ | Make sure to read the rules in <#732972977389306019> before joining!\n\n🌎 | Region: ${regions}\n\n🔗 | Link: ${link}\n\n**`)
          .setTimestamp()
      
          
          reportschannel.send("@here")
        reportschannel.send(lol)
     
     let ref = "http://discordapp.com/channels/" + message.guild.id + "/" + reportschannel.id
     
    const rex = new Discord.RichEmbed() 
     .setColor("#d1ae18")
     .addField("Successfully Hosted Solo Box Scrims!", `[**Click Here**](${ref})`)
    
  message.reply(rex)
    
     let points = 2;
      db.add(`money_${message.guild.id}_${message.author.id}`, points)
     let host = 2;
      db.add(`host_${message.guild.id}_${message.author.id}`, host)
    
       
  message.author.send("You have been awarded 2 points and 2 host point for hosting at PSL")
    

     }
  
  
   else if (args[0].toLowerCase() == 'duo') {
     
             const lmao = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a valid link.**") 
              
                const oof = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide how long the scrims are starting in.**")   
                
                  const bruh = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a valid time\n```s - seconds\nm - minutes```**")                 
              
     let link = args[1]
if (!link) return message.reply(lmao)
     
let duration = args[2]
if(!duration) return message.channel.send(oof)
if(isNaN(ms(duration))) return message.channel.send(bruh)     
     
      let region = args[3];

 if(!region) return message.reply(zyn)      
     
 if(!region === region) return message.reply(zyns)
     
          let eu;
     let oce;
     let nae;
     let naw;
     let asia;
     
     let regions;
     
if(region === "eu") regions = "Europe"
if(region === "oce") regions = "Oceania"
if(region === "nae") regions = "North America East"
if(region === "naw") regions = "North America West"
if(region === "asia") regions = "Asia"
     
      const lol = new Discord.RichEmbed() 
     .setColor("#d1ae18")
          .setTitle("**👥 Duo Box Scrims**")
           .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg") 
   .setDescription(`**\n✨ | Hosted by: ${message.author}\n\n🕒 | Starting in: ${ms(ms(duration), { long:true })}\n\n❗ | Make sure to read the rules in <#732972977389306019> before joining!\n\n🌎 | Region: ${regions}\n\n🔗 | Link: ${link}\n\n**`)
          .setTimestamp()
      
      
          reportschannel.send("@here")
          reportschannel.send(lol)
     
      let ref = "http://discordapp.com/channels/" + message.guild.id + "/" + reportschannel.id
     
    const rex = new Discord.RichEmbed() 
     .setColor("#d1ae18")
     .addField("Successfully Hosted Duo Box Scrims!", `[**Click Here**](${ref})`)
    
  message.reply(rex)
     
          let points = 2;
    db.add(`money_${message.guild.id}_${message.author.id}`, points)
     let host = 2;
      db.add(`host_${message.guild.id}_${message.author.id}`, host)
    
       
    message.author.send("You have been awarded 2 points and 2 host point for hosting at PSL")
   
     
   }
  
  
  else  if (args[0].toLowerCase() == 'box') {
     
             const lmao = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a valid link.**") 
              
                const oof = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide how long the scrims are starting in.**")   
                
                  const bruh = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a valid time\n```s - seconds\nm - minutes```**")                 
              
     let link = args[1]
if (!link) return message.reply(lmao)
     
let duration = args[2]
if(!duration) return message.channel.send(oof)
if(isNaN(ms(duration))) return message.channel.send(bruh)    
    
 let region = args[3];

 if(!region) return message.reply(zyn)      
     
 if(!region === region) return message.reply(zyns)
    
    
         let eu;
     let oce;
     let nae;
     let naw;
     let asia;
     
     let regions;
     
if(region === "eu") regions = "Europe"
if(region === "oce") regions = "Oceania"
if(region === "nae") regions = "North America East"
if(region === "naw") regions = "North America West"
if(region === "asia") regions = "Asia"
    
      const lol = new Discord.RichEmbed() 
     .setColor("#d1ae18")
          .setTitle("**⚔️ FFA Boxfights**")
           .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg") 
   .setDescription(`**\n✨ | Hosted by: ${message.author}\n\n🕒 | Starting in: ${ms(ms(duration), { long:true })}\n\n❗ | Make sure to read the rules in <#732972977389306019> before joining!\n\n🌎 | Region: ${regions}\n\n🔗 | Link: ${link}\n\n**`)
          .setTimestamp()
      
          reportschannel.send("@here")
          reportschannel.send(lol)
    
     let ref = "http://discordapp.com/channels/" + message.guild.id + "/" + reportschannel.id
     
    const rex = new Discord.RichEmbed() 
     .setColor("#d1ae18")
     .addField("Successfully Hosted FFA Boxfights Scrims!", `[**Click Here**](${ref})`)
    
  message.reply(rex)
    
    
         let points = 2;
    db.add(`money_${message.guild.id}_${message.author.id}`, points)
    let host = 2;
      db.add(`host_${message.guild.id}_${message.author.id}`, host)
       
     message.author.send("You have been awarded 2 points and 2 host point for hosting at PSL")
   }
  
  
 else   if (args[0].toLowerCase() == 'kos') {
     
             const lmao = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a valid link.**") 
              
                const oof = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide how long the scrims are starting in.**")   
                
                  const bruh = new Discord.RichEmbed()
     .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a valid time\n```s - seconds\nm - minutes```**")                 
              
     let link = args[1]
if (!link) return message.reply(lmao)
     
let duration = args[2]
if(!duration) return message.channel.send(oof)
if(isNaN(ms(duration))) return message.channel.send(bruh)     
   
   
 let region = args[3];

 if(!region) return message.reply(zyn)      
     
 if(!region === region) return message.reply(zyns)
   
        let eu;
     let oce;
     let nae;
     let naw;
     let asia;
     
     let regions;
     
if(region === "eu") regions = "Europe"
if(region === "oce") regions = "Oceania"
if(region === "nae") regions = "North America East"
if(region === "naw") regions = "North America West"
if(region === "asia") regions = "Asia"
   
   
              const lol = new Discord.RichEmbed() 
     .setColor("#d1ae18")
          .setTitle("**🔫 KOS Scrims**")
           .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg") 
   .setDescription(`**\n✨ Hosted by ${message.author}\n\n🕒 Starting in: ${ms(ms(duration), { long:true })}\n\n❗ Make sure to read the rules in <#732972977389306019> before joining!\n\n🌎 Region: ${regions}\n\n🔗 Link ${link}**`)
          .setTimestamp()
          reportschannel.send("@here")
          reportschannel.send(lol)
   
    let ref = "http://discordapp.com/channels/" + message.guild.id + "/" + reportschannel.id
     
    const rex = new Discord.RichEmbed() 
     .setColor("#d1ae18")
     .addField("Successfully Hosted KOS Scrims!", `[**Click Here**](${ref})`)
    
  message.reply(rex)
   
   
        let points = 2;
  db.add(`money_${message.guild.id}_${message.author.id}`, points)
     let host = 2;
      db.add(`host_${message.guild.id}_${message.author.id}`, host)
       
     message.author.send("You have been awarded 2 points and 2 host point for hosting at PSL")
   }
};


module.exports.config = {
name: "host",
aliases: []
}