const Discord = require("discord.js");
const ms = require("ms");
 
exports.run = async (client, message, args) => {


     
        const usern = new Discord.RichEmbed()
        .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a user to blacklist!**") 

const eee = new Discord.RichEmbed()
.setColor("#d1ae18")
.setDescription("**<:zynError:725707818304405515> Please provide a reason to blacklist the user**")
        
        
   let muteEmbed = new Discord.RichEmbed()
  .setDescription(`**<:zynError:725707818304405515> You don't have permission to use this command**`)   
    if  (!message.member.hasPermissions("MANAGE_MESSAGES")) return message.reply(muteEmbed) 
 
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply(usern);
  let muterole = message.guild.roles.find(`name`, "[Blacklisted]");
 
     const lol = new Discord.RichEmbed()
        .setColor("#d1ae18")
  .setDescription(`<:zynError:725707818304405515> **${tomute} is already blacklisted!**`)
  
  if(tomute.roles.find(r => r.name === "[Blacklisted]")) { return message.reply(lol) } else {


  let mutetime = args[1];
 
         const time = new Discord.RichEmbed()
        .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide how long the user should be blacklisted for.**")
    
  if(!mutetime) return message.reply(time);
 
    
      

         
  let reason = args.slice(2).join(" ");
  if(!reason) return message.channel.send(eee);
 
  await(tomute.addRole(muterole.id));
    
const done = new Discord.RichEmbed()
.setColor("#d1ae18")
  .setDescription(`**<:zynSuccess:725709845411528704> <@${tomute.id}> has been blacklisted for ${ms(ms(mutetime), { long:true })}!**`)
  message.channel.send(done);
  
     const moadead = new Discord.RichEmbed()
.setColor("#d1ae18")
.setTitle(`**You were blacklisted in ${message.guild.name}**`)
 .addField("Blacklist Length:", `${ms(ms(mutetime), { long:true })}`)
 .addField('Reason', reason)
.setTimestamp()
.setFooter(message.guild.name, message.guild.iconURL)
tomute.send(moadead)
  
  setTimeout(function(){
  tomute.removeRole(muterole.id);
    
  }, ms(mutetime)
            );
 
 
 
  let xxd = new Discord.RichEmbed()
  .setAuthor("Blacklist", client.user.displayAvatarURL)
 .setColor("#d1ae18")
    .addField("Moderator", `${message.author} : ${message.author.id}`)
  .addField("User", `${tomute} : ${tomute.id}`)
  .addField("Blacklist Length", `${ms(ms(mutetime), { long:true })}`)
  .addField("Reason", `${reason}`)
  .setTimestamp();
  let reportschannel = message.guild.channels.find(`name`, "🔐│blacklist-logs");
  if(!reportschannel) return message.channel.send("");
 
    message.delete().catch(O_o=>{});
    reportschannel.send(xxd);

  }
  
}

 
module.exports.config = {
    name: "blacklist",
    aliases: []

 
}