const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (client, message) => {
  
  
   const lol = new Discord.RichEmbed()
          .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a valid role!**")
   
   
      const loex = new Discord.RichEmbed()
          .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a valid user!**")
  
         const noperms = new Discord.RichEmbed()
    .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> You don't have permission to use this command!**")
   
   
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(noperms)
  
 const user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!user) return message.reply(loex);
  
     const args = message.content.split(' ').slice(2);
 const amount = args.join(' ');   
  
        const roletogive = amount;

        let role = client.guilds.get(message.guild.id).roles.find(r => r.name == roletogive);
        if (!role) return message.channel.send(lol);
 
  
const actualchanel = new Discord.RichEmbed()
.setColor("#d1ae18")
.setDescription(`**<:zynSuccess:725709845411528704> Successfuly removed the** ${role} **role from ${user}**`)

   if(user.roles.has(role.id)) {user.removeRole(role), message.channel.send(actualchanel)
                               
       const xxd = new Discord.RichEmbed()
      .setColor("#d1ae18")
        .setTimestamp()
         .setAuthor("Removed Role", client.user.displayAvatarURL)
        .addField('Moderator', `${message.author}`)
        .addField('User', `${user} : ${user.id}`)
       .addField("Role", role)

  let reportschannel = message.guild.channels.find(`name`, "🔐│psl-logs");
  if(!reportschannel) return message.channel.send("");
 
    message.delete().catch(O_o=>{});
    reportschannel.send(xxd);                         
                               
                               
    } else {user.addRole(role)
  
     const lmaxxxo = new Discord.RichEmbed()
.setColor("#d1ae18")
.setDescription(`**<:zynSuccess:725709845411528704> Successfuly added the** ${role} **role to ${user}**`)
   message.channel.send(lmaxxxo)
            
          const xxd = new Discord.RichEmbed()
      .setColor("#d1ae18")
        .setTimestamp()
         .setAuthor("Role Added", client.user.displayAvatarURL)
        .addField('Moderator', `${message.author}`)
        .addField('User', `${user} : ${user.id}`)
          .addField("Role", role)

  let reportschannel = message.guild.channels.find(`name`, "🔐│psl-logs");
  if(!reportschannel) return message.channel.send("");
 
    message.delete().catch(O_o=>{});
    reportschannel.send(xxd);   
            
            
            
  }
        } 

module.exports.config = {
name: "role",
aliases: []
}