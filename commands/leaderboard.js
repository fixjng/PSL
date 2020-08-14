const Discord = require("discord.js");
const colors = require('../colours.json')
const db = require('quick.db')

exports.run = async(bot, message, args) => {

  const ex = new Discord.RichEmbed()
         .setColor("#d1ae18")
  .setDescription("**<:zynError:725707818304405515> No one has points yet.**")
  
let lb = db.all().filter(a => a.ID.startsWith(`money_${message.guild.id}`)).sort((a, b) => b.data - a.data);
 
  
  lb = lb.slice(0, 15);
  if (lb.length == 0) return message.channel.send(ex);
  
  let i = 0;
  let place = 1;
  let txt = "";
  for (i in lb)

  {
    txt += `${place++}. <@${lb[i].ID.split('_')[2]}> - ${lb[i].data} Points\n`
  }
   const noperms = new Discord.RichEmbed()
         .setColor("#d1ae18")
   .setTitle(`${message.guild.name} Leaderboard`)
   .setThumbnail("https://cdn.discordapp.com/attachments/726079832659591239/732264856044044319/image0.jpg")
  .setDescription(txt)
  
  message.channel.send(noperms)
}
module.exports.config = {
name: "top",
aliases: ["leaderboard", "lb"]
}