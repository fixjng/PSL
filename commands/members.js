const Discord = require("discord.js");

exports.run = (bot, message) => {
 
       const noperms = new Discord.RichEmbed()
         .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a role.**")
       
       
           const lol = new Discord.RichEmbed()
       .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> Please provide a valid role.**")


       

   const args = message.content.split(' ').slice(1);
 const amount = args.join(' ');   

   let roleName = amount;
  if(!amount) return message.reply(noperms)
let role = message.guild.roles.find(x => x.name == roleName);
if(!role) return message.channel.send(lol);

  let ex = role.members.map(m=>m.user).join('\n')
  
let embed = new Discord.RichEmbed()
        .setColor("#d1ae18")
    .setTitle(`Member with ${roleName} role`)
   .setDescription(`${ex}`)

return message.channel.send(embed);
}




module.exports.config = {
name: "members",
aliases: []

}